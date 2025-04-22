import React from 'react';

const Cards = ({ item }) => {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-[300px] h-[450px] bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="h-[200px] w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body flex flex-col justify-between">
          <h2 className="card-title text-lg">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p className="text-sm">{item.title}</p>
          <div className="card-actions justify-between items-end">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-3 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
