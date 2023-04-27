import dynamic from "next/dynamic";
import "@react-pdf-viewer/core/lib/styles/index.css"; // Import styles for react-pdf-viewer/core

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

// Below Commented also working - controls can be shown
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
  return (
    <DynamicBlobProvider document={<MyPdfDocument data={pdfData} />}>
      {({ blob, url, loading }) => {
        return loading ? (
          ""
        ) : (
          <DynamicPDFWorker workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js">
            <DynamicPDFViewer fileUrl={url} />
          </DynamicPDFWorker>
        );
      }}
    </DynamicBlobProvider>
  );
};

export default ViewPdf;
