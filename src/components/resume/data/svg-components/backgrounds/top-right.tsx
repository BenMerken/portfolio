import { Ellipse, Svg } from '@react-pdf/renderer';

const TopRightBackgroundSVG = () => {
  return (
    <Svg width="128" height="218" viewBox="0 0 128 218" fill="none">
      <Ellipse
        cx="135.5"
        cy="172.5"
        rx="41.5"
        ry="45.5"
        fill="#3CE3B4"
        fillOpacity="0.75"
      />
      <Ellipse
        cx="61.5"
        cy="136"
        rx="61.5"
        ry="64"
        fill="#3CE3B4"
        fillOpacity="0.5"
      />
      <Ellipse cx="107" cy="80" rx="81" ry="80" fill="#3CE3B4" />
    </Svg>
  );
};

export default TopRightBackgroundSVG;
