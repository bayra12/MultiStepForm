import { useState } from "react";

export const StepOne = ({setStep}) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [userName, setUserName] = useState("");
  const [errors, setErrors] = useState({});

  const onContinue = () => {
    if (firstName.length === 0) {
      setErrors({ firstName: "firstname oruulna uu" });
    } 
    if (lastName.length === 0) {
      setErrors((prev)=> ({...prev,  lastName: "lastname oruulna uu" }));
    }
    if (userName.length === 0) {
      setErrors((prev)=> ({...prev,  userName: "username oruulna uu" }));
    }
    setStep(2)
  };

  const onFirstNameChange = (e) => setFirstName(e.target.value);
  const onLastNameChange = (e) => setLastName(e.target.value);
  const onUserNameChange = (e) => setUserName(e.target.value);

  return (
    <div className="w-[480px] h-[655px] bg-white border rounded-xl p-8">
      <img className="w-[60px] h-[60px]" src="/pinecone-logo.png" />
      <h1 className="text-2xl font-semibold">Join Us! 😎</h1>
      <h3 className="text-lg font-normal text-[#8E8E8E]">
        Please provide all current information accurately.
      </h3>

      <div className="flex flex-col mt-5">
        <label htmlFor="firstname">
          First name <span className="text-red-500">*</span>
        </label>
        <input
          id="firstname"
          onChange={onFirstNameChange}
          className="w-full border py-3 px-2 rounded-xl"
          placeholder="Placeholder"
        />
        {errors.firstName ? (
          <p className="text-red-500">{errors.firstName}</p>
        ) : (
          <></>
        )}
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="lastname">
          Last name <span className="text-red-500">*</span>
        </label>
        <input
          id="lastname"
          onChange={onLastNameChange}
          className="w-full border py-3 px-2 rounded-xl"
          placeholder="Placeholder"
        />
        {errors.lastName ? (
          <p className="text-red-500">{errors.lastName}</p>
        ) : (
          <></>
        )}
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="Username">
           Username <span className="text-red-500">*</span>
        </label>
        <input
          id="username"
          onChange={onUserNameChange}
          className="w-full border py-3 px-2 rounded-xl"
          placeholder="Placeholder"
        />
        {errors.userName ? (
          <p className="text-red-500">{errors.userName}</p>
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
