import { useEffect, useState } from "react";

export default function useLocalStorage(key: string, defaultValue: string) {
  const [value, setValue] = useState(() => {
    let currentTheme;

    try {
      currentTheme = JSON.parse(
        localStorage.getItem(key) || JSON.stringify(defaultValue)
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.log(e.message);
      currentTheme = defaultValue;
    }

    return currentTheme;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
