import React from "react";
import { Input } from "antd";
import "../feed/Feed.css";
import { profileImage } from "../../../assets";

import {
  Pictures,
  FluentEmoji,
  HashTag,
  ChevronDownIcon,
  World,
} from "../../Icons/SvgIcons";

const { TextArea } = Input;
const onChange = e => {
  console.log('Change:', e.target.value);
};

const PostCard = (props) => {
  return (
   
        <div className="container">
          <div className="flex flex-row align-center ">
            <img
              src={profileImage}
              alt="profile"
              className="rounded-full mr-3"
              style={{ width: 40, height: 40 }}
            />
            <TextArea placeholder="Type something" bordered={false}  onChange={onChange} />
          </div>
          <div className="flex justify-between items-center mt-10 ">
            <div className="flex ">
              <div className="mr-5 icons">
                <FluentEmoji />
              </div>
              <div className="mr-5 icons">
                <HashTag />
              </div>
              <div className="mr-5 icons">
                <Pictures />
              </div>
              <div className="bg-lightgray w-32 h-10 rounded-xl flex items-center justify-center">
                <div>
                  <World />
                </div>

                <div className="px-2">Everyone</div>
                <div>
                  <ChevronDownIcon />
                </div>
              </div>
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white  h-10 px-15 rounded-lg w-24">
              Post
            </button>
          </div>
        </div>
  
  );
};

export default PostCard;
