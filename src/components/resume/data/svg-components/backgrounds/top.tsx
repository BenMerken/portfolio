import { Path, Svg } from '@react-pdf/renderer';
import { PropsWithChildren } from 'react';

const BackgroundTopSVG = ({ children }: PropsWithChildren) => {
  return (
    <Svg width="595" height="145" viewBox="0 0 595 145" fill="none">
      <Path
        d="M-42.5132 40.0797L611.626 -88.8883L615.933 144.86L-42.5132 40.0797Z"
        fill="#617D88"
      />
      {children}
    </Svg>
  );
};

export default BackgroundTopSVG;
