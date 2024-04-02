import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserId } from "../redux/result_reducer";
import gay_gif from "../video/tenor.gif";
import "../styles/Main.css";

export default function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(true); // Moved the state declaration here

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }

  return (
    <>
      {isVisible && <img src={gay_gif} alt="didn't render" />}
      <div className="container">
        <h1 className="title text-light">Gay Test - MCQ</h1>

        <ol>
          <li>You will be asked 10 questions one after another.</li>
          <li>10 points means you are ultra sigma.</li>
          <li>
            Each question has three options. You can choose only one option.
          </li>
          <li>You can review and change answers before the quiz finishes.</li>
          <li>At the end of the quiz you will know if you are gay or sigma.</li>
        </ol>

        <form id="form">
          <input
            ref={inputRef}
            className="userid"
            type="text"
            placeholder="Username*"
          />
        </form>

        <div className="start">
          <Link className="btn" to={"quiz"} onClick={startQuiz}>
            Start Quiz
          </Link>
        </div>
      </div>
    </>
  );
}
