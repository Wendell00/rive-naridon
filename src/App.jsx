
import './App.css'

import { useEffect, useState } from 'react';
import { useRive} from "@rive-app/react-canvas";

export default function Home() {

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [anim, setAnim] = useState(false)
  const handleMouseMove = (e) => {
    setMouse((state) => ({
      ...state,
      x: e.clientX,
      y: e.clientY
    }));
  };

  const { rive, RiveComponent } = useRive({
    src: "./naridonOniFanArt.riv",
    stateMachines: 1,
    autoplay: true,
    // We can pass the call back to the `useRive` hook
    onStateChange: (event) => {
      console.log(event.data[0]);
    }
  });

  useEffect(() => {
    if (rive) {
      rive.on('statechange', (event) => {
        console.log(event.data[0]);
      });
    }
  }, [rive]);

  function thunder() {
    if (rive) {
      if (anim) {
        rive.pause("thunderGodMode");
        rive.pause("mouthPulse");
        rive.play("blink");
        setAnim(!anim)
      } else {
        rive.play("thunderGodMode");
        rive.play("mouthPulse");
        rive.pause("blink");
        setAnim(!anim)
      }
    }
  }

  // function handleMouseMove(){
  //   rive.
  // }



  return (
    <RiveComponent
      style={{ height: "100vh"}}
      onMouseMove={handleMouseMove}
      onClick={() => {thunder(anim)}}
    />
  );
}
