"use client";

import { useState } from "react";
import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";
import websiteData from "./websiteData";

const MonThursSlots = [
  "9:30 AM - 11:30 AM",
  "12:00 PM - 2:00 PM",
  "2:30 PM - 4:30 PM",
];

const friSlots = [
  "10:30 AM -12:30 PM",
  "1:00 PM - 3:00 PM",
  "3:30 PM - 5:30 PM",
];

// // 9-16 is 9am-5pm
const availableSlots = [
  [], //sunday
  [0, 1, 2], //monday
  [], //tuesday
  [], //wednesday
  [0, 1, 2], // thursday,
  [0, 1, 2], // friday,
  [], //saturday
];

// scheduling 50 days out
const startDateRange = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days from now
const endDateRange = new Date(Date.now() + 57 * 24 * 60 * 60 * 1000); // 57 days from now

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
  const disabledSlots = [
    { date: new Date(2026, 9, 15), slots: [1, 2] },
    { date: new Date(2026, 9, 19), slots: [1] },
  ];

  // Dates that are fully disabled
  // Month count starts a index 0.... :C
  const disabledDates = [
    new Date(2026, 9, 20),
    new Date(2026, 9, 12),

    // bank holidays
    new Date(2026, 9, 12),
    new Date(2026, 10, 11),
    new Date(2026, 10, 26),
    new Date(2026, 11, 25),
  ];
  function convertHourToAmPM(hour: number) {
    let AMorPM = hour >= 12 ? "PM" : "AM";
    return (hour % 12 == 0 ? 12 : hour % 12) + ":00 " + AMorPM;
  }

  function convertToReadableSlotTime(slot: number, date: Date) {
    // if it's friday, we return different slots
    if (date.getDay() == 5) {
      return `${friSlots[slot]}`;
    } else {
      return `${MonThursSlots[slot]}`;
    }
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

  // // if we happen to be a on blocked date, move it forward one day
  while (
    disabledDates.filter((date) => {
      return date.getTime() == selectedDate.getTime();
    }).length > 0 ||
    availableSlots[selectedDate.getDay()].length == 0
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
            // Disabling Sun, Tues, Wednes, Sat
            { dayOfWeek: [0, 2, 3, 6] },
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
              {availableSlots[selectedDate!.getDay()].map((timeslot, index) => {
                var blockedSlots = disabledSlots.filter((obj) => {
                  return obj.date.toISOString() == selectedDate.toISOString();
                });

                if (blockedSlots[0]?.slots) {
                  if (blockedSlots[0].slots.includes(timeslot)) {
                    return false;
                  }
                }

                return (
                  <input
                    className={`btn ${name}`}
                    type="radio"
                    name={name}
                    key={index}
                    value={`${selectedDate?.toLocaleDateString()} at ${convertToReadableSlotTime(timeslot, selectedDate)}`}
                    aria-label={convertToReadableSlotTime(
                      timeslot,
                      selectedDate,
                    )}
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
