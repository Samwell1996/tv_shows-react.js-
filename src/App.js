import React,{ useState } from 'react';
import './App.css';
import PopularTV from "./pages/PopularTV/PopularTV";
import RatedTV from "./pages/RatedTV/RatedTV";

const routes = {
    PopularTV:PopularTV,
    RatedTV:RatedTV,
};

function App() {
    const [currentRoute, setCurrentRoute] = useState(`PopularTV`);

    function onGoTo(route) {
        setCurrentRoute(route)
    }

  const Component = routes[currentRoute];


    return (
    <div>

         <Component onGoTo={onGoTo}/>

    </div>
  );
}

export default App;
