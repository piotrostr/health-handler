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
          cx={30.867}
          cy={26.867}
          r={19.867}
          fill="url(#prefix__paint0_linear)"
        />
        <Circle
          cx={30.867}
          cy={26.867}
          r={21.367}
          stroke="#fff"
          strokeWidth={3}
        />
      </G>
      <Path
        d="M36.136 32.586L25.599 22.05m10.537 0L25.599 32.586 36.136 22.05z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={50.735}
          y1={10.137}
          x2={15.183}
          y2={41.768}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF9191" />
          <Stop offset={1} stopColor="#FF4343" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent

