import { useEffect, useState } from "react";
import { currentUserData } from "../../database";
import "./index.css";

//* current user profile container along with logout option and toggle button in tabview
const CurrentUserProfile = (props) => {
  const { showBio, toggleShowBio } = props;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClickEvent = () => {
    return toggleShowBio();
  };

  return (
    <div className="current-user-container">
      <img
        src={currentUserData.profilePic}
        className="current-user-profile"
        alt="user-avatar"
      />
      <div className="current-user-details">
        <p className="current-username">Pavan Marapalli</p>
        <p className="current-user-description">
          Embrace your uniqueness and go with the flow
        </p>
        {windowWidth > 600 && (
          <button type="button" className="bio-toggle-btn">
            Log out
          </button>
        )}
        {windowWidth > 700 && windowWidth < 1110 && (
          <button
            type="button"
            className="bio-toggle-btn"
            onClick={handleClickEvent}
          >
            {!showBio ? "Show Bio" : "Show Suggetions"}
          </button>
        )}
      </div>
    </div>
  );
};

export default CurrentUserProfile;
