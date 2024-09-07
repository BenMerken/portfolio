import { Path, Svg } from '@react-pdf/renderer';

const NetherlandsFlagSVG = () => {
  return (
    <Svg viewBox="0 0 512 512" width="16" height="16">
      <Path fill="#ae1c28" d="M0 0h512v170.7H0z" />
      <Path fill="#fff" d="M0 170.7h512v170.6H0z" />
      <Path fill="#21468b" d="M0 341.3h512V512H0z" />
    </Svg>
  );
};

export default NetherlandsFlagSVG;
