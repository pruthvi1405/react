import { useSelector } from "react-redux"
const Total = () => {
    const price=useSelector((state)=>{
        return state.cars.cars.filter((car)=>{
            return car.name.includes(state.cars.searchTerm)
        }).reduce((finalCost,car)=>{
            return finalCost+car.cost
        },0)
    })
  return (
    <div>{price}</div>
  )
}

export default Total