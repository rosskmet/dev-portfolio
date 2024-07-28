import React from "react";
import Link from "next/link";
import utilStyles from '@/app/utils.module.scss';

export default function contact() {
  return (
    <>
        <div className="y-3 min-h-screen">
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h1 className={utilStyles.headingLg}>Contact</h1>
          </section>
          I'm Always Open to Help With Exciting Projects.
          <br/>
          <Link href={"mailto:ross@formfunction.dev"} className="inline-block group">
            <div className="underline underline-offset-8 decoration-green-500 max-w-7xl mx-auto group-hover:text-pink-500">
              Most Direct Line to me is Email.
            </div>
          </Link>
        </div>
    </>
  );
}