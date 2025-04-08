import {
  Document,
  Page,
  PDFViewer,
  PDFDownloadLink,
  StyleSheet,
  Text,
  View
} from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

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
    fontSize: '10pt'
  },
  left: {
    flex: 5,

    minHeight: '100vh',
    padding: 20,

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

    padding: 20,
    paddingBottom: 0,

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
    letterSpacing: 0,
    color: colors.title
  },
  rightContent: {
    padding: 20,
    textAlign: 'justify'
  },
  backgroundTop: {
    position: 'absolute',
    top: -16,
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

const PDFDocument = ({ data: { top, ...data } }: ResumeProps) => {
  const { t } = useTranslation('resume');

  return (
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
            <Text>{t('top.jobTitle')}</Text>
          </View>
          <View style={documentStyles.rightContent}>
            <View style={sharedStyles.section}>
              <Text style={sharedStyles.rightTitle}>{t('profile.title')}</Text>
              <Text>{t('profile.text')}</Text>
            </View>
            <Experience data={data.experience} />
            <Education data={data.education} />
            <Skills data={data.skills} />
          </View>
        </View>
        <View style={documentStyles.backgroundBottom}>
          <BottomBackgroundSVG />
        </View>
      </Page>
    </Document>
  );
};

const Resume = (props: ResumeProps) => {
  return navigator.userAgent.toLowerCase().includes('mobile') ? (
    <p className={classes.pdfNotAvailableText}>
      The resume is not available in preview mode on mobile devices. Download it{' '}
      <PDFDownloadLink
        document={<PDFDocument {...props} />}
        fileName="ben-merken-resume.pdf"
      >
        here
      </PDFDownloadLink>{' '}
      to view in a PDF reader.
    </p>
  ) : (
    <PDFViewer className={classes.pdfViewer}>
      <PDFDocument {...props} />
    </PDFViewer>
  );
};

export default Resume;
