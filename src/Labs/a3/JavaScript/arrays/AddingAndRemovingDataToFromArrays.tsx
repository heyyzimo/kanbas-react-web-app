import React from 'react';

function AddingAndRemovingDataToFromArrays() {
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ['string1', 'string2'];

  // Adding new items
  numberArray1.push(6);
  stringArray1.push('string3');

  // Remove 1 item starting at index 2 from numberArray1
  // Remove 1 item starting at index 1 from stringArray1
  numberArray1.splice(2, 1);
  stringArray1.splice(1, 1);

  return (
    <div>
      <h2>Add and remove data to arrays</h2>
      <p>Number Array after adding and removing elements: {numberArray1.join(', ')}</p>
      <p>String Array after adding and removing elements: {stringArray1.join(', ')}</p>
    </div>
  );
}

export default AddingAndRemovingDataToFromArrays;
