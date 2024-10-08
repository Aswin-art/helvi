import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Sampah", "Lingkungan", "Indonesia"];

const TextEffect = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <span className="text-primary">
      <TextTransition springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </span>
  );
};

export default TextEffect;
