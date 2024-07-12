import { useState } from "react";
import data from "./dataAccordion";

const Accordian = () => {
  const [showSingle, setShowSingle] = useState(0);
  const [showMultiple, setShowMultiple] = useState(false);
  const [enableMultiple, setEnableMultiple] = useState<number[]>([]);

  function handleSingle(id: number) {
    setShowSingle(showSingle == id ? 0 : id);
  }

  function handleMultiple(id: number) {
    // eslint-disable-next-line prefer-const
    let multiple = [...enableMultiple];

    if (multiple.indexOf(id) === -1) multiple.push(id);
    else multiple.splice(multiple.indexOf(id), 1);

    setEnableMultiple(multiple);
  }

  return (
    <>
      <button onClick={() => setShowMultiple(!showMultiple)}>
        Select Multiple
      </button>
      <div>
        {data && data.length > 0 ? (
          data.map((element) => (
            <div
              onClick={
                showMultiple
                  ? () => handleMultiple(element.id)
                  : () => handleSingle(element.id)
              }
            >
              <h3>{element.question}</h3>
              {(!showMultiple && showSingle == element.id) ||
              (showMultiple && enableMultiple.indexOf(element.id) != -1) ? (
                <p>{element.answer}</p>
              ) : (
                <span>+</span>
              )}
            </div>
          ))
        ) : (
          <div>No data present</div>
        )}
      </div>
    </>
  );
};

export default Accordian;
