import './App.css';
import { About } from './components/About';
import { Background } from './components/Background';
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
      <Background showBlob={false}>
        <About />
      </Background>
      <Background blobPosition='left' showBlob={true}>
        <ProjectList />
        <Footer />
      </Background>
    </div>
  );
}

export default App;
