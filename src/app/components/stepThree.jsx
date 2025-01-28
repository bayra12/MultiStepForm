import { useState } from "react";
// import DateInput from "./DateInput"; // Import your DateInput component
// import { CalendarDate } from "./CalendarUtils"; // Import CalendarDate or use an alternative date utility

export const StepThree = (props) => {
  const { setStep } = props

  // State to store the date of birth, profile image, and errors
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [errors, setErrors] = useState({});

  // Handle profile image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setErrors({ profileImage: "Please upload a valid image file." });
        return;
      }
      setProfileImage(URL.createObjectURL(file));
      setErrors((prev) => ({ ...prev, profileImage: null }));
    }
  };

  // Handle form submission
  const onSubmit = () => {
    const validationErrors = {};

    // Validate date of birth
    if (!dateOfBirth) {
      validationErrors.dateOfBirth = "Date of birth is required.";
    } else {
      const today = new Date();
      const dob = new Date(
        dateOfBirth.year,
        dateOfBirth.month - 1,
        dateOfBirth.day
      ); // Adjust month (0-based)
      const age = today.getFullYear() - dob.getFullYear();
      const isUnderage =
        today.getMonth() < dob.getMonth() ||
        (today.getMonth() === dob.getMonth() &&
          today.getDate() < dob.getDate());

      if (age < 18 || (age === 18 && isUnderage)) {
        validationErrors.dateOfBirth = "You must be at least 18 years old.";
      }
    }

    // Validate profile image
    if (!profileImage) {
      validationErrors.profileImage = "Profile image is required.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear errors and proceed
    setErrors({});
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="w-[480px] h-[750px] bg-white border rounded-xl p-8">
      <img
        className="w-[60px] h-[60px]"
        src="/pinecone-logo.png"
        alt="Pinecone logo"
      />
      <h1 className="text-2xl font-semibold">Join Us! 😎</h1>
      <h3 className="text-lg font-normal text-[#8E8E8E]">
        Please provide all current information accurately.
      </h3>

      {/* Date of Birth Input */}
      <div className="flex flex-col mt-5">
        <label htmlFor="dateofbirth">
          Date of birth <span className="text-red-500">*</span>
        </label>
        <input
          className="w-full border py-3 px-2 rounded-xl"
          label="Birth date"
          placeholderValue={dateOfBirth}
          onChange={setDateOfBirth} // Handle date selection
        />
        {errors.dateOfBirth && (
          <p className="text-red-500 text-sm mt-2">{errors.dateOfBirth}</p>
        )}
      </div>

      {/* Profile Image Upload */}
      <div className="flex flex-col items-center mt-4">
        <label className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden cursor-pointer">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-500">Upload</span>
          )}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
        {errors.profileImage && (
          <p className="text-red-500 text-sm mt-2">{errors.profileImage}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        onClick={onSubmit}
        className="border w-full bg-black text-white h-16 mt-10 rounded-xl font-bold text-2xl"
      >
        Continue
      </button>
    </div>
  );
};
