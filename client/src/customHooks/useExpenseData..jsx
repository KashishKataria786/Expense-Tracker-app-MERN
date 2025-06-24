import axios from "axios";
import { useEffect, useState } from "react"

export  const useExpenseData = ()=>{

    const [allExpenseData,setAllExpenseData]= useState([]);
    const [loading, setLoading]= useState(true);
    const [error,setError]= useState(false);

    const getAllExpenseData = async()=>{
            try {  
             const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/get-all-expenses`);
             setAllExpenseData(response?.data?.data);

        } catch (error) {
            console.log(error);
            setError(true);
        } finally{
            setLoading(false);
        }

    }

    const deleteExpense = async(id)=>{
            try {
                const deleteData = await axios.delete(`${import.meta.env.VITE_REACT_APP_BASE_URL}/delete-expense/${id}`);
                if(!deleteData){
                    console.log("Data Not Deleted");
                }
                getAllExpenseData();
            } catch (error) {
                console.log("Deletion not possible", error);
            }
        }
    
    
    useEffect(()=>{
        getAllExpenseData();
    },[])

    return {getAllExpenseData,allExpenseData,deleteExpense, loading,error};
}