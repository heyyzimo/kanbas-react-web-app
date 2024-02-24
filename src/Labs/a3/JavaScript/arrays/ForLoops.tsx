import React from 'react';

function ForLoops() {
  let stringArray1 = ['string1', 'string3'];
  let stringArray2 = [];

  for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    stringArray2.push(string1.toUpperCase());
  }

  return (
    <div>
      <h2>Looping through arrays</h2>
      <p>Original Array: {stringArray1.join(', ')}</p>
      <p>Transformed Array: {stringArray2.join(', ')}</p>
    </div>
  );
}

export default ForLoops;
