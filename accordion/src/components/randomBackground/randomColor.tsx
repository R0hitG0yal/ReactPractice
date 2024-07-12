import { useEffect, useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("#000000");
  const [type, setType] = useState("hex");

  useEffect(() => {
    generate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  function generateRandomNumberFrom(length: number): number {
    return Math.floor(Math.random() * length);
  }
  function generate() {
    if (type === "hex") {
      let hex: string = "#";
      const possibleHexValue = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ];
      for (let i = 0; i < 6; i++) {
        hex +=
          possibleHexValue[generateRandomNumberFrom(possibleHexValue.length)];
      }
      setColor(hex);
      console.log(color);
    } else {
      let rgb = "rgb(";
      rgb += generateRandomNumberFrom(256);
      rgb += ",";
      rgb += generateRandomNumberFrom(256);
      rgb += ",";
      rgb += generateRandomNumberFrom(256);
      rgb += ")";
      setColor(rgb);
      console.log(color);
    }
  }

  return (
    <div style={{ background: color, width: "100vw", height: "100vh" }}>
      <button
        onClick={() => {
          setType("hex"), generate();
        }}
      >
        Generate Hex Color
      </button>
      <button
        onClick={() => {
          setType("rgb"), generate();
        }}
      >
        Generate RGB Color
      </button>
      <button onClick={generate}>Generate Random Color</button>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          fontSize: "40px",
          fontFamily: "Monotype",
        }}
      >
        {color}
      </div>
    </div>
  );
};

export default RandomColor;
