import React, { useState } from "react";
import { ColorBox } from "./ColorBox";

export function ColorList() {
  const [color, setColor] = useState("lightgreen");
  const styles = { backgroundColor: color, color: "black" };
  const INITIAL_COLORS = ["crimson", "orange", "skyblue", "pink"];
  const [colors, setColors] = useState(INITIAL_COLORS);

  return (
    <div>
      <input
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="enter a color" />
      <button onClick={() => setColors([...colors, color])}>Add color</button>
      {colors.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
