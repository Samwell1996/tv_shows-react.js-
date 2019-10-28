import React,{ useState } from 'react';
import './App.css';
import PopularTV from "./pages/PopularTV/PopularTV";
import RatedTV from "./pages/RatedTV/RatedTV";
import ElementDetails from "./pages/ElementDetails/ElementDetails"
import SeasonDesc from './pages/SeasonDesc/SeasonDesc'
import EpisodeDesc from './pages/EpisodDesc/EpisodeDesc'

const routes = {
    PopularTV:PopularTV,
    RatedTV:RatedTV,
    ElementDetails:ElementDetails,
    SeasonDesc:SeasonDesc,
    EpisodeDesc:EpisodeDesc
};

function App() {
    const [currentRoute, setCurrentRoute] = useState({
        name:`PopularTV`,
        params: {}
    });

    function onGoTo(routeName, params = {}) {
        setCurrentRoute({
            name:routeName,
            params
        });

    }

  const Component = routes[currentRoute.name];


    return (
         <Component
             onGoTo={onGoTo}
             params={currentRoute.params}
         />
  );
}

export default App;
