import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import sharedStyles from '@/components/resume/_shared/styles';
import BabySVG from '@/components/resume/data/svg-components/baby';
import PinSVG from '@/components/resume/data/svg-components/pin';
import SuitcaseSVG from '@/components/resume/data/svg-components/suitcase';
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
    marginBottom: 16,

    borderRadius: '50%',
    border: '4px solid #000000'
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
  data: { hobbies, languages, ...items }
}: PersonaliaProps) => {
  const { t } = useTranslation('resume');

  return (
    <View style={personaliaStyles.personalia}>
      <Image style={personaliaStyles.avatar} src="profile.jpg" />
      <View>
        <Text style={sharedStyles.leftTitle}>{t('personalia.title')}</Text>
        <View style={personaliaStyles.items}>
          <View style={personaliaStyles.item}>
            <BabySVG />
            <Text>25 {t('personalia.dateOfBirth.month')} 1995</Text>
          </View>
          <View style={personaliaStyles.item}>
            <PinSVG />
            <View>
              <Text>Molenveld 13</Text>
              <Text>3650 Dilsen-Stokkem</Text>
            </View>
          </View>
          <View style={personaliaStyles.item}>
            <SuitcaseSVG />
            <Text>{t('personalia.workExperience')}</Text>
          </View>
        </View>
        <Text style={sharedStyles.leftTitle}>Contact</Text>
        <View style={personaliaStyles.items}>
          {Object.keys(items).map((itemKey, i) => (
            <View key={i} style={personaliaStyles.item}>
              // TODO: Remove optional check, once email key is required again
              {items[itemKey as keyof typeof items]?.svg}
              <Text>{items[itemKey as keyof typeof items]?.name}</Text>
            </View>
          ))}
        </View>
        <Text style={sharedStyles.leftTitle}>
          {t('personalia.languages.title')}
        </Text>
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
                {t(language.proficiency as 'resumeKey')}
              </Text>
            </View>
          ))}
        </View>
        <Text style={sharedStyles.leftTitle}>
          {t('personalia.hobbies.title')}
        </Text>
        <View style={personaliaStyles.items}>
          {hobbies.map((hobby, i) => (
            <View key={i} style={personaliaStyles.item}>
              {hobby.svg}
              <Text>{t(hobby.name as 'resumeKey')}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Personalia;
