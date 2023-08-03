import Photo from "../Components/Photo";
import { useState } from "react";
import bird from '../svg/bird.svg'
import cat from '../svg/cat.svg'
import cow from '../svg/cow.svg'
import dog from '../svg/dog.svg'
import gator from '../svg/gator.svg'
import horse from '../svg/horse.svg'

function App(){
    var names=[bird,cat,cow,dog,gator,horse]

    var fetchName=()=>{
        return names[Math.floor(Math.random()*names.length)]
    }

    const [arr,setArray]=useState([]);
    
    var addAnimal=()=>{
        setArray([...arr,fetchName()])
    }

    const allAnimals=arr.map((animal,key)=>{
            return <Photo path={animal} index={key}/>
        })
    
    return(
    <div>
        <button onClick={addAnimal}>Add Animal</button>
        <p>{allAnimals}</p>
    </div>
    );
}

export default App;