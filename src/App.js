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
        <th>DETAILS</th>
        <th>DATE_LOCAL</th>
        <th>DATE PRECISION</th>
        <th>DATE_UNIX</th>
        <th>DATE_UTC</th>
        <th>LAUNCHPAD</th>
        <th>PAYLOADS</th>
        <th>ROCKET</th>
        <th>SHIPS</th>
        <th>STATIC_FIRE_DATE_UNIX</th>
        <th>STATIC_FIRE_DATE_UTC</th>
        <th>ID</th>
        <th>AUTO_UPDATE</th>
        <th>CORES</th>
        <th>CORES.FLIGHT</th>
        <th>CORES.GRIDFINS</th>
        <th>CORES.LANDING ATTEMPT</th>
        <th>CORES.LANDING SUCCESS</th>
        <th>CORES.LANDING TYPE</th>
        <th>CORES.LANDPAD</th>
        <th>CORES.LEGS</th>
        <th>CORES.REUSED</th>
        <th>NET</th>
        <th>TBD</th>
        <th>UPCOMING</th>
        <th>WINDOW</th>
        <th>SUCCESS</th>

        </thead>
        <tbody>

          {myList && myList.map((item, i) => (
            <>
            <tr>

              <td>{myList[i].flight_number}</td>
              <td>{myList[i].name}</td>
              <td>{myList[i].details}</td>
              <td>{myList[i].date_local}</td>
              <td>{myList[i].date_precision}</td>
              <td>{myList[i].date_unix}</td>
              <td>{myList[i].date_utc}</td>
              <td>{myList[i].launchpad}</td>
              <td>{myList[i].payloads}</td>
              <td>{myList[i].rocket}</td>
              <td>{myList[i].ships}</td>
              <td>{myList[i].static_fire_date_unix}</td>
              <td>{myList[i].static_fire_date_utc}</td>
              <td>{myList[i].id}</td>
              <td>{myList[i].auto_update ? "true" : "false"}</td>
              <td>{myList[i].cores[0].core}</td>
              <td>{myList[i].cores[0].flight}</td>
              <td>{myList[i].cores[0].gridfins ? "true" : "false"}</td>
              <td>{myList[i].cores[0].landing_attempt ? "true" : "false"}</td>
              <td>{myList[i].cores[0].landing_success}</td>
              <td>{myList[i].cores[0].landing_type}</td>
              <td>{myList[i].cores[0].landpad}</td>
              <td>{myList[i].cores[0].legs ? "true" : "false"}</td>
              <td>{myList[i].cores[0].reused ? "true" : "false"}</td>
              <td>{myList[i].net ? "true" : "false"}</td>
              <td>{myList[i].tbd ? "true" : "false"}</td>
              <td>{myList[i].upcoming ? "true" : "false"}</td>
              <td>{myList[i].window}</td>
              <td>{myList[i].success}</td>

            </tr>
            </>
          ))}

        </tbody>
    </table>   
  );
}


export default App;