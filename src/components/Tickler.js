import React from "react";

const Tickler = ({ tickle }) => {
  return (
    <div>
      <button onClick={tickle}>Tickle me!</button>
    </div>
  );
};

export default Tickler;
