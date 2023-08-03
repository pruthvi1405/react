import React from 'react'
import Table from '../Components/Table'

const TablePage = () => {

    const config=[
        {
            label:'Fruits',
            render:(fruit)=><>{fruit.name}</>
        },
        {
            label:'Colour',
            render:(fruit)=><div className={`p-2 m-3 ${fruit.colour}`}></div>
        },
        {
            label:'Score',
            render:(fruit)=><>{fruit.score}</>,
            sort:(a,b)=> a>b?a:b
        }
    ]
    const content=[
        {
            name:"orange",
            colour:'bg-orange-500',
            score:500
        },
        {
            name:"apple",
            colour:'bg-red-500',
            score:400
        }
    ]
  return (
    <Table content={content} config={config}/>
  )
}

export default TablePage