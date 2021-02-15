import React from 'react';

function BuildScene(props) {

	return (
			<>
				<mesh position={[0, 0, 0]}>
					<boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
					<meshPhongMaterial attach="material" color="#fff"/>
				</mesh>
			</>
	);
}

export default BuildScene;