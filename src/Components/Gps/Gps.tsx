import './Gps.css'

const Gps = ({gpssrc}) => {
  return (
    <div className='gps-container'>
      <iframe src={gpssrc}/>
    </div>
  )
}

export default Gps
