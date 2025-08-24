import type { AnchorHTMLAttributes, DetailedHTMLProps } from react';;
interface LinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  href: string;
}
;
default function Link(props: LinkProps): JSX.Element;
