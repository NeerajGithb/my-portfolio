"use client"; // Enables client-side interactivity

import React, { useState } from "react";

const SupportPage = () => {
  const [name, setName] = useState(""); // State for name
  const [amount, setAmount] = useState(""); // State for amount

  // Function to load the Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Function to handle payment
  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Failed to load Razorpay SDK. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_VBgc6EPAfZY1Yg", // Replace with your Razorpay Key ID
      amount: amount * 100, // Razorpay works with paisa, so multiply by 100
      currency: "INR",
      name: "Support Neeraj", // Customize as per your preference
      description: "Contribution Payment",
      image: "/your-logo.png", // Optional: Add a logo path or remove this field
      handler: (response) => {
        alert(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
        // Send payment details to your server for verification here
      },
      prefill: {
        name: name,
      },
      theme: {
        color: "#528FF0",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-10">
      <div className="max-w-md mx-auto p-6  bg-white shadow-lg rounded-md mt-20 md:mt-16 lg:mt-12 sm:p-4">
        <h2 className="text-2xl font-semibold text-center mb-6 lg:text-3xl sm:text-xl">
          Support To Web Development
        </h2>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter amount in INR"
          />
        </div>
        <button
          onClick={handlePayment}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline lg:py-3">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default SupportPage;
