import React, { memo } from "react";
import Building from "./Building";

const PersistentBuildings = ({ buildings }) => {
  return (
    <div>
      {buildings.map((square) => (
        <Building
          key={`${square.getX()}/${square.getY()}`}
          x={square.getX()}
          y={square.getY()}
          width={square.getSizeX()}
          height={square.getSizeY()}
          color="yellow"
        />
      ))}
    </div>
  );
};

export default memo(PersistentBuildings);
