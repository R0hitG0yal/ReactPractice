import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import "./style.css";

const Stars = () => {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(0);

  function handleClick(index: number) {
    setSelected(index);
  }

  function handleMouseEnter(index: number) {
    setHovered(index);
  }

  function handleMouseLeave() {
    setHovered(0);
  }

  return (
    <div>
      {[...Array(10)].map((_, i) => {
        i += 1;
        return (
          <FaStar
            key={i}
            className={i <= (hovered || selected) ? "active" : "inactive"}
            onClick={() => handleClick(i)}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default Stars;
