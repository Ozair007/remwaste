import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="mb-8 sm:mb-12">
      <h1 className="text-3xl sm:text-5xl font-bold text-white text-center">
        Choose Your Skip
      </h1>
      <p className="mt-4 sm:text-lg text-slate-300 text-center max-w-2xl mx-auto">
        Select the skip size that best suits your project needs. All prices
        include VAT.
      </p>
    </header>
  );
};
