import "./App.css";
import { useState } from "react";
import MainHeader from "./components/post/MainHeader.jsx";
import PostsList from "./components/post/PostsList.jsx";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
    </>
  );
}

export default App;
