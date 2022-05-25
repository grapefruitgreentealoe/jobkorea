import React from "react";
import { Link } from "react-router-dom";
export default function App() {
  return (
    <div>
      <nav>
        <Link to="/join">Join</Link>
        <br />
        <br />
        <Link to="/review">족보</Link>
      </nav>
    </div>
  );
}
