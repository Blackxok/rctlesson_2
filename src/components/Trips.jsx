import { useState } from "react";
import "./Trips.css";
import { v4 as uuidv4 } from "uuid";
import { useFetch } from "../hooks/useFetch";

function Trips() {
   // useStates

   const [url, setUrl] = useState("http://localhost:3000/trips");
   //    usefetch
   const { data: trips, bekla, err } = useFetch(url);

   // _______________________________________________
   return (
      <div className="trip-list">
         <h1>TripList budas!!</h1>
         {bekla && <h2>Loading...</h2>}
         {err && <h2>{err}</h2>}
         <ul>
            {trips &&
               trips.map((e) => {
                  return (
                     <li key={uuidv4()}>
                        <h2>{e.title}</h2>
                        <h5>{e.price}</h5>
                     </li>
                  );
               })}
         </ul>
         <div className="filters">
            <button
               onClick={() => {
                  setUrl("http://localhost:3000/trips?loc=euro");
               }}
            >
               Euro Trips
            </button>
            <button
               onClick={() => {
                  setUrl("http://localhost:3000/trips?loc=usa");
               }}
            >
               USA Trips
            </button>
         </div>
      </div>
   );
}

export default Trips;
