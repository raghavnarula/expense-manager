import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Auth from './pages/auth/'
import ExpenseTracker from './pages/expense-tracker/index'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/expenses" element={<ExpenseTracker />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;