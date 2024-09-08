import {
  Document,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View
} from '@react-pdf/renderer';

import BottomBackgroundSVG from '@/components/resume/data/svg-components/backgrounds/bottom';
import Education from '@/components/resume/education';
import Experience from '@/components/resume/experience';
import Personalia from '@/components/resume/personalia';
import classes from '@/components/resume/resume.module.scss';
import Skills from '@/components/resume/skills';
import sharedStyles, { colors } from '@/components/resume/_shared/styles';
import { Resume as ResumeData } from '@/types/resume';
import TopRightBackgroundSVG from './data/svg-components/backgrounds/top-right';
import BackgroundTopSVG from './data/svg-components/backgrounds/top';

type ResumeProps = {
  data: ResumeData;
};

const documentStyles = StyleSheet.create({
  page: {
    position: 'relative',

    display: 'flex',
    flexDirection: 'row',

    maxWidth: '100vw',

    fontFamily: 'Lato',
    fontSize: '10pt',
    lineHeight: '1.2pt',
  },
  left: {
    flex: 6,

    minHeight: '100vh',
    padding: 24,

    backgroundColor: colors.backgroundPrimary,
    color: '#FFFFFF'
  },
  right: {
    flex: 10
  },
  top: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,

    padding: 24,
    paddingBottom: 16,

    fontFamily: 'Lato Bold',
    textTransform: 'uppercase',
    fontSize: '16pt',
    textAlign: 'center',
    color: colors.backgroundPrimary
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,

    fontSize: '24pt',
    letterSpacing: 8
  },
  firstName: {
    letterSpacing: 0
  },
  rightContent: {
    padding: 24,
    textAlign: 'justify'
  },
  backgroundTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  backgroundTopRight: {
    position: 'absolute',
    top: 512,
    right: 0,
    zIndex: 999
  },
  backgroundBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  }
});

const Resume = ({ data: { top, ...data } }: ResumeProps) => {
  return (
    <PDFViewer className={classes.pdfViewer}>
      <Document author="Ben Merken" title="CV Ben Merken">
        <Page size="A4" orientation="portrait" style={documentStyles.page}>
          <View style={documentStyles.backgroundTop}>
            <BackgroundTopSVG />
          </View>
          <View style={documentStyles.backgroundTopRight}>
            <TopRightBackgroundSVG />
          </View>
          <View style={documentStyles.left}>
            <Personalia data={data.personalia} />
          </View>
          <View style={documentStyles.right}>
            <View style={documentStyles.top}>
              <View style={documentStyles.name}>
                <Text style={documentStyles.firstName}>{top.firstName}</Text>
                <Text>{top.lastName}</Text>
              </View>
              <Text>{top.jobTitle}</Text>
            </View>
            <View style={documentStyles.rightContent}>
              <View style={sharedStyles.section}>
                <Text style={sharedStyles.rightTitle}>Profiel</Text>
                <Text>{data.profile}</Text>
              </View>
              <Education data={data.education} />
              <Experience data={data.experience} />
              <Skills data={data.skills} />
            </View>
          </View>
          <View style={documentStyles.backgroundBottom}>
            <BottomBackgroundSVG />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Resume;
