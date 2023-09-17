import React, {  useState } from "react";
import Square from "./Square";

const Board = () => {
 
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const handleClick = (value) => {
        if (state[value] != null) {
            return
        }
        const copyState = [...state];
        copyState[value] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn);


    }
 


    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;
    };
    const isWinner = checkWinner();
    const playAgain = () => {
        setState(Array(9).fill(null))

    }


    return (
        <>
        
            <div className="flex justify-center dark:bg-black bg-white items-center h-[100vh] w-full">
                
                {isWinner ? (
                    <>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="mb-3 dark:text-white text-[25px] font-bold"> Player <span className="text-green-500">  {isWinner} </span> won the game </h1>

                            <button onClick={() => playAgain()} className="border-2 rounded-md bg-red-600 text-white border-red-600 mt-5 p-1 w-[110px] hover:bg-white hover:text-black  dark:hover:bg-black dark:hover:text-white hover:border-red-600 transition-all duration-500">Play Again</button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="mb-3 text-[25px] dark:text-white font-bold">Player <span className="text-red-600"> {isXTurn ? 'X' : 'O'} </span> your turn</h1>
                            <div className="flex justify-center items-center">
                                <Square click={() => handleClick(0)} value={state[0]} />
                                <Square click={() => handleClick(1)} value={state[1]} />
                                <Square click={() => handleClick(2)} value={state[2]} />
                            </div>
                            <div className="flex justify-center items-center">
                                <Square click={() => handleClick(3)} value={state[3]} />
                                <Square click={() => handleClick(4)} value={state[4]} />
                                <Square click={() => handleClick(5)} value={state[5]} />
                            </div>
                            <div className="flex justify-center items-center">
                                <Square click={() => handleClick(6)} value={state[6]} />
                                <Square click={() => handleClick(7)} value={state[7]} />
                                <Square click={() => handleClick(8)} value={state[8]} />
                            </div>

                            <button onClick={() => playAgain()} className="border-2 rounded-md bg-red-600 text-white border-red-600 mt-5 p-1 w-[90px] hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-black hover:border-red-600 transition-all duration-500">Reset</button>
                       </div>
                    </>
                )}
            </div>
        </>
    );
}



export default Board;
