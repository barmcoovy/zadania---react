import { useState } from "react";
import ToDo from "./components/listaZadan-react/ToDo";
import Overlay from "./components/Overlay/Overlay";
import Button from "./components/Overlay/Button";
import FocusInput from "./components/useRef-zadania/FocusInput";
import Counter from "./components/useRef-zadania/Counter";
import LogIn from "./components/useRef-zadania/LogIn";
function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <Button/>

      <ToDo />
      <button className='show-overlay-button' onClick={()=>setIsVisible(!isVisible)}>Pokaż Overlay</button>
      {
        isVisible&&(

          <Overlay text={'To jest przezroczysty overlay'} onClose={()=>setIsVisible(!isVisible)}/>
        )
      }

      <FocusInput/>
      <Counter/>
      <LogIn/>
    </div>
  );
}

export default App;
