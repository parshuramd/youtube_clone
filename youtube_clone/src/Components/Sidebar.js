import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return pattern
  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg w-48 pt-28">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <br />
      <hr />
      <br />

      <ul>
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Your Movies</li>
        <li>Watch Later</li>
      </ul>
      <br />
      <hr />
      {/* <br /> */}
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>My Channel 1</li>
        <li>My Channel 2</li>
        <li>My Channel 3</li>
      </ul>
      <br />
      <hr />
      {/* <br /> */}
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sport</li>
        <li>Learning</li>
        <li>Fashion & Beauty</li>
      </ul>
    </div>
  );
};

export default Sidebar;
