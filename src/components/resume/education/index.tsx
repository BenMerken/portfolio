import { Text, View } from '@react-pdf/renderer'

import { Education as ResumeEducation } from '../../../types/resume'

export type EducationProps = {
  data: ResumeEducation
}

const Education = ({ data }: EducationProps) => {
  return (
    <View>
      <Text>Education</Text>
      {data.map((edu, i) => (
        <View key={i}>
          <Text>{edu.institution.name}</Text>
        </View>
      ))}
    </View>
  )
}

export default Education
