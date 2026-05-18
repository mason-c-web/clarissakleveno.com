import { Button } from "../Button";
import { Link } from "../Link";

export function Sewing() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className={"text-6xl text-center m-3"}>Sewing Lessons</h1>
        <img
          alt={"eee"}
          src={"./images/sewingmachine.png"}
          className="lg:max-w-sm md:max-w-sm object-contain md:object-cover"
        />

        <p className="py-4 text-center lg:max-w-7/10 m-auto ">
          I teach sewing lesson in the Ballard area of Seattle. If you are
          interested, please fill out my intake form.
        </p>
        <Button
          href={"https://forms.gle/nYaF5XMcdF9Ga9JX8"}
          title="Sewing Lesson Intake Form"
        />
      </div>
      <p className="py-4 lg:max-w-7/10 m-auto ">
        While I would love to help, I also want to suggest some free resources
        for those who might need it:
        <ul className="list-disc ">
          <li>
            <Link
              title={"Quality Sewing and Vacuum Offers"}
              href={
                "  https://www.qualitysewing.com/collections/learn-to-use-your-machine-classes"
              }
            />
            , free how tos for basic machine questions
          </li>
          <li>
            {" "}
            <Link
              title={"Sustainable Captiol Hill"}
              href={
                "        https://sustainablecapitolhill.org/seattle-area-mending-resources/"
              }
            />
            has a list of host free mending circles. These can be a great place
            to ask questions and make sewing friend!
          </li>
          <li>
            {" "}
            <Link
              title={"Summit Selvage "}
              href={"https://summitselvage.com/pages/local-resources"}
            />
            ealso host a great list of local resources!
          </li>
        </ul>
      </p>
    </>
  );
}
