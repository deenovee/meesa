import React from 'react';
import profilePic from '../assets/Profile.png'; // Import profile picture
import { FaInstagram, FaDiscord, FaGithub } from 'react-icons/fa'; // Import icons

function Profile() {
  return (
    <div className="profile">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className="profile-info">
        <p className="profile-name">Tom</p>
        <p className="profile-details">Male, 30 years old</p>
        <p className="profile-location">Santa Monica, CALIFORNIA</p>
      </div>
    </div>
  );
}

export default Profile;
