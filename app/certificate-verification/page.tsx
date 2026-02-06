"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import { FaWhatsapp } from "react-icons/fa6";
import Confetti from "react-confetti";

const CertificateVerification: React.FC = () => {
  // Input States
  const [name, setName] = useState<string>("");
  const [regNo, setRegNo] = useState<string>("");

  // Status & Data States
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "not_found"
  >("idle");
  const [certificateData, setCertificateData] = useState<any>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🎉 Animation State
  const [showConfetti, setShowConfetti] = useState(false);

  const handleVerify = async () => {
    if (!name.trim() || !regNo.trim()) {
      alert("Please enter both Name and Registration Number");
      return;
    }

    setStatus("loading");

    try {
      const { data, error } = await supabase
        .from("Certificate")
        .select("*")
        .ilike("Name", name.trim())
        .ilike("Registration ", regNo.trim());

      if (error) {
        console.error("Database Error:", error.message);
        setStatus("error");
      } else if (!data || data.length === 0) {
        setStatus("not_found");
        setCertificateData(null);
      } else {
        setStatus("success");
        setCertificateData(data[0]);
      }

      setIsModalOpen(true);
    } catch (err) {
      console.error("System Error:", err);
      setStatus("error");
      setIsModalOpen(true);
    }
  };

  // 🎊 Trigger animation AFTER result is shown
  useEffect(() => {
    if (isModalOpen && status !== "loading" && status !== "idle") {
      setShowConfetti(true);

      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isModalOpen, status]);

  return (
    <div className="w-full bg-white">
      <div className="relative min-h-screen bg-gray-50 flex items-center justify-center p-4 overflow-hidden">

        {/* 🎉 LEFT SIDE CONFETTI */}
        {showConfetti && (
          <Confetti
            recycle={false}
            numberOfPieces={140}
            gravity={0.3}
            initialVelocityX={{ min: 6, max: 12 }}
            confettiSource={{
              x: 0,
              y: 0,
              w: 10,
              h: window.innerHeight,
            }}
          />
        )}

        {/* 🎉 RIGHT SIDE CONFETTI */}
        {showConfetti && (
          <Confetti
            recycle={false}
            numberOfPieces={140}
            gravity={0.3}
            initialVelocityX={{ min: -12, max: -6 }}
            confettiSource={{
              x: window.innerWidth,
              y: 0,
              w: 10,
              h: window.innerHeight,
            }}
          />
        )}

        {/* Main Verification Card */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-lg z-10">
          <h2 className="text-[#333333] text-2xl md:text-3xl font-bold text-center mb-8">
            Certificate Verification
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-[#333333] text-[15px] font-medium mb-3">
                Enter Your Name (as per Certificate):
              </label>
              <input
                type="text"
                placeholder="e.g. Ali"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-[#eef4ff] border border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 transition-all"
              />
            </div>

            <div>
              <label className="block text-[#333333] text-[15px] font-medium mb-3">
                Enter Your Registration No:
              </label>
              <input
                type="text"
                placeholder="e.g. 123"
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
                className="w-full px-4 py-3 bg-[#eef4ff] border border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 transition-all"
              />
            </div>

            <button
              onClick={handleVerify}
              disabled={status === "loading"}
              className="w-full bg-[#0073a8] hover:bg-[#005f8a] text-white font-semibold py-3.5 rounded-lg transition duration-200 mt-4 text-lg disabled:bg-gray-400 shadow-md"
            >
              {status === "loading" ? "Verifying..." : "Verify Certificate"}
            </button>
          </div>
        </div>

        {/* Overlay Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden transition-all duration-300">
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            ></div>

            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 text-center animate-in fade-in zoom-in duration-300">
              <div className="flex justify-center mb-4">
                <div
                  className={`${
                    status === "success"
                      ? "bg-green-500 shadow-green-200"
                      : "bg-red-500 shadow-red-200"
                  } w-16 h-16 rounded-full flex items-center justify-center shadow-lg`}
                >
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    {status === "success" ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    )}
                  </svg>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
                {status === "success"
                  ? "Verified Successfully!"
                  : status === "not_found"
                  ? "Record Not Found"
                  : "System Error"}
              </h2>

              <p className="text-gray-600 mb-6 text-sm md:text-base">
                {status === "success"
                  ? "The Certificate Record associated with this Registration Number has been successfully verified."
                  : status === "not_found"
                  ? "No Certificate record was found matching the provided details."
                  : "Unable to connect with the server."}
              </p>

              {status === "success" && certificateData && (
                <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 mb-6 text-left text-sm">
                  <p className="flex justify-between">
                    <span className="font-semibold text-blue-800">Name:</span>
                    <span>{certificateData.Name}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold text-blue-800">Course:</span>
                    <span>{certificateData.Course}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold text-blue-800">Batch:</span>
                    <span>{certificateData.Batch || "N/A"}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold text-blue-800">
                      Registration No:
                    </span>
                    <span>{certificateData.Registration}</span>
                  </p>
                </div>
              )}

              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Floating WhatsApp Button (UNCHANGED) */}
      <a
        href="https://wa.me/923377774856?text=Hello%20ICT%20Team"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100]"
      >
        <div className="bg-[#25D366] p-4 rounded-full shadow-2xl">
          <FaWhatsapp size={35} className="text-white" />
        </div>
      </a>
    </div>
  );
};

export default CertificateVerification;
