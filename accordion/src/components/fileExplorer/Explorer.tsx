/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const Explorer = ({ data }: { data: any }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(id: string) {
    setDisplayCurrentChildren((prev: any) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }
  // console.log(displayCurrentChildren);

  return (
    <ul>
      {data.map((item: any) => {
        return (
          <li key={item.id}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <p> {item.name} </p>
              {item && item.items && item.items.length > 0 ? (
                <span onClick={() => handleToggleChildren(item.id)}> + </span>
              ) : null}
            </div>

            {item &&
            item.items &&
            item.items.length > 0 &&
            displayCurrentChildren[item.id] ? (
              <Explorer data={item.items} />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default Explorer;
