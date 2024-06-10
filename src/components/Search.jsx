import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {

    const [data,changedt]=useState(
        {
            "date":""
        }
    )

const inputH=(event)=>{
    changedt({...data,[event.target.name]:event.target.value})
}

const readV=()=>{
    console.log(data)
}

  return (
    <div>
        <Navbar/>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label"></label>
<input type="date" name="date" id="" className="form-control" value={data.date} onChange={inputH}/>

        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-success" onClick={readV}>Search</button>

        </div>
    </div>
</div>

    </div>
  )
}

export default Search