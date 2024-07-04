import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-4/5">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-gray-700 mb-4">
              Welcome to our Pets Website! We are dedicated to helping you find
              the perfect companion. Our mission is to connect pet lovers with
              their ideal pets, whether it &apos s a dog, cat, bird, or any other
              animal.
            </p>
            <p className="text-gray-700 mb-4">
              Our team is passionate about animals and committed to providing
              the best resources and information to help you make informed
              decisions about pet ownership. We believe that every pet deserves
              a loving home, and we strive to make that a reality.
            </p>
            <p className="text-gray-700 mb-4">
              Thank you for visiting our website. We hope you find the perfect
              pet to bring joy and companionship into your life.
            </p>
            <div className="flex justify-center mt-6">
              <img
                src="https://placekitten.com/400/300"
                alt="Cute kitten"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
