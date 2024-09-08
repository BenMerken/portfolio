import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';

import sharedStyles from '@/components/resume/_shared/styles';
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
  data: {
    firstName,
    lastName,
    workExperience,
    dateOfBirth,
    residence,
    jobTitle,
    hobbies,
    languages,
    ...items
  }
}: PersonaliaProps) => {
  return (
    <View style={personaliaStyles.personalia}>
      <View>
        <Image
          style={personaliaStyles.avatar}
          src="male-avatar-placeholder.png"
        />
        <View style={personaliaStyles.top}>
          <Text style={{ ...sharedStyles.title, margin: 0 }}>
            {firstName} {lastName}
          </Text>
          <Text style={{ ...sharedStyles.title, letterSpacing: 2 }}>
            {jobTitle}
          </Text>
        </View>
      </View>
      <View>
        <Text style={sharedStyles.title}>Personalia</Text>
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
        <Text style={sharedStyles.title}>Contact</Text>
        <View style={personaliaStyles.items}>
          {Object.keys(items).map((itemKey, i) => (
            <View key={i} style={personaliaStyles.item}>
              {items[itemKey as keyof typeof items].svg}
              <Text>{items[itemKey as keyof typeof items].name}</Text>
            </View>
          ))}
        </View>
        <Text style={sharedStyles.title}>Talen</Text>
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
        <Text style={sharedStyles.title}>Hobby's</Text>
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
