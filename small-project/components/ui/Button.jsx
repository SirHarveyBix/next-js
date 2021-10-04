import Link from 'next/link';

function Button() {
  return <Link href={props.link}>{props.children}</Link>;
}
export default Button;
