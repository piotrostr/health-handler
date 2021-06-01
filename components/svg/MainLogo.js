import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={247}
      height={208}
      viewBox="0 0 247 208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M246.394 72.109S60.344 45.962 113.617 191.378c0 0 16.521-26.916 53.889-56.554-4.109-5.619-3.679-13.541 1.354-18.665l1.708-1.741 9.904-10.087.79-.806a2.9 2.9 0 014.093-.037 2.898 2.898 0 01.038 4.093l-.79.805-7.88 8.02a2.89 2.89 0 00.038 4.093 2.89 2.89 0 004.093-.038l7.879-8.019.79-.806a2.898 2.898 0 014.093-.038 2.898 2.898 0 01.037 4.093l-.789.806-7.88 8.019a2.89 2.89 0 00.038 4.093 2.888 2.888 0 004.093-.037l7.879-8.02.79-.805a2.898 2.898 0 014.093-.038 2.898 2.898 0 01.037 4.093l-.789.806-9.905 10.087-1.708 1.74c-5.119 5.21-13.197 5.715-18.907 1.499-13.868 15.415-32.259 38.361-40.477 59.513.005.016 110.701 48.631 116.266-125.338z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M54.452 0S-88.74 168.346 89.285 207.045c0 0-16.12-32.979-22.108-88.158-9.357-.134-17.215-7.401-17.908-16.908l-.005-.043A39.672 39.672 0 0155.435 77.7c4.69-7.32 15.061-8.035 20.722-1.439a39.624 39.624 0 019.465 22.785c.692 8.798-4.958 16.758-13.117 19.132 6.483 22.86 17.22 53.82 32.206 74.881-14.427-40.22-12.638-72.19 5.344-95.028 6.108-7.756 13.966-14.315 23.521-19.643C120.755 54.905 96.445 28.553 54.452 0z"
        fill="url(#prefix__paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={175.21}
          y1={70.28}
          x2={175.21}
          y2={203.708}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5AD710" />
          <Stop offset={1} stopColor="#22E4CD" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={66.788}
          y1={0}
          x2={66.788}
          y2={207.045}
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

