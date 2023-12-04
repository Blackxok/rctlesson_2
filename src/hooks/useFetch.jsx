import { useEffect, useState } from "react";

export function useFetch(url) {
   const [data, setData] = useState(null);

   useEffect(() => {

      const fetchData = async () => {
         const req = await fetch(url);
         const dat = await req.json();
         setData(dat);
      };
      
      fetchData();
   }, [url]);
   return { data };
}
