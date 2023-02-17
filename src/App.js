import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./components/Pagination";
import Posts from "./components/Posts";

import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [postsPerPage] = useState(10);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log("res", res);
      setPosts(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    //get current posts;
    const indexOfLastPost = currentPage * postsPerPage; //50
    const indexOfFIrstPost = indexOfLastPost - postsPerPage; //40
    const currentPostsArr = posts.slice(indexOfFIrstPost, indexOfLastPost); //40-49
    setCurrentPosts(currentPostsArr);
  }, [currentPage, postsPerPage, posts]); //states,props

  //change page
  const updateActivePage = (number) => setCurrentPage(number); //pass a function as parameter
  return (
    <div className="container">
      <h1 className="title">My Blog </h1>
      <Posts currentPosts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        currentPage={currentPage}
        updateActivePage={updateActivePage}
        // setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
