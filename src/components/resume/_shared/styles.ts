import { StyleSheet } from '@react-pdf/renderer';

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
    fontSize: '14pt',
    textTransform: 'uppercase',
    textDecoration: 'underline',
    letterSpacing: 8,
    color: colors.title,

    marginBottom: 16
  },
  rightTitle: {},
  section: {
    marginBottom: 16
  }
});

export default sharedStyles;
