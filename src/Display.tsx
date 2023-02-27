import React from 'react';
import './Styles/Display.css';

const data = [
  [true, true, true, true, true, true, false],
  [false, true, true, false, false, false, false],
  [true, true, false, true, true, false, true],
  [true, true, true, true, false, false, true],
  [false, true, true, false, false, true, true],
  [true, false, true, true, false, true, true],
  [true, false, true, true, true, true, true],
  [true, true, true, false, false, false, false],
  [true, true, true, true, true, true, true],
  [true, true, true, true, false, true, true],
  [true, true, true, false, true, true, true],
  [false, false, true, true, true, true, true],
  [true, false, false, true, true, true, false],
  [false, true, true, true, true, false, true],
  [true, false, false, true, true, true, true],
  [true, false, false, false, true, true, true],
];

function Display({ numero }: any) {
  return (
    <div className='display'>
        <div className="segment A" hidden={!data[numero][0]}></div>
        <div className="segment B" hidden={!data[numero][1]}></div>
        <div className="segment C" hidden={!data[numero][2]}></div>
        <div className="segment D" hidden={!data[numero][3]}></div>
        <div className="segment E" hidden={!data[numero][4]}></div>
        <div className="segment F" hidden={!data[numero][5]}></div>
        <div className="segment G" hidden={!data[numero][6]}></div>
      </div>
  );
}

export default Display;
