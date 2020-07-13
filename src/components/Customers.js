import React from 'react';
import Customer from './Customer';

const Customers = ({customers, handleDelete}) => {
  return (
    <div>
      <ul>
        {
          customers.map((item) => {
            return <Customer 
            key={item.id} 
            item={item} 
            handleDelete={handleDelete}
            />
          })
        }
      </ul>
    </div>
  );
};

export default Customers;