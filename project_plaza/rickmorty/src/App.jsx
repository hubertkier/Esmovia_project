import './App.css'
import { Counter } from  "./counter/counter.jsx"
import { ButtonDataCall } from "./button-data-call/button-data-call";
import { bringData } from "./services/api-calls";
import { useState, useEffect } from "react";

function App(){
  const [dataApi, setDataApi] = useState([])

  const takeData = (value) => {

    bringData(value)
      .then(
        res => {
          setDataApi(res.results)
        }
      )
      .catch(error => console.log(error))
  };

  return (
    <>

      <Counter val={5} />
      
      <ButtonDataCall criteria="character" emitFunction={takeData} />
      <ButtonDataCall criteria="location" emitFunction={takeData} />
      <ButtonDataCall criteria="episode" emitFunction={takeData} />
      {
        dataApi.length > 0 &&

        <>
          {dataApi.map(
            element => {
              return (
                <div
                  key={element.id}
                >{element.name}</div>
              )
            }
          )}
        </>
      }
    </>
  )
}


export default App
