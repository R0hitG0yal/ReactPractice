import { useEffect, useState } from "react";
import "./styles.css";

export default function Game() {
  const [turn, setTurn] = useState("O");
  const [winner, setWinner] = useState("");
  const [draw, setDraw] = useState(false);
  const [values, setValues] = useState(Array(9).fill(""));

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function Square({ value, onClick }: { value: number; onClick: () => void }) {
    return <button onClick={onClick}>{value}</button>;
  }

  function handleEntry(index: number) {
    const cpyValues = [...values];
    if (cpyValues[index] != "" || winner != "") return;
    turn == "X" ? (cpyValues[index] = "X") : (cpyValues[index] = "O");
    setValues(cpyValues);
    checkWinner();
    checkDraw();
    turn == "X" ? setTurn("O") : setTurn("X");
  }

  function checkWinner() {
    for (const combo of winningCombinations) {
      const [x, y, z] = combo;

      if (
        values[x] == values[y] &&
        values[y] == values[z] &&
        values[x] == values[z] &&
        values[x] != ""
      ) {
        setWinner(values[x]);
      }
    }
  }

  function checkDraw() {
    for (const value of values) {
      if (value == "") return;
    }
    setDraw(true);
  }

  useEffect(() => {
    checkWinner();
    checkDraw();
  }, [values]);

  return (
    <div className="container">
      <div>
        <div className="row">
          <Square value={values[0]} onClick={() => handleEntry(0)} />
          <Square value={values[1]} onClick={() => handleEntry(1)} />
          <Square value={values[2]} onClick={() => handleEntry(2)} />
        </div>
        <div className="row">
          <Square value={values[3]} onClick={() => handleEntry(3)} />
          <Square value={values[4]} onClick={() => handleEntry(4)} />
          <Square value={values[5]} onClick={() => handleEntry(5)} />
        </div>
        <div className="row">
          <Square value={values[6]} onClick={() => handleEntry(6)} />
          <Square value={values[7]} onClick={() => handleEntry(7)} />
          <Square value={values[8]} onClick={() => handleEntry(8)} />
        </div>
      </div>
      <div className="result">
        {winner != "" ? (
          <div>{winner} wins. Please Restart.</div>
        ) : (
          draw && <div>Draw. Please Restart.</div>
        )}
        <button
          onClick={() => {
            setDraw(false);
            setWinner("");
            setValues(Array(9).fill(""));
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}
