import React from 'react';
import {useLoader} from "react-three-fiber";
import {TextureLoader} from "three";

function Floor(props) {
	const texture_alphaMap = useLoader(TextureLoader,'/alpha_glow.jpg');
	const texture_Map = useLoader(TextureLoader,'/map.png');
	return <>
		<mesh rotation = {[-Math.PI/2, 0, 0]} position = {[0,0.009,0]} receiveShadow>
			<planeBufferGeometry attach = "geometry" args={[20,20]}/>
			<meshBasicMaterial attach="material" map={texture_Map } alphaMap={texture_alphaMap} transparent/>
			{/*<meshBasicMaterial attach="material" color={"#fff"} alphaMap={texture_alphaMap} transparent opacity={0.5}/>*/}
		</mesh>
	</>
}

export default Floor;