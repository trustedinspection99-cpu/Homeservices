import { NextRequest, NextResponse } from 'next/server';
import { sendBookingEmail, BookingData } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const bookingData: BookingData = {
      serviceName: body.serviceName,
      customerName: body.customerName,
      email: body.email,
      phone: body.phone,
      address: body.address,
      preferredDate: body.preferredDate,
      preferredTime: body.preferredTime,
      notes: body.notes,
    };

    // Validate required fields
    if (!bookingData.serviceName || !bookingData.customerName || !bookingData.email || 
        !bookingData.phone || !bookingData.address || !bookingData.preferredDate || 
        !bookingData.preferredTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
