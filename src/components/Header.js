import icon from "../images/icon.png";
export default function Header(){
    return(
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
    )
}