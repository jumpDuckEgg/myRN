import React from 'react';
import {Pressable, Text} from 'react-native';
import {combineTheme} from './theme';
interface ButtonProps {
  title?: string;
  onPress?: any;
  onLongPress?: any;
  color?: string;
  disabled?: boolean;
  type?: string;
  plain?: boolean;
  round?: boolean;
  size?: string;
  style?: object;
}

const defaultPressCallback = () => {};

export default function Ibutton(props: ButtonProps) {
  const {
    title,
    type,
    onPress,
    onLongPress,
    disabled,
    plain,
    round,
    size,
    style,
  } = Object.assign(
    {
      type: 'default',
      plain: false,
      disabled: false,
      round: false,
      size: 'normal',
      style: {},
      onPress: defaultPressCallback,
      onLongPress: defaultPressCallback,
    },
    props,
  );

  const styles = combineTheme(type, plain, disabled, round, size);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      onLongPress={onLongPress}
      style={({pressed}) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
      ]}>
      <Text style={[styles, style]}>{title}</Text>
    </Pressable>
  );
}
