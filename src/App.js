import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title='Text Utils' aboutText="About" />
      <div className="container my-3">
        <TextForm heading="Enter the text to be analysed here :"/>
        {/*<About/>*/}
      </div>
    </>
  );

}

export default App;
