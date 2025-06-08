import React from 'react';
import type { Skip } from '../types';
import { SkipCard } from './SkipCard';

interface SkipListProps {
  skips: Skip[];
  isLoading: boolean;
  error: string | null;
  selectedSkip: Skip | null;
  onSelectSkip: (skip: Skip) => void;
}

export const SkipList: React.FC<SkipListProps> = ({
  skips,
  isLoading,
  error,
  selectedSkip,
  onSelectSkip
}) => {
  if (isLoading) {
    return (
      <div className="text-center">
        <p className="text-lg text-slate-400">Loading skip options...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="text-center bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-lg"
        role="alert"
      >
        <strong className="font-bold">Oops! </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skips.map((skip) => (
        <SkipCard
          key={skip.id}
          skip={skip}
          isSelected={selectedSkip?.id === skip.id}
          onSelect={onSelectSkip}
        />
      ))}
    </div>
  );
};
