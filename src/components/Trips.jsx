import { useState, useEffect } from "react";
import "./Trips.css";
import { v4 as uuidv4 } from "uuid";

function Trips() {
   // useStates
   const [trips, setTrips] = useState([]);

   //    UseEffects
   useEffect(() => {
      fetch("http://localhost:3000/trips")
         .then((e) => e.json())
         .then((e) => setTrips(e));
   }, []);

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
      </div>
   );
}

export default Trips;
