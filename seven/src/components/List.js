import { useSelector,useDispatch} from "react-redux"
import {deleteCar} from '../store/CarSlice'
const List = () => {
    const dispatch=useDispatch()
   const {list,search}=useSelector((state)=>{
       return {list:state.cars.cars.filter((car)=>{
           return car.name.includes(state.cars.searchTerm)
       }),search: state.form.name}
   }) 



   const removeCar=(car)=>{
       dispatch(deleteCar(car.id))
   }

   const renderCars=list.map((car)=>{
       const bold=search && car.name.includes(search)
       return <div key={car.id} style={{fontWeight:`${bold && 'bold'}`}}>
           <div>{car.name}</div>
           <div>{car.cost}</div>
           <button onClick={()=>removeCar(car)}>DELETE</button>
           <hr/>
       </div>
   })
  return (
    <div>
        {renderCars}
      
    </div>
  )
}

export default List