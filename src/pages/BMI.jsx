import React, { useState } from 'react';
import { Calculator, Scale, Heart, Info, AlertTriangle } from 'lucide-react';

const BMI = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('metric'); // 'metric' or 'imperial'
  const [bmiResult, setBmiResult] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const calculateBMI = () => {
    if (!height || !weight) return;

    let bmi;
    if (unit === 'metric') {
      // Metric: kg and cm
      const heightInMeters = height / 100;
      bmi = weight / (heightInMeters * heightInMeters);
    } else {
      // Imperial: lbs and inches
      bmi = (weight / (height * height)) * 703;
    }

    setBmiResult({
      value: bmi.toFixed(1),
      category: getBMICategory(bmi)
    });
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 25) return 'Normal weight';
    if (bmi >= 25 && bmi < 30) return 'Overweight';
    return 'Obesity';
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Underweight': return 'text-blue-400';
      case 'Normal weight': return 'text-green-400';
      case 'Overweight': return 'text-yellow-400';
      case 'Obesity': return 'text-red-400';
      default: return 'text-zinc-400';
    }
  };

  const getCategoryAdvice = (category) => {
    switch (category) {
      case 'Underweight':
        return "You may need to gain weight. Consider consulting a healthcare provider for dietary advice.";
      case 'Normal weight':
        return "Maintain your healthy weight with a balanced diet and regular exercise.";
      case 'Overweight':
        return "Consider making lifestyle changes to reach a healthier weight. Focus on diet and exercise.";
      case 'Obesity':
        return "It's important to consult with a healthcare provider about weight management strategies.";
      default:
        return "";
    }
  };

  const resetCalculator = () => {
    setHeight('');
    setWeight('');
    setBmiResult(null);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-500/20 rounded-full">
              <Calculator className="h-10 w-10 text-blue-500" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">BMI Calculator</h1>
          <p className="text-xl text-zinc-400">
            Calculate your Body Mass Index and understand what it means for your health
          </p>
        </div>

        {/* Calculator Card */}
        <div className="card mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-white">Calculate Your BMI</h2>
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="flex items-center text-zinc-400 hover:text-white transition-colors"
            >
              <Info className="h-5 w-5 mr-1" />
              <span>What is BMI?</span>
            </button>
          </div>

          {/* BMI Info */}
          {showInfo && (
            <div className="bg-zinc-700/50 p-4 rounded-lg mb-6">
              <p className="text-zinc-300 mb-2">
                <strong>Body Mass Index (BMI)</strong> is a measure of body fat based on height and weight that applies to adult men and women.
              </p>
              <ul className="text-zinc-300 list-disc list-inside space-y-1">
                <li><span className="text-blue-400">Underweight</span>: BMI less than 18.5</li>
                <li><span className="text-green-400">Normal weight</span>: BMI 18.5 to 24.9</li>
                <li><span className="text-yellow-400">Overweight</span>: BMI 25 to 29.9</li>
                <li><span className="text-red-400">Obesity</span>: BMI 30 or greater</li>
              </ul>
            </div>
          )}

          {/* Unit Toggle */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex bg-zinc-800 rounded-lg p-1">
              <button
                onClick={() => setUnit('metric')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${unit === 'metric' ? 'bg-zinc-700 text-white' : 'text-zinc-400 hover:text-white'}`}
              >
                Metric (kg, cm)
              </button>
              <button
                onClick={() => setUnit('imperial')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${unit === 'imperial' ? 'bg-zinc-700 text-white' : 'text-zinc-400 hover:text-white'}`}
              >
                Imperial (lbs, inches)
              </button>
            </div>
          </div>

          {/* Input Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-zinc-300 mb-2">
                {unit === 'metric' ? 'Height (cm)' : 'Height (inches)'}
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder={unit === 'metric' ? 'Enter height in cm' : 'Enter height in inches'}
                className="input-field w-full"
              />
            </div>
            <div>
              <label className="block text-zinc-300 mb-2">
                {unit === 'metric' ? 'Weight (kg)' : 'Weight (lbs)'}
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder={unit === 'metric' ? 'Enter weight in kg' : 'Enter weight in lbs'}
                className="input-field w-full"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={calculateBMI}
              disabled={!height || !weight}
              className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-blue-500 to-green-500"
            >
              <Calculator className="h-5 w-5" />
              Calculate BMI
            </button>
            <button
              onClick={resetCalculator}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              Reset
            </button>
          </div>

          {/* Results */}
          {bmiResult && (
            <div className="mt-8 p-6 bg-zinc-700/30 rounded-lg border border-zinc-600">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Your Results</h3>
              
              <div className="flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{bmiResult.value}</div>
                  <div className={`text-lg font-semibold ${getCategoryColor(bmiResult.category)}`}>
                    {bmiResult.category}
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-full h-3 mb-6 relative">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 via-green-500  to-red-500 rounded-full"
                  style={{ width: '100%' }}
                ></div>
                <div 
                  className="absolute top-1/2 w-2 h-6 bg-white rounded-full -translate-y-1/2"
                  style={{ 
                    left: `${Math.min(Math.max((parseFloat(bmiResult.value) / 40) * 100, 0), 100)}%` 
                  }}
                ></div>
              </div>

              <div className="grid grid-cols-4 text-xs text-zinc-400 mb-2">
                <div>Underweight</div>
                <div className="text-center">Normal</div>
                <div className="text-center">Overweight</div>
                <div className="text-right">Obesity</div>
              </div>

              <div className="p-4 bg-zinc-800/50 rounded-lg">
                <h4 className="font-medium text-white mb-2 flex items-center">
                  <Heart className="h-4 w-4 mr-2 text-red-400" />
                  Health Advice
                </h4>
                <p className="text-zinc-300">{getCategoryAdvice(bmiResult.category)}</p>
              </div>
            </div>
          )}
        </div>

        {/* Health Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Scale className="h-5 w-5 mr-2 text-blue-400" />
              Why BMI Matters
            </h3>
            <ul className="text-zinc-300 space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>BMI is a screening tool for weight categories</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Helps identify potential health risks</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Useful for tracking weight management progress</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-yellow-400" />
              Limitations
            </h3>
            <ul className="text-zinc-300 space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Doesn't distinguish between muscle and fat</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>May not be accurate for athletes or elderly</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Consult healthcare provider for comprehensive assessment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="card bg-zinc-800/50 border-zinc-700 mt-8">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-zinc-300 text-sm">
                This BMI calculator provides general information only. It is not a substitute for professional 
                medical advice, diagnosis, or treatment. Always seek the advice of your physician or other 
                qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMI;