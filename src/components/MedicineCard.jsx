import React from 'react';
import { AlertCircle, Clock, DollarSign, AlertTriangle } from 'lucide-react';

const MedicineCard = ({ medicine }) => {
  return (
    <div className="card animate-fade-in">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        {medicine.name}

        <span className="ml-2 text-sm font-normal bg-zinc-700 text-zinc-300 px-3 py-1 rounded">
          {medicine.use}
        </span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="flex items-start space-x-2">
          <Clock className="h-5 w-5 text-blue-400 mt-0.5" />
          <div>
            <h4 className="font-medium text-zinc-300">Dosage & Timing</h4>
            <p className="text-zinc-400">{medicine.dose}</p>
            <p className="text-zinc-400">{medicine.timing}</p>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <DollarSign className="h-5 w-5 text-green-400 mt-0.5" />
          <div>
            <h4 className="font-medium text-zinc-300">Price Information</h4>
            <p className="text-zinc-400">{medicine.price}</p>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5" />
          <div>
            <h4 className="font-medium text-zinc-300">Side Effects</h4>
            <ul className="list-disc list-inside text-zinc-400">
              {medicine.sideEffects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
          </div>
        </div>

        {medicine.warnings && (
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5" />
            <div>
              <h4 className="font-medium text-zinc-300">Warnings</h4>
              <ul className="list-disc list-inside text-zinc-400">
                {medicine.warnings.map((warning, index) => (
                  <li key={index}>{warning}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicineCard;