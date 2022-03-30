import React from "react";
import "./Feed.css";
import PostCard from "../Cards/PostCard"


const Feed = (props) => {
  return (
    <div className="mt-20 h-screen">
      <div className="flex flex-column align-center  items-center">
       <PostCard />
      </div>
    </div>
  );
};

export default Feed;
