"use client";

import Form from "../../ui/Form";
export default function Page() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className={"text-6xl text-center m-3"}>Sewing Lessons Intake Form</h1>

      <p className="py-4 text-center lg:max-w-7/10 m-auto ">
        If you are interested in sewing lessons, please fill out this intake
        form, and send you a follow up email in 2-3 business days. If everything
        looks good, I will send you and invite for the time and place based on
        your selection, and ask for payment. Payment must be completed before
        the lesson. Feel free to email me directly if you have any questions
        clarissakleveno@gmail.com
      </p>

      <Form />
    </div>
  );
}
