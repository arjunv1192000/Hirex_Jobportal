import nodemailer from 'nodemailer';
import config from '../../../config/config.js';

const nodemaileremailsending = (email,username,recruiter,companyname,status,image) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: config.EMAIL, 
        pass: config.PASSWORD, 
      },
    });

    // Create the email message
    let subject = '';
    let message = '';

    if (status === 'Approved') {
      subject = `Congratulations! You have been approved your job application from ${companyname}`;
      message = `
        <p>Dear ${username},</p>
        <p>Thank you for expressing your interest in becoming an Interviewer at ${companyname}. We are pleased to inform you that your request has been approved, and you have been selected to join our team of interview experts.</p>
        <p>To get started, please follow the link below to sign up and create your InterviewXperts Interviewer account:</p>
        <p><b>Company: ${companyname}</b></p>
        <img src="${image}" alt="${companyname} Logo" style="max-width: 100px;">
        <p>At HireX, we provide a comprehensive platform that empowers interviewers like you to enhance the interview experience for our users and help them succeed in their interviews.</p>
        <p>If you have any questions or need further assistance, feel free to reach out to our support team. We are here to support you in your journey as an HireX Interviewer.</p>
        <p>Best regards,<br/> ${recruiter}<br/>HireX Team</p>
      `;
    } else if (status === 'Rejected') {
      subject = `We regret to inform you that your application to ${companyname} has to  been rejected`;
      message = `
        <p>Dear ${username},</p>
        <p>We regret to inform you that your application to become an Interviewer at ${companyname} has been rejected. We appreciate your interest, and we encourage you to apply for other opportunities in the future.</p>
        <p>Thank you for considering HireX as a platform to share your expertise and contribute to the interview process.</p>
        <p>If you have any questions or would like feedback on your application, please don't hesitate to reach out to our support team.</p>
        <p>Best regards,<br/> ${recruiter}<br/>HireX Team</p>
      `;
    }

    const mailOptions = {
      from: config.EMAIL, 
      to: email, 
      subject: subject,
      html: message,
    };

    // Send the email
    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          reject(error); // Reject the promise with the error
        } else {
          console.log('Email sent:', info.response);
          resolve(true); // Resolve the promise with the desired value
        }
      });
    });
  } catch (error) {
    // Handle any errors
  }
}

export default nodemaileremailsending;
