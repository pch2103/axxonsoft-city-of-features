import React, {Suspense} from "react";
import "./styles/app.scss";
import {Canvas} from "react-three-fiber";
import {Loader, OrbitControls} from "@react-three/drei";
import Lights from "./components/Lights";
import Floor from "./components/Floor";
import BuildScene from "./components/BuildScene";

function App() {
  return (
    <>
      <Canvas
          className={'canvas'}
          invalidateFrameloop
          colorManagement
          shadowMap
          camera={{position: [6, 4, 6], near: 1, fov: 35}}
      >
        <Suspense fallback={null}>
          <OrbitControls
              enableDamping={true}
              target={[0, 1, 0]}
              dampingFactor={0.25}
              rotateSpeed={0.4}
              keyPanSpeed={0.4}
              screenSpacePanning={true}
              zoomSpeed={0.6}
              enablePan={true}
              panSpeed={0.4}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2}
              minDistance={-500}
              maxDistance={1000}
          />
          <Lights />
          <BuildScene />
          <Floor />
        </Suspense>
      </Canvas>
      <Loader/>
    </>
  );
}

export default App;
