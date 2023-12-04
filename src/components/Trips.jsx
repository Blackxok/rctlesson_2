import { useState, useEffect, useCallback } from "react";
import "./Trips.css";
import { v4 as uuidv4 } from "uuid";

function Trips() {
   // useStates
   const [trips, setTrips] = useState([]);
   const [url, setUrl] = useState("http://localhost:3000/trips");
   //    UseEffects

   // async await
   const fetchTrips = useCallback(async () => {
      const req = await fetch(url);
      const data = await req.json();
      setTrips(data);
   }, [url]);

   // useEffect
   useEffect(() => {
      fetchTrips();
   }, [fetchTrips]);

   // _______________________________________________
   return (
      <div className="trip-list">
         <h1>TripList budas!!</h1>
         <ul>
            {trips.map((e) => {
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
