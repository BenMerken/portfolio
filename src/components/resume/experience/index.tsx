import { Text, View } from '@react-pdf/renderer';

import sharedStyles from '@/components/resume/_shared/styles';
import { Experience as ResumeExperience } from '@/types/resume';

type ExperienceProps = {
  data: ResumeExperience;
};

const Experience = ({ data }: ExperienceProps) => {
  return (
    <View style={sharedStyles.section}>
      {data.map((exp, i) => (
        <View key={i}>
          <Text>{exp.employer}</Text>
          <Text>
            {exp.period.start.month} {exp.period.start.year}
          </Text>
          -
          {exp.period.end && (
            <Text>
              {exp.period.end.month} {exp.period.end.year}
            </Text>
          )}
        </View>
      ))}
    </View>
  );
};

export default Experience;
