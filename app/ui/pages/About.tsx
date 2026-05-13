import { Link } from "../Link";

export function About() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className={"text-6xl text-center m-3"}>About</h1>
        <img
          alt={"eee"}
          src={"./images/me.png"}
          className="lg:max-w-sm md:max-w-sm object-contain md:object-cover"
        />
      </div>
      <p className="py-4 text-center lg:max-w-7/10 m-auto ">
        Hello, I’m Clarissa, I'm a queer fat artist living in the Seattle area.
        I create bold colorful work ranging from murals, to event posters. I
        write also zines and comics about my personal life. I am always looking
        for ways to connect with my hyperlocal community, and make more public
        art.{" "}
        <Link href="mailto:clarissakleveno@gmail.com" title={"Email me!"} />
      </p>

      <p className="py-4 text-center lg:max-w-7/10 m-auto ">
        I've shown work at{" "}
        <Link title={"Base Camp"} href={"https://www.basecamp206.com/"} />,{" "}
        <Link
          title={"The Fishbowl"}
          href={"https://www.thefishbowlseattle.com/"}
        />{" "}
        and{" "}
        <Link
          title={"The Columbia City Gallery"}
          href={"https://columbiacitygallery.com/"}
        />
        . I currently sell work at the{" "}
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
