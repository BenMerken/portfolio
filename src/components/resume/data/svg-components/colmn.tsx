import { Circle, G, Path, Rect, Svg } from '@react-pdf/renderer';

const ColumnSVG = () => {
  return (
    <Svg
      fill="#FFFFFF"
      width="16"
      height="16"
      id="Layer_1"
      viewBox="0 0 512 512"
    >
      <G>
        <G>
          <Circle cx="76.54" cy="76.54" r="22.98" />
        </G>
      </G>
      <G>
        <G>
          <Circle cx="435.463" cy="76.54" r="22.98" />
        </G>
      </G>
      <G>
        <G>
          <Path
            d="M435.46,0H76.541C34.336,0,0.001,34.336,0.001,76.541c0,40.729,31.979,74.118,72.144,76.405V512h367.71V152.946
			c40.166-2.286,72.144-35.677,72.144-76.405C511.999,34.336,477.664,0,435.46,0z M374.427,30.417
			c-6.799,8.975-11.671,19.485-13.985,30.915H151.559c-2.314-11.43-7.185-21.94-13.984-30.915H374.427z M30.418,76.541
			c0-25.433,20.691-46.124,46.124-46.124s46.123,20.691,46.123,46.124s-20.691,46.123-46.123,46.123
			C51.109,122.663,30.418,101.973,30.418,76.541z M409.439,481.583H102.563V148.52c24.799-8.993,43.669-30.453,48.996-56.771
			h208.884c5.327,26.318,24.197,47.777,48.996,56.771V481.583z M435.46,122.663c-25.432,0-46.122-20.691-46.122-46.123
			c0-25.432,20.691-46.124,46.122-46.124c25.432,0,46.123,20.691,46.123,46.124S460.892,122.663,435.46,122.663z"
          />
        </G>
      </G>
      <G>
        <G>
          <Rect x="156.466" y="112.026" width="199.06" height="30.417" />
        </G>
      </G>
      <G>
        <G>
          <Rect x="156.466" y="166.696" width="30.417" height="290.636" />
        </G>
      </G>
      <G>
        <G>
          <Rect x="240.793" y="166.696" width="30.417" height="290.636" />
        </G>
      </G>
      <G>
        <G>
          <Rect x="325.119" y="166.696" width="30.417" height="290.636" />
        </G>
      </G>
    </Svg>
  );
};

export default ColumnSVG;
