import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./profile.scss";
import Feed from "./../../components/feed/Feed";
import Rightbar from "./../../components/rightbar/Rightbar";
import profile from '../../assets/profileCover/profilecover.jpg';
import defaults from '../../assets/profileCover/DefaultProfile.jpg';
import user from '../../assets/person/user.jpg'

const Profile = () => {
  return (
    <div className="profile">
      <Navbar />
      <div className="profileWrapper">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={profile}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={user}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Amber Logan</h4>
              <span className="profileInfoDesc">Hi Friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
