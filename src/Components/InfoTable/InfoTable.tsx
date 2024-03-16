import './InfoTable.css'
const InfoTable = ({info}) => {
  return (
    <div className="table">
           {info.map((infotable,infoIndex) =>(
            <li>
              <img src={info[infoIndex].imgurl}/>
             <h4>{infotable.title} </h4>
             <span>{infotable.desc} </span>
            
            </li>
           )) }
      </div>)
}

export default InfoTable
