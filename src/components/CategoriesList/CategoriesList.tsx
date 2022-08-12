import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { IFilterItem } from '../../models/models';
import Category from '../Category/Category';

function CategoriesList() {

    const { FILTER_MAP, openModal, clearCompleted } = useContext(AppContext)

    const CategoriesList = FILTER_MAP.map((item: IFilterItem) => (
        <Category key={item.filterName} name={item.filterName} />
      ))

    return (
        <div className="text-3xl flex flex-col items-start">
          {CategoriesList}
          <button 
            className="relative mb-7 text-slate-400 text-left whitespace-nowrap"
            onClick={openModal}
          >
            <span className='absolute -translate-x-8'>+</span> New Category
          </button>
          <button 
            className="mb-7 text-slate-400 text-left whitespace-nowrap"
            onClick={clearCompleted}
          >
            Clear Completed
          </button>
        </div>
    );
}

export default CategoriesList;