import {STYLE} from './interface';

const THEME: STYLE = {
  primary: '#07c160',
  info: '#1890ff',
  warning: '#ff976a',
  danger: '#ff4d4f',
};

const SIZEHEIGHT: STYLE = {
  normal: 44,
  small: 32,
  mini: 24,
};

const SHADOW = {
  shadowColor: '#999',
  shadowOffset: {width: 0, height: 0},
  shadowOpacity: 1,
  shadowRadius: 1.5,
  elevation: 1,
};

const SIZE: STYLE = {
  normal: {
    paddingHorizontal: 15,
    lineHeight: SIZEHEIGHT.normal,
    fontSize: 14,
  },
  small: {
    paddingHorizontal: 8,
    lineHeight: SIZEHEIGHT.small,
    fontSize: 12,
  },
  mini: {
    paddingHorizontal: 4,
    lineHeight: SIZEHEIGHT.mini,
    fontSize: 10,
  },
};

function deepSimpleClone(target: any, param: any) {
  let keys = Object.keys(target);
  let paramKeys = Object.keys(param);
  paramKeys.forEach((key) => {
    if (!target[key]) {
      target[key] = param[key];
    }
  });
  keys.forEach((key) => {
    if (!param[key]) {
      return;
    }
    if (typeof target[key] === 'object') {
      target[key] = deepSimpleClone(target[key], param[key]);
    } else {
      target[key] = param[key];
    }
  });
  return target;
}

export function combineTheme(
  type: string,
  plain: boolean,
  disabled: boolean,
  round: boolean,
  size: string,
): STYLE {
  let defaultStyle = {
    ...SHADOW,
    backgroundColor: '#fff',
    borderColor: '#ebedf0',
    borderWidth: 1,
    opacity: 1,
    borderRadius: 0,
    height: 44,
    color: '#000',
    paddingHorizontal: 15,
    lineHeight: 44,
    fontSize: 14,
  };
  if (Object.keys(THEME).includes(type)) {
    let theme = {
      backgroundColor: THEME[type],
      borderColor: THEME[type],
      color: '#fff',
    };
    defaultStyle = deepSimpleClone(defaultStyle, theme);
  }
  if (plain) {
    let theme = {
      backgroundColor: '#fff',
      color: THEME[type],
    };
    defaultStyle = deepSimpleClone(defaultStyle, theme);
  }
  if (disabled) {
    let theme = {
      opacity: 0.5,
      borderWidth: 0,
    };
    defaultStyle = deepSimpleClone(defaultStyle, theme);
  }

  if (round) {
    let theme = {
      borderRadius: 30,
    };
    defaultStyle = deepSimpleClone(defaultStyle, theme);
  }

  if (size) {
    let theme = {
      height: SIZEHEIGHT[size],
      ...(SIZE[size] as Object),
    };
    defaultStyle = deepSimpleClone(defaultStyle, theme);
  }
  return defaultStyle;
}
