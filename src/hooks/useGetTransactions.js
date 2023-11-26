import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase-config";


export const useGetTransactions = () => {
  const clc = collection(db, "transactions")
  
  const allTransactions = async (id) =>{
    const q = query(clc, where("userID", "==", id));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
  }

  const allIncome = async(id)=>{
    const all_income = query(clc, where("userID", "==", id), where("transactionType", "==", 'income'));
    const income_snapshot = await getDocs(all_income);
    let totalIncome = 0
    income_snapshot.forEach((doc) => {
      totalIncome  += parseInt(doc.data().transactionAmount);
    });
    return totalIncome;
  }

  const allExpenses = async(id)=>{
    const all_income = query(clc, where("userID", "==", id), where("transactionType", "==", 'expense'));
    const expense_snapshot = await getDocs(all_income);
    let totalExpense = 0
    expense_snapshot.forEach((doc) => {
      totalExpense  += parseInt(doc.data().transactionAmount);
    });
    return totalExpense;
  }
  return {allTransactions,allIncome,allExpenses};
}
