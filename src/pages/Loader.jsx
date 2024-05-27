import React from "react";
import { dotWave } from "ldrs";

dotWave.register();

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <l-dot-wave size="47" speed="1" color="#D10024"></l-dot-wave>
    </div>
  );
};

export default Loader;
