import "./employee.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Employee = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);
  return (
    <li className="item">
      <div className="box" data-aos="fade-down">
        <div className="imgs">
          <img src={props.img} alt=""></img>
        </div>
        <div className="description">
          <p className="name">{props.name}</p>
          <p className="position">{props.position}</p>
        </div>
      </div>
    </li>
  );
};
export default Employee;
