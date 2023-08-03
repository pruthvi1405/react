import React from 'react'
import Button from '../Components/Button'
const ButtonPage = () => {
  return (
    <div>
        <Button primary onClick={()=>{console.log("Pruthvi")}}>Pruthvi</Button>
    <Button secondary>Shivanand</Button>
    <Button danger >Akash</Button>
    <Button warning rounded>Pooja</Button>
    </div>
  )
}

export default ButtonPage