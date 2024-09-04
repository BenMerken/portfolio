import { Document, Page, PDFViewer } from "@react-pdf/renderer";

import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import classes from "./resume.module.scss";

const Resume = () => {
  return (
    <PDFViewer className={classes.pdfViewer}>
      <Document>
        <Page size="A4">
          <Education />
          <Experience />
          <Skills />
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Resume;
