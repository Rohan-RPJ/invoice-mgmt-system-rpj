import dynamic from "next/dynamic";
import { Document, Page } from "react-pdf";
// import * as PDFJS from "pdfjs-dist/build/pdf";
// import { PDFReader } from "react-read-pdf";
// PDFJS.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.min.js`;

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

const DynamicPDFViewer = dynamic(() => import("./PDFViewer"), {
  ssr: false,
});

const ViewPdf = ({ doc: MyPdfDocument, pdfData, isMobileNav }) => {
  return isMobileNav ? (
    // <DynamicBlobProvider document={<MyPdfDocument data={pdfData} />}>
    //   {({ blob, url, loading }) => {
    //     return loading ? "Loading Pdf..." : <DynamicPDFViewer url={url} />;
    //   }}
    // </DynamicBlobProvider>
    <DynamicReactPdfViewer
      width={"50%"}
      height="100%"
      className={`absolute`}
      showToolbar={false}
    >
      <MyPdfDocument data={pdfData} />
    </DynamicReactPdfViewer>
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
