import { FaCircle } from 'react-icons/fa'
import './Counter.css'



const CounterItem = ({item}) => {
  return (



    <div className="counter-element">
      
        <div className='counter-timer'> <h2> {item.timer}</h2></div>
            <div className='counter-text'>
            <div  className='counter-text1'> <h4>{item.text1}</h4></div>
            <div  className='counter-text2'> <h4>{item.text2}</h4></div>
        </div>
        <div className='dot'><FaCircle  /></div>

            
      
    </div>
  )}


const Counter =({counterdata})=> {
    return (


        <div className="counter-container">
           { counterdata.map((item, itemIndex) => (
                <div><CounterItem item={item} /></div>

            ))
           }

        </div>
    )
}

export default Counter
