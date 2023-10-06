import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const[mode , setMode] = useState('light');
  const[myStyle , setMyStyle] = useState({color : 'black'});

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#383838';
      setMyStyle({color : 'white'});
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setMyStyle({color : 'black'});
    }
  }
  return (
    <>
      <Navbar title='Text Utils' aboutText="About" mode = {mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to be analysed here :" myStyle={myStyle}/>
        {/*<About/>*/}
      </div>
    </>
  );

}

export default App;
