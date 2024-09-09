import OverviewSection from "./Overview";
import Header from "./HackathonDetails";
import icon from "../images/icon.png";
import { useLocation } from "react-router-dom";

function Overview() {
  const location = useLocation();
  const challenge = location.state || {};

  return (
    <div>
      <div
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          flex: "start",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <img src={icon} alt="DPhi logo" className="logo" />
      </div>

      <Header challenge={challenge} />
      <OverviewSection challenge={challenge} />
    </div>
  );
}

export default Overview;
