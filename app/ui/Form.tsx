import { useEffect, useState } from "react";
import websiteData from "./websiteData";

const lessons = websiteData.lessons.map((a) => a.title);
type LessonTitle = (typeof lessons)[number];

type FormInfo = {
  name: string;
  email: string;
  experiance: string;
  lessonSelection: LessonTitle | "";
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
    experiance: "",
    lessonSelection: "",
    hasSewingMachine: "",
    isMasked: "",
    pay: "",
    hearAbout: "",
    notes: "",
  });

  function handleChange(e: { target: HTMLInputElement }) {
    let copy: { [key: string]: string } = answer;
    copy[e.target.id as string] = e.target.value;
    setAnswer(copy as FormInfo);
    console.log(e.target.id);
  }

  function submitForm(answer: FormInfo) {
    console.log(answer);
    //this doesnt do anything yet, TBD
  }

  useEffect(() => {
    const form = document.getElementById("form");

    form?.addEventListener("submit", (event: any) => {
      event.preventDefault();
      submitForm(answer);
    });
  }, []);

  return (
    <div>
      <h1 className={"text-6xl text-center m-3"}>Sewing Lessons Intake Form</h1>

      <form
        className="flex flex-col items-center gap-5 justify-center"
        id="form"
      >
        <div>
          <legend className="fieldset-legend m-1">What is your name?</legend>
          <input
            type="text"
            className="input"
            placeholder="Type here"
            id="name"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <legend className="fieldset-legend m-1">What is your email?</legend>
          <label className="input validator">
            <input
              type="email"
              placeholder="mail@site.com"
              required
              id="email"
              onChange={handleChange}
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>

        <div>
          <legend className="fieldset-legend m-1">
            Describe your previous sewing experiance.
          </legend>
          <textarea
            className="textarea h-24 w-full"
            placeholder="Have you used a machine before? What kind of projects have you done? ect"
            id="experiance"
            required
            onChange={handleChange as any}
          ></textarea>
        </div>
        <div className="flex flex-col items-center gap-2 ">
          <div className="flex flex-col items-center gap-2 ">
            <legend className="fieldset-legend ">
              What topic would you like to take?
            </legend>
            <p className="label">
              You can see a list of all the topics on the previous page.
            </p>
          </div>
          <select
            className="select appearance-none"
            id="lessonSelection"
            required
            onChange={handleChange as any}
          >
            <option value="">Select a topic</option>
            {lessons.map((title, index) => {
              return (
                <option key={index} value={title}>
                  {title}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <legend className="fieldset-legend m-1">
            Can you bring your own sewing machine?
          </legend>
          <select
            id="hasSewingMachine"
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
            <p className="label">
              I might choose to wear a mask regardless, espically during flu
              season, but wear when requested.
            </p>
          </div>
          <select
            id="isMasked"
            defaultValue="Pick a color"
            className="select"
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
            <p className="label">
              I offer a sliding scale for pay accessiblity. This does not effect
              you lesson or scheduling, this is just for my records.
            </p>
          </div>
          <select
            className="select"
            id="pay"
            onChange={handleChange as any}
            required
          >
            <option>Select an option</option>
            <option>$30 an hour (discounted)</option>
            <option>$40 an hour (standard)</option>
            <option>$50 and hou (pay it forward)</option>
          </select>
        </div>

        <div className=" flex flex-col items-center w-full">
          <legend className="fieldset-legend m-1">
            How did you hear about this?
          </legend>
          <textarea
            className="textarea h-24"
            placeholder="Saw a poster, from a friend, ect"
            id="hearAbout"
            onChange={handleChange as any}
          ></textarea>
        </div>

        <div className="flex flex-col items-center">
          <legend className="fieldset-legend m-1">
            Any other notes for me, or other request in accommodations?
          </legend>
          <textarea
            className="textarea h-24 w-full "
            placeholder="Let me know any other concerns or questions here!"
            id="notes"
            onChange={handleChange as any}
          ></textarea>
        </div>

        <button className="btn btn-custom" id="submit" type="submit">
          Let's do it
        </button>
      </form>
    </div>
  );
}
