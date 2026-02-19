"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone, ArrowRight, Loader2, BookOpen } from "lucide-react";

type Course = { value: string; label: string };
type Step = "name" | "phone" | "email" | "program" | "city" | "education" | "reason" | "success";

export default function LeadForm({ courses }: { courses: Course[] }) {
  const [step, setStep] = useState<Step>("name");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    city: "",
    education: "",
    reason: "",
  });
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const educationOptions = [
    { value: "matric", label: "Matric" },
    { value: "intermediate", label: "Intermediate" },
    { value: "bachelors", label: "Bachelor's" },
    { value: "masters", label: "Master's" },
    { value: "phd", label: "PhD" },
  ];

  // Focus input on step change
  useEffect(() => {
    const timer = setTimeout(() => {
      if (step === "reason") {
        textareaRef.current?.focus();
      } else if (step !== "program" && step !== "education" && step !== "success") {
        inputRef.current?.focus();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [step]);

  const steps: Step[] = ["name", "phone", "email", "program", "city", "education", "reason"];
  const currentStepIndex = steps.indexOf(step);
  const progress = step === "success" ? 100 : ((currentStepIndex + 1) / steps.length) * 100;

  const validateStep = (): boolean => {
    setError("");

    switch (step) {
      case "name":
        if (!formData.name.trim() || formData.name.trim().length < 2) {
          setError("Please enter your name");
          return false;
        }
        break;
      case "phone":
        const phoneDigits = formData.phone.replace(/\D/g, "");
        if (phoneDigits.length < 10) {
          setError("Please enter a valid phone number");
          return false;
        }
        break;
      case "email":
        // Email is required
        if (!formData.email || !formData.email.trim()) {
          setError("Please enter your email address");
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          setError("Please enter a valid email");
          return false;
        }
        break;
      case "program":
        if (!formData.program) {
          setError("Please select a Course");
          return false;
        }
        break;
      case "city":
        if (!formData.city.trim() || formData.city.trim().length < 2) {
          setError("Please enter your city");
          return false;
        }
        break;
      case "education":
        if (!formData.education) {
          setError("Please select your education level");
          return false;
        }
        break;
      case "reason":
        if (!formData.reason.trim()) {
          setError("Please share your reason");
          return false;
        }
        break;
    }
    return true;
  };

  const nextStep = () => {
    if (!validateStep()) return;

    const stepOrder: Step[] = ["name", "phone", "email", "program", "city", "education", "reason", "success"];
    const currentIndex = stepOrder.indexOf(step);
    if (currentIndex < stepOrder.length - 1) {
      if (stepOrder[currentIndex + 1] === "success") {
        handleSubmit();
      } else {
        setStep(stepOrder[currentIndex + 1]);
      }
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStep("success");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && step !== "reason") {
      e.preventDefault();
      nextStep();
    }
  };

  // Get selected programme label
  const getSelectedProgrammeLabel = () => {
    const selected = courses.find(p => p.value === formData.program);
    return selected?.label || "your selected programme";
  };

  // Get first name
  const firstName = formData.name.split(" ")[0];

  // Success Screen
  if (step === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#3D4098] to-[#2e317a] flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
          <div className="w-full max-w-sm text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-scale-in">
              <Check className="w-10 h-10 text-[#15A959]" strokeWidth={3} />
            </div>

            <h1 className="text-3xl font-bold text-white mb-3">
              Welcome, {firstName}!
            </h1>

            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              You&apos;ve taken the first step towards your career in <span className="font-semibold">{getSelectedProgrammeLabel()}</span>.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 mb-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white/70 text-sm">We&apos;ll call you at</p>
                  <p className="text-white font-semibold text-lg">{formData.phone}</p>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Our admissions team will reach out within 24 hours, {firstName}. Keep your phone nearby!
              </p>
            </div>

            {/* View Courses Button */}
            <Link
              href="/courses"
              className="w-full flex items-center justify-center gap-2 bg-[#15A959] text-white py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:bg-[#129a4d] active:scale-[0.98] mb-4"
            >
              <BookOpen className="w-5 h-5" />
              <span>Explore All Courses</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Progress Bar */}
      <div className="h-1 bg-gray-100">
        <div
          className="h-full bg-[#3D4098] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Logo - Small, Non-distracting */}
      <div className="px-6 py-4">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="ict"
          width={200}
          height={64}
          className="opacity-70"
        />
      </Link>
      </div>

      {/* Main Form Area */}
      <div className="flex-1 flex flex-col justify-center px-6 pb-8">
        <div className="w-full max-w-md mx-auto">
          {/* Step: Name */}
          {step === "name" && (
            <div className="animate-fade-in-up">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                What&apos;s your name?
              </h1>
              <p className="text-gray-500 mb-8">
                Let&apos;s start with your full name
              </p>
              <input
                ref={inputRef}
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onKeyDown={handleKeyDown}
                placeholder="Enter your full name"
                className="w-full text-xl sm:text-2xl py-4 border-b-2 border-gray-200 focus:border-[#3D4098] outline-none transition-colors placeholder:text-gray-300"
                autoComplete="name"
              />
            </div>
          )}

          {/* Step: Phone */}
          {step === "phone" && (
            <div className="animate-fade-in-up">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Your phone number
              </h1>
              <p className="text-gray-500 mb-8">
                We&apos;ll call you to discuss your admission
              </p>
              <div className="relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xl text-gray-400">
                  +92
                </span>
                <input
                  ref={inputRef}
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  onKeyDown={handleKeyDown}
                  placeholder="3XX XXXXXXX"
                  className="w-full text-xl sm:text-2xl py-4 pl-12 border-b-2 border-gray-200 focus:border-[#3D4098] outline-none transition-colors placeholder:text-gray-300"
                  autoComplete="tel"
                />
              </div>
              <p className="text-gray-400 text-sm mt-3">
                Your number stays private and is only used for admission support
              </p>
            </div>
          )}

          {/* Step: Email */}
          {step === "email" && (
            <div className="animate-fade-in-up">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Your email address
              </h1>
              <p className="text-gray-500 mb-8">
                We&apos;ll send you Course details
              </p>
              <input
                ref={inputRef}
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onKeyDown={handleKeyDown}
                placeholder="you@example.com"
                className="w-full text-xl sm:text-2xl py-4 border-b-2 border-gray-200 focus:border-[#3D4098] outline-none transition-colors placeholder:text-gray-300"
                autoComplete="email"
              />
            </div>
          )}

          {/* Step: Course */}
          {step === "program" && (
            <div className="animate-fade-in-up">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Which Course interests you?
              </h1>
              <p className="text-gray-500 mb-6">
                Select the career track you want to explore
              </p>
              <div className="space-y-3">
                {courses.map((course) => (
                  <button
                    key={course.value}
                    onClick={() => {
                      setFormData({ ...formData, program: course.value });
                      setError("");
                    }}
                    className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 ${
                      formData.program === course.value
                        ? "border-[#3D4098] bg-[#3D4098]/5 text-[#3D4098]"
                        : "border-gray-200 hover:border-gray-300 text-gray-700"
                    }`}
                  >
                    <span className="font-medium">{course.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step: City */}
          {step === "city" && (
            <div className="animate-fade-in-up">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Which city are you from?
              </h1>
              <p className="text-gray-500 mb-8">
                Enter the city you currently live in
              </p>
              <input
                ref={inputRef}
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                onKeyDown={handleKeyDown}
                placeholder="e.g. Islamabad"
                className="w-full text-xl sm:text-2xl py-4 border-b-2 border-gray-200 focus:border-[#3D4098] outline-none transition-colors placeholder:text-gray-300"
              />
            </div>
          )}

          {/* Step: Education */}
          {step === "education" && (
            <div className="animate-fade-in-up">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Your education level
              </h1>
              <p className="text-gray-500 mb-6">
                Select your highest level of education
              </p>
              <div className="space-y-3">
                {educationOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setFormData({ ...formData, education: option.value });
                      setError("");
                    }}
                    className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 ${
                      formData.education === option.value
                        ? "border-[#3D4098] bg-[#3D4098]/5 text-[#3D4098]"
                        : "border-gray-200 hover:border-gray-300 text-gray-700"
                    }`}
                  >
                    <span className="font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step: Reason */}
          {step === "reason" && (
            <div className="animate-fade-in-up">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Why do you want to join?
              </h1>
              <p className="text-gray-500 mb-6">
                Share what motivates you (a few words is enough)
              </p>
              <textarea
                ref={textareaRef}
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                placeholder="I want to start a new career..."
                rows={3}
                className="w-full text-lg py-4 px-0 border-b-2 border-gray-200 focus:border-[#3D4098] outline-none transition-colors placeholder:text-gray-300 resize-none"
              />
            </div>
          )}

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mt-4 animate-shake">{error}</p>
          )}

          {/* Continue Button */}
          <button
            onClick={nextStep}
            disabled={isSubmitting}
            className="w-full mt-8 bg-[#3D4098] text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[#3D4098]-dark active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : step === "reason" ? (
              <span>Submit Application</span>
            ) : (
              <>
                <span>Continue</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>

        </div>
      </div>

      {/* Trust Footer */}
      <div className="px-6 py-4 border-t border-gray-100">
        <p className="text-center text-gray-400 text-xs">
          Islamabad &bull; Lahore &bull; Karachi
        </p>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
        .animate-shake {
          animation: shake 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
