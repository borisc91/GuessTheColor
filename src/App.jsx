import { useState } from 'react'
import classes from './App.module.css'
import Fakebuttonone from './components/Fakebuttonone';
import Fakebuttontwo from './components/Fakebuttontwo';
import Realbutton from './components/Realbutton';
const colorHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];




function App() {

  const randomBoja = () => {
    return `#${colorHex[Math.floor(Math.random() * colorHex.length)]}${colorHex[Math.floor(Math.random() * colorHex.length)]}${colorHex[Math.floor(Math.random() * colorHex.length)]}${colorHex[Math.floor(Math.random() * colorHex.length)]}${colorHex[Math.floor(Math.random() * colorHex.length)]}${colorHex[Math.floor(Math.random() * colorHex.length)]} `
  }
  const [sibica, setSibica] = useState(Math.floor(Math.random() * 3))

  const [realColor, setRealColor] = useState(randomBoja())
  const [fakeColorOne, setFakeColorOne] = useState(randomBoja())
  const [fakeColortwo, setFakeColortwo] = useState(randomBoja())

  const [victory, setVictory] = useState();

  console.log(realColor)

  const guessHandler = () => {

    setRealColor(randomBoja())
    setFakeColorOne(randomBoja())
    setFakeColortwo(randomBoja())
    setSibica(Math.floor(Math.random() * 3))
    setVictory(true);
  }

  const lostHandler = () => {
    setVictory(false)
  }

  let content;

  if (sibica === 1) {
    content = <div className={classes.buttoni}>
      <Realbutton correctHandler={guessHandler} correctColor={realColor} />
      <Fakebuttonone notcorrectHandler={lostHandler} nocorrectColoronee={fakeColorOne} />
      <Fakebuttontwo notcorrectHandler={lostHandler} nocorrectColorone={fakeColortwo} />
    </div>
  }

  if (sibica === 0) {
    content = <div className={classes.buttoni}>
      <Fakebuttonone notcorrectHandler={lostHandler} nocorrectColoronee={fakeColorOne} />
      <Realbutton correctHandler={guessHandler} correctColor={realColor} />
      <Fakebuttontwo notcorrectHandler={lostHandler} nocorrectColorone={fakeColortwo} />
    </div>

  }

  if (sibica === 2) {
    content = <div className={classes.buttoni}>
      <Fakebuttonone notcorrectHandler={lostHandler} nocorrectColoronee={fakeColorOne} />
      <Fakebuttontwo notcorrectHandler={lostHandler} nocorrectColorone={fakeColortwo} />
      <Realbutton correctHandler={guessHandler} correctColor={realColor} />
    </div>
  }

  let pismo;

  if (victory) {
    pismo = <p className={classes.pogodak}>Pogodili ste!</p>
  }
  else if (victory === undefined) {

  }

  else {
    pismo = <p className={classes.promasaj} >Promasili ste!</p>
  }


  return (
    <div>
      <div className={classes.glavna} style={{ backgroundColor: realColor }} >
      </div>
      {content}
      {pismo}
    </div>
  )
};

export default App;
