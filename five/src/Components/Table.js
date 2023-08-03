
const Table = ({content,config}) => {
    const renderedHeader=config.map((item)=>{
        return <th key={item.label}>{item.label}</th>
    }  
    )
    const renderedItems=content.map((item)=>{
       return <tr className="m-2"> {config.map((re)=>{
           return <td>{re.render(item)}</td>
        }
        )
        }</tr>
    }
    )
    
  return (
    <div>
        <table>
                <thead>
                <tr>
                {renderedHeader}
                </tr>
                </thead>
                <tbody>
                {renderedItems}
                </tbody>
        </table>
    </div>
  )
}

export default Table