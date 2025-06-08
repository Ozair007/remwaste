import React from 'react';
import type { Skip } from '../types';

interface SelectionDrawerProps {
  skip: Skip | null;
}

export const SelectionDrawer: React.FC<SelectionDrawerProps> = ({ skip }) => {
  const drawerClasses = `fixed bottom-0 left-0 right-0 bg-slate-800/90 backdrop-blur-sm border-t border-slate-700 transition-transform duration-300 ease-in-out ${
    skip ? 'translate-y-0' : 'translate-y-full'
  }`;

  return (
    <div className={drawerClasses}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold sm:text-lg text-white">{skip?.name}</h3>
            <p className="text-slate-300 text-sm sm:text-base">
              £{skip?.price} / {skip?.days_included} day hire
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="text-slate-300 font-semibold py-2 px-4 sm:py-3 sm:px-8 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
              Back
            </button>
            <button className="bg-indigo-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-8 whitespace-nowrap rounded-lg shadow-md hover:bg-indigo-700 transition-colors cursor-pointer">
              Continue →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
