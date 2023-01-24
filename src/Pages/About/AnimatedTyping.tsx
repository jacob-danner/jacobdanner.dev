import { useState, useEffect } from "react";

export const AnimatedTyping = () => {
  const [text, setText] = useState('');
  const [fullTextIndex, setFullTextIndex] = useState(0);
  const fullTextArray = ['welcome!'];

    const handleFullTextIndex = () => {
    if (fullTextIndex + 1 >= fullTextArray.length) {
      setFullTextIndex(0);
    } else {
      setFullTextIndex(fullTextIndex + 1);
    }
    setText("");
  }

  useEffect(() => {
    // intervalId is only needed for the cleanup that happens on component unmount
    let intervalId: null | number = null;
    intervalId = setInterval(() => {
      let curWord = fullTextArray[fullTextIndex]
      setText(curWord.substring(0, text.length + 1));
      if (text === curWord) {
        clearInterval(intervalId!);
        setTimeout(handleFullTextIndex, 1000);
      }
    }, 50);
    return () => clearInterval(intervalId!);
  }, [text, fullTextIndex]);

  return (
    <p>I'm {text}</p>
  );
};