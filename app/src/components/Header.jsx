import React from "react";
import data from "../database/sample-data";

const Header = () => {
  const platforms = data.platforms;
  let total = 0;
  const followersList = platforms.map((platform) => Object.values(platform).map((info) => (total += info.followers)));

  return (
    <div>
      <h1>Social Media Dashboard</h1>
      <h2>Total Followers: {total}</h2>
    </div>
  );
};

export default Header;

const sumTotal = data.platforms.map((platform) =>
  Object.values(platform).reduce((total, item) => {
    return total + item.followers;
  }, 0)
);
