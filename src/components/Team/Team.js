import "./Team.css";
import ceo from "../imgs/ceo.jpg";
import Shown from "./employeeList";
import OffcanvasExample from "../Header/Header";

const Team = (props) => {
  return (
    <>
      <OffcanvasExample></OffcanvasExample>
      <div className="container">
        <div className="title">
          <h2>The Team</h2>
          <p className="desc">
            WE ARE <span>DREAMERS</span>
          </p>
        </div>
        <div className="ceo ">
          <img src={ceo} alt="Ceo"></img>
          <div className="details">
            <h4>Muhannad Abduljlail</h4>
            <p className="position">
              CEO & Founder <br />
              Senior Architect & Main Designer
            </p>
            <div className="details-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              omnis, eveniet cupiditate dicta harum cumque magni unde ad placeat
              <br />
              nostrum quod earum excepturi odio repellat eaque numquam officiis
              labore asperiores? Lorem ipsum dolor sit, amet consectetur
              <br />
              adipisicing elit. Sunt omnis, eveniet cupiditate dicta harum
              cumque magni unde ad placeat nostrum quod earum excepturi odio
              repellat eaque numquam officiis labore asperiores?
            </div>
          </div>
        </div>
        <Shown></Shown>
      </div>
    </>
  );
};
export default Team;
