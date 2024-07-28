import React, { useEffect } from 'react';
import { motion, Variants } from "framer-motion";

import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '@/app/utils.module.scss';

import { Button } from '@/components/ui/button';
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { RiSoundcloudLine } from "react-icons/ri";

import SectionHeader from '@/components/SectionHeader';
import Separator from '@/components/Separator';
// import dynamic from 'next/dynamic';

// const Spiral = dynamic(() => import('@/components/Spiral'))

// interface Props {
//     pSection: HTMLDivElement;
// }

// const sectionVariants: Variants = {
//     offscreen: {
//       y: 300
//     },
//     onscreen: {
//       y: 50,
//       rotate: -10,
//       transition: {
//         type: "spring",
//         bounce: 0.4,
//         duration: 0.8
//       }
//     }
//   };

// function SlideSection( {pSection}: Props ) {
//     return (
//         <>
//     <motion.div
//       className="left-right"
//       initial="offscreen"
//       whileInView="onscreen"
//       viewport={{ once: true, amount: 0.8 }}
//     >
//       <motion.div className="card" variants={sectionVariants}>
//         {pSection}
//       </motion.div>
//     </motion.div>
//         </>
//     )
// }

// function Expertise() {
//     return (
//         <div className="max-w-3xl">
//             <div className="py-20 slider">
//                 <h2 className="text-3xl">Expertise</h2>
//                 <Separator width="max-w-2xl" />
//                 <pre className={`${utilStyles.tab}`}>
//                     <span className="underline underline-offset-8 decoration-indigo-500">Languages</span>
//                     <br/>////   C++, C#, Python, Javascript, Typescript, SQL
//                     <br/><br/>
//                     <span className="underline underline-offset-8 decoration-indigo-500">Backend + Data</span>
//                     <br/>////   NodeJS, PostgreSQL, Kafka, Spark, SparkMlib, Pandas, Airflow
//                     <br/><br/>
//                     <span className="underline underline-offset-8 decoration-indigo-500">Frontend + UI</span>
//                     <br/>////   HTML, CSS, NextJS, React, Svelte, Windows Forms, WPF
//                     <br/><br/>
//                     <span className="underline underline-offset-8 decoration-indigo-500">Cloud</span>
//                     <br/>////   Docker, Kubernetes, Terraform
//                     <br/>////   AWS: VPC, Route53, EC2, Lambda, Glue, EKS, ECS, RDS, Redshift
//                     <br/>////   GCP:
//                     <br/><br/>
//                     <span className="underline underline-offset-8 decoration-indigo-500">Prototyping</span>
//                     <br/>////   Figma, Max/MSP, Pure Data
//                     <br/><br/>
//                     <span className="underline underline-offset-8 decoration-indigo-500">Audio</span>
//                     <br/>////   JUCE, Max/MSP
//                     <br/><br/>
//                 </pre>
//             </div>
//         </div>
//     )
// }

export default function About() {

    const icons = [
        {
            link: "https://www.linkedin.com/in/ross-kmet",
            label: "LinkedIn",
            Icon: SiLinkedin
        },
        {
            link: "https://github.com/rosskmet",
            label: "Github",
            Icon: SiGithub
        },
        {
            link: "mailto:ross@formfunction.dev",
            label: "Email",
            Icon: MdOutlineEmail
        },
        {
            link: "https://soundcloud.com/pattvrnmind",
            label: "SoundCloud",
            Icon: RiSoundcloudLine
        },
        {
            link: "https://rosskmet.com/rk_resume.pdf",
            label: "CV",
            Icon: IoMdDownload
        }

    ]

    return (
        <>
            <div className="y-3 min-h-screen">
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h1 className={utilStyles.headingXl}>About</h1>
                    <div className="flex">
                        <div>
                            <p className="max-w-3xl px-5">
                                    My name is Ross Kmet. I've spend the last 10 years saturated in Software and Computer Engineering. Yes, by choice,
                                    and I couldn't be happier. It's strange, but I'm the type of person who isn't content if the work is easy...
                                <br/><br/>
                                    <span className="text-3xl font-bold text-green-600">I need a challenge.</span>
                                <br/><br/>
                                    Talk about College and Personal Passions Here.
                                <br/><br/>         
                                    Talk about career here, my love and experience in building companies from nothing.
                                <br/><br/>              
                            </p> 
                        </div>
                        <Image 
                            className="px-5 py-10"
                            alt="Picture of Ross" 
                            src="/placeholder.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '45%', height: '45%'}} // optional
                        />
                    </div>
                    <Separator width="max-w-sm" />
                            <span className="text-4xl font-bold text-indigo-600 py-10">
                                        Learn More About Me, Drop Me a Line...
                            </span>
                            <div className="flex py-10 px-10 items-center gap-5">
                                {icons.map((icon,index)=>{
                                    const Icon = icon.Icon
                                    return <Link href={icon.link} key={index} aria-label={icon.label}>
                                        <Icon className="w-10 h-10 gap-3 hover:scale-125 transition-all"/>
                                    </Link>
                                })} 
                            </div>
                    {/* <SlideSection pSection={ Expertise() } /> */}
                    <div className="left-right max-w-3xl">
                        <div className="py-20 slider">
                            <h2 className="text-3xl">Expertise</h2>
                            <Separator width="max-w-2xl" />
                            <pre className={`${utilStyles.tab}`}>
                                <span className="underline underline-offset-8 decoration-indigo-500">Languages</span>
                                <br/>////   C++, C#, Python, Javascript, Typescript, SQL
                                <br/><br/>
                                <span className="underline underline-offset-8 decoration-indigo-500">Backend + Data</span>
                                <br/>////   NodeJS, PostgreSQL, Kafka, Spark, SparkMlib, Pandas, Airflow
                                <br/><br/>
                                <span className="underline underline-offset-8 decoration-indigo-500">Frontend + UI</span>
                                <br/>////   HTML, CSS, NextJS, React, Svelte, Windows Forms, WPF
                                <br/><br/>
                                <span className="underline underline-offset-8 decoration-indigo-500">Cloud</span>
                                <br/>////   Docker, Kubernetes, Terraform
                                <br/>////   AWS: VPC, Route53, EC2, Lambda, Glue, EKS, ECS, RDS, Redshift
                                <br/>////   GCP:
                                <br/><br/>
                                <span className="underline underline-offset-8 decoration-indigo-500">Prototyping</span>
                                <br/>////   Figma, Max/MSP, Pure Data
                                <br/><br/>
                                <span className="underline underline-offset-8 decoration-indigo-500">Audio</span>
                                <br/>////   JUCE, Max/MSP
                                <br/><br/>
                            </pre>
                        </div>
                    </div>
                    <div className="py-20">
                        <h2 className="text-3xl">Experience</h2>
                        <Separator width="max-w-2xl" />
                            <h4 className="">
                                <span>2021 - 2024</span> 
                                <span className="text-indigo-600"> // </span> 
                                Casual Precision
                                <span className="text-indigo-600"> // </span>
                                Director of Engineering
                            </h4>
                            <p className="py-3">
                                yadda yadda
                            </p>
                        <div className="py-3"><Separator width="max-w-md" /></div>
                            <h4 className="">
                                <span>2020 - 2021</span> 
                                <span className="text-indigo-600"> // </span> 
                                Casual Precision
                                <span className="text-indigo-600"> // </span>
                                Lead Data Engineer
                            </h4>
                            <p className="py-3">
                                yadda yadda
                            </p>
                        <div className="py-3"><Separator width="max-w-md" /></div>
                            <h4 className="">
                                <span>2019 - 2020</span> 
                                <span className="text-indigo-600"> // </span> 
                                Belcan (GE Aviation)
                                <span className="text-indigo-600"> // </span>
                                Embedded Software Test Engineer
                            </h4>
                            <p className="py-3">
                                yadda yadda
                            </p>
                        <div className="py-3"><Separator width="max-w-md" /></div>
                            <h4 className="">
                                <span>2018 - 2019</span> 
                                <span className="text-indigo-600"> // </span> 
                                Western Diversified Plastics
                                <span className="text-indigo-600"> // </span>
                                Test Lab Technician
                            </h4>
                            <p className="py-3 text-sm">
                                
                            </p>
                    </div>
                    <div className="py-10">
                        <h2 className="text-3xl">Education</h2>
                        <Separator width="max-w-2xl" />
                        <p>
                            <span className="font-bold">Western Michigan University</span>
                            <br/> Bachelor of Science, Electrical Engineering // 2019
                            {/* <br/> <small>Minor in Mathematics</small> */}
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}