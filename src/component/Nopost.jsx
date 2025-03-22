const Nopost = () => {
  const mycss = {
    color: "rgb(0, 0, 0)",
    position: "absolute",
    bottom: "10px",
    borderRadius: "21px",
  };

  return (
    <>
      <div className="card">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">No Post </h5>
          <p className="card-text">
            If you want create new post go to create post by bellow button.
          </p>
          <a style={mycss} href="#" className="btn btn-outline-primary">
            Get Post From Api
          </a>
        </div>
      </div>
    </>
  );
};
export default Nopost;
