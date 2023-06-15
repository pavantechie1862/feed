import React, { useState, useEffect } from "react";
import Feed from "../Feed";
import UserBio from "../UserBio";
import FriendSuggetions from "../FriendSuggetions";
import CurrentUserProfile from "../CurrentUserProfile";
import { usersList, feed } from "../../utils";
import { v4 as uuidv4 } from "uuid";

import { VscRequestChanges } from "react-icons/vsc";
import { FaRegUserCircle } from "react-icons/fa";
import { MdDynamicFeed } from "react-icons/md";
import "./index.css";

const displayContent = {
  displayFeed: "DISPLAY_FEED",
  displayBio: "DISPLAY_BIO",
  displaySuggetions: "DISPLAY_SUGGETIONS",
};

const Home = () => {
  const [listOfUsers, setlistOfUsers] = useState(usersList);
  const [posts, setPosts] = useState(feed);
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

  const increaseLikeCount = (id) => {
    const updated = posts.map((each) => {
      if (each.id === id) {
        if (each.currentUserLiked) {
          if (each.currentUserDisliked) {
            return {
              ...each,
              currentUserDisliked: false,
              disLikes: each.disLikes - 1,
              currentUserLiked: false,
              likes: each.likes - 1,
            };
          }
          return {
            ...each,
            currentUserLiked: false,
            likes: each.likes - 1,
          };
        } else {
          if (each.currentUserDisliked) {
            return {
              ...each,
              currentUserDisliked: false,
              disLikes: each.disLikes - 1,
              currentUserLiked: true,
              likes: each.likes + 1,
            };
          }
          return {
            ...each,
            currentUserLiked: true,
            likes: each.likes + 1,
          };
        }
      } else {
        return { ...each };
      }
    });
    setPosts(updated);
  };

  const increaseDisLikeCount = (id) => {
    const updated = posts.map((each) => {
      if (each.id === id) {
        if (each.currentUserDisliked) {
          if (each.currentUserLiked) {
            return {
              ...each,
              currentUserLiked: false,
              likes: each.likes - 1,
              currentUserDisliked: false,
              disLikes: each.disLikes - 1,
            };
          }
          return {
            ...each,
            currentUserDisliked: false,
            disLikes: each.disLikes - 1,
          };
        } else {
          if (each.currentUserLiked) {
            return {
              ...each,
              currentUserLiked: false,
              likes: each.likes - 1,
              currentUserDisliked: true,
              disLikes: each.disLikes + 1,
            };
          }
          return {
            ...each,
            currentUserDisliked: true,
            disLikes: each.disLikes + 1,
          };
        }
      } else {
        return { ...each };
      }
    });
    setPosts(updated);
  };

  const addComment = (id, comment) => {
    const newComment = {
      commentId: uuidv4(),
      commentedProfile: "current-user.jpg",
      commentText: comment,
      commentorName: "current user",
    };
    const updated = posts.map((each) => {
      if (each.id === id) {
        return { ...each, comments: [newComment, ...each.comments] };
      } else {
        return { ...each };
      }
    });

    setPosts(updated);
  };

  const userAdded = (id) => {
    const updatedList = listOfUsers.map((each) => {
      if (each.id === id) {
        return { ...each, isFriend: true };
      } else {
        return { ...each };
      }
    });
    setlistOfUsers(updatedList);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case displayContent.displayBio:
        return (
          <>
            <CurrentUserProfile />
            <UserBio />
          </>
        );
      case displayContent.displayFeed:
        return (
          <Feed
            posts={posts}
            addComment={addComment}
            increaseLikeCount={increaseLikeCount}
            increaseDisLikeCount={increaseDisLikeCount}
          />
        );
      case displayContent.displaySuggetions:
        return (
          <FriendSuggetions userList={listOfUsers} userAdded={userAdded} />
        );
      default:
        return null;
    }
  };

  const toggleShowBio = () => settabViewShowBio((prevState) => !prevState);

  const mobileView = () => (
    <>
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
        </ul>
      </nav>
      <div className="active-component-container">
        <div>{renderActiveComponent()}</div>
      </div>
    </>
  );

  const tabView = () => (
    <div className="tab-view">
      <div className="friend-suggetions">
        <CurrentUserProfile
          showBio={tabViewShowBio}
          toggleShowBio={toggleShowBio}
        />
        {tabViewShowBio ? (
          <UserBio />
        ) : (
          <FriendSuggetions userList={listOfUsers} userAdded={userAdded} />
        )}
      </div>

      <div className="feed">
        <Feed
          posts={posts}
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
        <UserBio />
      </div>

      <div className="feed">
        <Feed
          posts={posts}
          addComment={addComment}
          increaseLikeCount={increaseLikeCount}
          increaseDisLikeCount={increaseDisLikeCount}
        />
      </div>

      <div className="friend-suggetions">
        <CurrentUserProfile />
        <FriendSuggetions userList={listOfUsers} userAdded={userAdded} />
      </div>
    </div>
  );

  const renderHomeView = () => {
    if (windowWidth <= 600) {
      return mobileView();
    } else if (windowWidth > 600 && windowWidth < 1110) {
      return tabView();
    } else {
      return screenView();
    }
  };

  return <div className="main-container">{renderHomeView()}</div>;
};

export default Home;
