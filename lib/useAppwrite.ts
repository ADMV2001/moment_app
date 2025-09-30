//Custom hook

import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useAppwrite = (fn: any) => {
 const [data, setdata] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
 
     const fetchPosts = async () => {
       setIsLoading(true);
 
       try{
         const res = await fn();
         setdata(res);
         console.log(res);
       }
       catch(error: unknown){
         Alert.alert('Error', (error as Error).message);
       }
       finally{
         setIsLoading(false);
       }
     }
     

   useEffect(()=>{
    fetchPosts();
   },[]);

   const refetch = () => fetchPosts();
   

   return { data, isLoading, refetch };
}

export default useAppwrite;