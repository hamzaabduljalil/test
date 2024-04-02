import { Outlet } from "react-router-dom";
import "./WeAre.css";
const WeAre = () => {
  return (
    <div className="ha">
      <Outlet></Outlet>
      <video src="https://www.youtube-nocookie.com/embed/_pI-yBS8uaY?version=3&enablejsapi=1&html5=1&volume=100&modestbranding=1&autohide=1&showinfo=0&controls=0;;origin=https://b8architecture.com;&playsinline=1&start=0&end=59"></video>
    </div>
  );
};
export default WeAre;
