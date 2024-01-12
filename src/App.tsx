import './App.css';
import { About } from './components/About';
import { Background } from './components/Background';
import { Divider } from './components/Divider';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProjectList } from './components/ProjectList';

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
        <ProjectList />
      </Background>
      <Background blobPosition='left' showBlob={false}>
        <About />
        <Footer />
      </Background>
    </div>
  );
}

export default App;
