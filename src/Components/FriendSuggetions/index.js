import "./index.css";

const UserProfile = (props) => {
  const { userDetails, addUser } = props;
  const { imageUrl, name, uniqueNo } = userDetails;

  const handleClickEvent = () => {
    addUser(uniqueNo);
  };

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <button type="button" onClick={handleClickEvent}>
          add user
        </button>
      </div>
    </li>
  );
};

//*********************** */

const FriendSuggetions = (props) => {
  const { userList } = props;

  const addUser = (id) => {
    console.log("This user is added");
    console.log(id);
  };

  return (
    <>
      <h1 className="title">Users List</h1>
      <ul className="suggetions-list">
        {userList.map((eachUser) => (
          <UserProfile
            userDetails={eachUser}
            key={eachUser.uniqueNo}
            addUser={addUser}
          />
        ))}
      </ul>
    </>
  );
};

export default FriendSuggetions;
