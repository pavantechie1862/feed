import { FaBriefcase } from "react-icons/fa";
import "./index.css";

const UserBio = (props) => (
  <div className="bio-content">
    <h2 className="bio-heading">Intro</h2>
    <button className="add-bio-btn">Add Bio</button>
    <ul>
      {props.bio.map((each) => (
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
