import React from 'react';

function FunctionParenthesisAndParameters() {
  const square = (a: number) => a * a;
  const plusOne = (a: number) => a + 1;

  const twoSquared = square(2);
  const threePlusOne = plusOne(3);

  return (
    <div>
      <h2>Parenthesis and Parameters</h2>
      twoSquared = {twoSquared}<br />
      square(2) = = {twoSquared}<br />
      threePlusOne = {threePlusOne}<br />
      plusOne(3) = = {twoSquared}<br />
    </div>
  );
}

export default FunctionParenthesisAndParameters;
