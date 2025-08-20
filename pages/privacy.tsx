import React from 'react';
import Head from 'next/head';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group collects, uses, and protects your personal information." />
        <meta property="og:title" content="Privacy Policy" />
        <meta property="og:description" content="Our privacy policy and data protection practices." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Introduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-gray-700">
                  By using our services, you agree to the collection and use of information in accordance with this policy. If you have any questions about this Privacy Policy, please contact us.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                    <p className="text-gray-700 mb-3">
                      We may collect personal information that you voluntarily provide to us, including:
                    </p>
                    <ul className="space-y-2 text-gray-600 ml-6">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        Name and contact information (email, phone number)
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        Company name and job title
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        Information about your business needs
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        Communication preferences
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                    <p className="text-gray-700 mb-3">
                      When you visit our website, we automatically collect certain information, including:
                    </p>
                    <ul className="space-y-2 text-gray-600 ml-6">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        IP address and browser type
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        Pages visited and time spent on site
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        Device information and operating system
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        Cookies and similar tracking technologies
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">How We Use Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="space-y-3 text-gray-600 ml-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Providing and improving our services
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Communicating with you about our services
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Responding to your inquiries and support requests
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Sending newsletters and marketing communications (with your consent)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Analyzing website usage and improving user experience
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Complying with legal obligations
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-orange-600">Information Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="space-y-3 text-gray-600 ml-6">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    With your explicit consent
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    To trusted third-party service providers who assist us in operating our website and providing services
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    To comply with legal requirements or protect our rights
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    In connection with a business transfer or merger
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-red-600">Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="space-y-3 text-gray-600 ml-6">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Encryption of data in transit and at rest
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Regular security assessments and updates
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Access controls and authentication measures
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Employee training on data protection
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-indigo-600">Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  You have certain rights regarding your personal information, including:
                </p>
                <ul className="space-y-3 text-gray-600 ml-6">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    The right to access and review your personal information
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    The right to correct inaccurate or incomplete information
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    The right to delete your personal information
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    The right to restrict or object to processing
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    The right to data portability
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    The right to withdraw consent
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience and analyze website usage. You can control cookie settings through your browser preferences.
                </p>
                <p className="text-gray-700">
                  Our website may use the following types of cookies:
                </p>
                <ul className="space-y-2 text-gray-600 ml-6 mt-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Essential cookies for website functionality
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Analytics cookies to understand usage patterns
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Marketing cookies for personalized content
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-600">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>Email: privacy@ziontech.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Innovation Drive, Tech City, TC 12345</p>
                </div>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-600">Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last Updated&quot; date.
                </p>
                <p className="text-gray-700 mt-4">
                  <strong>Last Updated:</strong> January 15, 2024
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}