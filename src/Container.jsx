import App from './App.jsx'
import {Canvas} from '@react-three/fiber'
import Experience from './Experience2.jsx'
import Panel from './Panel.jsx'
import './main.css'
import { useState } from 'react'

const Container = () => {
    const [currentColor, setCurrentColor] = useState()
    const hanldePresetChange = (value) => {
        setCurrentColor(value)
    }

    return <>
    <App currentPresetChange={hanldePresetChange}>
      <div id='container' style={{'--main-color': currentColor}}>
        <div id='panel'>
          <Panel></Panel>
        </div>
        <div id="canvas" className='full-height' style={{'cursor': 'pointer'}}>
          <Canvas>
            <Experience/>
          </Canvas>
        </div>
      </div>
    </App>
    </>
}

export default Container