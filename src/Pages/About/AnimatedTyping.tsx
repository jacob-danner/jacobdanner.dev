import { useState, useEffect } from "react";

export const AnimatedTyping = () => {
  const text = "Hi. I'm Jacob Danner."
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayText(prevDisplayText => prevDisplayText + text[index]);
        setIndex(index + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, [index, text]);

  return (
    <p className="align-middle text-center">{displayText}</p>
  );
};
