import { ReactElement } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export const Resume = (): ReactElement => {
  return (
    <Document
      className="document"
      file="/react-github-action-github-pages-deploy/resume.pdf"
    >
      <Page
        className="page"
        pageNumber={1}
        renderTextLayer={false}
        width={1000}
      />
    </Document>
  );
};
