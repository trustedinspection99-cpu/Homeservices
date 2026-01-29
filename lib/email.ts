import nodemailer from 'nodemailer';

export interface BookingData {
  serviceName: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export async function sendBookingEmail(booking: BookingData) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_FROM || 'bookings@homeservicespro.ca',
    to: process.env.BOOKING_EMAIL || 'bookings@homeservicespro.ca',
    subject: `New Booking Request: ${booking.serviceName}`,
    html: `
      <h2>New Service Booking Request</h2>
      <p><strong>Service:</strong> ${booking.serviceName}</p>
      <p><strong>Customer Name:</strong> ${booking.customerName}</p>
      <p><strong>Email:</strong> ${booking.email}</p>
      <p><strong>Phone:</strong> ${booking.phone}</p>
      <p><strong>Address:</strong> ${booking.address}</p>
      <p><strong>Preferred Date:</strong> ${booking.preferredDate}</p>
      <p><strong>Preferred Time:</strong> ${booking.preferredTime}</p>
      ${booking.notes ? `<p><strong>Notes:</strong> ${booking.notes}</p>` : ''}
      <hr>
      <p><em>Submitted at ${new Date().toLocaleString()}</em></p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
