import { Font, StyleSheet } from '@react-pdf/renderer';

Font.register({
  family: 'Lato',
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`
});
Font.register({
  family: 'Lato Italic',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`
});
Font.register({
  family: 'Lato Bold',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`
});

export const colors = {
  title: '#3CE3B4',
  text: '#F4DCBB',
  backgroundPrimary: '#243C54',
  backgroundSecondary: '#617D88',
  color5: '#B6D6D2',
  color6: '#344E6C'
};

const sharedStyles = StyleSheet.create({
  leftTitle: {
    fontFamily: 'Lato Bold',
    fontSize: '14pt',
    textTransform: 'uppercase',
    textDecoration: 'underline',
    letterSpacing: 8,
    color: colors.title,

    marginBottom: 16
  },
  rightTitle: {
    fontFamily: 'Lato Bold',
    fontSize: '14pt',
    textTransform: 'uppercase',
    textDecoration: 'underline',
    color: colors.backgroundPrimary,

    marginBottom: 16
  },
  section: {
    marginBottom: 16
  }
});

export default sharedStyles;
