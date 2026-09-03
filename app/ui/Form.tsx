import { useState } from "react";
import websiteData from "./websiteData";
import DateForm from "./DateForm";
import { redirect } from "next/navigation";
import { Link } from "./Link";

const lessonsTitles = websiteData.lessons.map((a) => a.title);
const lessonsGarmentRequirements = websiteData.lessons.map((a) => {
  if (a.requiresGarments) {
    return a.title;
  }
});

type LessonTitle = (typeof lessonsTitles)[number];

type FormInfo = {
  name: string;
  email: string;
  age: string;
  experiance: string;
  lessonSelection: LessonTitle | "";
  garmentDescription: "";
  projectHelpDescription: "";
  date1: string;
  date2: string;
  hasSewingMachine: string;
  isMasked: string;
  pay: string;
  hearAbout: string;
  notes: string;
};

export default function Form() {
  const [answer, setAnswer] = useState({
    name: "",
    email: "",
    age: "",
    experiance: "",
    lessonSelection: "",
    garmentDescription: "",
    projectHelpDescription: "",
    date1: "",
    date2: "",
    hasSewingMachine: "",
    isMasked: "",
    pay: "",
    hearAbout: "",
    notes: "",
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
    formData.append("access_key", "9179e651-7dfc-480f-9a9b-9f490a824a4c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    data.success
      ? redirect(`intake/submit?res=1`)
      : redirect("intake/submit?res=0");
  };
  return (
    <div>
      <form
        className="flex flex-col items-center gap-5 justify-center"
        onSubmit={onSubmit}
      >
        <legend className="text-xl flex flex-col items-centerm-1">
          About You
        </legend>
        <hr className="border border-custom  w-100" />
        <div>
          <legend className="fieldset-legend  flex flex-col items-centerm-1">
            What is your name?
          </legend>
          <input
            type="text"
            className="input"
            placeholder="Type here"
            name="name"
            onChange={handleChange}
            required
            maxLength={30}
          />
        </div>
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
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <legend className="fieldset-legend m-1 ">
            Is the person this lesson is scheduled for over 18 years of age?
          </legend>
          <select
            name="age"
            className="select "
            required
            onChange={handleChange as any}
          >
            <option key={1} value={""}>
              Select Option
            </option>
            <option key={2}>Yes, they are over 18.</option>
            <option key={3}>No, they are not currently over 18.</option>
          </select>
        </div>
        <div>
          <legend className="fieldset-legend m-1">
            Describe your previous sewing experiance.
          </legend>
          <textarea
            className="textarea h-24 w-full"
            placeholder="Comfortable with sewing machine. Sewn a totebag and a few skirts."
            name="experiance"
            required
            onChange={handleChange as any}
            maxLength={300}
          ></textarea>
        </div>
        <hr className="border border-custom  w-100" />
        <legend className="text-xl flex flex-col items-centerm-1">
          Your Lesson
        </legend>
        <hr className="border border-custom  w-100" />
        <div className="flex flex-col items-center gap-2 ">
          <div className="flex flex-col items-center gap-2 ">
            <legend className="fieldset-legend ">
              What topic would you like to take?
            </legend>
            <div className="display-inline">
              <p className="label text-wrap">
                You can see a list of all the topics on the
              </p>{" "}
              <Link href="/sewing-lessons" title={" previous page."} />
            </div>
          </div>
          <select
            className="select appearance-none"
            name="lessonSelection"
            required
            onChange={handleChange as any}
          >
            <option value="">Select a topic</option>
            {lessonsTitles.map((title, index) => {
              return (
                <option key={index} value={title}>
                  {title}
                </option>
              );
            })}
          </select>
        </div>

        {lessonsGarmentRequirements.includes(answer.lessonSelection) ? (
          <div className="flex flex-col items-center">
            <legend className="fieldset-legend m-1 ">
              Describe the garments you are bringing, and their repair or
              alteration needs.
            </legend>
            <p className="label text-wrap max-w-200 mb-5">
              In this lesson we will work with your own garment from home. I
              recommend to bring 4-6 with no guarantee we will get to
              everything. Knowing what your bringing helps me know if we will
              need addtional supplies.
            </p>
            <textarea
              className="textarea h-24 w-full"
              placeholder="1 pair of jeans to hem, 4 cotton t-shirts to repair, and a skirt"
              name="garmentDescription"
              required
              onChange={handleChange as any}
              maxLength={300}
            ></textarea>
          </div>
        ) : null}

        {answer.lessonSelection == "Project Help & Troubleshooting" ? (
          <div>
            <legend className="fieldset-legend m-1">
              Describe your project, and what you need assistance with.
            </legend>
            <textarea
              className="textarea h-24 w-full"
              placeholder="I want to sew curtains, but I have no idea how to get started; I'm half way through a pattern, but need help with the binding;"
              name="projectHelpDescription"
              required
              onChange={handleChange as any}
              maxLength={300}
            ></textarea>
          </div>
        ) : null}

        <div>
          <div className="flex flex-col items-center">
            <legend className="fieldset-legend">
              Select two tentative dates and times for the lesson.
            </legend>
            <p className="label text-wrap">
              This does not guarantee a slot. Once I verify the date and time is
              available at the shared office space, I will send you a follow up
              email with an invite.
            </p>
          </div>

          <div className="flex flex-col items-center">
            {answer.lessonSelection ? (
              <>
                <DateForm
                  onChange={handleChange}
                  lessonType={answer.lessonSelection}
                  name={"date1"}
                />
                <DateForm
                  onChange={handleChange}
                  lessonType={answer.lessonSelection}
                  name={"date2"}
                />
                {answer.date1 && answer.date2 ? (
                  <div className=" mt-4 btn-custom p-3 rounded-md">
                    You've selected <b>{answer.date1}</b> and{" "}
                    <b>{answer.date2}</b> as your tentative lesson times.
                  </div>
                ) : null}
              </>
            ) : (
              <div className=" mt-3 btn-custom p-3 rounded-md">
                Please select a lesson topic to see available timeslots.
              </div>
            )}
          </div>
        </div>
        <div>
          <legend className="fieldset-legend m-1">
            Can you bring your own sewing machine?
          </legend>
          <select
            name="hasSewingMachine"
            className="select"
            required
            onChange={handleChange as any}
          >
            <option key={1} value={""}>
              Select Option
            </option>
            <option key={2}>Yes, I can bring my own machine</option>
            <option key={3}>No, I will use the one provided.</option>
          </select>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center gap-2">
            <legend className="fieldset-legend">
              Would you like this lesson to be masked?
            </legend>
            <p className="label text-wrap">
              I might choose to wear a mask regardless, especially during flu
              season, but will when requested.
            </p>
          </div>
          <select
            defaultValue="Pick a color"
            className="select"
            name="isMasked"
            required
            onChange={handleChange as any}
          >
            <option value="">Select Option</option>
            <option>Yes, I want you to wear a mask.</option>
            <option>No, I have no preferance.</option>
          </select>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center gap-2">
            <legend className="fieldset-legend">
              What would you like to pay?
            </legend>
            <p className="label text-wrap">
              I offer a sliding scale for pay accessiblity. This does not affect
              your lesson or scheduling; this is just for my records.
            </p>
          </div>
          <select
            className="select"
            name="pay"
            onChange={handleChange as any}
            required
          >
            <option value="">Select an option</option>
            <option value={30}>$30 an hour (discounted)</option>
            <option value={40}>$40 an hour (standard)</option>
            <option value={50}>$50 an hour (pay it forward)</option>
          </select>
        </div>

        {answer.pay ? (
          <div className=" mt-3 btn-custom p-3 rounded-md">
            The cost for this (2) hour lesson will be{" "}
            <b>${2 * Number(answer.pay)}</b>
          </div>
        ) : null}

        <hr className="border border-custom  w-100" />
        <legend className="text-xl flex flex-col items-centerm-1">
          Other Notes
        </legend>
        <hr className="border border-custom  w-100" />
        <div className=" flex flex-col items-center w-full">
          <legend className="fieldset-legend m-1">
            How did you hear about this?
          </legend>
          <textarea
            className="textarea h-24"
            placeholder="Saw a poster, from a friend, ect"
            name="hearAbout"
            maxLength={300}
            onChange={handleChange as any}
          ></textarea>
        </div>
        <div className="flex flex-col items-center">
          <legend className="fieldset-legend m-1">
            Any other notes for me, or other request or accommodations?
          </legend>
          <textarea
            className="textarea h-24 w-full "
            placeholder="Let me know any other concerns or questions here!"
            name="notes"
            maxLength={300}
            onChange={handleChange as any}
          ></textarea>
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
  );
}
