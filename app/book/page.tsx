import BookingForm from '@/components/BookingForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Service',
  description: 'Book your professional home service online. Easy scheduling with verified professionals at affordable prices.',
};

export default function BookPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-4 text-center">Book Your Service</h1>
            <p className="text-gray-600 text-center mb-8">
              Fill out the form below and we'll contact you within 24 hours to confirm your appointment.
            </p>
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
