import {
  Document,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View
} from '@react-pdf/renderer';

import Education from '@/components/resume/education';
import Experience from '@/components/resume/experience';
import Personalia from '@/components/resume/personalia';
import classes from '@/components/resume/resume.module.scss';
import Skills from '@/components/resume/skills';
import sharedStyles, { colors } from '@/components/resume/_shared/styles';
import { Resume as ResumeData } from '@/types/resume';

type ResumeProps = {
  data: ResumeData;
};

const documentStyles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',

    maxWidth: '100vw',

    fontFamily: 'Helvetica',
    fontSize: '11pt'
  },
  left: {
    flex: 6,

    minHeight: '100vh',
    padding: 24,

    backgroundColor: colors.backgroundPrimary,
    color: '#FFFFFF'
  },
  right: {
    flex: 10,

    padding: 24
  },
  top: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,

    fontWeight: 'bold',
    fontSize: '16pt',
    textAlign: 'center'
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,

    textTransform: 'uppercase',
    fontSize: '24pt',
    letterSpacing: 8
  },
  firstName: {
    fontWeight: 'bold',
    letterSpacing: 0
  },
  jobTitle: {}
});

const Resume = ({ data: { top, ...data } }: ResumeProps) => {
  return (
    <PDFViewer className={classes.pdfViewer}>
      <Document author="Ben Merken" title="CV Ben Merken">
        <Page size="A4" orientation="portrait" style={documentStyles.page}>
          <View style={documentStyles.left}>
            <Personalia data={data.personalia} />
          </View>
          <View style={documentStyles.right}>
            <View style={documentStyles.top}>
              <View style={documentStyles.name}>
                <Text style={documentStyles.firstName}>{top.firstName}</Text>
                <Text>{top.lastName}</Text>
              </View>
              <Text style={documentStyles.jobTitle}>{top.jobTitle}</Text>
            </View>
            <View style={sharedStyles.section}>
              <Text>Samenvatting</Text>
              <Text>{data.summary}</Text>
            </View>
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
