"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function HealthPredictor() {
  const [formData, setFormData] = useState({
    age: 45,
    systolic: 120,
    diastolic: 80,
    glucose: 100,
    bmi: 25,
  });

  const [prediction, setPrediction] = useState<{
    risk: string;
    percentage: number;
    color: string;
  } | null>(null);

  const handleChange = (field: string, value: number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const runPrediction = () => {
    // Simple risk calculation model
    const ageRisk = formData.age > 60 ? 20 : formData.age > 45 ? 15 : 10;
    const bpRisk =
      formData.systolic > 140 || formData.diastolic > 90
        ? 25
        : formData.systolic > 130 || formData.diastolic > 85
          ? 15
          : 5;
    const glucoseRisk =
      formData.glucose > 200 ? 30 : formData.glucose > 126 ? 20 : 5;
    const bmiRisk =
      formData.bmi > 30 ? 25 : formData.bmi > 25 ? 15 : 10;

    const totalRisk = Math.min(100, ageRisk + bpRisk + glucoseRisk + bmiRisk);

    let riskLevel = "Low";
    let color = "green";

    if (totalRisk >= 70) {
      riskLevel = "Critical";
      color = "red";
    } else if (totalRisk >= 50) {
      riskLevel = "High";
      color = "orange";
    } else if (totalRisk >= 30) {
      riskLevel = "Moderate";
      color = "yellow";
    }

    setPrediction({
      risk: riskLevel,
      percentage: Math.round(totalRisk),
      color,
    });
  };

  return (
    <section className="relative z-20 bg-[#121212] py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-24 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 flex flex-col items-center text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4 font-medium">Live Demonstration</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
            style={{ fontFamily: "var(--font-space)" }}
          >
            AI in Action.
          </h2>
          <p className="text-white/50 text-sm sm:text-base md:text-lg max-w-2xl px-2">
            A client-side health risk prediction model. Enter patient vitals to see AI-driven risk assessment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-3xl p-6 sm:p-10 md:p-16 backdrop-blur-xl"
        >
          <h3
            className="text-2xl sm:text-3xl font-semibold text-white/90 mb-8 text-center"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Health Risk Predictor v1.0
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div>
              <p className="text-white/70 font-semibold mb-6 text-center">Patient Vitals</p>
              <div className="space-y-6">
                {[
                  { label: "Age", field: "age", unit: "years", min: 0, max: 120 },
                  { label: "Systolic BP", field: "systolic", unit: "mmHg", min: 70, max: 200 },
                  { label: "Diastolic BP", field: "diastolic", unit: "mmHg", min: 40, max: 130 },
                  { label: "Glucose", field: "glucose", unit: "mg/dL", min: 50, max: 300 },
                  { label: "BMI", field: "bmi", unit: "kg/m²", min: 10, max: 50 },
                ].map((input) => (
                  <div key={input.field}>
                    <label className="text-white/60 text-sm font-medium block mb-2">
                      {input.label}
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min={input.min}
                        max={input.max}
                        value={formData[input.field as keyof typeof formData]}
                        onChange={(e) =>
                          handleChange(input.field, parseInt(e.target.value))
                        }
                        className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #4D94FF 0%, #4D94FF ${
                            ((formData[input.field as keyof typeof formData] - input.min) / (input.max - input.min)) * 100
                          }%, rgba(255,255,255,0.1) ${
                            ((formData[input.field as keyof typeof formData] - input.min) / (input.max - input.min)) * 100
                          }%, rgba(255,255,255,0.1) 100%)`,
                        }}
                      />
                      <span className="text-white/70 text-sm w-20 text-right">
                        {formData[input.field as keyof typeof formData]} {input.unit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={runPrediction}
                className="w-full mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(79,130,255,0.5)] transition-all duration-300"
              >
                Run Prediction
              </button>
            </div>

            {/* Prediction Result */}
            <div className="flex items-center justify-center">
              {prediction ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="15" />
                      <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke={
                          prediction.color === "red"
                            ? "#EF4444"
                            : prediction.color === "orange"
                              ? "#F97316"
                              : prediction.color === "yellow"
                                ? "#EAB308"
                                : "#22C55E"
                        }
                        strokeWidth="15"
                        strokeDasharray={`${(prediction.percentage / 100) * 565} 565`}
                        strokeLinecap="round"
                        style={{ transform: "rotate(-90deg)", transformOrigin: "100px 100px" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <p className="text-4xl font-bold text-white">{prediction.percentage}%</p>
                      <p className="text-white/60 text-sm mt-1">Risk Score</p>
                    </div>
                  </div>
                  <p
                    className="text-2xl font-bold mb-2"
                    style={{
                      color:
                        prediction.color === "red"
                          ? "#EF4444"
                          : prediction.color === "orange"
                            ? "#F97316"
                            : prediction.color === "yellow"
                              ? "#EAB308"
                              : "#22C55E",
                    }}
                  >
                    {prediction.risk} Risk
                  </p>
                  <p className="text-white/50 text-sm">Based on current vitals</p>
                </motion.div>
              ) : (
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
                    <p className="text-white/30 text-sm">Enter values and run prediction</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
