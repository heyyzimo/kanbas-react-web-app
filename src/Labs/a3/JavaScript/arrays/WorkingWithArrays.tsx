import React from 'react';

function WorkingWithArrays() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;

  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ['string1', 'string2'];

  let variableArray1 = [
    functionScoped, blockScoped,
    constant1, numberArray1, stringArray1
  ];

  return (
    <div>
      <h2>Working with Arrays</h2>
      <p>Function Scoped Variable: {functionScoped}</p>
      <p>Block Scoped Variable: {blockScoped}</p>
      <p>Constant: {constant1}</p>
      <p>Number Array: {numberArray1.join(', ')}</p>
      <p>String Array: {stringArray1.join(', ')}</p>
      <p>Variable Array: {JSON.stringify(variableArray1)}</p>
    </div>
  );
}

export default WorkingWithArrays;
