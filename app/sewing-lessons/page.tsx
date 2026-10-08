"use client";
import { Button } from "../ui/Button";
import { Link } from "../ui/Link";
import { LessonListItem } from "../ui/ListItems";
import websiteData, { LessonData } from "../ui/websiteData";
export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <h1 className={"text-6xl text-center m-3"}>Sewing Lessons</h1>
      <img
        alt={"drawing of a sewing machine"}
        src={"/images/sewingmachine.png"}
        className="lg:max-w-sm md:max-w-sm object-contain md:object-cover"
      />
      <p className="py-4 text-center lg:max-w-7/10 m-auto ">
        I'm been teaching people how to sew for about the past three year, and
        sewing for over ten. I currently mostly focus on clothing alteration and
        repair skills, but have sewn everything from quilts, to curtains, to dog
        jackets. Sewing is such an empowering skill, and love seeing when it
        clicks with students. Being able to alter my own clothing to fit my body
        has been a very healing process for me personally. I hope you leave our
        session feeling empowered to take on new projects and make clothing work
        for you.
      </p>
      <p className="py-4 text-center lg:max-w-7/10 m-auto mb-5 ">
        I teach sewing lesson in share office space in Ballard. My rate sliding
        scale from $40-$60 and hour, with most lessons being 2 hours. Lessons
        slots are only during Mondays, Thursdays and Fridays 9am-5:30pm. The
        different topics I teach are available below. If you interested but
        can't make any of the available timeslots work your welcome to{" "}
        <Link title={"message me."} href={"/contact"} />
        <br />
        <br />
        Fill out the form below to get started.
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
