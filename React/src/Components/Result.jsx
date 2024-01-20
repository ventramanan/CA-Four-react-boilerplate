import React, { useContext, useEffect, useState } from "react";
import { Context } from "./context";
import "./Result.css";
import image from "./../assets/unnamed.png";
import { useNavigate } from 'react-router-dom';
// This result function basically used here to take care of  all the functionality of the this result page

function Result() {
  const context = useContext(Context);
  console.log(context)
  const [containerColor, setContainerColor] = useState("white");
  var percentage=(context/5)*100
// useEffect here is used to change the theme of the result page whenever the theme of the page is changed
  useEffect(() => {
    if (document.body.style.backgroundColor === "black") {
      setContainerColor("#B3B3B3");
    } else {
      setContainerColor("white");
    }
  }, [containerColor]);


  //This function is used to set the theme of the result page

  function theme() {
    const body=document.body;
    const theme=document.getElementById("th")
    const container=document.getElementsByClassName("container")[0];
    if(document.body.style.backgroundColor==="black"){
     document.body.style.backgroundColor="blue"
     container.style.backgroundColor="white"
     theme.innerText="light"
     

    }else{
     document.body.style.backgroundColor="blaCK"
     container.style.backgroundColor="#B3B3B3"
     theme.innerText="Dark"

    }
 }

  
//This play function is used to reload and again go to the main page where you can paly the game
const [resetQuiz, setResetQuiz] = useState(false);
const navigate = useNavigate();

// Function to reset the quiz
const play = () => {
  setResetQuiz(true);
};

// Reset the quiz when the state changes
if (resetQuiz) {
  navigate('/QuestionBox');
}
  //This return functionality helps to execute everything

  return (
    <>
      <div id='resultbox' className="container" style={{ backgroundColor: containerColor }}>
        <div className="main-part">
        <h1 className="finalresult">Final result</h1>
        {/* this part is for theme */}
        <div className="the">
          <button id="th" onClick={theme}>Theme</button>
        </div>
        {/* this is for image */}
        <div className="img">
          <img id="img" src={image} />
        </div>
        {/* And this for displaying the score */}
        <h2 id="per">You final percentage:{percentage}%</h2>
        <p className="score">Score: {context}</p>
        {/* this is the button part for the result page */}
        <div id="play">
          <button id="ply" onClick={play}>Play Again</button>
        </div>
        <h3>Smart Quizzing, Brilliant Results – Unleash Your Potential!!</h3>
        </div>
        {/* This div  is for the star falling animation in the final result page */}
        <div className="falling-balls-container">
        {Array.from({ length: 40 }, (_, index) => (
          <div
            key={index}
            className="falling-ball"
            style={{
              top: `${Math.random() * 100}vh`, 
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 2 + 1}s`, 
              animationDelay: `${Math.random()}s`, 
            }}
          >
             🌟
          </div>
        ))}
      </div>
      </div>
    </>
  );
}



export default Result;

