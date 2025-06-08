import React from 'react';
import { CheckCircleIcon } from './icons/Icons';

export const Stepper: React.FC = () => {
  const steps = [
    'Postcode',
    'Waste Type',
    'Select Skip',
    'Permit Check',
    'Choose Date',
    'Payment'
  ];
  const currentStep = 'Select Skip';

  return (
    <div className="flex justify-center mb-8 sm:mb-12">
      <nav aria-label="Progress">
        <ol role="list" className="flex flex-wrap items-center justify-center">
          {steps.map((step, stepIdx) => (
            <li
              key={step}
              className={`relative mb-8 flex justify-center items-center ${
                stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-16 md:pr-20' : ''
              }`}
            >
              {stepIdx <= steps.indexOf(currentStep) ? (
                <>
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="h-0.5 w-full bg-indigo-600" />
                  </div>
                  <a
                    href="#"
                    className="relative flex h-4 w-4 sm:h-8 sm:w-8 items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900"
                  >
                    <span className="text-white">
                      <CheckCircleIcon className="h-5 w-5" />
                    </span>
                    <span className="sr-only">{step}</span>
                  </a>
                </>
              ) : (
                <>
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="h-0.5 w-full bg-slate-700" />
                  </div>
                  <a
                    href="#"
                    className="relative flex h-4 w-4 sm:h-8 sm:w-8 items-center justify-center text-center bg-slate-800 border-2 border-slate-700 rounded-full hover:border-slate-500"
                  >
                    <span className="sr-only">{step}</span>
                  </a>
                </>
              )}
              {/* --- FIXES APPLIED TO THE LABEL SPAN --- */}
              <span className="absolute top-full text-wrap flex justify-center items-center mt-2 text-xs leading-tight text-slate-400">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};
{
  /* <a
  href="#"
  className="relative flex h-4 w-4 sm:h-8 sm:w-8  bg-slate-800 border-2 border-slate-700 rounded-full hover:border-slate-500"
>
  <span className="sr-only">{step}</span>
  <span className="absolute top-full mt-2 w-24 text-xs text-slate-400">
    {step}
  </span>
</a>; */
}
