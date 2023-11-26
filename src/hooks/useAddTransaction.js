import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useCookies } from 'react-cookie'


export const useAddTransaction = () => {
    const [cookies, setCookie] = useCookies(['cookie-name']);

    const transactionCollectionRef = collection(db, "transactions");
    const userID = cookies.userID

    const addTransaction = async (
        description,
        transactionAmount,
        transactionType,
    ) => {
        await addDoc(transactionCollectionRef, {
        userID:userID,
        description:description,
        transactionAmount:transactionAmount,
        transactionType:transactionType,
        createdAt: serverTimestamp(),
    });
    };
    return { addTransaction };
};