import { useContext, useRef } from "react";
import { Postlist } from "../Store/store";

const CreatePost = () => {
  const { add } = useContext(Postlist);
  const postid = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const postView = useRef();
  const posttag = useRef();

  const adds = (event) => {
    event.preventDefault();

    const body = postBody.current.value;
    const userId = postid.current.value;
    const title = postTitle.current.value;
    const views = postView.current.value;
    const tags = posttag.current.value
      .split(",") // Convert string to an array
      .map((tag) => tag.trim()) // Remove extra spaces
      .filter((tag) => tag.length > 0); // Remove empty tags

    posttag.current.value = "";
    postView.current.value = "";
    postTitle.current.value = "";
    postid.current.value = "";
    postBody.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        title,
        body,
        views,
        tags, // Now it's an array
      }),
    })
      .then((res) => res.json())
      .then((resobj) => add(resobj));
  };

  return (
    <form onSubmit={adds}>
      <div className="contain">
        <div className="col-md-6">
          <label htmlFor="userId" className="form-label">
            User ID
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            ref={postid}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={postTitle}
          />
        </div>
        <div className="col-12">
          <label htmlFor="body" className="form-label">
            Body
          </label>
          <input
            type="text"
            className="form-control"
            id="body"
            ref={postBody}
          />
        </div>
        <div className="col-12">
          <label htmlFor="tags" className="form-label">
            Tags (comma-separated)
          </label>
          <input type="text" className="form-control" id="tags" ref={posttag} />
        </div>
        <div className="col-md-1">
          <label htmlFor="views" className="form-label">
            Views
          </label>
          <input
            type="text"
            className="form-control"
            id="views"
            ref={postView}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Create Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
