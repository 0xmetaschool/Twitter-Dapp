function AddTweet(props: any) {
  return (
    <>
      <div className="add-tweet">
        <img src={props.profileimage} alt=""></img>
        <div className="tweet-form">
          <form action="">
            <input
              onChange={props.handleNewTweetNameChange}
              placeholder="Add your tweet name"
            />
            <textarea
              name=""
              id=""
              rows={3}
              placeholder="Description"
              onChange={props.handleNewTweetDescriptionChange}
            ></textarea>
            <button
              className="button btn twitter-bg"
              onClick={props.addNewTweet}
            >
              Tweet
            </button>
            <button className="button btn twitter-bg" onClick={props.refresh}>
              Refresh
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTweet;
