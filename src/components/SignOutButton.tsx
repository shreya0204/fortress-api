'use client';

import { FC, useState } from 'react';
import Button from '@/ui/Button';
import { signOut } from 'next-auth/react';
import { toast } from '@/ui/Toast';

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = () => {
  const [isloading, setIsloading] = useState<boolean>(false);

  const signOutWithGoogle = async () => {
    setIsloading(true);

    try {
      await signOut();
    } catch (error) {
      toast({
        title: 'Error signing out',
        message: 'Please try again later',
        type: 'error',
      });
    }
  };

  return (
    <Button onClick={signOutWithGoogle} isloading={isloading}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
