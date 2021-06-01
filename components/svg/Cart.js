import * as React from "react"
import Svg, { SvgProps, G, Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={72}
      height={72}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#prefix__filter0_d)">
        <Circle cx={36} cy={32} r={27} fill="url(#prefix__paint0_linear)" />
        <Circle cx={36} cy={32} r={27.5} stroke="#fff" />
      </G>
      <Path
        d="M29.696 42.857c.527 0 .955-.442.955-.987 0-.545-.428-.987-.955-.987-.528 0-.956.442-.956.987 0 .545.428.987.956.987zM43.069 42.857c.527 0 .955-.442.955-.987 0-.545-.428-.987-.956-.987-.527 0-.955.442-.955.987 0 .545.428.987.956.987z"
        fill="#fff"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.054 21.143h3.821l2.866 16.78h15.282"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M28.74 33.974h14.892c.11 0 .218-.04.303-.112a.496.496 0 00.166-.285l1.72-8.883a.51.51 0 00-.1-.41.48.48 0 00-.37-.18h-18.52"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={63}
          y1={9.263}
          x2={14.684}
          y2={52.25}
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

