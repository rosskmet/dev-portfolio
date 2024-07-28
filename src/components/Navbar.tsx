import Link from "next/link";
import React from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";


import { Button } from "@/components/ui/button"
import Separator from "@/components/Separator"
import utilStyles from '@/app/utils.module.scss';

export default function Navbar() {

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
        <div className="">
            <nav className="py-2 flex justify-between items-center">
                <Link href="/">
                    <div className={``}>
                        <h3 className={`text-2xl font-bold`}>
                            {"<"}Ross<span className={`text-black bg-white`}>/Kmet</span>{">"}
                        </h3>
                    </div>
                </Link>
                <div className="flex items-left gap-1"></div>
                <div className="flex items-center gap-2">
                    <Button variant="link">
                        <Link href="/blog">
                            Projects
                        </Link>
                    </Button>
                    <div className="py-2"> | </div>
                    <Button variant="link">
                        <Link href="/about">
                            About
                        </Link>
                    </Button>
                    {socials.map((social,index)=>{
                        const Icon = social.Icon
                        return <Link href={social.link} key={index} aria-label={social.label}>
                            <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
                        </Link>
                    })}
                    {/* <DarkModeButton /> */}
                </div>
            </nav>
            {/* <Separator /> */}
        </div>
    );
}