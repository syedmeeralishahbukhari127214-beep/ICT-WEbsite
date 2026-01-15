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
      // Note: Hum .ilike use kar rahe hain taake case sensitivity ka masla na ho
      // Aur columns ke naam aapke database ke mutabiq 'Name' aur 'Registration' hain
      const { data, error } = await supabase
        .from('Certificate')
        .select('*')
        .ilike('Name', name.trim())
        .ilike('Registration', regNo.trim());

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

      // Open modal to show result
      setIsModalOpen(true);
    } catch (err) {
      console.error("System Error:", err);
      setStatus('error');
      setIsModalOpen(true);
    }
  };

  return (
    <div className="w-full bg-white">
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

        {/* Overlay Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden transition-all duration-300">

            {/* Transparent Backdrop */}
            <div 
              className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
              onClick={() => setIsModalOpen(false)}
            ></div>

            {/* Modal Box */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 text-center animate-in fade-in zoom-in duration-300">

              {/* Success/Error Icon */}
              <div className="flex justify-center mb-4">
                <div className={`${status === 'success' ? 'bg-green-500 shadow-green-200' : 'bg-red-500 shadow-red-200'} w-16 h-16 rounded-full flex items-center justify-center shadow-lg`}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    {status === 'success' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    )}
                  </svg>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
                {status === 'success'
                  ? 'Verified Successfully!'
                  : status === 'not_found'
                  ? 'Record Not Found'
                  : 'System Error'}
              </h2>

              <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                {status === 'success'
                  ? 'The certificate record associated with this registration number has been successfully verified. It is officially issued by ICT.'
                  : status === 'not_found'
                  ? 'No certificate record was found matching the provided details. Please recheck the spelling and registration number.'
                  : 'Unable to connect with the server. Please try again later.'}
              </p>

              {/* Certificate Details Mapping with Database Columns */}
              {status === 'success' && certificateData && (
                <div className="bg-blue-50 border border-blue-100 text-gray-800 rounded-xl px-5 py-4 mb-6 space-y-2 text-left text-sm md:text-[15px]">
                  <p className="border-b border-blue-100 pb-1 flex justify-between">
                    <span className="font-semibold text-blue-800">Name:</span> 
                    <span>{certificateData.Name}</span>
                  </p>
                  <p className="border-b border-blue-100 pb-1 flex justify-between">
                    <span className="font-semibold text-blue-800">Course:</span> 
                    <span>{certificateData.Course}</span>
                  </p>
                  <p className="border-b border-blue-100 pb-1 flex justify-between">
                    <span className="font-semibold text-blue-800">Batch:</span> 
                    <span>{certificateData.Batch || 'N/A'}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold text-blue-800">Reg No:</span> 
                    <span className="font-mono text-xs bg-blue-100 px-2 rounded uppercase">
                      {certificateData.Registration}
                    </span>
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
    </div>
  );
};

export default CertificateVerification;