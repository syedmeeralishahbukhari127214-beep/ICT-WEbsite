"use client";
import React, { useState } from 'react';
import { supabase } from '@/utils/supabase';

const CertificateVerification: React.FC = () => {
  // Input States
  const [name, setName] = useState<string>('');
  const [regNo, setRegNo] = useState<string>('');

  // Status & Data States
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'not_found'>('idle');
  const [certificateData, setCertificateData] = useState<any>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVerify = async () => {
    if (!name.trim() || !regNo.trim()) {
      alert("Please enter both Name and Registration Number");
      return;
    }

    setStatus('loading');

    try {
      const { data, error } = await supabase
        .from('Certificate')
        .select('*')
        .eq('student_name', name.trim())
        .eq('cerificate_id', regNo.trim());

      if (error) {
        console.error("Database Error:", error.message);
        setStatus('error');
      } else if (!data || data.length === 0) {
        setStatus('not_found');
        setCertificateData(null);
      } else {
        setStatus('success');
        setCertificateData(data[0]);
      }

      // Open modal in all cases
      setIsModalOpen(true);
    } catch (err) {
      console.error("System Error:", err);
      setStatus('error');
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Main Verification Card */}
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-lg">
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
            disabled={status === 'loading'}
            className="w-full bg-[#0073a8] hover:bg-[#005f8a] text-white font-semibold py-3.5 rounded-lg transition duration-200 mt-4 text-lg disabled:bg-gray-400 shadow-md"
          >
            {status === 'loading' ? 'Verifying...' : 'Verify Certificate'}
          </button>
        </div>
      </div>

      {/* --- Overlay Modal (Yahan fixes kiye hain) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden transition-all duration-300">
          
          {/* Transparent Backdrop: Is se background halka kala aur blur dikhega */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)} // Background click par band karne ke liye
          ></div>

          {/* Modal Box */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 text-center animate-in fade-in zoom-in duration-300">
            
            {/* Success Icon */}
            {status === 'success' && (
              <div className="flex justify-center mb-4">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-green-200">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            )}

            {/* Error/Not Found Icon */}
            {(status === 'not_found' || status === 'error') && (
              <div className="flex justify-center mb-4">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-red-200">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            )}

            <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
              {status === 'success' ? 'Verified Successfully!' : 
               status === 'not_found' ? 'Record Not Found' : 
               'System Error'}
            </h2>

            <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
              {status === 'success'
                ? 'The Certificate Record associated with this Registration Number has been successfully verified. It is officially issued by ICT.'
                : status === 'not_found'
                ? 'Hamay aapke faraham kiye gaye record se koi certificate nahi mila. Baraye meherbani spelling aur ID dobara check karein.'
                : 'Server se rabta nahi ho pa raha. Kuch dair baad dobara koshish karein.'}
            </p>

            {/* Certificate Details Card */}
            {status === 'success' && certificateData && (
              <div className="bg-blue-50 border border-blue-100 text-gray-800 rounded-xl px-5 py-4 mb-6 space-y-2 text-left text-sm md:text-[15px]">
                <p className="border-b border-blue-100 pb-1 flex justify-between">
                  <span className="font-semibold text-blue-800">Name:</span> 
                  <span>{certificateData.student_name}</span>
                </p>
                <p className="border-b border-blue-100 pb-1 flex justify-between">
                  <span className="font-semibold text-blue-800">Course:</span> 
                  <span>{certificateData.course_title}</span>
                </p>
                <p className="border-b border-blue-100 pb-1 flex justify-between">
                  <span className="font-semibold text-blue-800">Batch:</span> 
                  <span>{certificateData.batch || 'N/A'}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-blue-800">Reg No:</span> 
                  <span className="font-mono text-xs bg-blue-100 px-2 rounded uppercase">{certificateData.cerificate_id}</span>
                </p>
              </div>
            )}

            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateVerification;