import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ProofUpload() {

  const [location, setLocation] = useState("");
  const [reasonPdf, setReasonPdf] = useState(null);
  const [idImage, setIdImage] = useState(null);

  return (
    <div className="app-container">

      <Header />

      <div className="container" style={{ padding: "40px 0" }}>
        <h1 className="text-center mb-4">Upload Your Proof</h1>

        {/* Location */}
        <label>Your Location (if cash):</label>
        <input 
          type="text" 
          className="form-control mb-3"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your location"
        />

        {/* PDF */}
        <label>PDF: Why do you need help?</label>
        <input 
          type="file" 
          className="form-control mb-3"
          accept="application/pdf"
          onChange={(e) => setReasonPdf(e.target.files[0])}
        />

        {/* Card placeholder */}
        <label>Payment method (Visa / MasterCard) — placeholder only:</label>
        <input 
          type="text" 
          className="form-control mb-3"
          placeholder="For example: Visa"
        />

        {/* ID Image */}
        <label>ID / Passport Image:</label>
        <input 
          type="file"
          className="form-control mb-3"
          accept="image/*"
          onChange={(e) => setIdImage(e.target.files[0])}
        />

        {/* Submit */}
        <div className="text-center mt-4">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default ProofUpload;
