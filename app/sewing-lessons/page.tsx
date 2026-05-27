"use client";
import { Button } from "../ui/Button";
import { LessonListItem } from "../ui/ListItems";
import websiteData, { LessonData } from "../ui/websiteData";
export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <h1 className={"text-6xl text-center m-3"}>Sewing Lessons</h1>
      <img
        alt={"eee"}
        src={"./images/sewingmachine.png"}
        className="lg:max-w-sm md:max-w-sm object-contain md:object-cover"
      />
      <p className="py-4 text-center lg:max-w-7/10 m-auto ">
        I teach sewing lesson in the Ballard area of Seattle. I focus on
        pratical alteration and repair skills. I've helped many people hem there
        own pants or fix a ripped backpack and seen the empowerment it can
        bring.
      </p>
      <p className="py-4 text-center lg:max-w-7/10 m-auto ">
        My rate is $80 per 2 hour session, payable via vemno or cash. Lessons
        slots are only during weekdays 9am-5pm. The different topics I teach are
        available below. If you are interested fill out the intake form to get
        started.
      </p>

      <Button
        href={"https://forms.gle/nYaF5XMcdF9Ga9JX8"}
        title="Schedule a Lesson"
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 m-3">
        {websiteData.lessons.map((lesson: LessonData) =>
          LessonListItem(lesson),
        )}
      </div>
    </div>
  );
}
