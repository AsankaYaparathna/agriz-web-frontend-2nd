import React from 'react';

export default function Map() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d709.0674598506242!2d80.03630410278143!3d6.852543636959876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2524933aa3455%3A0x60c986f821d17267!2sSolar%20Life%20Technologies%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1683215063644!5m2!1sen!2slk"
        title="Google Map of Solar Life Technologies (Pvt) Ltd"
        width="320"
        height="170"
        style={{ border: 3 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
