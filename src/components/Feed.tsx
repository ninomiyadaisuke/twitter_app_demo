import React from "react";
import { auth } from "../firebase";

const Feed = () => {
  return <button onClick={() => auth.signOut()}>Feed</button>;
};

export default Feed;
