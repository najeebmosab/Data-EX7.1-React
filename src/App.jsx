import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { data, getNams, getUserBorn } from "./Components/DataFile";
import { Printing } from "./Components/ToPrintData";
import {PrintingObj} from "./Components/ToPrintObj";
function App() {
  const [Users, setUsers] = useState(data)
  const [names, setNames] = useState(getNams());
  const [getUserBorns, setUserBorn] = useState(getUserBorn());
  console.log(Users);
  console.log("names", names);
  console.log("getUserBorn", getUserBorns);
  
  return (
    <div className="App">
      <div>
        {
          names.map((n, idx) => {
            return <Printing name={n} key={idx + 1} />
          })
        }
      </div>
      <div className="printCard">

      {
          getUserBorns.map((us, idx) => {
            return <PrintingObj getUserBorn={us} key={idx} />
          })
        }
        
      </div>
    </div>
  )
}

export default App
