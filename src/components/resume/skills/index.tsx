import { Text, View } from '@react-pdf/renderer'

import { Skills as ResumeSkills } from '../../../types/resume'

type SkillsProps = {
  data: ResumeSkills
}

const Skills = ({ data }: SkillsProps) => {
  return (
    <View>
      {data.map((skillset, i) => (
        <View key={i}>
          <Text>{skillset.category}</Text>
          {skillset.skills.map((skill, i) => (
            <Text key={i}>{skill}</Text>
          ))}
        </View>
      ))}
    </View>
  )
}

export default Skills
