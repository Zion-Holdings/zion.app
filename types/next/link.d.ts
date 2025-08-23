import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export interface LinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  href: string;
}

export default function Link(props: LinkProps): JSX.Element;
