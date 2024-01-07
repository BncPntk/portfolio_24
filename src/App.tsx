import './App.css';
import { Background } from './components/Background';
import { Hero } from './components/Hero';

function App() {
  return (
    <div>
      <Background blobPosition='right' showBlob={true}>
        <Hero />
      </Background>
      <Background showBlob={false}>
        <Hero />
      </Background>
      <Background blobPosition='left' showBlob={true}>
        <Hero />
      </Background>
    </div>
  );
}

export default App;
