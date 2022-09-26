import React from "react";

function Comments(props: any) {
  return (
    <>
      <div className="add-tweet reply-tweet">
        <span>
          Reply to{" "}
          <a href="#!" title="">
            {" "}
            @{props.tweet.fromAddress.replace(/(.{9})..+/, "$1...")}
          </a>
        </span>
        <div className="tweet-form">
          <form action="">
            <textarea
              name=""
              id=""
              rows={2}
              placeholder="Add your tweet"
              onChange={props.handleCommentChange}
            ></textarea>
            <button
              className="btn twitter-bg"
              onClick={(event) => props.addComment(event, props.count)}
            >
              Tweet
            </button>
          </form>
        </div>
      </div>

      {props.tweet.comments.map((comment: any, j: any) => (
        <div className="tweet-list thread" key={j}>
          <img src="images/user.png" alt=""></img>
          <div className="tweet-content">
            <h5>
              <a href="#!" title="">
                @{props.tweet.fromAddress.replace(/(.{9})..+/, "$1...")}
              </a>
            </h5>
            <span>
              Replying to{" "}
              <a href="#!" title="">
                {" "}
                @{props.tweet.fromAddress.replace(/(.{9})..+/, "$1...")}
              </a>
            </span>
            <p>{comment}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Comments;
