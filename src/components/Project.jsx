import React from 'react'
import Carousel from './Carousel'

const Project = () => {
  return (
    <div>
   <Carousel />
   
<div className="grid grid-cols-5 grid-rows-5 gap-4">
    <div >1</div>
    <div >2</div>
    <div >3</div>
    <div >4</div>
    <div >5</div>
    <div className="col-start-5 row-start-2">6</div>
    <div className="col-start-4 row-start-2">7</div>
    <div className="col-start-3 row-start-2">8</div>
    <div className="col-start-2 row-start-2">9</div>
    <div className="col-start-1 row-start-2">10</div>
</div>
    

</div>
    
  )
}

export default Project