import useLocalStorage from "./useLocalStorage";
import "./theme.css";

const ChangeTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleClick() {
    setTheme(theme == "dark" ? "light" : "dark");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World</p>
        <button onClick={handleClick}>Change Theme</button>
      </div>
    </div>
  );
};

export default ChangeTheme;
