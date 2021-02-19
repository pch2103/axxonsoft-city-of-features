import React, {Suspense} from "react";
import "./styles/app.scss";
import {Canvas} from "react-three-fiber";
import {Loader, OrbitControls} from "@react-three/drei";
import Lights from "./components/Lights";
//import Floor from "./components/Floor";
import BuildScene from "./components/BuildScene";

function App() {
  return (
    <>
      <Canvas
          className={'canvas'}
          invalidateFrameloop
          colorManagement
          shadowMap
          camera={{position: [0, 1, 10], fov: 15}}
      >
        <Suspense fallback={null}>
          <OrbitControls
              enableDamping={true}
              target={[0, 0, 0]}
              dampingFactor={0.25}
              rotateSpeed={0.4}
              keyPanSpeed={0.4}
              screenSpacePanning={true}
              zoomSpeed={0.6}
              enablePan={true}
              panSpeed={0.4}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2.1}
              minDistance={-1000}
              maxDistance={2000}
          />
          <Lights />
          <BuildScene />
          {/*<Floor />*/}
        </Suspense>
      </Canvas>
      <Loader/>
    </>
  );
}

export default App;
