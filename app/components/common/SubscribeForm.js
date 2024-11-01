'use client';
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import validator from 'validator';
import '../routes/homepage/subscriberForm.css';
import Image from 'next/image';

const SubscribeForm = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);

    // Validate email
    if (validator.isEmail(email)) {
      toast({
        title: 'You have successfully submitted',
        description: 'Thank you!',
      });
      // Add your form submission logic here
    } else {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
        status: 'error',
      });
    }
  }

  return (
    <div className='border-t-4 border-black'>
    <div className="container">
      <div className="my-32">
        <div className="bg-gradient-to-b from-error to-white rounded-lg border-4 border-black p-5 mb-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-2/4 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-black mb-4">Newsletter Signup</h2>
            <p className="mb-4">
              Receive our monthly SEO newsletter by signing up below.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-row">
              <div className="input-with-image">
                <div className="input-image"></div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="p-2 pl-10 border-4 border-black text-black w-full sm:w-auto md:w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="w-full md:w-2/4 flex justify-center">
            <div className="flex items-center justify-center">
              <Image
                src="https://parrot-seo.s3.amazonaws.com/assets/email.svg"
                alt="Email"
                className="w-48 py-4"
                width={64}
                height={64}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SubscribeForm;