import { Button } from "./Button";
import { Modal } from "./Modal";
import { ArtData, ZineData } from "./websiteData";

function ZineListItem(zine: ZineData) {
  return (
    <div>
      <img
        alt={"an orange on an orange background with purple star next to it"}
        src={zine.coverImage}
        className={"rounded-lg shadow-2xl"}
      />
      <div className="flex flex-col justify-center gap-3 m-5">
        <Button href={zine.readable} title="View Readable Version" />
        <Button
          href={zine.printable}
          title=" Download Printable Version"
          download={zine.title}
        />
      </div>
    </div>
  );
}

function ArtListItem(art: ArtData) {
  return (
    <div>
      <Modal
        name={art.title}
        image={art.coverImage}
        text={art.description}
        externalLink={art.externalLink}
      />
      <img
        alt={"an orange on an orange background with purple star next to it"}
        src={art.coverImage}
        className={"rounded-lg shadow-2xl aspect-square object-cover"}
      />
      <div className="flex flex-col justify-center gap-3 m-5">
        <Button
          title={art.title}
          onClick={() =>
            (
              document?.getElementById(art.title) as HTMLDialogElement
            ).showModal()
          }
          href={undefined}
        />
      </div>
    </div>
  );
}

export { ZineListItem, ArtListItem };
