import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

function App() {
  const[mode , setMode] = useState('light');
  const[myStyle , setMyStyle] = useState({color : 'black'});
  const[myStyleA, setmyStyleA] = useState({color:'black' , backgroundColor:'white'});
  const[alert,setAlert] = useState(null);

  const showAlert = (message , type) => {
    setAlert({
      msg: message ,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    } , 500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#383838';
      setMyStyle({color : 'white'});
      setmyStyleA({color:'white', backgroundColor:'#383838'});
      showAlert("Dark mode has been enabled" , "success");
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setMyStyle({color : 'black'});
      setmyStyleA({color:'black' , backgroundColor:'white'});
      showAlert("Dark mode has been disabled" , "success");
    }
  }
  return (
    <>
        <Router>
          <Navbar title='Text Utils' aboutText="About" mode = {mode} toggleMode={toggleMode}/>
          <Alert alert = {alert}/>
          <Routes>
            <Route exact path="/" element = {<div className="container my-3">
            <TextForm showAlert ={showAlert} heading="Enter the text to be analysed here :" myStyle={myStyle}/>
            </div>}></Route>

            <Route exact path = "/about" element = {<div className="container my-3">
            {<About myStyleA = {myStyleA} />}
            </div>}></Route>
          </Routes>
        </Router>
    </>
  );

}

export default App;
