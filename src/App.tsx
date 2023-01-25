import { useEffect, useRef, useState, useContext } from "react";
import Components from "./components";
import { sectionDatas } from "./data";
import IPad3D from "./IPad3D";
import { ScrollPositionAPIContext } from "./context/scrollPosition";
import { Group } from "three";
import useScrollControl from "./utils/hooks/useScrollControl";

function App() {
  const iPadmodelRef = useRef<Group>();

  useScrollControl(iPadmodelRef);

  return (
    <>
      <IPad3D iPadmodelRef={iPadmodelRef} />
      <Components />
    </>
  );
}

export default App;
