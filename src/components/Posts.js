import React from "react";

const Posts = ({ currentPosts, loading }) => {
  if (loading) {
    //loading is true, still fetching data
    return <h2>Loading...</h2>;
  }
  //loading is false, data is ready, render return
  return (
    <ul className="list-group">
      {currentPosts.length > 0 &&
        currentPosts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      {/* <li className="list-group-item">post one</li>
      <li className="list-group-item">post one</li> */}
    </ul>
  );
};

export default Posts;
