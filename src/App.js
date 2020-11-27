import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import './SwipeButtons'
import Chats from "./Chats"
import ChatScreen from "./ChatScreen"

import './Header.css'
import Header from './Header'

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />

            <Chats />

            {/* <h1>i am chat page</h1> */}
          </Route>

          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>


      </Router>
    </div>
  );
}

export default App;
