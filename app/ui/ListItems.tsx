import { Button } from "./Button";
import { Modal } from "./Modal";
import { ArtData, LessonData, ZineData } from "./websiteData";

function ZineListItem(zine: ZineData) {
  return (
    <div>
      <img
        alt={"an orange on an orange background with purple star next to it"}
        src={zine.coverImage}
        className={""}
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

function LessonListItem(lesson: LessonData) {
  return (
    <div className="rounded-lg shadow-2xl p-10">
      <div className="font-bold text-xl">{lesson.title}</div>
      <div className="text-xs uppercase font-semibold opacity-60">
        {lesson.length}
      </div>
      <hr className="border border-custom c mb-3" />

      <div>
        <p className="font-bold">What you will learn:</p>
        <ul className="list-disc  m-3">
          {lesson.learn.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
        <p className="font-bold">What to bring:</p>
        <ul className="list-disc  m-3">
          {lesson.bring.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export { ZineListItem, ArtListItem, LessonListItem };
