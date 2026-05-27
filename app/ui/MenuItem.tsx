import { Link } from "./websiteData";

export function MenuItem(props: { item: Link; index: number }) {
  const { item } = props;

  return (
    <li>
      <a href={item.path}>{item.title}</a>
    </li>
  );
}
