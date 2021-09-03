import './App.css';
import Navigation from './components/Navigation';
import Devices from './components/Devices';
import { useState } from "react";


function App() {

  const [viewType, setviewType] = useState("hub"); 

  return (
    <>
      <Navigation onChangeView={(newView)=>{setviewType(newView)}}/>
      <Devices viewType = {viewType}/>
    </>
  );
}

export default App;
