import React from 'react';

const FunctionDestructing = () => {
    const add = (a: number, b: number) => a + b;
    const sum = add(1, 2);

    const subtract = ({ a, b }: { a: number; b: number }) => a - b;
    const difference = subtract({ a: 4, b: 2 });

    return (
        <div>
            <h2>Function Destructing</h2>
            <p>Sum = {sum}</p>
            <p>Difference = {difference}</p>
        </div>
    );
};

export default FunctionDestructing;
