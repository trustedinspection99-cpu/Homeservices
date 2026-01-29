import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Home Services Pro',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: January 29, 2026</p>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using Home Services Pro's website and services, you accept and agree to be bound by 
                the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Service Description</h2>
              <p>
                Home Services Pro connects customers with verified service professionals for home maintenance, 
                repair, and improvement services. We act as a platform to facilitate these connections.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Booking and Pricing</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prices listed are starting prices and may vary based on service specifics</li>
                <li>Final pricing will be confirmed before service is performed</li>
                <li>Cancellations must be made at least 24 hours in advance</li>
                <li>Payment is due upon completion of service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Service Guarantee</h2>
              <p>
                We stand behind the quality of our services. If you're not satisfied with a completed service, 
                contact us within 48 hours and we'll work to make it right.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Liability</h2>
              <p>
                All service professionals are insured and background-checked. However, Home Services Pro is not 
                liable for damages beyond the cost of the service provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Pricing Claims</h2>
              <p className="text-sm">
                Pricing comparisons are based on competitive analysis conducted in January 2026. Actual savings 
                may vary based on specific services, locations, and market conditions. We reserve the right to 
                adjust pricing at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <p>
                For questions about these terms, contact us at{' '}
                <a href="mailto:legal@homeservicespro.ca" className="text-primary hover:underline">
                  legal@homeservicespro.ca
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
