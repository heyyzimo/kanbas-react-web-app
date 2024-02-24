import {Link} from "react-router-dom";
import Assignment3 from "./a3";
import Nav from "../Nav";

function Labs() {
  return (
    <div className="container-fluid">
      <h1>Labs</h1>
      <Nav />
      <Link to="/Labs/a3">Assignment 3</Link> |
      <Link to="/Labs/a4">Assignment 4</Link>
      
    </div>
  );
}
export default Labs;

