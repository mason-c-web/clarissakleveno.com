"use client";

import { MouseEventHandler } from "react";

export function Button(props: {
  href: string | undefined;
  title: string;
  download?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  const { href, title, download, onClick } = props;

  return (
    <a
      href={href}
      className="btn btn-custom"
      download={download}
      onClick={onClick}
    >
      {title}
    </a>
  );
}
