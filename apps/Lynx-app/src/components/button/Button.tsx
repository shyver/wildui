import { useState, forwardRef } from "@lynx-js/react"

export default function Button ({bindtap, ...props}: {bindtap?: () => void}) {
  const [text, setText] = useState("button")
  return (
    <view className="Button" bindtap={bindtap} {...props}>

      <text>
      {text}
      </text>
      </view>
  )
}
