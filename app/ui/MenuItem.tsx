import { useContext } from "react";

import { PageIndexContext } from "./PageIndexContext";

export function MenuItem(props: { title: string; index: number }) {
  const { title, index } = props;
  const { updateIndex } = useContext(PageIndexContext);

  return (
    <li>
      <a
        onClick={() => {
          updateIndex(index);
        }}
      >
        {title}
      </a>
    </li>
  );
}
