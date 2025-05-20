import { Button } from "@chakra-ui/react";
import './App.css';
import { Route } from "react-router-dom";
import Home from "./webpages/home";
import Chats from "./webpages/chats";

function App() {
  return (
    <div className="App">
      <Route path='/' component={Home} exact/>
      <Route path='/chats' component={Chats}/>
    </div>
  );
}

export default App;
