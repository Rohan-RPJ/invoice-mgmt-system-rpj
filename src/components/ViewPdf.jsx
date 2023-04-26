import dynamic from "next/dynamic";
import Image from "next/image";
import { Document, Page } from "react-pdf";
// import * as PDFJS from "pdfjs-dist/build/pdf";
// import { PDFReader } from "react-read-pdf";
// PDFJS.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.min.js`;
// import { Viewer, Worker } from "@react-pdf-viewer/core";
// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";

const DynamicReactPdfViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
  }
);

const DynamicBlobProvider = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.BlobProvider),
  {
    ssr: false,
  }
);

const DynamicPDFWorker = dynamic(
  () => import("@react-pdf-viewer/core").then((mod) => mod.Worker),
  {
    ssr: false,
  }
);

const DynamicPDFViewer = dynamic(
  () => import("@react-pdf-viewer/core").then((mod) => mod.Viewer),
  {
    ssr: false,
  }
);

{
  /* <DynamicReactPdfViewer
      width={"50%"}
      height="100%"
      className={`absolute`}
      showToolbar={false}
    >
      <MyPdfDocument data={pdfData} />
    </DynamicReactPdfViewer> */
}
const ViewPdf = ({ doc: MyPdfDocument, pdfData, isMobileNav }) => {
  return isMobileNav ? (
    <DynamicBlobProvider document={<MyPdfDocument data={pdfData} />}>
      {({ blob, url, loading }) => {
        return loading ? (
          "Loading Pdf..."
        ) : (
          <DynamicPDFWorker workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js">
            <DynamicPDFViewer fileUrl={url} />;
          </DynamicPDFWorker>
        );
      }}
    </DynamicBlobProvider>
  ) : (
    <DynamicReactPdfViewer
      width={"50%"}
      height="100%"
      className={`absolute`}
      showToolbar={false}
    >
      <MyPdfDocument data={pdfData} />
    </DynamicReactPdfViewer>
  );
};

const ThisDoc = ({ url, blob }) => {
  return (
    <Document
      file={url}
      onLoadSuccess={(pdf) => console.log(pdf, blob)}
      renderMode="canvas"
    >
      <Page pageNumber={1} width={window.innerWidth} />
    </Document>
  );
};

export default ViewPdf;
