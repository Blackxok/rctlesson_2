import { useEffect, useState } from "react";

export function useFetch(url) {
   const [data, setData] = useState(null);
   const [bekla, setBekla] = useState(false);
   const [err, setErr] = useState(null);

   // /////////////////////////////////////////////
   useEffect(() => {
      setBekla(true);

      const fetchData = async () => {
         try {
            const req = await fetch(url);
            if (!req.ok) {
               throw new Error(req.statusText);
            }
            const dat = await req.json();
            setData(dat);
            setBekla(false);
         } catch (error) {
            setErr(error.message);
            setBekla(false);
         }
      };

      fetchData();
   }, [url]);
   return { data, bekla, err };
}
