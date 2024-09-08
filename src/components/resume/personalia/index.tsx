import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';

import sharedStyles from '@/components/resume/_shared/styles';
import { Personalia as PersonaliaData } from '@/types/resume';

type PersonaliaProps = {
  data: PersonaliaData;
};

const personaliaStyles = StyleSheet.create({
  personalia: {
    display: 'flex',
    flexDirection: 'column',

    height: '100%'
  },
  avatar: {
    marginBottom: 16
  },
  dateOfBirth: {
    textAlign: 'left',
    textTransform: 'lowercase',
    fontSize: '14pt'
  },
  items: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,

    marginBottom: 16
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
  },
  language: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8
  },
  languageProficiency: {
    textAlign: 'right'
  },
  languageAndFlag: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,

    textTransform: 'uppercase'
  }
});

const Personalia = ({
  data: { workExperience, dateOfBirth, residence, hobbies, languages, ...items }
}: PersonaliaProps) => {
  return (
    <View style={personaliaStyles.personalia}>
      <Image
        style={personaliaStyles.avatar}
        src="male-avatar-placeholder.png"
      />
      <View>
        <Text style={sharedStyles.leftTitle}>Personalia</Text>
        <View style={personaliaStyles.items}>
          <View style={personaliaStyles.item}>
            {dateOfBirth.svg}
            <Text>
              {dateOfBirth.day} {dateOfBirth.month} {dateOfBirth.year}
            </Text>
          </View>
          <View style={personaliaStyles.item}>
            {residence.svg}
            <View>
              <Text>{residence.address}</Text>
              <Text>
                {residence.zipCode} {residence.city}
              </Text>
            </View>
          </View>
          <View style={personaliaStyles.item}>
            {workExperience.svg}
            <Text>{workExperience.text}</Text>
          </View>
        </View>
        <Text style={sharedStyles.leftTitle}>Contact</Text>
        <View style={personaliaStyles.items}>
          {Object.keys(items).map((itemKey, i) => (
            <View key={i} style={personaliaStyles.item}>
              {items[itemKey as keyof typeof items].svg}
              <Text>{items[itemKey as keyof typeof items].name}</Text>
            </View>
          ))}
        </View>
        <Text style={sharedStyles.leftTitle}>Talen</Text>
        <View style={personaliaStyles.items}>
          {languages.map((language, i) => (
            <View
              key={i}
              style={{ ...personaliaStyles.item, ...personaliaStyles.language }}
            >
              <View style={personaliaStyles.languageAndFlag}>
                {language.svg}
                <Text>{language.name}:</Text>
              </View>
              <Text style={personaliaStyles.languageProficiency}>
                {language.proficiency}
              </Text>
            </View>
          ))}
        </View>
        <Text style={sharedStyles.leftTitle}>Hobby's</Text>
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
