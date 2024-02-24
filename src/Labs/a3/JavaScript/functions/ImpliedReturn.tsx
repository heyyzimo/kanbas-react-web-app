import React from 'react';

function ImpliedReturn() {
  const multiply = (a: number, b: number) => a * b;

  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);

  return (
    <div>
      <h2>Implied Return</h2>
      fourTimesFive = {fourTimesFive}<br />
    </div>
  );
}

export default ImpliedReturn;
