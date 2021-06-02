import * as React from "react"
import Svg, {
  SvgProps,
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={62}
      height={62}
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#prefix__filter0_d)">
        <Circle
          cx={31.132}
          cy={26.867}
          r={19.867}
          fill="url(#prefix__paint0_linear)"
        />
        <Circle
          cx={31.132}
          cy={26.867}
          r={21.367}
          stroke="#fff"
          strokeWidth={3}
        />
      </G>
      <Path
        d="M34.755 20.3c-2.581 0-3.854 2.603-3.854 2.603S29.63 20.3 27.048 20.3c-2.098 0-3.76 1.795-3.78 3.937-.044 4.446 3.448 7.608 7.276 10.265a.626.626 0 00.715 0c3.828-2.657 7.32-5.819 7.277-10.265-.022-2.142-1.683-3.937-3.78-3.937v0z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={51}
          y1={10.137}
          x2={15.447}
          y2={41.768}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5AD710" />
          <Stop offset={1} stopColor="#22E4CD" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent

