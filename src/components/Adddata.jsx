import React, { useState } from 'react'
import Navbar from './Navbar'

const Adddata = () => {

    const [data,changedata]=useState(
        {
            "date":"",
            "state":"",
            "death":"",
        }
    )

    const inputH=(event)=>{
        changedata({...data,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
<Navbar/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Date</label>
<input type="date" name="date" id="" className="form-control" value={data.date} onChange={inputH}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">States no</label>
    <input type="text" className="form-control" name='state'value={data.state} onChange={inputH}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Death no</label>
    <input type="text" className="form-control" name='death'value={data.death} onChange={inputH}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-success" onClick={readValue}>Submit</button>


    </div>
</div>

        </div>
    </div>
</div>


    </div>
  )
}

export default Adddata