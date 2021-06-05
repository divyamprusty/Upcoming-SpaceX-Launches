import React, { useEffect, useState } from 'react';
import axios from "axios";

function App() {
    const [myList,setMyList] = useState(false)
    const ABC = async() => {
        const data = await axios.get("https://api.spacexdata.com/v4/launches/upcoming")
       var mydata = data.data
    setMyList(mydata)
    console.log(data.data)
    }
    useEffect(function(){ 
        ABC();

      }, [])

    return (
      <table>
        <thead>

        <th>FLIGHT_NUMBER</th>
        <th>NAME</th>
        <th>DATE_LOCAL</th>
        <th>DATE_UNIX</th>
        <th>DATE_UTC</th>
        <th>LAUNCHPAD</th>
        <th>PAYLOADS</th>
        <th>ROCKET</th>
        <th>ID</th>
        <th>AUTO_UPDATE</th>
        <th>CORES</th>
        <th>CORES.FLIGHT</th>
        <th>CORES.LANDING TYPE</th>
        <th>CORES.LANDPAD</th>
        <th>WINDOW</th>

        </thead>
        <tbody>

          {myList && myList.map((item, i) => (
            <>
            <tr>

              <td>{myList[i].flight_number}</td>
              <td>{myList[i].name}</td>
              <td>{myList[i].date_local}</td>
              <td>{myList[i].date_unix}</td>
              <td>{myList[i].date_utc}</td>
              <td>{myList[i].launchpad}</td>
              <td>{myList[i].payloads}</td>
              <td>{myList[i].rocket}</td>
              <td>{myList[i].id}</td>
              <td>{myList[i].auto_update ? "true" : "false"}</td>
              <td>{myList[i].cores[0].core}</td>
              <td>{myList[i].cores[0].flight}</td>
              <td>{myList[i].cores[0].landing_type}</td>
              <td>{myList[i].cores[0].landpad}</td>
              <td>{myList[i].window}</td>

            </tr>
            </>
          ))}

        </tbody>
    </table>   
  );
}


export default App;