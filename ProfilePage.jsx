import React from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>
      <p>Favorite Book: {userData.favoriteBook}</p>
      <p>Favorite Genre: {userData.favoriteGenre}</p>
    </div>
  );
};

export default ProfilePage;
