import React, { useState } from 'react';
import { useSkips } from '../hooks/useSkips';
import type { Skip } from '../types';
import { Header } from '../components/Header';
import { Stepper } from '../components/Stepper';
import { SkipList } from '../components/SkipList';
import { SelectionDrawer } from '../components/SelectionDrawer';

const SkipPage: React.FC = () => {
  const { skips, isLoading, error } = useSkips();
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  const handleSelectSkip = (skip: Skip) => {
    if (selectedSkip?.id === skip.id) {
      setSelectedSkip(null);
    } else {
      setSelectedSkip(skip);
    }
  };

  return (
    <div className="bg-slate-900 text-gray-100 min-h-screen font-sans antialiased pb-32">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <Stepper />
        <Header />
        <main>
          <SkipList
            skips={skips}
            isLoading={isLoading}
            error={error}
            selectedSkip={selectedSkip}
            onSelectSkip={handleSelectSkip}
          />
        </main>
        <SelectionDrawer skip={selectedSkip} />
      </div>
    </div>
  );
};

export default SkipPage;
