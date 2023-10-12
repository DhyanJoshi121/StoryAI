import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";

interface Props {
  btnName: string;
  disable: boolean;
}

const Header = (props: Props) => {
  return (
    <header>
      <p className="logo">
        <span className="logoStoryText">Story</span>
        <span className="logoAiText">ai</span>
      </p>
      <Link
        to="/storyai"
        className={`loginBtn`}
        onClick={(e) => (props.disable ? e.preventDefault() : null)}
      >
        {props.btnName}
      </Link>
    </header>
  );
};

export default Header;
