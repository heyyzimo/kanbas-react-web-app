import React from 'react';

const MapFunction = () => {
    let numberArray1 = [1, 2, 3, 4, 5, 6];

    // The square function
    const square = (a: number) => a * a;

    // Using map to apply the square function to each element
    const squares = numberArray1.map(square);

    // Using map with an inline function for cubes
    const cubes = numberArray1.map(a => a * a * a);

    return (
        <div>
            <h2>Map</h2>
            <p>squares: {squares}</p>
            <p>cubes: {cubes}</p>
        </div>
    );
};

export default MapFunction;
