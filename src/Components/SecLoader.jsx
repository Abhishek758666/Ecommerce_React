import React from "react";
import { dotWave } from "ldrs";

dotWave.register();

const SecLoader = () => {
  return (
    <div className="w-full h-[50vh] flex justify-center items-center mt-40">
      <l-dot-wave size="47" speed="1" color="#D10024"></l-dot-wave>
    </div>
  );
};
export default SecLoader;
