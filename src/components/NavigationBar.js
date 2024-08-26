import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="NavigationBar">
      <img className="image ppp-logo" width={160} height={85} src="/assets/images/ppp-logo.png"/>
      <div className="rightNavContainer">
        <div className="routesContainer">
          <strong>Product Detail</strong>
          <strong>Analysis</strong>
          <strong>Rewards</strong>
          <strong>Log in</strong>
        </div>
        <img className="image profile-img" src="/assets/images/profile-img.png"/>
      </div>
     </div>
  );
};

export default NavigationBar;