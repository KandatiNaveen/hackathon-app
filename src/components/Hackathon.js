import OverviewSection from "./Overview";
import HackathonDetails from "./HackathonDetails";
import icon from "../images/icon.png";
import { useLocation } from "react-router-dom";
import Header from "./Header";

function Hackathon() {
  const location = useLocation();
  const challenge = location.state?.challenge || {};
  const index = location.state?.index || {}

  return (
    <div>
      <Header/>
      <HackathonDetails challenge={challenge} />
      <OverviewSection challenge={challenge} index = {index} />
    </div>
  );
}

export default Hackathon;
