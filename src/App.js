import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title = "Text Utils" aboutText = "About"/>
      <div className="container my-3">
        <TextForm heading="Enter the text to be analysed below :"/>
      </div>
    </>
  );

}

export default App;
