"use client";
import { useState } from "react";
import { Button } from "./Button";
import { ExternalLink } from "./websiteData";

export function Modal(props: {
  name: string;
  image?: string;
  text?: string;
  externalLink?: ExternalLink;
}) {
  const { image, name, text, externalLink } = props;

  return (
    <>
      <dialog id={name} className="modal p-0 ">
        <div className="modal-box p-5 md:max-w-4/10 md:w-full">
          <div>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-custom float-right">✖️</button>
            </form>
          </div>
          <img
            alt={
              "an orange on an orange background with purple star next to it"
            }
            className="m-auto"
            src={image}
          />

          <div className="flex flex-col justify-center">
            <h1 className={"text-4xl text-center"}>{name}</h1>
            <p className="py-4 text-center lg:max-w-7/10 m-auto ">{text}</p>
            {externalLink ? (
              <Button href={externalLink.url} title={externalLink.title} />
            ) : null}
          </div>
        </div>
      </dialog>
    </>
  );
}
