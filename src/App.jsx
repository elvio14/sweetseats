import { useState, createContext } from 'react'
import './App.css'

export const theContext = createContext()

function App({children, currentPresetChange}) {
  const [colorArms, setColorArms] = useState('#ffffff')
  const [colorArmPads, setColorArmPads] = useState('#ffffff')
  const [colorBack, setColorBack] = useState('#ffffff')
  const [colorBody, setColorBody] = useState('#ffffff')
  const [colorCorner, setColorCorner] = useState('#ffffff')
  const [colorPillows, setColorPillows] = useState('#ffffff')
  const [colorLegs, setColorLegs] = useState('#ffffff')
  const [colorPole, setColorPole] = useState('#ffffff')
  const [colorSeatCushion, setColorSeatCushion] = useState('#ffffff')
  const [colorShell, setColorShell] = useState('#ffffff')
  const [colorSideCushion, setColorSideCushion] = useState('#ffffff')
  const [colorWheels, setColorWheels] = useState('#ffffff')

  const [currentPreset, setCurrentPreset] = useState()

  return (
    <theContext.Provider
      value ={{
        colorArms, setColorArms,
        colorArmPads, setColorArmPads,
        colorBack, setColorBack,
        colorBody, setColorBody,
        colorCorner, setColorCorner,
        colorPillows, setColorPillows,
        colorLegs, setColorLegs,
        colorPole, setColorPole,
        colorSeatCushion, setColorSeatCushion,
        colorShell, setColorShell,
        colorSideCushion, setColorSideCushion,
        colorWheels, setColorWheels,
        currentPreset, setCurrentPreset
      }}
    >
      {children}
    </theContext.Provider>
  )
}

export default App
