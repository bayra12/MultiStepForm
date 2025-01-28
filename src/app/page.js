"use client";

import { useState } from "react";
import { StepOne } from "./components/stepOne";
import { StepTwo } from "./components/stepTwo";
import { StepThree } from "./components/stepThree";

export default function Home() {
const [step, setStep]= useState(1);

  return (
    <div className="w screen h-screen flex justify-center items-center bg-[#F4F4F4]">
      {step === 1 ? <StepOne setStep={setStep} /> : <></>}
      {step === 2 ? <StepTwo setStep={setStep} /> : <></>}
      {step === 3 ? <StepThree setStep={setStep} /> : <></>}
    </div>
  );
};