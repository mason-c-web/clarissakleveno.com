"use client";

import Form from "../../ui/Form";
import { Link } from "../../ui/Link";
export default function Page() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className={"text-6xl text-center m-3"}>
        Sewing Lesson Interest Form
      </h1>
      <div className="flex">
        <ul className=" list-disc text-wrap lg:max-w-7/10 m-auto p-3">
          <li>You must be 18 years or older to attend a lesson. </li>
          <li>
            {" "}
            Submit the form below with your info and what you're interested in
            learning. I should response in 1-5 business days.
          </li>
          <li>
            If don't have any follow up questions, I will send you an invite
            with the date and location based on your availablity and request
            payment.
          </li>
          <li>The requested amount must be paid before the lesson.</li>
          <li>
            Lessons take place in a shared office space in Ballard. We have a
            private room but other amenities are shared. There is access to a
            ADA bathroom. No stairs to enter the building or room.
          </li>
          <li>
            Feel free to reach me through my{" "}
            <Link href="/contact" title={"contact form"} /> if you have any
            questions.
          </li>
        </ul>
      </div>
      <hr className="border border-custom mb-3 m-4" />

      <Form />
    </div>
  );
}
