import {
  Document,
  Page,
  PDFViewer,
  StyleSheet,
  View
} from '@react-pdf/renderer';

import Education from '@/components/resume/education';
import Experience from '@/components/resume/experience';
import Personalia from '@/components/resume/personalia';
import classes from '@/components/resume/resume.module.scss';
import Skills from '@/components/resume/skills';
import { Resume as ResumeData } from '@/types/resume';

type ResumeProps = {
  data: ResumeData;
};

const documentStyles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',

    fontFamily: 'Helvetica',
    fontSize: '11pt'
  },
  left: {
    flex: 1,
    minHeight: '100vh',

    padding: 30,

    backgroundColor: '#283135',
    color: '#FFFFFF'
  },
  right: {
    flex: 2,

    padding: 30
  }
});

const Resume = ({ data }: ResumeProps) => {
  return (
    <PDFViewer className={classes.pdfViewer}>
      <Document author="Ben Merken" title="CV Ben Merken">
        <Page size="A4" orientation="portrait" style={documentStyles.page}>
          <View style={documentStyles.left}>
            <Personalia data={data.bio} />
          </View>
          <View style={documentStyles.right}>
            <Education data={data.education} />
            <Experience data={data.experience} />
            <Skills data={data.skills} />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Resume;
