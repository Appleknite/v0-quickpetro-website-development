import { useState } from 'react';

export default function TechSupport() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending your request...");

    const formData = new FormData(event.target);
    // Be sure to keep your access key secure if moving to production
    formData.append("access_key", "2f884029-2685-4117-98d7-c8319288df97");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("Success! We have received your message.");
        event.target.reset(); // Clears the form after a successful send
      } else {
        setResult("Error submitting form. Please try again.");
      }
    } catch (error) {
      setResult("A network error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h2>Technical Support</h2>
      <p>Having trouble? Describe your issue below and we will get back to you.</p>

      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required style={{ padding: '8px' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required style={{ padding: '8px' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="message">Issue Description</label>
          <textarea id="message" name="message" rows="5" required style={{ padding: '8px' }}></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{ padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
        >
          {isSubmitting ? "Submitting..." : "Submit Ticket"}
        </button>

        {/* Displays the success or error message */}
        {result && <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{result}</p>}
        
      </form>
    </section>
  );
}