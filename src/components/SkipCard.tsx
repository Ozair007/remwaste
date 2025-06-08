import React from 'react';
import type { Skip } from '../types';
import { CalendarIcon, CheckCircleIcon, InfoIcon } from './icons/Icons';
import { skipImagesMap } from '../assets/images/skipImages.ts';

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: (skip: Skip) => void;
}

export const SkipCard: React.FC<SkipCardProps> = ({
  skip,
  isSelected,
  onSelect
}) => {
  const cardClasses = `relative bg-slate-800 rounded-xl border-2 p-6 cursor-pointer transition-all duration-300 
  ease-in-out transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-900/20 ${
    isSelected
      ? 'border-indigo-500 shadow-xl shadow-indigo-900/40'
      : 'border-slate-700'
  }`;

  return (
    <div onClick={() => onSelect(skip)} className={cardClasses}>
      {isSelected && (
        <div className="absolute -top-3 -right-3 bg-indigo-500 text-white rounded-full p-1.5">
          <CheckCircleIcon className="h-6 w-6" />
        </div>
      )}
      <div className="flex flex-col h-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {skip.name}
        </h2>
        <img
          src={
            skipImagesMap[
              skip.name.split(' ')[0] as keyof typeof skipImagesMap
            ] || skipImagesMap['default']
          }
          alt={skip.name}
          className="w-full h-full object-cover rounded-lg mb-4"
        />
        <div className="flex-grow">
          <div className="flex items-center text-slate-400">
            <InfoIcon className="h-5 w-5 mr-2 flex-shrink-0" />
            <p className="text-sm">{skip.short_description}</p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-700">
          <div className="flex justify-between items-center">
            <p className="text-sm text-slate-400 flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2" />
              {skip.days_included} day hire
            </p>
            <p className="text-3xl sm:text-4xl font-bold text-indigo-500">
              £{skip.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
