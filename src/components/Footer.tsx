import Link from "next/link";
import React from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

import Separator from "@/components/Separator"

export default function Footer() {

    const socials = [
        {
            link: "https://www.linkedin.com/in/ross-kmet",
            label: "LinkedIn",
            Icon: SiLinkedin
        },
        {
            link: "https://github.com/rosskmet",
            label: "Github",
            Icon: SiGithub
        }
    ]

    return (
        <footer>
            <Separator width="max-w-screen" />
            <nav className="py-2 flex justify-between items-left">
                <div className="py-1">
                    <p>&copy; 2024 Ross Kmet. All rights reserved.</p>
                </div>
                <div className="flex items-left gap-1"></div>
                <div className="flex gap-2">
                    {socials.map((social,index)=>{
                            const Icon = social.Icon
                            return <Link href={social.link} key={index} aria-label={social.label}>
                                <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
                            </Link>
                    })}
                    <Link href={"mailto:ross@formfunction.dev"} className="inline-block group">
                        <div className="underline underline-offset-8 decoration-indigo-500 max-w-7xl mx-auto group-hover:text-pink-500">
                            ross[at]formfunction[dot]dev
                        </div>
                    </Link>
                </div>
            </nav>
        </footer>
    );
}