import { useState } from "react";



export const StepTwo = (props) => {
    const {setStep}=props
  const [eMail, setEmail] = useState("");
  
  const onContinue = () => {
    if (password.length === 0) {
      alert("stop it get some help");
      return;
    }
    setStep(3)
    if (phoneNumber.length === 0) {
      setErrors((prev) => ({
        ...prev,
        phoneNumber: "phone number oruulna uu",
      }));
    }
    if (passWord.length === 0) {
      setErrors((prev) => ({ ...prev, passWord: "password oruulna uu" }));
    }
    if (confirmPassword.length === 0) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "password taarahgui bna",
      }));
    }
  };

  
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passWord, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});


  const onEmailChange = (e) => setEmail(e.target.value);
  const onPhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);
  const onConfirmPassword = (e) => setConfirmPassword(e.target.value);

  return (
    <div className="w-[480px] h-[655px] bg-white border rounded-xl p-8">
      <img className="w-[60px] h-[60px]" src="/pinecone-logo.png" />
      <h1 className="text-2xl font-semibold">Join Us! 😎</h1>
      <h3 className="text-lg font-normal text-[#8E8E8E]">
        Please provide all current information accurately.
      </h3>

      <div className="flex flex-col mt-5">
        <label htmlFor="email">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="Email"
          type="@"
          onChange={onEmailChange}
          className="w-full border py-3 px-2 rounded-xl"
          placeholder="Placeholder"
        />
        {errors.eMail ? <p className="text-red-500">{errors.eMail}</p> : <></>}
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="phonenumber">
          Phone number <span className="text-red-500">*</span>
        </label>
        <input
          id="Email"
          type="number"
          onChange={onPhoneNumberChange}
          className="w-full border py-3 px-2 rounded-xl"
          placeholder="Placeholder"
        />
        {errors.phoneNumber ? (
          <p className="text-red-500">{errors.phoneNumber}</p>
        ) : (
          <></>
        )}
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="password">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          id="password"
          type="password"
          value={passWord}
          onChange={onPasswordChange}
          className="w-full border py-3 px-2 rounded-xl"
          placeholder="Placeholder"
        />
        {errors.passWord ? (
          <p className="text-red-500">{errors.passWord}</p>
        ) : (
          <></>
        )}
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="confirmpassword">
          Confirm password <span className="text-red-500">*</span>
        </label>
        <input
          id="confirmpassword"
          type="password"
          value={confirmPassword}
          onChange={onConfirmPassword}
          className="w-full border py-3 px-2 rounded-xl"
          placeholder="Placeholder"
        />

        {errors.confirmPassword ? (
          <p className="text-red-500">{errors.confirmPassword}</p>
        ) : (
          <></>
        )}
      </div>

      <button
        onClick={onContinue}
        className="border w-full bg-black text-white h-16 mt-10 rounded-xl font-bold text-2xl"
      >
        Continue
      </button>
    </div>
  );
};
