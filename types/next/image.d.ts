import type { ImgHTMLAttributes, DetailedHTMLProps } from react';;
interface ImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src: string;
}

declare function Image(props: ImageProps): JSX.Element;
default Image;
