import { useState } from "react";

export const Success = () => {
  
  return (
    <div className="w-[480px] h-[655px] bg-white border rounded-xl p-8">
      <img className="w-[60px] h-[60px]" src="/pinecone-logo.png" />
      <h1 className="text-2xl font-semibold">You're All Set 🔥</h1>
      <h3 className="text-lg font-normal text-[#8E8E8E]">
      We have received your submission. Thank you!
      </h3>

    </div>
  );
}; 