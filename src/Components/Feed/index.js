import "./index.css";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";

const Feed = () => {
  const handleClickEvent = () => {
    console.log("hello world");
  };
  return (
    <ul className="feed-container">
      <li className="post-item">
        <img
          src="https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_1280.jpg"
          alt="posted-avatar"
          className="posted-content"
        />
        <div className="about-post-container">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="profile-avatar"
            className="posted-by-profile profile-pic"
          />
          <div className="post-description">
            <div className="post-header">
              <div className="">
                <p className="username">
                  username
                  <span className="following-status">not following</span>
                </p>
                <p className="posted-time">uploaded 10 minutes ago</p>
              </div>
              <div className="like-dislike-container">
                <button type="button" onClick={handleClickEvent}>
                  <AiTwotoneLike /> 100
                </button>
                <button type="button" onClick={handleClickEvent}>
                  <AiTwotoneDislike /> 100
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Feed;
