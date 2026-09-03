"use client";
import { useState } from "react";
import DateForm from "../../../ui/DateForm";
import { redirect } from "next/navigation";

type FormInfo = {
  email: string;
  date1: string;
  date2: string;
};

export default function Page() {
  const [answer, setAnswer] = useState({
    email: "",
    date1: "",
    date2: "",
  });

  function handleChange(e: { target: HTMLInputElement }) {
    // we force a deep copy here since we want re-render to trigger when sub attribute updated
    let copy: { [key: string]: string } = JSON.parse(JSON.stringify(answer));
    copy[e.target.name as string] = e.target.value;
    setAnswer(copy as FormInfo);
  }

  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "5e1b7259-af6b-41ad-b2f6-72df15ea9630");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    data.success ? redirect(`submit?res=1`) : redirect("submit?res=0");
  };

  return (
    <div>
      <h1 className={"text-6xl text-center m-3"}>
        Additional Availablity Form
      </h1>
      <p className="py-4 text-center lg:max-w-7/10 m-auto ">
        This form to to gather more available times when there is conflict with
        the office space.
      </p>
      <hr className="border border-custom mb-3 m-4" />

      <div className="flex flex-col items-center">
        <form
          className="flex flex-col items-center gap-5 justify-center"
          onSubmit={onSubmit}
        >
          <div>
            <legend className="fieldset-legend flex flex-col items-centerm-1">
              What is your email?
            </legend>
            <label className="input validator">
              <input
                type="email"
                placeholder="mail@site.com"
                required
                name="email"
                onChange={handleChange}
                maxLength={30}
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>

          <div className="m-5">
            <div className="flex flex-col items-center">
              <legend className="fieldset-legend">
                Select two tentative dates and times for the lesson.
              </legend>
              <p className="label text-wrap">
                This does not guarantee a slot. Once I verify the date and time
                is available at the shared office space, I will send you a
                follow up email with an invite.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <>
                <DateForm
                  onChange={handleChange}
                  lessonType={"Project Help & Troubleshooting"}
                  name={"date1"}
                />
                <DateForm
                  onChange={handleChange}
                  lessonType={"Project Help & Troubleshooting"}
                  name={"date2"}
                />
                {answer.date1 && answer.date2 ? (
                  <div className=" mt-4 btn-custom p-3 rounded-md">
                    You've selected <b>{answer.date1}</b> and{" "}
                    <b>{answer.date2}</b> as your tentative lesson times.
                  </div>
                ) : null}
              </>
            </div>
          </div>

          <button
            className="btn btn-custom"
            id="submit"
            type="submit"
            disabled={loading}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
