'use client';

import { FC, useState } from 'react';
import Button from '@/ui/Button';
import { signIn } from 'next-auth/react';
import { toast } from '@/ui/Toast';

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = () => {
  const [isloading, setIsloading] = useState<boolean>(false);

  const sigInWithGoogle = async () => {
    setIsloading(true);
    try {
      await signIn('google');
    } catch (error) {
      toast({
        title: 'Error signing in',
        message: 'Please try again later',
        type: 'error',
      });
    }
  };

  return (
    <Button onClick={sigInWithGoogle} isloading={isloading}>
      Sign In
    </Button>
  );
};

export default SignInButton;
