import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // or use HashRouter
import Quiz from './Components/Quiz';



function App(){
  ReactDOM.render(
    <Router>
      <Quiz/>
    </Router>,
    document.getElementById('root')
  );

}
export default App();




