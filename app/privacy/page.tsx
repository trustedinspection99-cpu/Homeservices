import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Home Services Pro',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 29, 2026</p>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p>
                When you book a service through Home Services Pro, we collect personal information including your name, 
                email address, phone number, and service address. This information is necessary to provide you with our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To schedule and provide requested services</li>
                <li>To communicate with you about your appointments</li>
                <li>To improve our services and customer experience</li>
                <li>To send promotional emails (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
              <p>
                We share your information only with service providers who need it to complete your service request. 
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method 
                of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. Contact us at{' '}
                <a href="mailto:privacy@homeservicespro.ca" className="text-primary hover:underline">
                  privacy@homeservicespro.ca
                </a>{' '}
                to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p>
                If you have questions about this privacy policy, please contact us at{' '}
                <a href="mailto:privacy@homeservicespro.ca" className="text-primary hover:underline">
                  privacy@homeservicespro.ca
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
