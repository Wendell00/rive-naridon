
import './App.css'
import { useRive } from "@rive-app/react-canvas";

// function Rive() {

//   // const state = useStateMachineInput(rive, "thunderGodMode", true);

//   const { rive, RiveComponent } = useRive({
//     src: "./naridonOniFanArt.riv",
//     stateMachines: "State Machine 1",
//     autoplay: true,
//   });

//   return (
//     <RiveComponent
//       style={{ height: "100vh"}}
//     />
//   );
// }

export default function Home() {
  const { rive, RiveComponent } = useRive({
    src: "./naridonOniFanArt.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  return (
    <RiveComponent
            style={{ height: "100vh"}}
          />
  );
}
