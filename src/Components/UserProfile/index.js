import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserBio from "../UserBio";
import Feed from "../Feed";
import { DB } from "../../database";
import { v4 as uuidv4 } from "uuid";
import { MdTimeline, MdOutlinePhotoAlbum } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaUserFriends } from "react-icons/fa";
import { SlUserFollowing } from "react-icons/sl";
import "./index.css";

const activeOptionDetails = {
  displayBio: "DISPLAY_BIO",
  displayPosts: "DISPLAY_POSTS",
};

const UserProfile = (props) => {
  const [userDetails, setUserDetails] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [activeOption, setActiveOption] = useState(
    activeOptionDetails.displayPosts
  );
  const { id } = useParams();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const filteredData = DB.filter((each) => each.userId === parseInt(id));
    setUserDetails(filteredData);
  }, [id]);

  const increaseLikeCount = (userId, postId) => {
    const updatedUsers = userDetails.map((eachUserDetails) => {
      if (eachUserDetails.userId === userId) {
        const updatedPosts = eachUserDetails.posts.map((eachPost) => {
          if (eachPost.postId === postId) {
            if (eachPost.currentUserDisliked) {
              return {
                ...eachPost,
                currentUserDisliked: false,
                disLikes: eachPost.disLikes - 1,
                likes: eachPost.likes + 1,
                currentUserLiked: true,
              };
            } else {
              if (eachPost.currentUserLiked) {
                return {
                  ...eachPost,
                  currentUserLiked: false,
                  likes: eachPost.likes - 1,
                };
              }
              return {
                ...eachPost,
                currentUserLiked: true,
                likes: eachPost.likes + 1,
              };
            }
          }
          return eachPost;
        });

        return {
          ...eachUserDetails,
          posts: updatedPosts,
        };
      }
      return eachUserDetails;
    });

    setUserDetails(updatedUsers);
  };

  const increaseDisLikeCount = (userId, postId) => {
    const updatedUsers = userDetails.map((eachUserDetails) => {
      if (eachUserDetails.userId === userId) {
        const updatedPosts = eachUserDetails.posts.map((eachPost) => {
          if (eachPost.postId === postId) {
            if (eachPost.currentUserDisliked) {
              return {
                ...eachPost,
                currentUserDisliked: false,
                disLikes: eachPost.disLikes - 1,
              };
            } else {
              if (eachPost.currentUserLiked) {
                return {
                  ...eachPost,
                  currentUserLiked: false,
                  likes: eachPost.likes - 1,
                  currentUserDisliked: true,
                  disLikes: eachPost.disLikes + 1,
                };
              }
              return {
                ...eachPost,
                currentUserDisliked: true,
                disLikes: eachPost.disLikes + 1,
              };
            }
          }
          return eachPost;
        });

        return {
          ...eachUserDetails,
          posts: updatedPosts,
        };
      }
      return eachUserDetails;
    });

    setUserDetails(updatedUsers);
  };

  const addComment = (userid, postid, comment) => {
    const newComment = {
      commentId: uuidv4(),
      commentedProfile: "current-user.jpg",
      commentText: comment,
      commentorName: "Pavan Marapalli", //current user name
    };

    const updated = userDetails.map((eachUserProfile) => {
      if (eachUserProfile.userId === userid) {
        eachUserProfile.posts.map((eachPost) => {
          if (eachPost.postId === postid) {
            eachPost.comments.unshift(newComment);
            return { ...eachPost };
          }
          return { ...eachPost };
        });
      }
      return { ...eachUserProfile };
    });

    setUserDetails(updated);
  };

  const redirectToHome = () => props.history.push("/");

  const showBioTrigered = () => setActiveOption(activeOptionDetails.displayBio);

  const showPostsTriggered = () =>
    setActiveOption(activeOptionDetails.displayPosts);

  const screenView = () => (
    <>
      <div className="others-bio-cintainer">
        <UserBio bio={userDetails[0].userBio} />
      </div>
      <div className="others-post-cintainer">
        <Feed
          database={userDetails}
          addComment={addComment}
          increaseLikeCount={increaseLikeCount}
          increaseDisLikeCount={increaseDisLikeCount}
        />
      </div>
    </>
  );

  const mobileView = () => {
    if (activeOption === activeOptionDetails.displayBio) {
      return (
        <div className="others-bio-cintainer">
          <UserBio bio={userDetails[0].userBio} />
        </div>
      );
    }
    return (
      <div className="others-post-cintainer">
        <Feed
          database={userDetails}
          addComment={addComment}
          increaseLikeCount={increaseLikeCount}
          increaseDisLikeCount={increaseDisLikeCount}
        />
      </div>
    );
  };

  const renderView = () => {
    if (windowWidth > 850) {
      return screenView();
    }
    return mobileView();
  };

  return (
    userDetails !== null && (
      <div className="others-profile-container">
        <nav className="others-profile-header">
          <img
            src={userDetails[0].imageUrl}
            className="others-profile-pic"
            alt="user-avatar"
          />
          {windowWidth <= 850 ? (
            <>
              <ul className="nav-buttons">
                <li>
                  <button
                    className="others-profile-icon"
                    type="button"
                    onClick={showBioTrigered}
                  >
                    <MdTimeline />
                  </button>
                </li>
                <li className="others-profile-icon">
                  <FcAbout />
                </li>
                <li>
                  <button
                    className="others-profile-icon"
                    type="button"
                    onClick={showPostsTriggered}
                  >
                    <MdOutlinePhotoAlbum />
                  </button>
                </li>
                <li className="others-profile-icon">
                  <FaUserFriends />
                </li>
              </ul>
              <ul className="nav-buttons">
                <li className="others-profile-icon">
                  <SlUserFollowing>1233</SlUserFollowing>
                </li>
                <li>
                  <button className="others-profile-btn">Add Friend</button>
                </li>
                <li>
                  <button
                    className="others-profile-btn"
                    onClick={redirectToHome}
                  >
                    Home
                  </button>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="nav-buttons">
                <li className="others-nav-link">Timeline</li>
                <li className="others-nav-link">About</li>
                <li className="others-nav-link">Album</li>
                <li className="others-nav-link">Friends</li>
                <li className="others-nav-link">Album</li>
              </ul>
              <ul className="nav-buttons">
                <li className="others-nav-link"> 1233 Followers</li>
                <li>
                  <button className="others-profile-btn">Add Friend</button>
                </li>
                <li>
                  <Link to="/" className="others-profile-btn link">
                    Home
                  </Link>
                </li>
              </ul>
            </>
          )}
        </nav>
        <div className="others-profile-inner-container">{renderView()}</div>
      </div>
    )
  );
};
export default UserProfile;
