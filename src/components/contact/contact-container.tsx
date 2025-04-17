'use client';

import { useState } from 'react';
import ContactForm from '@/components/contact/contact-form';
import ThankYouMessage from '@/components/contact/thank-you-message';

export default function ContactContainer() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmitSuccess = () => {
    setIsSubmitted(true);
  };

  return (
    <>
      {!isSubmitted ? (
        <ContactForm onSubmitSuccess={handleSubmitSuccess} />
      ) : (
        <ThankYouMessage />
      )}
    </>
  );
} 