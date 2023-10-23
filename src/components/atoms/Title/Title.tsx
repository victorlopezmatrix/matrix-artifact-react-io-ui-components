import React from 'react';
import { Text } from 'react-native';
import { TitleVariantEnum, type TitleProps } from '../../../types';

export const Title: React.FC<TitleProps> = (props) => <Text {...props} />;

Title.defaultProps = {
  variant: TitleVariantEnum.h1,
};
