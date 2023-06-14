import Feed from "../Feed";
import UserBio from "../UserBio";
import FriendSuggetions from "../FriendSuggetions";
import "./index.css";

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "Software Developer",
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "Software Developer",
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "Software Developer",
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "Devon Lane",
    role: "Software Developer",
  },
];

const Home = () => (
  <div className="main-container">
    <div className="user-bio">
      <UserBio />
    </div>

    <div className="feed">
      <Feed />
    </div>
    <div className="friend-suggetion">
      <FriendSuggetions userList={initialUserDetailsList} />
    </div>
  </div>
);

export default Home;