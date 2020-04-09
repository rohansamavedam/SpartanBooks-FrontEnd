import React from 'react';
import{BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/boostrap.min.css"




function App() {
  return (
    <Router>
      <NavBar />
      <br/>
      <Route path = "/" exact component = {BooksList} />
      <Route path = "/edit/:id" component = {EditBook} />
      <Route path = "/create"  component = {CreateBook} />
      <Route path = "/user"  component = {CreateUser} />
    </Router>
  );
}

export default App;
