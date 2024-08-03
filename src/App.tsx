import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './App.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function App() {
  return (
    <div className="container">
      <div className="pdf-wrapper">
        <Document
          className="document"
          file="/react-github-action-github-pages-deploy/resume.pdf"
        >
          <Page pageNumber={1} renderTextLayer={false} width={1000} />
        </Document>
      </div>
    </div>
  );
}

export default App;
