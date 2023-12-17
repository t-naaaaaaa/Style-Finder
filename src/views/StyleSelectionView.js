import React, { useState } from "react";
import "./StyleSelectionView.css";
import casualImage from "../assets/images/casual.png";
import classicImage from "../assets/images/classic.png";
import vintageImage from "../assets/images/vintage.png";
import streetImage from "../assets/images/street.png";
import militaryImage from "../assets/images/military.png";
import urbanImage from "../assets/images/urban.png";
import ethnicImage from "../assets/images/ethnic.png";
import minimalImage from "../assets/images/minimal.png";

const styles = [
  { name: "Casual", image: casualImage },
  { name: "Classic", image: classicImage },
  { name: "Vintage", image: vintageImage },
  { name: "Street", image: streetImage },
  { name: "Military", image: militaryImage },
  { name: "Urban", image: urbanImage },
  { name: "Ethnic", image: ethnicImage },
  { name: "Minimal", image: minimalImage },
];

const StyleSelectionView = () => {
  const [hoveredImage, setHoveredImage] = useState(casualImage);

  const handleStyleClick = (styleName) => {
    console.log(`${styleName} has been selected and saved to the database.`);
  };

  return (
    <div className="style-selection-view">
      <div className="style-options">
        <h1>Style Finder</h1>
        <p>1 : 好きなスタイル</p>
        <div className="style-buttons">
          {styles.map((style) => (
            <button
              key={style.name}
              className="style-button"
              onClick={() => handleStyleClick(style.name)}
              onMouseEnter={() => setHoveredImage(style.image)}
            >
              {style.name}
            </button>
          ))}
        </div>
        <button className="next-button">Next</button>
      </div>
      <div className="style-image">
        <img src={hoveredImage} alt="Selected Style" />
      </div>
    </div>
  );
};

export default StyleSelectionView;
