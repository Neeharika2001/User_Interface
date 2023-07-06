import { useState, useEffect } from "react";
import { fetchData } from "../../main.js";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    postcontent: ""
  });
  const [userPosts, setUserPosts] = useState([]);
  
  const { title, postcontent } = post;

  const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    let user = localStorage.getItem("user");
    let parseUser = JSON.parse(user);
    let userId = parseUser.username;
    fetchData("/post/create", { title, postcontent, userId }, "POST")
      .then((data) => {
        if (data) {
          console.log(data);
          navigate("/posts");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    let user = localStorage.getItem("user");
    let parseUser = JSON.parse(user);
    let userId = parseUser?.username;

    fetchData(`/posts/user/${userId}`, {}, "GET")
      .then((data) => {
        setUserPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let user = localStorage.getItem("user");
  let parseUser = JSON.parse(user);
  let userName = parseUser?.username;

  return (
    <div>
      <h2>Welcome, {userName}</h2>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            onChange={onChange}
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="post">Post Content</label>
          <textarea
            className="form-control"
            name="postcontent"
            id="content"
            onChange={onChange}
            rows="2"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      </form>

      <h3>Your Posts:</h3>
      {userPosts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul>
          {userPosts.map((userPost) => (
            <li key={userPost.id}>
              <h4>{userPost.title}</h4>
              <p>{userPost.postcontent}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddPost;