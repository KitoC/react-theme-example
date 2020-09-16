import React, { useState } from "react";
import Button from "./components/Button";
import Slider from "./components/Slider";
import ColorPicker from "./components/ColorPicker";

const lightTheme = {
  "--color-text": "#444444",
  background: "white",
};

const darkTheme = {
  "--color-text": "white",
  background: "#444444",
};

function App() {
  const [theme, setTheme] = useState(0);
  const [primaryColor, setPrimaryColor] = useState("#2d61c2");
  const [secondaryColor, setSecondaryColor] = useState("#dad9d9");

  let style = {
    "--color-primary": primaryColor,
    "--color-secondary": secondaryColor,
  };

  if (theme == 0) {
    style = { ...style, ...lightTheme };
  } else {
    style = { ...style, ...darkTheme };
  }

  return (
    <div className="fit-parent flex-center flex-column" style={style}>
      <Slider
        label="Dark/Light theme"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      />

      <div className="flex-column" style={{ marginBottom: "1em" }}>
        <ColorPicker
          label="Primary Color"
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
        />

        <ColorPicker
          label="Secondary Color"
          value={secondaryColor}
          onChange={(e) => setSecondaryColor(e.target.value)}
        />
      </div>

      <div>
        <Button primary light>
          Primary
        </Button>

        <Button secondary>Secondary</Button>
      </div>
    </div>
  );
}

export default App;
