import React from 'react';
import './style.css';
import Card from './Card';

export default function App() {
  const cardFile = [
    {
      width: '500px',
      border: '1px solid #000',
      Heading: 'Header 1',
      SubText: 'This is a dummy Subtext for header 1',
      btnColor: 'red',
      btnWidth: '200px',
      btnPadding: '10px',
      btnRadius: 10,
      align: 'rignt',
      btnTitle: 'btn1',
    },
    {
      width: '200px',
      border: '1px solid #ddd',
      Heading: 'Header 2',
      SubText: 'This is a dummy Subtext for header 2',
      btnColor: 'aqua',
      btnWidth: '100px',
      btnPadding: '10px',
      btnRadius: 5,
      btnTitle: 'btn2',
    },
  ];
  return (
    <div>
      {cardFile &&
        cardFile.map((card) => (
          <Card
            width={card.width}
            border={card.border}
            Heading={card.Heading}
            SubText={card.SubText}
            btnColor={card.btnColor}
            btnWidth={card.btnWidth}
            btnPadding={card.btnPadding}
            btnRadius={card.btnRadius}
            align={card.align}
            btnTitle={card.btnTitle}
          />
        ))}
    </div>
  );
}
