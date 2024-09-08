import { Text, View } from '@react-pdf/renderer';

import sharedStyles from '@/components/resume/_shared/styles';
import { Education as ResumeEducation } from '@/types/resume';

export type EducationProps = {
  data: ResumeEducation;
};

const Education = ({ data }: EducationProps) => {
  return (
    <View style={sharedStyles.section}>
      <Text>Education</Text>
      {data.map((edu, i) => (
        <View key={i}>
          <Text>{edu.institution.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Education;
