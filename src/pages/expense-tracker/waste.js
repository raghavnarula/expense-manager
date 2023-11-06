const index = async() => {
  
    const [cookies, setCookie] = useCookies(['cookie-name']);
    const {addTransaction} = useAddTransaction(); 
    const {allTransactions}= useGetTransactions()
  
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
  
  
    // const getData = async ()=>{
    //   const querySnapshot = await allTransactions(cookies.userID)
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc.id, " => ", doc.data(),"==");
    //   });
    // }
  
    const onSubmit = (e) => {
      e.preventDefault()
      addTransaction(state.description,state.transactionAmount,state.transactionType)
      console.log("Done!")
    }
    return (
      /*
      <>
        <div className="summary">
          <div className="income">
            <h4> Income</h4>
            <p>$00</p>
          </div>
          <div className="expenses">
            <h4> Expenses</h4>
            <p>$00</p>
          </div>
        </div>
        <div className="expense-tracker">
          <div className="container">
              <h1>Expense Tracker</h1>
            <div className="balance">
              <h3>Balance</h3>
              <h2>0.00$</h2>
            </div>
            <div className="summary">
              <div className="income">
                <h4>Income</h4>
                <p>0.00$</p>
              </div>
              <div className="expenses">
                <h4>Income</h4>
                <p>0.00$</p>
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
              <br/>
            </div>
          </div>
        </div>
      </>
      */
     <>
     <h1>Helo</h1>
     </>
    )
  }
  
  
  // import React from 'react'


























  // const allIncome = async()=>{
  //   const all_income = query(clc, where("userID", "==", cookies.userID), where("transactionType", "==", 'income'));
  //   const income_snapshot = await getDocs(all_income);

  //   let newIncome = 0;
  //   let newBalance = transactions.balance; // Assuming you already have a balance in transactions

  //   income_snapshot.forEach((doc) => {
  //     const transactionAmount = parseInt(doc.data().transactionAmount);
  //     newIncome += transactionAmount;
  //     newBalance += transactionAmount;
  //   });

  //   const updatedTransactions = {
  //     ...transactions,
  //     income: newIncome,
  //     balance: newBalance,
  //   };
  
  //   setTransactions(updatedTransactions);
  // } 

  // const allExpenses = async()=>{
  //   const all_expenses = query(clc, where("userID", "==", cookies.userID), where("transactionType", "==", 'expense'));
  //   const expense_snapshot = await getDocs(all_expenses);
    
  //   let newExpense = 0;
  //   let newBalance = transactions.balance; // Assuming you already have a balance in transactions

  //   expense_snapshot.forEach((doc) => {
  //     const transactionAmount = parseInt(doc.data().transactionAmount);
  //     newExpense += transactionAmount;
  //     newBalance -= transactionAmount;
  //   });

  //   const updatedTransactions = {
  //     ...transactions,
  //     income: newExpense,
  //     balance: newBalance,
  //   };
    
  //     setTransactions(updatedTransactions);
  // }
