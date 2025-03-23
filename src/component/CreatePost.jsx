import { useContext } from "react";
import { Postlist } from "../Store/store";
import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { add } = useContext(Postlist);

  // const adds = (event) => {
  //   event.preventDefault();

  //   const tags = posttag.current.value
  //     .split(",") // Convert string to an array
  //     .map((tag) => tag.trim()) // Remove extra spaces
  //     .filter((tag) => tag.length > 0); // Remove empty tags
  // };

  return (
    <Form method="POST" action="">
      <div className="contain">
        <div className="col-md-6">
          <label htmlFor="userId" className="form-label">
            User ID
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            name="userId"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="title" name="title" />
        </div>
        <div className="col-12">
          <label htmlFor="body" className="form-label">
            Body
          </label>
          <input type="text" className="form-control" id="body" name="body" />
        </div>
        <div className="col-12">
          <label htmlFor="tags" className="form-label">
            Tags (comma-separated)
          </label>
          <input type="text" className="form-control" id="tags" name="tags" />
        </div>
        <div className="col-md-1">
          <label htmlFor="views" className="form-label">
            Views
          </label>
          <input type="text" className="form-control" id="views" name="views" />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Create Post
          </button>
        </div>
      </div>
    </Form>
  );
};

export default CreatePost;

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((resobj) => {
      console.log(resobj);
    });
  return redirect("/");
}
