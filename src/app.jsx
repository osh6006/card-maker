import "./app.css";
import { useLocation } from "react-router";
import React from "react";

const App = props => {
  const location = useLocation();
  console.log(location);
  console.log(location.state.id);
  console.log(location.state.email);
  return <div>asdf</div>;
};

export default App;
