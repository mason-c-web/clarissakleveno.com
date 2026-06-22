"use client";
import { Link } from "./ui/Link";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className={"text-6xl text-center m-3"}>About</h1>
        <img
          alt={"eee"}
          src={"/images/me.png"}
          className="lg:max-w-sm md:max-w-sm object-contain md:object-cover"
        />
      </div>

      <p className="py-4 text-center lg:max-w-7/10 m-auto ">
        Hello, I’m Clarissa, I'm a queer fat artist living in the Seattle area.
        I create bold colorful work ranging from murals, to event posters. I am
        also passionate about mending and repairing clothing, and teaching
        people how to sew.
      </p>
      <hr className="border border-custom c mb-3" />

      <p className="py-4 text-center lg:max-w-7/10 m-auto ">
        My visual art centers around bright colors and bold lines. I’ve done
        works for{" "}
        <Link
          title={"Capitol Hill Tool Library"}
          href={"https://sustainablecapitolhill.org/"}
        />
        ,{" "}
        <Link
          title={"Sustainable Ballard"}
          href={"https://www.sustainableballard.org/"}
        />
        ,{" "}
        <Link
          title={"Resilient Hearts Animal Sanctuary"}
          href={"https://resilientheartsanimalsanctuary.org/"}
        />{" "}
        and more! I currently sell work at the{" "}
        <Link
          title={"Common Area Maintence bookstore"}
          href={"https://www.camseattle.org/bookstore"}
        />{" "}
        and do the artwork for the{" "}
        <Link
          title={"Sustainable Captiol Hill Blog"}
          href={"https://sustainablecapitolhill.org/blog/"}
        />
        .
      </p>
    </>
  );
}
