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
      width={71}
      height={60}
      viewBox="0 0 71 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M71 20.779s-53.611-7.535-38.26 34.368c0 0 4.76-7.756 15.528-16.297a4.17 4.17 0 01.39-5.378l.492-.502 2.854-2.906.228-.232A.835.835 0 0153.422 31l-.227.232-2.271 2.311a.832.832 0 00.01 1.18.832.832 0 001.18-.011l2.27-2.311.228-.232a.835.835 0 011.19 1.168l-.227.232-2.27 2.311a.832.832 0 00.01 1.18.832.832 0 001.18-.011l2.27-2.311.228-.232a.835.835 0 011.19 1.168l-.227.233-2.855 2.906-.492.502a4.169 4.169 0 01-5.448.431c-3.996 4.443-9.296 11.055-11.664 17.15.002.004 31.9 14.013 33.503-36.117z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M15.69 0S-25.57 48.51 25.729 59.661c0 0-4.645-9.503-6.37-25.403a5.255 5.255 0 01-5.16-4.872l-.002-.013a11.431 11.431 0 011.778-6.983 3.725 3.725 0 015.971-.415 11.418 11.418 0 012.727 6.566c.2 2.535-1.428 4.829-3.78 5.513 1.869 6.587 4.963 15.508 9.281 21.577-4.157-11.59-3.642-20.802 1.54-27.383 1.76-2.235 4.024-4.125 6.778-5.66C34.796 15.821 27.79 8.228 15.69 0z"
        fill="url(#prefix__paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={50.488}
          y1={20.252}
          x2={50.488}
          y2={58.7}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5AD710" />
          <Stop offset={1} stopColor="#22E4CD" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={19.245}
          y1={0}
          x2={19.245}
          y2={59.661}
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

