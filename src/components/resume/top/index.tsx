import { StyleSheet, Text, View } from '@react-pdf/renderer'

import { Bio } from '../../../types/resume'

type TopProps = {
  data: Bio
}

const topStyles = StyleSheet.create({
  top: {
    padding: 30,

    backgroundColor: '#283135',
    color: '#FFFFFF',
  },

  text: {
    textTransform: 'uppercase',
  },
})

const Top = ({
  data: { firstName, lastName, jobTitle, hobbies, ...items },
}: TopProps) => {
  return (
    <View style={topStyles.top}>
      <Text style={topStyles.text}>
        {firstName} {lastName}
      </Text>
      <Text>{jobTitle}</Text>
      <View>
        {Object.keys(items).map((itemKey) => (
          <View>
            <Text>
              {items[itemKey as keyof typeof items].emoji}{' '}
              {items[itemKey as keyof typeof items].name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Top
