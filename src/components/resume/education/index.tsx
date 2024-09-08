import { StyleSheet, Text, View } from '@react-pdf/renderer';

import sharedStyles from '@/components/resume/_shared/styles';
import { Education as ResumeEducation } from '@/types/resume';

export type EducationProps = {
  data: ResumeEducation;
};

const educationStyles = StyleSheet.create({
  degreeAndInstitution: {
    marginBottom: 4
  },
  additionalInfo: {
    fontFamily: 'Lato Italic'
  },
  section: {
    marginBottom: 8
  }
});

const Education = ({ data }: EducationProps) => {
  return (
    <View style={sharedStyles.section}>
      <Text style={sharedStyles.rightTitle}>Opleiding</Text>
      <Text style={sharedStyles.rightSubtitle}>Diploma's</Text>
      {data.credentials.map((edu, i) => (
        <View key={i} style={educationStyles.section}>
          <View style={educationStyles.degreeAndInstitution}>
            <Text style={sharedStyles.rightSubtitle2}>{edu.degreeName}</Text>
            <Text>
              {edu.institution.name} | {edu.period.start.month}{' '}
              {edu.period.start.year} - {edu.period.end?.month}{' '}
              {edu.period.end?.year}
            </Text>
          </View>
          <Text style={educationStyles.additionalInfo}>
            {edu.additionalInfo}
          </Text>
        </View>
      ))}
      <Text style={sharedStyles.rightSubtitle}>Certificaten</Text>
      {data.certifications.map((cred, i) => (
        <View key={i} style={educationStyles.section}>
          <Text style={sharedStyles.rightSubtitle2}>{cred.name}</Text>
          <Text>
            {cred.institution} | {cred.date}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Education;
