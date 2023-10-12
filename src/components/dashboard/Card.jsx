import React, { useEffect, useState } from 'react';
import { classNames, formatCurrency } from '../../utils';

const Card = ({ className, title, icon, value }) => {

  return (
    <div className="grid py-6 px-12 bg-white border border-gray-200 shadow-lg rounded-lg md:mb-5 flex items-center justify-center">
      <div className="grid grid-cols-5">
        <div className="my-auto ml-auto mr-8">
          <div className={classNames('h-12 w-12  rounded-full flex items-center justify-center', className)}>
            <div className={'h-6 w-8'}>
              {icon}
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-1 ">
          <h5 className="text-slate-200   justify-center">{title}</h5>
          <span className="font-semibold text-md">{formatCurrency(value)}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
