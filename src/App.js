import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import HomeContent from './component/Home/HomeContent';
import HomeProject from './component/Home/HomeProject';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>
        <HomeContent />
      </div>
      <div className='p-10'>
        <HomeProject />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
