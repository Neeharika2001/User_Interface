import { useState } from "react";
import {fetchData} from "../../main.js";

const Profile = () => {
  
    const [post, setPost] = useState({
        title: "", 
        content: "",
      });
    
      const { title, content } = post;
    
      const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value })

      const onSubmit = (e) => {
        e.preventDefault();
        let user = localStorage.getItem("user");
        let parseUser = JSON.parse(user);
        let userId = parseUser.username;
        fetchData("/post/createpost",
          {
            title,
            content,
            userId
          },
          "POST")
          .then((data) => {
            if (data) {
              console.log(data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };
      let user = localStorage.getItem("user");
      let parseUser = JSON.parse(user);
      let userName = parseUser?.username;

    return (
        <form>
            <div class="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" className="form-control" id="title" onChange={onChange} placeholder="Enter title"/>
            </div>
            <div class="form-group">
                <label htmlFor="post">Post Content</label>
                <textarea className="form-control" name="postcontent" id="content" onChange={onChange} rows="2"></textarea>
            </div>
            <p>Welcome, {userName}</p>
            <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
        </form>
    );
};

export default Profile;