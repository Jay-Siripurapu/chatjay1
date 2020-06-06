import React from 'react';
import { BrowserRouter as Router,Route} from "react-router-dom";
import Join from "./components/join/Join";
import Chat from "./components/Chat/Chat";
import Game from "./components/games/tictac/game/index";
import App1 from "./components/games/minesweper/minesweper";
const App=()=>{
return(
    <Router>
        <Route path="/" exact component={Join}/>
        <Route path="/chat" component={Chat}/>
        <Route path="/tictac" component={Game}/>
        <Route path="/mine" component={App1}/>

    </Router>
)}
export default App;