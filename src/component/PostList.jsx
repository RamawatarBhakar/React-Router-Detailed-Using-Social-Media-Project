import { Postlist } from "../Store/store";
import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import Nopost from "./Nopost";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
  //const { datas, fetching } = useContext(Postlist);
  const datas = useLoaderData();
  return (
    <>
      {datas.map((post, index) => (
        <Post key={post.id || index} post={post} />
      ))}
    </>
  );
};

export const loaderData = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
