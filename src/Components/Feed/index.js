import "./index.css";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import { currentUserData } from "../../database";
import { Link } from "react-router-dom";
const Comment = (props) => {
  const { commentItem } = props;
  const {
    commentId,
    commentedProfile,
    commentText,
    commentorName,
    commentorId,
  } = commentItem;
  return (
    <li className="comment-item">
      <img
        src={commentedProfile}
        alt={`commentor-avatar-${commentId}`}
        className="commentor-profile profile-pic"
      />
      <p className="comment-text">
        <Link to={`/user/${commentorId}`} className="link">
          <span className="username">{commentorName}</span>
        </Link>
        {commentText}
      </p>
    </li>
  );
};

const PostItem = (props) => {
  const {
    eachPost,
    userDetails,
    handleLikeEvent,
    handleDisLikeEvent,
    handleComment,
  } = props;

  const { userId, imageUrl, name, isFriend } = userDetails;
  const {
    postId,
    postedById,
    postedContent,
    postedType,
    timeLine,
    postDescription,
    likes,
    disLikes,
    currentUserLiked,
    currentUserDisliked,
    comments,
  } = eachPost;

  const likeTriggered = () => handleLikeEvent(userId, postId);
  const disLikeTriggered = () => handleDisLikeEvent(userId, postId);

  const onchangingComment = (event) => {
    if (event.key === "Enter") {
      handleComment(userId, postId, event.target.value);
      event.target.value = "";
    }
  };

  const userLikedClassname = currentUserLiked ? "change-color" : "";
  const disLikedClassname = currentUserDisliked ? "change-color" : "";

  return (
    <li className="post-item">
      {postedType === "IMAGE" && (
        <img
          src={postedContent}
          alt={`img-posted-by-${postedById}`}
          className="posted-content"
        />
      )}

      {postedType !== "IMAGE" && (
        <video src={postedContent} controls className="posted-content" />
      )}

      <div className="about-post-container">
        <div>
          <img
            src={`${imageUrl}`}
            alt="profile-avatar"
            className="posted-by-profile profile-pic"
          />
        </div>
        <div className="post-description">
          <div className="post-header">
            <div className="">
              <p className="username">
                {name}
                <span className="following-status">
                  {isFriend ? "Following" : "Not Following"}
                </span>
              </p>
              <p className="posted-time">Posted {timeLine} minutes ago</p>
            </div>
            <div className="like-dislike-container">
              <button
                type="button"
                className={`like-dislike-btn ${userLikedClassname}`}
                onClick={likeTriggered}
              >
                <AiTwotoneLike /> {likes}
              </button>
              <button
                className={`like-dislike-btn ${disLikedClassname}`}
                type="button"
                onClick={disLikeTriggered}
              >
                <AiTwotoneDislike /> {disLikes}
              </button>
            </div>
          </div>
          <p className="posted-discription">{postDescription}</p>
          <ul className="comments-container">
            {comments.map((eachComment) => (
              <Comment commentItem={eachComment} key={eachComment.commentId} />
            ))}

            <li className="comment-item" key="default">
              <img
                src={currentUserData.profilePic}
                alt="commentor-avatar"
                className="commentor-profile profile-pic"
              />
              <input
                type="text"
                className="post-comment"
                placeholder="Post a comment"
                onKeyDown={onchangingComment}
              />
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

const Feed = (props) => {
  const { database, increaseLikeCount, increaseDisLikeCount, addComment } =
    props;
  const handleLikeEvent = (userid, postid) => increaseLikeCount(userid, postid);
  const handleDisLikeEvent = (userid, postid) =>
    increaseDisLikeCount(userid, postid);
  const handleComment = (userid, postid, comment) =>
    addComment(userid, postid, comment);

  return (
    <ul className="feed-container">
      {
        database.length > 0 &&
          database.map((eachUserDetails) =>
            eachUserDetails.posts.map((eachPost) => (
              <PostItem
                key={eachPost.postId}
                eachPost={eachPost}
                userDetails={eachUserDetails}
                handleLikeEvent={handleLikeEvent}
                handleDisLikeEvent={handleDisLikeEvent}
                handleComment={handleComment}
              />
            ))
          )

        // database.map((each) => (
        //   <PostItem
        //     key={each.id}
        //     each={each}
        //     handleLikeEvent={handleLikeEvent}
        //     handleDisLikeEvent={handleDisLikeEvent}
        //     handleComment={handleComment}
        //   />
        // ))
      }
    </ul>
  );
};

export default Feed;
