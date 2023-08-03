import { useDispatch,useSelector } from "react-redux"
import {changeTerm} from '../store/CarSlice'

const Search = () => {
    const dispatch=useDispatch()
    const term=useSelector((state)=>{
        return state.cars.searchTerm     
    })

    const search=(e)=>{
        dispatch(changeTerm(e.target.value))
    }
  return (

    <div>
        <form>
            <input value={term} placeholder="Search" onChange={search}/>
        </form>
    </div>
    
  )
}

export default Search