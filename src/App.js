import logo from "./logo.svg";
import "./App.css";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";
import ChangeColorFeature from "./features/ChangeColor";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <div>Header</div>
      <div>None</div>
      {/* <Link to="/todos">Todos</Link><br />
      <Link to="/albums">Albums</Link><br />
      <Link to="/colors">Colors</Link><br /> */}
      <NavLink to="/todos" className={"hhh"}>Todos</NavLink><br />
      <NavLink to="/albums" className={"hhh"}>Albums</NavLink><br />
      <NavLink to="/colors" className={"hhh"}>Colors</NavLink><br />
      <Routes>
        <Route path="/todos" element={<TodoFeature></TodoFeature>} />
        <Route path="/albums" element={<AlbumFeature></AlbumFeature>} />
        <Route
          path="/colorsrr"
          element={<ChangeColorFeature></ChangeColorFeature>}
        />
      </Routes>

      <div>Footer</div>
    </div>
  );
}

export default App;
