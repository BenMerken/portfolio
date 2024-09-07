import { Path, Svg } from '@react-pdf/renderer';

const GermanyFlagSVG = () => {
  return (
    <Svg id="flag-icons-de" viewBox="0 0 512 512" width="16" height="16">
      <Path fill="#fc0" d="M0 341.3h512V512H0z" />
      <Path fill="#000001" d="M0 0h512v170.7H0z" />
      <Path fill="red" d="M0 170.7h512v170.6H0z" />
    </Svg>
  );
};

export default GermanyFlagSVG;
