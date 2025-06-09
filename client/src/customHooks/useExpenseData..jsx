import axios from "axios";
import { useEffect, useState } from "react"



export  const useExpenseData = ()=>{

    const [allExpenseData,setAllExpenseData]= useState([]);
    const [loading, setLoading]= useState(true);
    const [error,setError]= useState(false);

    useEffect(()=>{
        const fetchExpenses = async()=>{
            try {
            
             const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/get-all-expenses`);
             setAllExpenseData(response?.data);

        } catch (error) {
            setError(true);
        } finally{
            setLoading(false);
        }
        }

        fetchExpenses();
    },[])

    return {allExpenseData, loading,error}
}