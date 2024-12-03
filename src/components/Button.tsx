import React from 'react';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  backgroundColor?: string;
  color?: string;
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const { children, backgroundColor, color, style } = props;
  const _style: React.CSSProperties = style || {};

  /** Overide Defaults */
  if (backgroundColor) _style.backgroundColor = backgroundColor;
  if (color) _style.color = color;

  return (
    <button style={_style} {...props}>
      {children}
    </button>
  );
};
