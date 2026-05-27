"use client";
import { Link } from "../ui/Link";
import { ZineListItem } from "../ui/ListItems";
import websiteData, { ZineData } from "../ui/websiteData";

export default function Page() {
  let zines = websiteData.zines;
  return (
    <div className="flex flex-col justify-center">
      <h1 className={"text-6xl text-center"}>Zine Library</h1>
      <p className="py-4 text-center lg:max-w-7/10 m-auto ">
        Welcome to my zine library. Here you can read or download a printable
        versions of the zines I have written. My zines are also available to
        purchase at the{" "}
        <Link
          href="https://www.camseattle.org/bookstore"
          title={"Common Objects Bookstore"}
        />
        .
      </p>
      <hr className="border border-custom mb-3" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {/* using an array to build out an example grid with one image. Remove if you would like 
         different images. */}
        {zines.map((zine: ZineData) => ZineListItem(zine))}
      </div>
    </div>
  );
}
