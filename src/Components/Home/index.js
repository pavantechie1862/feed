import React, { useState, useEffect } from "react";
import Feed from "../Feed";
import UserBio from "../UserBio";
import FriendSuggetions from "../FriendSuggetions";
import CurrentUserProfile from "../CurrentUserProfile";
import { v4 as uuidv4 } from "uuid";
import { VscRequestChanges } from "react-icons/vsc";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdDynamicFeed } from "react-icons/md";
import { DB } from "../../database";
import { currentUserData } from "../../database";
import "./index.css";

const displayContent = {
  displayFeed: "DISPLAY_FEED",
  displayBio: "DISPLAY_BIO",
  displaySuggetions: "DISPLAY_SUGGETIONS",
};

const Home = () => {
  const [database, setDatabase] = useState(DB);
  const [activeComponent, setActiveComponent] = useState(
    displayContent.displayFeed
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [tabViewShowBio, settabViewShowBio] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const activateBio = () => {
    setActiveComponent(displayContent.displayBio);
  };

  const activateFeed = () => {
    setActiveComponent(displayContent.displayFeed);
  };

  const activateSuggetions = () => {
    setActiveComponent(displayContent.displaySuggetions);
  };

  const increaseLikeCount = (userId, postId) => {
    const updatedUsers = database.map((eachUserDetails) => {
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

    setDatabase(updatedUsers);
  };

  const increaseDisLikeCount = (userId, postId) => {
    const updatedUsers = database.map((eachUserDetails) => {
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

    setDatabase(updatedUsers);
  };

  const addComment = (userid, postid, comment) => {
    const newComment = {
      commentId: uuidv4(),
      commentedProfile: `${currentUserData.profilePic}`,
      commentText: comment,
      commentorName: "Pavan Marapalli", //current user name
    };

    const updated = database.map((eachUserProfile) => {
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

    setDatabase(updated);
  };

  const userAdded = (id) => {
    const updatedList = database.map((each) => {
      if (each.userId === id) {
        return { ...each, isFriend: true };
      } else {
        return { ...each };
      }
    });

    setDatabase(updatedList);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case displayContent.displayBio:
        return (
          <>
            <CurrentUserProfile />
            <UserBio bio={currentUserData.userBio} />
          </>
        );
      case displayContent.displayFeed:
        return (
          <Feed
            database={database}
            addComment={addComment}
            increaseLikeCount={increaseLikeCount}
            increaseDisLikeCount={increaseDisLikeCount}
          />
        );
      case displayContent.displaySuggetions:
        return <FriendSuggetions database={database} userAdded={userAdded} />;
      default:
        return null;
    }
  };

  const toggleShowBio = () => settabViewShowBio((prevState) => !prevState);

  const mobileView = () => (
    <div className="mobile-view">
      <nav className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <button type="button" onClick={activateBio}>
              <FaRegUserCircle className="nav-bar-icon" />
            </button>
          </li>

          <li className="nav-menu-item-mobile">
            <button type="button" onClick={activateFeed}>
              <MdDynamicFeed className="nav-bar-icon" />
            </button>
          </li>
          <li className="nav-menu-item-mobile">
            <button type="button" onClick={activateSuggetions}>
              <VscRequestChanges className="nav-bar-icon" />
            </button>
          </li>
          <li className="nav-menu-item-mobile">
            <button type="button">
              <FiLogOut className="nav-bar-icon" />
            </button>
          </li>
        </ul>
      </nav>
      <div className="active-component-container">
        <div>{renderActiveComponent()}</div>
      </div>
    </div>
  );

  const tabView = () => (
    <div className="tab-view">
      <div className="friend-suggetions">
        <CurrentUserProfile
          showBio={tabViewShowBio}
          toggleShowBio={toggleShowBio}
        />
        {tabViewShowBio ? (
          <UserBio bio={currentUserData.userBio} />
        ) : (
          <FriendSuggetions database={database} userAdded={userAdded} />
        )}
      </div>

      <div className="feed">
        <Feed
          database={database}
          addComment={addComment}
          increaseLikeCount={increaseLikeCount}
          increaseDisLikeCount={increaseDisLikeCount}
        />
      </div>
    </div>
  );

  const screenView = () => (
    <div className="screen-view">
      <div className="user-bio">
        <UserBio bio={currentUserData.userBio} />
      </div>

      <div className="feed">
        <Feed
          database={database}
          addComment={addComment}
          increaseLikeCount={increaseLikeCount}
          increaseDisLikeCount={increaseDisLikeCount}
        />
      </div>

      <div className="friend-suggetions">
        <CurrentUserProfile />
        <FriendSuggetions database={database} userAdded={userAdded} />
      </div>
    </div>
  );

  const renderHomeView = () => {
    if (windowWidth <= 700) {
      return mobileView();
    } else if (windowWidth > 700 && windowWidth < 1110) {
      return tabView();
    } else {
      return screenView();
    }
  };

  return renderHomeView();
};

export default Home;
