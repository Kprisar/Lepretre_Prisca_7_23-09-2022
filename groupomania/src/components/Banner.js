import logo from "./assets/Logo.png";

function Banner() {
  const title = "Groupomania";
  return (
    <div className="lmj-banner">
      <img src={logo} alt="groupomania" className="lmj-Logo" />
    </div>
  );
}

export default Banner;
