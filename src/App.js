import { useState } from "react";
import ToDo from "./components/ToDo";
import Overlay from "./components/Overlay";
import Button from "./components/Button";
import FocusInput from "./components/FocusInput";
function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      {/* <Button/> */}

      {/* <ToDo /> */}
      {/* <button className='show-overlay-button' onClick={()=>setIsVisible(!isVisible)}>Pokaż Overlay</button> */}
      {/* {
        isVisible&&(

          <Overlay text={'To jest przezroczysty overlay'} onClose={()=>setIsVisible(!isVisible)}/>
        )
      } */}

      <FocusInput/>
    </div>
  );
}

export default App;
