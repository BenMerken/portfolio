import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';

import { Bio } from '@/types/resume';

type PersonaliaProps = {
  data: Bio;
};

const personaliaStyles = StyleSheet.create({
  personalia: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    height: '100%'
  },
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

    fontWeight: 'bold',
    fontSize: '16pt',
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
    <View style={personaliaStyles.personalia}>
      <View>
        <Image
          style={personaliaStyles.avatar}
          src="male-avatar-placeholder.png"
        />
        <View style={{ ...personaliaStyles.title, ...personaliaStyles.top }}>
          <Text>
            {firstName} {lastName}
          </Text>
          <Text>{jobTitle}</Text>
        </View>
      </View>
      <View>
        <Text style={personaliaStyles.title}>Contact</Text>
        <View style={personaliaStyles.items}>
          {Object.keys(items).map((itemKey, i) => (
            <View key={i} style={personaliaStyles.item}>
              {items[itemKey as keyof typeof items].svg}
              <Text>{items[itemKey as keyof typeof items].name}</Text>
            </View>
          ))}
        </View>
        <Text style={personaliaStyles.title}>Hobby's</Text>
        <View style={personaliaStyles.items}>
          {hobbies.map((hobby, i) => (
            <View key={i} style={personaliaStyles.item}>
              {hobby.svg}
              <Text>{hobby.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Personalia;
