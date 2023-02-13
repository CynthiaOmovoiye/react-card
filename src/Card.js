import React from 'react';
import Button from './Button';

export default function Card({
  width,
  border,
  Heading,
  SubText,
  btnColor,
  btnWidth,
  btnPadding,
  btnRadius,
  align,
  btnTitle,
}) {
  return (
    <div
      style={{
        width: { width },
        border: border,
        textAlign: align ? align : 'center',
        margin: 5,
        padding: 5,
      }}
    >
      <h1>{Heading}</h1>
      <p>{SubText}</p>
      <Button
        width={btnWidth}
        btnColor={btnColor}
        padding={btnPadding}
        borderRadius={btnRadius}
        title={btnTitle}
      />
    </div>
  );
}
