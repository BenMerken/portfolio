import { Path, Svg } from '@react-pdf/renderer';

const FranceFlagSVG = () => {
  return (
    <Svg viewBox="0 0 512 512" width="16" height="16">
      <Path fill="#fff" d="M0 0h512v512H0z" />
      <Path fill="#000091" d="M0 0h170.7v512H0z" />
      <Path fill="#e1000f" d="M341.3 0H512v512H341.3z" />
    </Svg>
  );
};

export default FranceFlagSVG;
