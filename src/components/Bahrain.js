import React, { useState, useEffect } from 'react'
import { getDataFromApi } from '../data';

 function Bahrein() {
     


    const bahreinRace =  getDataFromApi().then((result)=> result.stage.competitors)
   

   console.log(bahreinRace);
   // let name = bahreinRace.stage.competitors[0].name;
  //  let nationality = bahreinRace.stage.competitors[0].nationality;

  //            console.log(bahreinRace.stage.competitors[0].name)


  return (
    <div>

    <div> 
    

     </div>

    


    </div>
  )
}

export default Bahrein