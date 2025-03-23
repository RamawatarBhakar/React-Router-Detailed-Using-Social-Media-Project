import { useReducer, useState, useEffect } from "react";

import { createContext } from "react";

export const Postlist = createContext({
  datas: [],
  fetching: false,
  add: () => {},
  deletes: () => {},
});
export const useActionState = (currents, action) => {
  let items = currents;

  if (action.type === "ADD") {
    items = [action.payload.post, ...currents];
  } else if (action.type === "ADD-ApiPost") {
    items = action.payload.Post;
  } else if (action.type === "DELETE") {
    items = currents.filter((item) => item.title !== action.payload.name);
  }
  return items;
};

const PostListProvider = ({ children }) => {
  const [datas, dispatch] = useReducer(useActionState, []);
  const [fetching, setFetching] = useState(false);

  const add = (post) => {
    const newItemAction = {
      type: "ADD",
      payload: {
        post,
      },
    };

    dispatch(newItemAction);
  };
  const initialPosts = (Post) => {
    const newApiPost = {
      type: "ADD-ApiPost",
      payload: {
        Post,
      },
    };
    dispatch(newApiPost);
  };

  const deletes = (deleteitem) => {
    const deleteItemAction = {
      type: "DELETE",
      payload: {
        name: deleteitem,
      },
    };
    dispatch(deleteItemAction);
  };

  return (
    <Postlist.Provider value={{ datas, add, deletes, fetching }}>
      {children}
    </Postlist.Provider>
  );
};
export default PostListProvider;
