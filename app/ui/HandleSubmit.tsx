import { useSearchParams } from "next/navigation";

export function HandleSubmit() {
  const searchParams = useSearchParams();

  const res = searchParams.get("res");
  if (!res) {
    return (
      <p className="py-4 text-center lg:max-w-7/10 m-auto ">
        You've found the submit page without submitting the form. You shouldn't
        be here! 😱
      </p>
    );
  } else {
    return (
      <div className="flex flex-col justify-center">
        <h1 className={"text-6xl text-center m-3"}>
          {res == "1" ? "Form Submitted Sucessfully" : "Form Failed to Submit"}
        </h1>

        <p className="py-4 text-center lg:max-w-7/10 m-auto ">
          {res == "1"
            ? "I should be able to reply to your inquire in 1-5 business days."
            : "Something went wrong and I wasn't able to get your request. If this keeps happening please contact me."}
        </p>
      </div>
    );
  }
}
