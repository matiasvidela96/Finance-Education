import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>This is a test email template. Please ignore it. best regards IVO :3</p>
    <button className="bg-sky-500 px-3 py-2">
      <a href="https://finance-education.netlify.app/">GO PERRO</a>
    </button>
  </div>
);
