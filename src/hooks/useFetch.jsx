import { useEffect, useState } from "react";

export function useFetch(url) {
   const [data, setData] = useState(null);
   const [bekla, setBekla] = useState(false);

   useEffect(() => {
      setBekla(true);
      const fetchData = async () => {
         const req = await fetch(url);
         const dat = await req.json();
         setData(dat);
         setBekla(false);
      };

      fetchData();
   }, [url]);
   return { data, bekla };
}
