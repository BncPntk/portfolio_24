import './App.css';
import { About } from './components/About';
import { Background } from './components/Background';
import { Divider } from './components/Divider';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Background blobPosition='right' showBlob={true}>
        <Hero />
      </Background>
      <Divider />
      <Background showBlob={false}>
        <About />
      </Background>
      <Background blobPosition='left' showBlob={true}>
        <Hero />
      </Background>
    </div>
  );
}

export default App;
