import "./index.css";

const UserProfile = (props) => {
  const { userDetails, addUser } = props;
  const { imageUrl, name, id } = userDetails;

  const handleClickEvent = () => {
    addUser(id);
  };

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        {!userDetails.isFriend && (
          <button
            type="button"
            onClick={handleClickEvent}
            className="connection-status"
          >
            add user
          </button>
        )}

        {userDetails.isFriend && <p className="connection-status">Added</p>}
      </div>
    </li>
  );
};

//*********************** */

const FriendSuggetions = (props) => {
  const { userList, userAdded } = props;
  const addUser = (id) => {
    userAdded(id);
  };

  return (
    <div className="friends-suggetion-container">
      <div className="suggetion-section">
        <p className="user-list-text">Who to Follow</p>
        <ul className="suggetions-list">
          {userList.map((eachUser) => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.id}
              addUser={addUser}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FriendSuggetions;
