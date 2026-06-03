"use client";

import { useState } from 'react';

export default function TechnicalSupport() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(""); 

    const formData = new FormData(event.target);
    formData.append("access_key", "2f884029-2685-4117-98d7-c8319288df97");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setShowModal(true);
        event.target.reset(); 
      } else {
        setResult(`Error: ${data.message}`);
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
          Describe your issue below — we'll get back to you promptly.
        </p>

        <form onSubmit={onSubmit}>
          
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

          <div style={{ marginBottom: '30px' }}>
            <label htmlFor="message" style={labelStyle}>Describe your issue</label>
            <textarea id="message" name="message" rows="4" placeholder="System type, symptoms, how long the issue has persisted..." required style={{ ...inputStyle, resize: 'vertical' }}></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            style={{ padding: '12px 24px', backgroundColor: '#d97706', color: 'white', border: 'none', borderRadius: '4px', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontWeight: 'bold', fontSize: '15px' }}
          >
            {isSubmitting ? "Sending..." : "Send Enquiry"}
          </button>

          {result && <p style={{ marginTop: '15px', fontWeight: 'bold', color: '#dc3545' }}>{result}</p>}
          
        </form>
      </section>

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