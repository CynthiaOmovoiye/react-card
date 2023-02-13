import React from 'react';

export default function Button({
  width,
  btnColor,
  padding,
  borderRadius,
  title,
}) {
  return (
    <button
      style={{
        width: width,
        backgroundColor: btnColor,
        padding: padding,
        borderRadius: borderRadius,
        marginBottom: 5,
      }}
    >
      {title}
    </button>
  );
}
