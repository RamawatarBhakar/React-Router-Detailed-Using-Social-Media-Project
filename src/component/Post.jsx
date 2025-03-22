import { useContext } from "react";
import { Postlist } from "../Store/store";

import { MdDeleteForever } from "react-icons/md";
import { AiTwotoneEye } from "react-icons/ai";
import { SlDislike } from "react-icons/sl";
import { SlLike } from "react-icons/sl";

const Post = ({ post }) => {
  const obj = useContext(Postlist);

  const handleDelete = () => {
    if (obj?.deletes) {
      obj.deletes(post?.title || "Untitled");
    }
  };

  const mycss = {
    borderRadius: "21px",
  };

  return (
    <div className="card" style={{ width: "22rem" }}>
      <div className="card-body">
        <h5 className="card-title">{`Name: ${post?.title || "Undefined"}`}</h5>
        <p className="card-text">{`About: ${
          post?.body
            ? post.body.length > 100
              ? post.body.substring(0, 100) + "..."
              : post.body
            : "No description available"
        }`}</p>

        <div className="hastag">
          {post?.tags?.length > 0 ? (
            post.tags.map((item, index) => (
              <span key={index} className="badge rounded-pill text-bg-dark">
                {item}
              </span>
            ))
          ) : (
            <span className="badge rounded-pill text-bg-secondary">
              No Tags
            </span>
          )}
        </div>

        <div className="button">
          <button style={mycss} className="btn btn-success">
            {post?.views || 0} <AiTwotoneEye />
          </button>

          <button style={mycss} className="btn btn-info">
            {post?.reactions?.likes || 0} <SlLike />
          </button>
          <button style={mycss} className="btn btn-info">
            {post?.reactions?.dislikes || 0} <SlDislike />
          </button>
          <button
            style={mycss}
            className="btn btn-danger"
            onClick={handleDelete}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
