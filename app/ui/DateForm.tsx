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
  [9, 10, 11, 12, 13], //wednesday
  [9, 10, 11, 12, 13, 14, 15, 16], // thursday,
  [9, 10, 11, 12, 13, 14, 15, 16], // friday,
  [], //saturday
];

const startDateRange = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000); // 5 days from now
const endDateRange = new Date(Date.now() + 35 * 24 * 60 * 60 * 1000); // 35 days from now

startDateRange.setHours(0, 0, 0, 0);
endDateRange.setHours(0, 0, 0, 0);

export default function DataForm(props: {
  onChange: any;
  name: string;
  lessonType: string;
}) {
  const [selectedDate, setDate] = useState<Date>(startDateRange);

  const { onChange, name, lessonType } = props;

  // Dates that only have specific times disabled
  const disabledDatetimes = [
    { date: new Date(2026, 8, 2), time: [12, 13, 14, 15, 16] },
    { date: new Date(2026, 8, 9), time: [12, 13, 14, 15, 16] },
    { date: new Date(2026, 8, 16), time: [12, 13, 14, 15, 16] },
    { date: new Date(2026, 8, 23), time: [12, 13, 14, 15, 16] },
    { date: new Date(2026, 8, 30), time: [12, 13, 14, 15, 16] },
    { date: new Date(2026, 8, 15), time: [13, 14, 15, 16] },
    { date: new Date(2026, 8, 17), time: [13, 14, 15, 16] },
    { date: new Date(2026, 8, 22), time: [13, 14, 15, 16] },
    { date: new Date(2026, 8, 29), time: [13, 14, 15, 16] },
    { date: new Date(2026, 9, 1), time: [13, 14, 15, 16] },
    { date: new Date(2026, 9, 6), time: [13, 14, 15, 16] },
    { date: new Date(2026, 9, 8), time: [13, 14, 15, 16] },
    { date: new Date(2026, 9, 13), time: [13, 14, 15, 16] },
    { date: new Date(2026, 9, 15), time: [13, 14, 15, 16] },
    { date: new Date(2026, 9, 20), time: [13, 14, 15, 16] },
    { date: new Date(2026, 9, 22), time: [13, 14, 15, 16] },
    { date: new Date(2026, 9, 27), time: [13, 14, 15, 16] },
    { date: new Date(2026, 9, 29), time: [13, 14, 15, 16] },
  ];

  // Dates that are fully disabled
  // Month count starts a index 0.... :C
  const disabledDates = [
    new Date(2026, 7, 25),
    new Date(2026, 7, 26),
    new Date(2026, 7, 27),
    new Date(2026, 7, 28),
  ];
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
    const allInp = document.getElementsByClassName(name);
    for (let i = 0; i < allInp.length; i++) {
      if ((allInp[i] as HTMLInputElement).type == "radio") {
        (allInp[i] as HTMLInputElement).checked = false;
        // set the parent value back nothing
        onChange({ target: { name: name, value: "" } });
      }
    }
  }

  // if we happen to be a on blocked date, move it forward one day
  while (
    disabledDates.filter((date) => {
      return date.getTime() == selectedDate.getTime();
    }).length > 0 ||
    availableTimes[selectedDate.getDay()].length == 0
  ) {
    setDate(new Date(selectedDate.setDate(selectedDate.getDate() + 1)));
  }

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
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
              after: endDateRange,
              before: startDateRange,
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
                    className={`btn ${name}`}
                    type="radio"
                    name={name}
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
