import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Canvas} from '@react-three/fiber'
import Experience from './Experience2.jsx'
import './Experience.css'
// import Customize from './Customize.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas>
    <Experience/>
    </Canvas>
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('root2')).render(
  <React.StrictMode>
  </React.StrictMode>,
)
