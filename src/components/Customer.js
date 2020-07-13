import React from 'react';

const Customer = ({item, handleDelete}) => {
  return (
    <div>
      <p>{item.id}</p>
      <p>{item.name}</p>
      <p>{item.age}</p>
      <button onClick={()=> handleDelete(item.id)}>delete</button>
    </div>
  );
};

export default Customer;