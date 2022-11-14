import React from "react";

function Board({ squares, handleClick }) {
  return (
    <div className="grid gap-4 grid-cols-3 w-96 h-96">
      {squares.map((square, index) => {
        return (
          <div className="text-5xl w-24 h-24 select-none p-5 flex items-center justify-center bg-gray-100 border-4 hover:border-dashed cursor-pointer border-sky-300 mt-3 " key={index} 
              onClick={() => handleClick(index)}>
              {square}
          </div>
        );
      })}
    </div>
  );
}

export default Board; 