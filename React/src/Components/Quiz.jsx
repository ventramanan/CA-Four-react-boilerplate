import React,{useState} from 'react'
import "./Quiz.css"
import Result from './Result'
import { Context } from './context'
import questions from '../questions'
import image from "./../assets/unnamed.png";

//This Quiz function serves as the main function for this Quiz app

function Quiz() {
  //here I am setting the state for manipulating the questions.js
    const [count,setCount] = useState(0)
  //and this one is for result 
    const [result,setResult] = useState(0)
    

//this functions handles highlighting and removing
    function highlight(){
        const elem=document.getElementById("question")
        elem.style.color="red";
        }

    function removing(){
      const elem=document.getElementById("question")
       elem.style.color="black";
        
    }
//this functions related to handlers handle the options like moving to next question after clicking the each options
    function answerHandlerA(){
      if (questions[count].options[0].isCorrect==true){
        setResult(result+1)
        setCount(count+1)
      } else {
        setCount(count+1)
      }
    }
    function answerHandlerB(){
      if (questions[count].options[1].isCorrect==true){
        setResult(result+1)
        setCount(count+1)
      } else{
        setCount(count+1)
      }
    }
    function answerHandlerC(){
      if (questions[count].options[2].isCorrect==true){
        setResult(result+1)
        setCount(count+1)
      } else {
        setCount(count+1)
      }
    }
    function answerHandlerD(){
      if (questions[count].options[3].isCorrect==true){
        setResult(result+1)
        setCount(count+1)
      } else{
        setCount(count+1)
      }
    }
    //this function helps to change the theme of the page from light to drak or dark to light mode
    function theme() {
     const body=document.body;
     const theme=document.getElementById("the")
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
  // this the return keyword whatever your writting inside it will execute in the page
  return (
    <div>
      {count >4 ? (
        // this is where we are calling the result page
        <Context.Provider value={result}>
          <Result />
        </Context.Provider>
      ) : (
        <div className={`container ${count > 4 ? 'block-container' : ''}`}>
          <img id="image" src={image} />
          <p id='title'>Questions</p>
          {/* this for theme button */}
          <div className='main'  id='theme'>
            <button id='the' onClick={theme}>theme</button>
          </div>
          <p id='number'>{count + 1} of 5 </p>
          {/* this is for displaying the question mainly the heading part */}
          <p id='question'>{questions[count].text}</p>
          <div id='optionbar'>
            {/* This section handles the option part in the page */}
            {/* This question[count].option is the way how I manipulate the question.js and get the information from them */}
            <div className='option1'>
              <button className='options' onClick={answerHandlerA}>{questions[count].options[0].text}</button>
              <button className='options' onClick={answerHandlerB}>{questions[count].options[1].text}</button>
            </div>
            <div className='option1'>
                <button  className='options' onClick={answerHandlerC}>{questions[count].options[2].text}</button>
                <button className='options' onClick={answerHandlerD}>{questions[count].options[3].text}</button>
            </div>
          </div>
          {/* this part explains the buttons part of the page */}
          <div className='buttons'>
            <button id='button1' onClick={highlight}>highlight</button>
            <button id='button2' onClick={removing}>remove</button>
          </div>
        </div>
      )}
    </div>
  );
      }
  
export default Quiz;