import { useState } from 'react';

export default function TechnicalSupport() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending your request...");

    const formData = new FormData(event.target);
    formData.append("access_key", "2f884029-2685-4117-98d7-c8319288df97");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("Success! We have received your message.");
        event.target.reset(); // Clears the form
      } else {
        setResult("Error submitting form. Please try again.");
      }
    } catch (error) {
      setResult("A network error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Shared styles to keep the code clean and match your original design
  const labelStyle = { display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#6c757d', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' };
  const inputStyle = { width: '100%', padding: '12px', border: '1px solid #ced4da', borderRadius: '4px', boxSizing: 'border-box', fontSize: '14px', color: '#495057' };

  return (
    <section style={{ maxWidth: '1000px', margin: '0', padding: '20px', fontFamily: 'sans-serif' }}>
      
      {/* Header matching your screenshot */}
      <div style={{ borderLeft: '3px solid #d97706', paddingLeft: '12px', marginBottom: '16px' }}>
        <h2 style={{ margin: '0', fontSize: '22px', color: '#212529' }}>Technical Support</h2>
      </div>
      <p style={{ color: '#6c757d', marginBottom: '30px', fontSize: '15px' }}>
        Describe your issue and attach supporting files — we'll get back to you promptly.
      </p>

      <form onSubmit={onSubmit}>
        
        {/* Row 1: Name and Contact side-by-side */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="name" style={labelStyle}>Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required style={inputStyle} />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="phone" style={labelStyle}>Contact Number</label>
            <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" required style={inputStyle} />
          </div>
        </div>

        {/* Row 2: Textarea */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="message" style={labelStyle}>Describe your issue</label>
          <textarea id="message" name="message" rows="4" placeholder="System type, symptoms, how long the issue has persisted..." required style={{ ...inputStyle, resize: 'vertical' }}></textarea>
        </div>

        {/* Row 3: File Attachment Area */}
        <div style={{ marginBottom: '30px' }}>
          <div style={{ border: '2px dashed #ced4da', borderRadius: '6px', padding: '30px', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
            <label style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#868e96', fontSize: '14px' }}>
              <span style={{ fontSize: '24px', marginBottom: '10px' }}>↑</span>
              Attach image or video (optional)
              {/* Web3Forms requires the name to be "attachment" to process files */}
              <input type="file" name="attachment" accept="image/*,video/*" style={{ display: 'none' }} />
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{ padding: '12px 24px', backgroundColor: '#d97706', color: 'white', border: 'none', borderRadius: '4px', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontWeight: 'bold', fontSize: '15px' }}
        >
          {isSubmitting ? "Sending..." : "Send Enquiry"}
        </button>

        {/* Success/Error Message */}
        {result && <p style={{ marginTop: '15px', fontWeight: 'bold', color: '#212529' }}>{result}</p>}
        
      </form>
    </section>
  );
}