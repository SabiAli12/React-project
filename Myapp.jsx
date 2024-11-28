import React, { useState } from 'react'


const Myapp = () => {
  
    const [search,setSearch]=useState("")
    const [data ,setData] = useState()
    const[error,setError] = useState()
    const API_KEY="8a51bdffc712ab8096694abf08fd9a6d"
    const API ="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
  
    const handleInput=() =>{
        setSearch(event.target.value)
        console.log(event.target.value);
        
    }
      const myFun = async() =>{
        const get = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`)
        const jsonData=await get.json()
        console.log(jsonData);
        setData(jsonData)
        if(search ==""){
          alert("Enter city name")
      
  return (
    <>
     <div className="container">
        <div className="inputs">
            <input placeholder="Enter City, Country"onChange={handleInput}/>
            <button onClick={myFun}> <i class="fa fa-search"> </i></button>
             </div>
             <div>
             
             {
              data && data.weather ?
              <div className='weather'>
                <h2> {data.name}</h2>
                
                <h2> { Math.trunc(data.main.temp)}°C</h2>
                <p> {data.weather[0].description}</p>
              </div> : ""

             }



            
             </div>
           </div>  
         
    </>
  );
}

export default Myapp
