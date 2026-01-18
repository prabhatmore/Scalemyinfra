function QuoteModal({ isOpen, onClose }) {
  if (!isOpen) return null; // 🔥 VERY IMPORTANT

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>×</button>

        <h3>Get a Quick Quote</h3>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="tel" placeholder="Mobile Number" />
        <input type="text" placeholder="Company / Location" />

        <select defaultValue="">
          <option value="" disabled>Looking For</option>
          <option>Azure & AKS Consulting</option>
          <option>Cloud Migration</option>
          <option>Cost Optimization</option>
          <option>DevOps Automation</option>
        </select>

        <div className="form-toggle">
          <input type="checkbox" defaultChecked />
          <span>Get updates through Call & WhatsApp</span>
        </div>

        <button className="btn-pill">GET STARTED NOW</button>
      </div>
    </div>
  );
}

export default QuoteModal;
