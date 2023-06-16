import { Link } from "react-router-dom";
import "./index.css";

const FriendSuggetions = (props) => {
  const { database, userAdded } = props;
  const addUser = (userId) => {
    userAdded(userId);
  };

  return (
    <div className="suggetion-section">
      <p className="user-list-text">Who to Follow</p>
      <ul className="suggetions-list">
        {database.map((eachUser) => (
          <li className="user-card-container" key={eachUser.userId}>
            <img
              src={`${eachUser.imageUrl}`}
              className="profile-pic"
              alt="profile-pic"
            />
            <div className="user-details-container">
              <Link to={`/user/${eachUser.userId}`} className="user-name">
                {eachUser.name}
              </Link>

              <button
                type="button"
                onClick={() => addUser(eachUser.userId)}
                className="connection-status"
                disabled={eachUser.isFriend}
              >
                {eachUser.isFriend ? "Added" : "Add User"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendSuggetions;
