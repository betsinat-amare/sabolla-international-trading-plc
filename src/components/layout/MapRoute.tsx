import React from 'react';

// We extract the 'src' from the iframe HTML Google gave us
const GOOGLE_MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50618.91763759796!2d38.8189327966149!3d9.018842493399327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef60ab271%3A0x38f1add4b0b0f4e5!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1678886400000!5m2!1sen!2set";

const GoogleMapFrame: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        src={GOOGLE_MAP_EMBED_URL}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Embedded map of Addis Ababa"
      />
    </div>
  );
};

export default GoogleMapFrame;