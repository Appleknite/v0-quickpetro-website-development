"use client";

import { useState } from 'react';

export default function TechnicalSupport() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");
  
  // New state to control the visibility of the pop-up
  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(""); // Clear any previous errors

    const formData = new FormData(event.target);
    formData.append("access_key", "2f884029-2685-4117-98d7-c8319288df97");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        // Trigger the pop-up on success
        setShowModal(true);
        event.target.reset(); 
        setFileName("");      
      } else {
        setResult("Error submitting form. Please try again.");
      }
    } catch (error) {
      setResult("A network error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelStyle = { display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#6c757d', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' };
  const inputStyle = { width: '100%', padding: '12px', border: '1px solid #ced4da', borderRadius: '4px', boxSizing: 'border-box', fontSize: '14px', color: '#495057' };

  return (
    <>
      <section style={{ maxWidth: '1000px', margin: '0', padding: '20px', fontFamily: 'sans-serif' }}>
        
        <div style={{ borderLeft: '3px solid #d97706', paddingLeft: '12px', marginBottom: '16px' }}>
          <h2 style={{ margin: '0', fontSize: '22px', color: '#212529' }}>Technical Support</h2>
        </div>
        <p style={{ color: '#6c757d', marginBottom: '30px', fontSize: '15px' }}>
          Describe your issue and attach supporting files — we'll get back to you promptly.
        </p>

        <form onSubmit={onSubmit}>
          
{/* Row 1: Name and Contact automatically stack on mobile */}
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
  <div>
    <label htmlFor="name" style={labelStyle}>Name</label>
    <input type="text" id="name" name="name" placeholder="Your name" required style={inputStyle} />
  </div>
  <div>
    <label htmlFor="phone" style={labelStyle}>Contact Number</label>
    <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" required style={inputStyle} />
  </div>
</div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="message" style={labelStyle}>Describe your issue</label>
            <textarea id="message" name="message" rows="4" placeholder="System type, symptoms, how long the issue has persisted..." required style={{ ...inputStyle, resize: 'vertical' }}></textarea>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <span style={labelStyle}>Attach 1 image; Max 10MB</span>
            <div style={{ border: '2px dashed #ced4da', borderRadius: '6px', padding: '30px', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
              <label style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', color: fileName ? '#212529' : '#868e96', fontSize: '14px' }}>
                <span style={{ fontSize: '24px', marginBottom: '10px' }}>{fileName ? "📄" : "↑"}</span>
                {fileName ? `Selected: ${fileName}` : "Click to select a file"}
                <input 
                  type="file" 
                  name="attachment" 
                  accept="image/*" 
                  onChange={handleFileChange}
                  style={{ display: 'none' }} 
                />
              </label>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            style={{ padding: '12px 24px', backgroundColor: '#d97706', color: 'white', border: 'none', borderRadius: '4px', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontWeight: 'bold', fontSize: '15px' }}
          >
            {isSubmitting ? "Sending..." : "Send Enquiry"}
          </button>

          {/* Only shows if there is an error now */}
          {result && <p style={{ marginTop: '15px', fontWeight: 'bold', color: '#dc3545' }}>{result}</p>}
          
        </form>
      </section>

      {/* Pop-up Modal UI */}
      {showModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', 
          justifyContent: 'center', alignItems: 'center', zIndex: 9999
        }}>
          <div style={{
            backgroundColor: 'white', padding: '40px', borderRadius: '8px',
            maxWidth: '400px', width: '90%', textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)', fontFamily: 'sans-serif'
          }}>
            
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>✅</div>
            <h3 style={{ margin: '0 0 10px 0', color: '#212529' }}>Request Received!</h3>
            <p style={{ color: '#6c757d', marginBottom: '25px', lineHeight: '1.5' }}>
              We have received your technical support request and will get back to you ASAP.
            </p>
            
            <button 
              onClick={() => setShowModal(false)}
              style={{
                padding: '10px 30px', backgroundColor: '#d97706', color: 'white', 
                border: 'none', borderRadius: '4px', cursor: 'pointer', 
                fontWeight: 'bold', fontSize: '14px'
              }}
            >
              OK
            </button>
            
          </div>
        </div>
      )}
    </>
  );
}