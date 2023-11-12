import './styles.css'
import { useAddTransaction } from '../../hooks/useAddTransaction'
import { useEffect, useReducer,useState } from 'react';
import {useGetTransactions} from '../../hooks/useGetTransactions';
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";

const ExpenseTracker = () => {
  const {addTransaction} = useAddTransaction(); 
  const {allTransactions,allIncome,allExpenses} = useGetTransactions();
  const [income,setIncome] = useState(0)
  const [expense,setExpense] = useState(0)
  const[transactions,setTransactions] = useState([])

  const [state,dispatch] = useReducer((state,action)=>{
    return {
      ...state,
      description: action.description,
      transactionAmount: action.transactionAmount,
      transactionType: action.transactionType
    }
  },{
    description:'None',
    transactionAmount:0,
    transactionType:'None'
  })

  const getData = async ()=>{
    const querySnapshot = await allTransactions(Cookies.get("userID"))
    let updatedTransactions = [];
    querySnapshot.forEach((doc) => {
      updatedTransactions.push(doc.data());
    });
    setTransactions(updatedTransactions);
    setIncome(await allIncome(Cookies.get("userID")))
    setExpense(await allExpenses(Cookies.get("userID")))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await addTransaction(state.description,state.transactionAmount,state.transactionType) // added to database
    getData() // data updated 
  }
  
  useEffect(()=>{
    getData()
  },[])
  
  const removeCookies = ()=>{
    Cookies.remove("firstName")
    Cookies.remove("isAuth")
    Cookies.remove("name")
    Cookies.remove("profilePhoto")
    Cookies.remove("userID")
  }

  return (
    <>
      <div className="expense-tracker">
        <div className="container">
          <h1> {Cookies.get("name").substring(0, Cookies.get("name").indexOf(' ')).charAt(0).toUpperCase()
              + Cookies.get("name").substring(0, Cookies.get("name").indexOf(' ')).slice(1) + "'s Expense Tracker"}</h1>
          <div className="balance">
            <h3> Your Balance</h3>
            <h1 style={{color: income-expense > 0? "green":"red"}}>{income-expense}</h1>
            <p></p>
          </div>
          <div className="summary">
            <div className="income">
              <h2> Income</h2>
              <h3>{income}</h3>

            </div>
            <div className="expenses">
              <h2>Expenses</h2>
                <h3>{expense}</h3>
            </div>
          </div>
          <form className='add-transaction' onSubmit={onSubmit}>
              <input type="text" placeholder="Description" name="description" 
                      onChange={(e)=>dispatch({description:e.target.value, transactionAmount:state.transactionAmount, transactionType:state.transactionType})} 
                      required/>
              <input type="number" placeholder="Amount" name="amount" 
                      onChange={(e)=>dispatch({transactionAmount:e.target.value,description:state.description, transactionType:state.transactionType})} 
                      required/>
              <input type="radio" id="expense" name="radio" 
                      onChange={(e)=>dispatch({ transactionType:e.target.value, description:state.description, transactionAmount:state.transactionAmount })} value="expense" />
              <label htmlFor='expense'>Expense</label>
              <input type="radio" id="income" value="income" name="radio" 
                      onChange={(e)=>dispatch({transactionType:e.target.value, description:state.description, transactionAmount:state.transactionAmount})} />
              <label htmlFor='income'>Income</label>
              <button type="submit">Add Transaction</button>
          </form>
        </div>
          <div className="profile">
              {" "}
              <img className="profile-photo" src={Cookies.get("profilePhoto")} />
              <Link to ="../" >
              <button className="sign-out-button" onClick={()=>{removeCookies()}}>
                Sign Out
              </button>
              </Link>
          </div>
      </div>
      <div className="transactions">
            <button onClick={()=>getData()}>Click Me!</button>
            <ul>
              {transactions.map((item, index) => (
                <li key={index}>
                  <h3>{item.description}</h3>
                  <h4>Amount: {item.transactionAmount} <span style={{color: item.transactionType==="expense" ? "green":"red"}}>{item.transactionType}</span></h4>
                </li>
              ))}
          </ul>
      </div>
    </>
    
  )
}

export default ExpenseTracker