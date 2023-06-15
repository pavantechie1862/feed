import "./index.css";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";

const Comment = (props) => {
  const { commentItem } = props;
  const { commentId, commentedProfile, commentText, commentorName } =
    commentItem;
  return (
    <li className="comment-item">
      <img
        src={commentedProfile}
        alt={`commentor-avatar-${commentId}`}
        className="commentor-profile profile-pic"
      />
      <p className="comment-text">
        <span className="username">{commentorName}</span> {commentText}
      </p>
    </li>
  );
};

const PostItem = (props) => {
  const { each, handleLikeEvent, handleDisLikeEvent, handleComment } = props;

  const {
    id,
    postedBy,
    postedContent,
    postedType,
    postedByProfile,
    timeLine,
    postDescription,
    likes,
    disLikes,
    currentUserLiked,
    currentUserDisliked,
    currentUserFollowing,
    comments,
  } = each;

  const likeTriggered = () => handleLikeEvent(id);
  const disLikeTriggered = () => handleDisLikeEvent(id);

  const onchangingComment = (event) => {
    if (event.key === "Enter") {
      handleComment(id, event.target.value);
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
          alt={`img-posted-by-${postedBy}`}
          className="posted-content"
        />
      )}

      {postedType !== "IMAGE" && (
        <video src="cartoon.mp4" controls className="posted-content" />
      )}

      <div className="about-post-container">
        <div>
          <img
            src={`${postedByProfile}`}
            alt="profile-avatar"
            className="posted-by-profile profile-pic"
          />
        </div>
        <div className="post-description">
          <div className="post-header">
            <div className="">
              <p className="username">
                {postedBy}
                <span className="following-status">
                  {currentUserFollowing ? "Following" : "Not Following"}
                </span>
              </p>
              <p className="posted-time">{timeLine}</p>
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
            {comments.length > 0 &&
              comments.map((eachComment) => (
                <Comment commentItem={eachComment} key={eachComment.id} />
              ))}

            <li className="comment-item" key="default">
              <img
                src="current-user.jpg"
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
  const { posts, increaseLikeCount, increaseDisLikeCount, addComment } = props;

  const handleLikeEvent = (id) => increaseLikeCount(id);
  const handleDisLikeEvent = (id) => increaseDisLikeCount(id);
  const handleComment = (id, comment) => addComment(id, comment);

  return (
    <ul className="feed-container">
      {posts.map((each) => (
        <PostItem
          each={each}
          key={each.id}
          handleLikeEvent={handleLikeEvent}
          handleDisLikeEvent={handleDisLikeEvent}
          handleComment={handleComment}
        />
      ))}
    </ul>
  );
};

export default Feed;
