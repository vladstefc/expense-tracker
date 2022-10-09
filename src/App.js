import './App.css';

import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpenses';
import { Header } from './components/Header';
import { TransactionList } from './components/TransactionList';

import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
      </div>
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
