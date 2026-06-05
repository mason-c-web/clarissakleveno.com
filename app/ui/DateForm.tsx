"use client";

import { useState } from "react";
import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";
import websiteData from "./websiteData";

// 9-16 is 9am-5pm
const availableTimes = [
  [], //sunday
  [9, 10, 11, 12, 13, 14, 15, 16], //monday
  [9, 10, 11, 12, 13, 14, 15, 16], //tuesday
  [9, 10, 11, 12, 13, 14, 15, 16], //wednesday
  [9, 10, 11, 12, 13, 14, 15, 16], // thursday,
  [9, 10, 11, 12, 13, 14, 15, 16], // friday,
  [], //saturday
];

const threeDaysFromNow = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
const thirtyDaysFromNow = new Date(Date.now() + 33 * 24 * 60 * 60 * 1000);

threeDaysFromNow.setHours(0, 0, 0, 0);
thirtyDaysFromNow.setHours(0, 0, 0, 0);

export default function DataForm(props: {
  onChange: any;
  id: string;
  lessonType: string;
}) {
  const [selectedDate, setDate] = useState<Date>(threeDaysFromNow);

  const { onChange, id, lessonType } = props;

  // Dates that only have specific times disabled
  const disabledDatetimes = [
    { date: new Date(2026, 5, 10), time: [10, 11, 12] },
  ];

  // Dates that are fully disabled
  const disabledDates = [new Date(2026, 5, 8), new Date(2026, 5, 9)];

  function convertHourToAmPM(hour: number) {
    let AMorPM = hour >= 12 ? "PM" : "AM";
    return (hour % 12 == 0 ? 12 : hour % 12) + ":00 " + AMorPM;
  }

  function convertToReadableTime(hour: number) {
    return `${convertHourToAmPM(hour)} - ${convertHourToAmPM(hour + lessonLength!)}`;
  }

  const lessonLength = websiteData.lessons.find((x) => {
    return x.title == lessonType;
  })?.length;

  function uncheckTime() {
    const allInp = document.getElementsByClassName(id);
    for (let i = 0; i < allInp.length; i++) {
      if ((allInp[i] as HTMLInputElement).type == "radio") {
        (allInp[i] as HTMLInputElement).checked = false;
        // set the parent value back nothing
        onChange({ target: { id: id, value: "" } });
      }
    }
  }

  // if we happen to be a on blocked date, move it forward one day
  while (
    disabledDates.filter((date) => {
      return date.getTime() == selectedDate.getTime();
    }).length > 0
  ) {
    setDate(new Date(selectedDate.setDate(selectedDate.getDate() + 1)));
  }

  return (
    <div className="flex flex-row">
      <div className="flex flex-col items-center ">
        <legend className="fieldset-legend">Select Day</legend>
        <DayPicker
          animate
          required
          className="react-day-picker"
          mode="single"
          selected={selectedDate}
          onSelect={(x) => {
            setDate(x);
            uncheckTime();
          }}
          disabled={[
            disabledDates,
            { dayOfWeek: [0, 6] },
            {
              after: thirtyDaysFromNow,
              before: threeDaysFromNow,
            },
          ]}
        />
      </div>
      <div className="flex flex-col items-center  justify-start  min-w-64">
        <legend className="fieldset-legend">Select Time Slot</legend>
        <div className="flex flex-col ">
          {selectedDate != undefined && (
            <>
              {availableTimes[selectedDate!.getDay()].map((timeslot, index) => {
                // get the timeslots we need to do the lesson based on length
                let neededTimes = [];
                for (let i = timeslot; i <= timeslot + lessonLength! - 1; i++) {
                  neededTimes.push(i);
                }
                // check timeslot that are blocked on this specific date
                var blockedTimes = disabledDatetimes.filter((obj) => {
                  return obj.date.toISOString() == selectedDate.toISOString();
                });
                // check if the regular schedule allows that timeslot
                if (
                  !neededTimes.every((val) =>
                    availableTimes[selectedDate!.getDay()].includes(val),
                  )
                ) {
                  return false;
                }
                // check that the blocked times allow that timeslot
                if (
                  blockedTimes.length > 0 &&
                  neededTimes.some((val) => blockedTimes[0].time.includes(val))
                ) {
                  return false;
                }
                return (
                  <input
                    className={`btn ${id}`}
                    type="radio"
                    name={id}
                    id={id}
                    key={index}
                    value={`${selectedDate?.toLocaleDateString()} at ${convertToReadableTime(timeslot)}`}
                    aria-label={convertToReadableTime(timeslot)}
                    onChange={onChange}
                    required
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
