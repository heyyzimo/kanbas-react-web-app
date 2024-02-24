import { Routes, Route, Link } from "react-router-dom";
import Add from "./Add";

function PathParameters() {
  return (
    <div>
        <Routes>
        <Route path="add/:a/:b" element={<Add />} />
      </Routes>
      <h2>Path Parameters</h2>
      <Link to="/Labs/a3/add/1/2">1 + 2</Link><br/>
      <Link to="/Labs/a3/add/3/4">3 + 4</Link>
      
    </div>
  );
}
export default PathParameters;
