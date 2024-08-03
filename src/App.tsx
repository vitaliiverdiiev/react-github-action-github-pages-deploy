import { Resume } from './components/PdfViewer';
import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h2 className="title">Resume</h2>
        </div>
      </header>
      <main className="main">
        <Resume />
      </main>
    </>
  );
}

export default App;
