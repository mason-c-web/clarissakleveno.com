"use client";
import { Link } from "../ui/Link";
import { ArtListItem } from "../ui/ListItems";
import websiteData, { ArtData } from "../ui/websiteData";

export default function Page() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className={"text-6xl text-center"}>Visual Art</h1>
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
        and more! I also love sewing and making wall quilts from upcycled
        materials.
      </p>
      <hr className="border border-custom c mb-3" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {websiteData.art.map((art: ArtData) => ArtListItem(art))}
      </div>
    </div>
  );
}
