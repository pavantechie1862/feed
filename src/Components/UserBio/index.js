import { FaBriefcase } from "react-icons/fa";
import "./index.css";

const bioList = [
  {
    id: 1,
    text: "Former Steering Committe Member a ",
    highlighted: "Prithvi,IIT Kharagpur",
    icon: "FaBriefcase",
  },
  {
    id: 2,
    text: "Former Summer Internship at Schlumberger",
    highlighted: "",
    icon: "FaBriefcase",
  },
  {
    id: 3,
    text: "Former Steering Committe Member (Tech Team) at ",
    highlighted: "Spring Fest, IIIT Kharagpur",
    icon: "FaBriefcase",
  },
  {
    id: 4,
    text: "Former Student Mentor at ",
    highlighted: "Student Welfare Group - SWG, IIT Kharagpur",
    icon: "FaBriefcase",
  },
  {
    id: 5,
    text: "Former Summer Internship at ",
    highlighted: "Cairn Oil and Gas, Vedanta Limited",
    icon: "FaBriefcase",
  },
  {
    id: 6,
    text: "Former Summer Internship at ",
    highlighted: "ONGC Limited",
    icon: "FaBriefcase",
  },
  {
    id: 7,
    text: "Studied At ",
    highlighted: " IIT Kharagpur",
    icon: "FaBriefcase",
  },
  {
    id: 8,
    text: "Went to ",
    highlighted: "Delhi Public School,Jaipur",
    icon: "FaBriefcase",
  },
  {
    id: 9,
    text: "SWent to Subodh Public Schoo,airport ",
    highlighted: "",
    icon: "FaBriefcase",
  },
  {
    id: 10,
    text: "Lives in  ",
    highlighted: "Mumbai, Maharashtra",
    icon: "FaBriefcase",
  },
  {
    id: 11,
    text: "From ",
    highlighted: " Jaipur,Rajasthan",
    icon: "FaBriefcase",
  },
  {
    id: 12,
    text: "Followed by ",
    highlighted: "241 People",
    icon: "FaBriefcase",
  },
];

const UserBio = () => (
  <div className="bio-content">
    <h2 className="bio-heading">Intro</h2>
    <button className="add-bio-btn">Add Bio</button>
    <ul>
      {bioList.map((each) => (
        <li className="bio-item" key={each.id}>
          <div className="bio-icon">
            <FaBriefcase />
          </div>
          <p>
            {each.text}
            <span className="bio-highlighted">{each.highlighted}</span>
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default UserBio;
