import Image from 'next/image';
import Link from 'next/link';
import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import LottiePlayer from '@/components/LottiePlayer';
import * as animation_data from '@/components/lottieExample1.json';

import type { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'API Fortress | Home',
  description: 'Protected APIs',
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl w-full mx-auto h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading
            size="default"
            className="three-d text-black dark:text-white leading-relaxed"
          >
            Fortify Your Data Integrity <br /> with API Fortress
          </LargeHeading>

          <Paragraph className="max-w-xl lg:text-left leading-rela">
            With the API Fortress,you can experience unrivaled security at our
            cutting-edge similarity checking platform. Gain exclusive access to
            our secure endpoint and control interactions with private routes.
            Join us on the journey towards secure similarity checking, unlocking
            possibilities while keeping your data under lock and key.{' '}
          </Paragraph>
          <Link href="/login">
            <Button
              variant="default"
              className="flex gap-2 items-center dark:text-black dark:bg-light-gold"
            >
              Explore Now!
            </Button>
          </Link>
          <div className="relative w-full max-w-lg lg:max-w-3xl lg:left-1/2  aspect-square lg:absolute flex flex-col justify-center items-center">
            <LottiePlayer
              animationData={animation_data}
              style={{
                width: '70%',
                height: '70%',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
