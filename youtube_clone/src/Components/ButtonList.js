import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "Comedy",
    "Drama",
    "Scene",
    "Tourism",
    "Mix",
    "History",
    "Live",
    "Computer Science",
    "JavaScript",
    "React",
  ];
  return (
    <div className="flex flex-row pt-24 justify-between">
      {/* {list.map((val) => (
        <Button name={val} />
      ))} */}
      {/* <Link to={"/buttonlist"}>
        {list.map((val) => (
          <Button name={val} />
        ))}
      </Link> */}
      <Link to={"/buttonlist"}>
        <Button name="All" />
      </Link>
      <Link to={"/buttonlist"}>
        <Button name="Music" />
      </Link>
      <Link to={"/buttonlist"}>
        <Button name="Comedy" />
      </Link>
      <Link to={"/buttonlist"}>
        <Button name="Drama" />
      </Link>
      <Link to={"/buttonlist"}>
        <Button name="Scene" />
      </Link>
      <Link to={"/buttonlist"}>
        <Button name="Tourism" />
      </Link>
      <Link to={"/buttonlist"}>
        <Button name="Mix" />
      </Link>
      <Link to={"/buttonlist"}>
        <Button name="History" />
      </Link>
      <Link to={"/buttonlist"}>
        <Button name="Live" />
      </Link>
      <Link to={"/buttonlist"}>
        <Button name="Computer Science" />
      </Link>
      <Link to={"/buttonlist"}>
        <Button name="JavaScript" />
      </Link>
      <Link to={"/buttonlist"}>
        <Button name="React" />
      </Link>
    </div>
  );
};

export default ButtonList;
