"use client"
import * as React from 'react';

interface EmailTemplateProps {
  title: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  title, message
}) => (
  <div>
    <h1>Welcome, {title}!</h1>
    <p>Thank you for contacting us!</p>
    <p>New Message submitted:</p>
    <p>{message}</p>
  </div>
);
