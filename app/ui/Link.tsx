export function Link(props: { href: string; title: string }) {
  const { href, title } = props;

  return (
    <a href={href} className="link">
      {title}
    </a>
  );
}
