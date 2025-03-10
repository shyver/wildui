import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import arrow from './assets/arrow.png'
import lynxLogo from './assets/lynx-logo.png'
import reactLynxLogo from './assets/react-logo.png'
import Button from './components/button/Button.jsx'

export function App() {
  const [alterLogo, setAlterLogo] = useState(false)
  const [text, setText] = useState(0)

  useEffect(() => {
    console.info('Hello, ReactLynx')
  }, [])

  const onTap = useCallback(() => {
    'background only'
    setAlterLogo(!alterLogo)
  }, [alterLogo])

  return (
    <view className='Main' >
      <Button bindtap={()=>{
        setText(text + 1)
      }} />
      <text style={{
        color: 'black',
      }} >
        {text}
      </text>
      
    </view>
  )
}
