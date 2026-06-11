export const EMAIL_WELCOME_TEMPLATE = (name) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f6f9;
      margin: 0;
      padding: 0;
      color: #333333;
    }
    .container {
      max-width: 600px;
      margin: 30px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    }
    .header {
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      padding: 40px 20px;
      text-align: center;
      color: #ffffff;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 600;
    }
    .content {
      padding: 40px 30px;
      line-height: 1.6;
    }
    .content h2 {
      color: #4f46e5;
      margin-top: 0;
    }
    .footer {
      background-color: #f8fafc;
      padding: 20px;
      text-align: center;
      font-size: 12px;
      color: #64748b;
      border-top: 1px solid #e2e8f0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to Our Platform!</h1>
    </div>
    <div class="content">
      <h2>Hello ${name},</h2>
      <p>We are absolutely thrilled to welcome you to our community! Your account has been successfully created.</p>
      <p>Our goal is to help you get the absolute most out of our platform. Explore your dashboard and customize your experience to fit your needs.</p>
      <p>If you ever have any questions or need support, our team is always here to help.</p>
      <p>Best regards,<br><strong>The Developer Team</strong></p>
    </div>
    <div class="footer">
      &copy; 2026 Developer Team. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

export const EMAIL_VERIFY_TEMPLATE = (otp) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f6f9;
      margin: 0;
      padding: 0;
      color: #333333;
    }
    .container {
      max-width: 600px;
      margin: 30px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    }
    .header {
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      padding: 40px 20px;
      text-align: center;
      color: #ffffff;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 600;
    }
    .content {
      padding: 40px 30px;
      text-align: center;
      line-height: 1.6;
    }
    .otp-code {
      display: inline-block;
      font-size: 36px;
      font-weight: 700;
      color: #4f46e5;
      background-color: #f0fdf4;
      border: 2px dashed #4f46e5;
      padding: 10px 30px;
      border-radius: 8px;
      margin: 25px 0;
      letter-spacing: 5px;
    }
    .footer {
      background-color: #f8fafc;
      padding: 20px;
      text-align: center;
      font-size: 12px;
      color: #64748b;
      border-top: 1px solid #e2e8f0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Account Verification</h1>
    </div>
    <div class="content">
      <p style="font-size: 16px;">Hello,</p>
      <p>Thank you for signing up! Please verify your account by using the one-time password (OTP) below:</p>
      <div class="otp-code">${otp}</div>
      <p style="color: #ef4444; font-size: 13px;">This OTP is valid for 10 minutes. Do not share this code with anyone.</p>
    </div>
    <div class="footer">
      &copy; 2026 Developer Team. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

export const EMAIL_RESET_TEMPLATE = (otp) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f6f9;
      margin: 0;
      padding: 0;
      color: #333333;
    }
    .container {
      max-width: 600px;
      margin: 30px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    }
    .header {
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      padding: 40px 20px;
      text-align: center;
      color: #ffffff;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 600;
    }
    .content {
      padding: 40px 30px;
      text-align: center;
      line-height: 1.6;
    }
    .otp-code {
      display: inline-block;
      font-size: 36px;
      font-weight: 700;
      color: #4f46e5;
      background-color: #f0fdf4;
      border: 2px dashed #4f46e5;
      padding: 10px 30px;
      border-radius: 8px;
      margin: 25px 0;
      letter-spacing: 5px;
    }
    .footer {
      background-color: #f8fafc;
      padding: 20px;
      text-align: center;
      font-size: 12px;
      color: #64748b;
      border-top: 1px solid #e2e8f0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Password Reset Request</h1>
    </div>
    <div class="content">
      <p style="font-size: 16px;">Hello,</p>
      <p>We received a request to reset your account password. Use the verification OTP below to complete the reset process:</p>
      <div class="otp-code">${otp}</div>
      <p style="color: #ef4444; font-size: 13px;">This OTP is valid for 10 minutes. If you did not request a password reset, please ignore this email.</p>
    </div>
    <div class="footer">
      &copy; 2026 Developer Team. All rights reserved.
    </div>
  </div>
</body>
</html>
`;
