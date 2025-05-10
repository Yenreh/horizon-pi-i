import { PointerLockControls, Html } from "@react-three/drei"; // Import Html
import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
// import * as THREE from "three"; // Not strictly needed for this component anymore

export function PlayerControls() {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  const [isLocked, setIsLocked] = useState(false);

  const moveSpeed = 5;
  const sprintFactor = 1.8;

  const keysPressed = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
    sprint: false,
  }).current;

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.code) {
        case "KeyW":
        case "ArrowUp":
          keysPressed.forward = true;
          break;
        case "KeyS":
        case "ArrowDown":
          keysPressed.backward = true;
          break;
        case "KeyA":
        case "ArrowLeft":
          keysPressed.left = true;
          break;
        case "KeyD":
        case "ArrowRight":
          keysPressed.right = true;
          break;
        case "ShiftLeft":
        case "ShiftRight":
          keysPressed.sprint = true;
          break;
      }
    };

    const handleKeyUp = (event) => {
      switch (event.code) {
        case "KeyW":
        case "ArrowUp":
          keysPressed.forward = false;
          break;
        case "KeyS":
        case "ArrowDown":
          keysPressed.backward = false;
          break;
        case "KeyA":
        case "ArrowLeft":
          keysPressed.left = false;
          break;
        case "KeyD":
        case "ArrowRight":
          keysPressed.right = false;
          break;
        case "ShiftLeft":
        case "ShiftRight":
          keysPressed.sprint = false;
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    const handleLock = () => setIsLocked(true);
    const handleUnlock = () => {
        setIsLocked(false);
        // console.log("Pointer Unlocked"); // For debugging if needed
    }

    const controls = controlsRef.current; // Capture current value for cleanup
    if (controls) {
      controls.addEventListener("lock", handleLock);
      controls.addEventListener("unlock", handleUnlock);
    }
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      if (controls) { // Use captured value in cleanup
        controls.removeEventListener("lock", handleLock);
        controls.removeEventListener("unlock", handleUnlock);
      }
    };
  }, [camera, gl, keysPressed]); // Removed controlsRef from deps to avoid re-binding listeners too often

  useFrame((state, delta) => {
    if (controlsRef.current && controlsRef.current.isLocked) {
      const speed = (keysPressed.sprint ? moveSpeed * sprintFactor : moveSpeed) * delta;
      if (keysPressed.forward) controlsRef.current.moveForward(speed);
      if (keysPressed.backward) controlsRef.current.moveForward(-speed);
      if (keysPressed.left) controlsRef.current.moveRight(-speed);
      if (keysPressed.right) controlsRef.current.moveRight(speed);
    }
  });

  // If not locked, show the instruction UI using Drei's Html
  if (!isLocked) {
    return (
      <>
        {/* PointerLockControls is still needed here to be initialized */}
        <PointerLockControls ref={controlsRef} args={[camera, gl.domElement]} />
        <Html
          as="div" // a plain div wrapper
          center // centers the HTML content relative to the 3D position (0,0,0) by default
          style={{
            // We'll use CSS to truly center it on screen as an overlay
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px', // Give it some width
            color: "white",
            backgroundColor: "rgba(0,0,0,0.75)",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
            fontSize: "1.1em",
            cursor: "pointer",
            pointerEvents: 'auto', // Make sure this Html element is clickable
            zIndex: 10000, // High z-index to be on top
          }}
          // This onClick will try to lock the pointer
          onClick={() => {
            controlsRef.current?.lock();
          }}
        >
          Click para explorar
          <br />
          (W, A, S, D para moverse, MOUSE para mirar)
          <br />
          <br />
          presiona ESC para liberar el mouse
        </Html>
      </>
    );
  }

  // If locked, just render the controls (they are already doing their job)
  return <PointerLockControls ref={controlsRef} args={[camera, gl.domElement]} />;
}