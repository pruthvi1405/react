import { useSelector,useDispatch } from "react-redux";
import {addName,addCost,addCar} from '../store'

const Form = () => {
    const dispatch=useDispatch();

    
    const {name,cost}=useSelector((state)=>{
        return {name:state.form.name,
            cost:state.form.cost}
    })

    const formSubmit=(e)=>{
        e.preventDefault();
        dispatch(addCar({name,cost}))
        dispatch(addCost(0))
        dispatch(addName(''))
    }

    const carCost=(e)=>{
        dispatch(addCost(parseInt(e.target.value)))
    }

    const carName=(e)=>{
        dispatch(addName(e.target.value))
    }

  return (
    <div>
        <form onSubmit={formSubmit}>
            <input placeholder='Car Name' value={name} onChange={carName}/>
            <input placeholder='Car Cost' type="number" value={cost||''} onChange={carCost}/>
            <button type="submit">Add Car</button>
        </form>

    </div>
  )
}

export default Form