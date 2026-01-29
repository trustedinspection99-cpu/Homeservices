'use client';

import { useState, FormEvent } from 'react';

interface BookingFormProps {
  serviceName?: string;
  defaultCity?: string;
}

export default function BookingForm({ serviceName, defaultCity }: BookingFormProps) {
  const [formData, setFormData] = useState({
    serviceName: serviceName || '',
    customerName: '',
    email: '',
    phone: '',
    address: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Booking request submitted! We\'ll contact you within 24 hours.');
        setFormData({
          serviceName: serviceName || '',
          customerName: '',
          email: '',
          phone: '',
          address: '',
          preferredDate: '',
          preferredTime: '',
          notes: '',
        });
      } else {
        setStatus('error');
        setMessage('Failed to submit booking. Please try again.');
      }
    } catch (error) {
      set
      Status('error');
setMessage('An error occurred. Please try again later.');
}
};
return (

{!serviceName && (

Service
<input
type="text"
required
value={formData.serviceName}
onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
placeholder="Enter service name"
/>

)}
<div>
    <label className="block text-sm font-semibold mb-2">Your Name *</label>
    <input
      type="text"
      required
      value={formData.customerName}
      onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
      placeholder="John Smith"
    />
  </div>

  <div>
    <label className="block text-sm font-semibold mb-2">Email *</label>
    <input
      type="email"
      required
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
      placeholder="john@example.com"
    />
  </div>

  <div>
    <label className="block text-sm font-semibold mb-2">Phone *</label>
    <input
      type="tel"
      required
      value={formData.phone}
      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
      placeholder="(555) 123-4567"
    />
  </div>

  <div>
    <label className="block text-sm font-semibold mb-2">Service Address *</label>
    <input
      type="text"
      required
      value={formData.address}
      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
      placeholder={defaultCity ? `123 Main St, ${defaultCity}` : "123 Main St, City, Province"}
    />
  </div>

  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-semibold mb-2">Preferred Date *</label>
      <input
        type="date"
        required
        value={formData.preferredDate}
        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
        min={new Date().toISOString().split('T')[0]}
      />
    </div>
    <div>
      <label className="block text-sm font-semibold mb-2">Preferred Time *</label>
      <select
        required
        value={formData.preferredTime}
        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
      >
        <option value="">Select time</option>
        <option value="morning">Morning (8am-12pm)</option>
        <option value="afternoon">Afternoon (12pm-5pm)</option>
        <option value="evening">Evening (5pm-8pm)</option>
      </select>
    </div>
  </div>

  <div>
    <label className="block text-sm font-semibold mb-2">Additional Notes</label>
    <textarea
      value={formData.notes}
      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
      rows={3}
      placeholder="Any special requirements or details..."
    />
  </div>

  {status === 'success' && (
    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
      {message}
    </div>
  )}

  {status === 'error' && (
    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
      {message}
    </div>
  )}

  <button
    type="submit"
    disabled={status === 'loading'}
    className="w-full bg-primary text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {status === 'loading' ? 'Submitting...' : 'Request Booking'}
  </button>

  <p className="text-sm text-gray-500 text-center">
    We'll contact you within 24 hours to confirm your appointment
  </p>
</form>
);
                                    }
