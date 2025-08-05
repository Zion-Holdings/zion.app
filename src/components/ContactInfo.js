import React from 'react';
;
const ContactInfo = () => {
  const contactData = {
    "email: kleber@ziontechgroup.com","
    "phone": +1 302 464 0950,""
    address": "364 E Main St STE 1008 Middletown DE 19709;
  };
""
  return ("
    <section className = "py-16 bg-gray-50>""</div>
      <div className="container mx-auto px-4"">"</div>
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>""</div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"">"</div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">""</div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"">"</div>
              <span className="text-blue-600 text-xl">📧</span>"</div>
            </div>"</div>
            <h3 className="font-semibold mb-2">Email</h3>""</div>
            <p className="text-gray-600">{contactData.email}</p>"</div>
          </div>"
          ""</div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center"">"</div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">""</div>
              <span className="text-blue-600 text-xl"">📞</span>"</div>
            </div>""</div>
            <h3 className="font-semibold mb-2"">Phone</h3>"</div>
            <p className="text-gray-600">{contactData.phone}</p></div>
          </div>"
          "</div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">""</div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"">"</div>
              <span className="text-blue-600 text-xl">📍</span>"</div>
            </div>"</div>
            <h3 className="font-semibold mb-2">Address</h3>""</div>
            <p className="text-gray-600">{contactData.address}</p></div>
          </div></div>
        </div></div>
      </div></div>
    </section>;
  );
};"
"'';}
export default ContactInfo;'"'</div>