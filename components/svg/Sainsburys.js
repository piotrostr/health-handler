import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={136}
      height={128}
      viewBox="0 0 136 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path
        d="M0 10C0 4.477 4.477 0 10 0h116c5.523 0 10 4.477 10 10v118H0V10z"
        fill="url(#prefix__pattern0)"
      />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#prefix__image0"
            transform="matrix(.00333 0 0 .00354 0 -.031)"
          />
        </Pattern>
        <Image
          id="prefix__image0"
          width={300}
          height={300}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent

