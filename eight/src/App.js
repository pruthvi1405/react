import {useFetchUsersQuery} from './Store'
function App() {
  const {data,isLoading,error}=useFetchUsersQuery();

  console.log(data,isLoading,error)

 let content;
  if(isLoading){
    content= <div>isLoading...</div>
  }
  else if(error){
    content=<div>Error loading...</div> 
  }
  else{
    content=data.map((user)=>{
      return <div>{user.name}</div>
    })
  }
  
  return (
    <div >
      {content}
    </div>
  );
}

export default App;
