import App from './App.jsx'
import {Canvas} from '@react-three/fiber'
import Experience from './Experience2.jsx'
import Panel from './Panel.jsx'
import './main.css'
import { useState } from 'react'

const averageHexColor = (c1, c2) => {
    const hexToRgb = hex =>
      hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
                 ,(m, r, g, b) => '#' + r + r + g + g + b + b)
          .substring(1).match(/.{2}/g)
          .map(x => parseInt(x, 16));
  
    const rgb1 = hexToRgb(c1);
    const rgb2 = hexToRgb(c2);
  
    const avgRgb = rgb1.map((comp, i) => (comp + rgb2[i]) / 2);
  
    return "#" + avgRgb.map(x => Math.round(x).toString(16).padStart(2, '0')).join('');
}

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
        <div id="canvas" className='full-height'>
          <Canvas>
            <Experience/>
          </Canvas>
        </div>
      </div>
    </App>
    </>
}

export default Container