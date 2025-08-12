import type { ImgHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src: string;
}

declare function Image(props: ImageProps): JSX.Element;
export default Image;
