import React from 'react';
import { Text } from 'react-native';
import type { TextProps } from 'react-native';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export enum TitleVariantEnum {
  'h1' = 'h1',
  'h2' = 'h2',
  'h3' = 'h3',
  'h4' = 'h4',
}

export type TitleProps = TextProps & {
  variant?: TitleVariantEnum;
};

export const Title: React.FC<TitleProps> = (props) => {
  return <Text {...props} />;
};

Title.defaultProps = {
  variant: TitleVariantEnum.h1,
};
