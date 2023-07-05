import React from "react";
import Storycard from "../storycard/Storycard";
import { Users } from "../../data";
import "./stories.scss";
import user from '../../assets/person/user.jpg';
import upload from '../../assets/person/upload.png';

const Stories = () => {
  return (
    <div className="stories">
      <div className="storyCard">
        <div className="overlay"></div>
        <img src={user} alt="" className="storyProfile" />
        <img src={user} alt="" className="storybackground" />
        <img src={upload} alt="" className="storyadd" />
        <span className="text">Amber</span>
      </div>

      {Users.map((u) => (
        <Storycard key={u.id} user={u} />
      ))}
    </div>
  );
};

export default Stories;
