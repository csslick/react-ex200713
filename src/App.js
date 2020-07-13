import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Customers from './components/Customers';

function App() {
  const data = [
    { id: 1, name: 'name1', age: '11'},
    { id: 2, name: 'name2', age: '22'},
    { id: 3, name: 'name3', age: '33'},
  ]

  const [customers, setCustomers] = useState(data)

  useEffect(() => {
    console.log(customers)

  })

  const handleDelete = (id) => {
    // let new_customer = customers.filter(customer => customer.id !== 1);
    setCustomers(customers.filter(customer => customer.id !== id))
  }

  return (
    <div className='container'>
      <Header />
      <Customers 
        customers={customers} 
        handleDelete={handleDelete}
      />
      {/* <button onClick={()=> handleDelete(1)}>delete</button> */}
    </div>
  );
}

export default App;
