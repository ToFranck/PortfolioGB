import React from 'react'
import Moon from "../model/model";
import { Canvas } from "@react-three/fiber";
import { Stage, PresentationControls } from "@react-three/drei";

export default function ImplModel() {
  return (
    <>
      <div className="canv">
         <Canvas
                // dpr={[1, 2]}
                camera={{ fov: 10 }}
                style={{
                  width: "300px",
                  height: "300px",
                  margin: "20px auto 0 auto",

                }}
              >
                <PresentationControls
                  speed={2}
                  global
                  // zoom={0.01}
                  polar={[-0.1, Math.PI / 4]}
                >
                  <Stage environment={null}>
                    <Moon scale={0.001} />
                  </Stage>
                </PresentationControls>
              </Canvas>
            </div>
    </>
  )
}
