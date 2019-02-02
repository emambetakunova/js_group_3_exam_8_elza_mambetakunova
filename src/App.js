import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <Switch>
                  <Route path="/" exact component={QuoteBuilder} />
                  <Route path="/quote/add" component={QuoteAdd}/>
                  {/*<Route path="/quote/:id" component={FullQuote}/>*/}
                  {/*<Route path="/quote/:id/edit" component={PostEdit}/>*/}
              </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
