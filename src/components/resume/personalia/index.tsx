import { Image, StyleSheet, Text, View } from '@react-pdf/renderer'

import { Bio } from '../../../types/resume'

type PersonaliaProps = {
  data: Bio
}

const personaliaStyles = StyleSheet.create({
  title: {
    fontSize: '14pt',
    textTransform: 'uppercase',
  },
  avatar: {
    marginBottom: 16,
  },
  top: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,

    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  contactItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  contactItem: {
    display: 'flex',
    gap: 8,
  },
  contactImage: {
    width: 40,
    height: 40,
  },
})

const Personalia = ({
  data: { firstName, lastName, jobTitle, hobbies, ...items },
}: PersonaliaProps) => {
  return (
    <View>
      <Image
        style={personaliaStyles.avatar}
        src="male-avatar-placeholder.png"
      />
      <View style={personaliaStyles.top}>
        <Text>
          {firstName} {lastName}
        </Text>
        <Text>{jobTitle}</Text>
      </View>
      <Text style={personaliaStyles.title}>Contact</Text>
      <View style={personaliaStyles.contactItems}>
        {Object.keys(items).map((itemKey) => (
          <View style={personaliaStyles.contactItem}>
            <Image
              style={personaliaStyles.contactImage}
              src={items[itemKey as keyof typeof items].imgSrc}
            />
            <Text>{items[itemKey as keyof typeof items].name}</Text>
          </View>
        ))}
      </View>
      <View>
        {hobbies.map((hobby, i) => (
          <Text key={i}>{hobby.name}</Text>
        ))}
      </View>
    </View>
  )
}

export default Personalia
