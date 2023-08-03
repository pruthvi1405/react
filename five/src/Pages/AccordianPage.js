import React from 'react'
import Accordian from '../Components/Accordian'

const items=[{
    label:'First',
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
},
{
    label:'Second',
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
},
{
    label:'Third',
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
}]
const AccordianPage = () => {
  return (
    <Accordian items={items}/>
  )
}

export default AccordianPage