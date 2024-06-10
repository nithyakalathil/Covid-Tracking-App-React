import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {

    const [data,changedata]=useState(
        []
    )

    const fetchdata=()=>{
        axios.get("https://api.covidtracking.com/v1/us/daily.json").then(
            (response)=>{
                changedata(response.data)
            }
        )
    }

    useEffect(()=>{fetchdata()},[])
  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <table class="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">States</th>
      <th scope="col">Death</th>
      
    </tr>
  </thead>
  <tbody class="table-group-divider">
   {data.map((value,index)=>{return  <tr>
      <th scope="row">{value.date}</th>
      <td>{value.states}</td>
      <td>{value.death}</td>
      
    </tr>})}
   
  </tbody>
</table>

        </div>
    </div>
</div>

    </div>
  )
}

export default Viewall