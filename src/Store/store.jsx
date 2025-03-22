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
    items = [...currents, action.payload.post];
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

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        initialPosts(data.posts);
        setFetching(true);
      });

    return () => {
      console.log("cleanup .... ");
      controller.abort();
    };
  }, []);
  return (
    <Postlist.Provider value={{ datas, add, deletes, fetching }}>
      {children}
    </Postlist.Provider>
  );
};
export default PostListProvider;
