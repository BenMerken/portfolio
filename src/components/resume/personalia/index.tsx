import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';

import { Bio } from '@/types/resume';

type PersonaliaProps = {
  data: Bio;
};

const personaliaStyles = StyleSheet.create({
  title: {
    fontSize: '14pt',
    textTransform: 'uppercase'
  },
  avatar: {
    marginBottom: 16
  },
  top: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,

    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },
  items: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  contactImage: {
    width: 40,
    height: 40
  }
});

const Personalia = ({
  data: { firstName, lastName, jobTitle, hobbies, ...items }
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
      <View style={personaliaStyles.items}>
        {Object.keys(items).map((itemKey, i) => (
          <View key={i} style={personaliaStyles.item}>
            {items[itemKey as keyof typeof items].svg}
            <Text>{items[itemKey as keyof typeof items].name}</Text>
          </View>
        ))}
      </View>
      <Text>Hobby's</Text>
      <View style={personaliaStyles.items}>
        {hobbies.map((hobby, i) => (
          <View key={i} style={personaliaStyles.item}>
            {hobby.svg}
            <Text>{hobby.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Personalia;
