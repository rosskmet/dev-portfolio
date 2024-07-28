import React from "react";
import dynamic from 'next/dynamic';

import HeroSection from "../components/HeroSection";

const Spiral = dynamic(() => import('@/components/Spiral'))

export default function page() {
  return (
    <>
      <section>
        {/* <div className="flex bg-black"> */}
        <div className="flex bg-transparent">
          <HeroSection />
        </div>
        {/* <Spiral /> */}
      </section>
    </>
  );
}
