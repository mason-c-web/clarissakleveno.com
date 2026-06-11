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
        src={"/images/sewingmachine.png"}
        className="lg:max-w-sm md:max-w-sm object-contain md:object-cover"
      />
      <p className="py-4 text-center lg:max-w-7/10 m-auto ">
        I teach sewing lesson in share office space in Ballard. I focus on
        practical alteration and repair skills. Being able to alter my own
        clothing to fit my body has been a very healing process for me
        personally. I hope you leave our session feeling empowered to take on
        new projects and make clothing work for you.
      </p>
      <p className="py-4 text-center lg:max-w-7/10 m-auto ">
        My rate sliding scale from $30-$50 and hour, with most lessons being 2
        hours. Lessons slots are only during weekdays 9am-5pm. The different
        topics I teach are available below. If you are interested fill out the
        form to get started.
      </p>

      <Button
        href={"/sewing-lessons/intake"}
        title="Sewing Lesson Interest Form"
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 m-3">
        {websiteData.lessons.map((lesson: LessonData) =>
          LessonListItem(lesson),
        )}
      </div>
    </div>
  );
}
