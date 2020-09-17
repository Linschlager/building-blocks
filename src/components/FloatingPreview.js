import React, { useState, useEffect } from "react";
import Building from "./Building";
import Rectangle from "../tools/rectangle";
import useMousePosition from "../hooks/useMousePosition.hook";
import useMouseClick from "../hooks/useMouseClick.hook";

const FloatingPreview = ({ checkPosition, onBuild, width = 1, height = 1 }) => {
  const [x, y] = useMousePosition(width, height);
  const [valid, setValid] = useState(true);

  useEffect(() => {
    // Update validity state on position or size change
    setValid(checkPosition(new Rectangle(x, y, width, height)));
  }, [x, y, width, height, checkPosition]);

  useMouseClick(() => {
    if (
      typeof checkPosition === "function" &&
      checkPosition(new Rectangle(x, y, width, height)) === true
    ) {
      if (typeof onBuild === "function") {
        onBuild(new Rectangle(x, y, width, height));
      }
    }
  });

  return (
    <Building
      x={x}
      y={y}
      width={width}
      height={height}
      color={valid ? "green" : "red"}
    />
  );
};

export default FloatingPreview;
