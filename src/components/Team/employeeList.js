import Employee from "./employee.js";
import data from "./data.js";
import { Outlet } from "react-router-dom";
function Shown() {
  const show = data.map((el, Id) => (
    <Employee key={Id} name={el.name} img={el.img} position={el.position} />
  ));
  return (
    <ul className="item">
      {show}
      <Outlet></Outlet>
    </ul>
  );
}
export default Shown;
