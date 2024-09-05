import { Document, Page, PDFViewer, StyleSheet } from '@react-pdf/renderer'

import Education from './education'
import Experience from './experience'
import classes from './resume.module.scss'
import Skills from './skills'
import Top from './top'
import { Resume as ResumeData } from '../../types/resume'

type ResumeProps = {
  data: ResumeData
}

const documentStyles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
  },
})

const Resume = ({ data }: ResumeProps) => {
  return (
    <PDFViewer className={classes.pdfViewer}>
      <Document author="Ben Merken" title="CV Ben Merken">
        <Page size="A4" orientation="portrait" style={documentStyles.page}>
          <Top data={data.bio} />
          <Education data={data.education} />
          <Experience data={data.experience} />
          <Skills data={data.skills} />
        </Page>
      </Document>
    </PDFViewer>
  )
}

export default Resume
