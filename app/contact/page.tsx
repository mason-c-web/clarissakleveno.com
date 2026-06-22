"use client";
import { redirect } from "next/navigation";
import { useState } from "react";

type FormInfo = {
  name: string;
  email: string;
  message: string;
};

export default function Page() {
  const [answer, setAnswer] = useState({
    name: "",
    email: "",
    message: "",
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
    formData.append("access_key", "808b5d8b-6afc-4696-85e8-0bf070cb6f7a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    data.success
      ? redirect(`contact/submit?res=1`)
      : redirect("contact/submit?res=0");
  };
  return (
    <div className="flex flex-col justify-center">
      <h1 className={"text-6xl text-center"}>Contact Me</h1>
      <p className="py-4 text-center lg:max-w-7/10 m-auto ">
        Feel free to contact me about working with me, sewing lessons, or just
        to say hi!
      </p>
      <hr className="border border-custom mb-3" />
      <div>
        <form
          className="flex flex-col items-center gap-5 justify-center"
          onSubmit={onSubmit}
        >
          <div>
            <legend className="fieldset-legend  flex flex-col items-center m-1">
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
            <legend className="fieldset-legend flex flex-col items-center m-1">
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

          <div>
            <legend className="fieldset-legend  flex flex-col items-center m-1">
              What is your message?
            </legend>
            <textarea
              className="textarea h-50 w-full lg:min-w-100 md:min-w-100"
              placeholder="Hello Clarissa!"
              name="message"
              required
              onChange={handleChange as any}
              maxLength={300}
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
    </div>
  );
}
