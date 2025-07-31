import React from 'react';

interface ContactData {
  email: string;
  phone: string;
  address: string;
}

const ContactInfo: React.FC = () => {
  const contactData: ContactData = {
    "email": "support@zion.marketplace",
    "phone": "+1 (555) 123-4567",
    "address": "123 Innovation Drive, Tech City, TC 12345"
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-xl">📧</span>
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-600">{contactData.email}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-xl">📞</span>
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">{contactData.phone}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-xl">📍</span>
            </div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-gray-600">{contactData.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;