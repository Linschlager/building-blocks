import React, { memo } from "react";
import { GRID_PADDING, GRID_SIZE } from "../resources/consts";

const Building = ({ x, y, width = 1, height = 1, color }) => {
  const absoluteWidth = GRID_SIZE * width + GRID_PADDING;
  const absoluteHeight = GRID_SIZE * height + GRID_PADDING;
  return (
    <div
      style={{
        top: y,
        left: x,
        position: "absolute",
        backgroundColor: color,
        opacity: 0.5,
        paddingLeft: absoluteWidth / 2,
        paddingRight: absoluteWidth / 2,
        paddingTop: absoluteHeight / 2,
        paddingBottom: absoluteHeight / 2
      }}
    ></div>
  );
};

export default memo(Building);
