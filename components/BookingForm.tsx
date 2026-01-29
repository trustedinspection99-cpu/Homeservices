'use client';

import { useState, FormEvent } from 'react';
import { trackEvent } from '@/lib/analytics';

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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^[\d\s\-\(\)]+$/;
    if (!phoneRegex.test(formData.phone) || formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a date';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    setErrors({});

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Booking request submitted successfully! We\'ll contact you within 24 hours to confirm your appointment.');
        trackEvent('booking_submitted', {
          service: formData.serviceName,
          city: defaultCity,
        });
        
        // Reset form
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
        setMessage(data.error || 'Failed to submit booking request. Please try again or contact us directly.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred. Please try again later or contact us directly at ' + process.env.NEXT_PUBLIC_PHONE);
    }
  };

  const inputClass = (fieldName: string) => 
    `w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary ${
      errors[fieldName] ? 'border-red-500' : 'border-gray-300'
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!serviceName && (
        <div>
          <label className="block text-sm font-semibold mb-2">Service *</label>
          <input
            type="text"
            required
            value={formData.serviceName}
            onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
            className={inputClass('serviceName')}
            placeholder="Enter service name"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-semibold mb-2">Your Name *</label>
        <input
          type="text"
          required
          value={formData.customerName}
          onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
          className={inputClass('customerName')}
          placeholder="John Smith"
        />
        {errors.customerName && <p className="text-red-500 text-sm mt-1">{errors.customerName}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Email *</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass('email')}
          placeholder="john@example.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Phone *</label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputClass('phone')}
          placeholder="(555) 123-4567"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Service Address *</label>
        <input
          type="text"
          required
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className={inputClass('address')}
          placeholder={defaultCity ? `123 Main St, ${defaultCity}` : "123 Main St, City, Province"}
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Preferred Date *</label>
          <input
            type="date"
            required
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            className={inputClass('preferredDate')}
            min={new Date().toISOString().split('T')[0]}
          />
          {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Preferred Time *</label>
          <select
            required
            value={formData.preferredTime}
            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
            className={inputClass('preferredTime')}
          >
            <option value="">Select time</option>
            <option value="morning">Morning (8am-12pm)</option>
            <option value="afternoon">Afternoon (12pm-5pm)</option>
            <option value="evening">Evening (5pm-8pm)</option>
          </select>
          {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
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
          ✓ {message}
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          ✗ {message}
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
