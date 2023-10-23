import { type TextProps } from 'react-native';

export enum TitleVariantEnum {
  'h1' = 'h1',
  'h2' = 'h2',
  'h3' = 'h3',
  'h4' = 'h4',
}

export type TitleProps = TextProps & {
  variant?: TitleVariantEnum;
};
