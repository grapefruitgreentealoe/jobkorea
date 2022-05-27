import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../style/UnderNavbar.module.css";
export default function UnderNavbar({ path }) {
  return (
    <div style={{ textAlign: "center", marginTop: "1em" }}>
      <div style={{ display: "inline-block", paddingRight: "1em" }}>
        <Link to={`/${path}`}>{path}</Link>
      </div>
      <Link to="/">home</Link>
    </div>
  );
}
