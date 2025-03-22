import { Postlist } from "../Store/store";
import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import Nopost from "./Nopost";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { datas, fetching } = useContext(Postlist);

  return (
    <>
      {!fetching && <LoadingSpinner />}
      {
        //!fetching && datas.length === 0 && <Nopost />
      }
      {datas.map((post, index) => (
        <Post key={post.id || index} post={post} />
      ))}
    </>
  );
};
export default PostList;
