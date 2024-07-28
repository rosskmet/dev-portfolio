import React from "react";

export default function HeroSection() {
    return (
    <>
        <div className="in-front">
            <div className="min-h-[60vh] flex flex-col-reverse lg:flex-row gap-10 lg:gap-10 items-center justify-between">
                <div className="space-y-10 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-7xl font-bold">
                        <span className="text-gray-200">
                            {"Ship Rock Solid Systems,"}
                        </span> 
                        <br/>
                        <span className="underline underline-offset-8 decoration-green-500 text-gray-300">
                            {"Get a Better Bottom Line."}
                        </span> 
                    </h1>
                    <h4 className="text-xl text-white underline underline-offset-8 decoration-indigo-600">
                        That's What I Bring To the Table.
                    </h4>
                    <p className="md:w-96 text-lg text-center lg:text-left">
                        {"I'm Ross, a Los Angeles based Full-Stack Web Developer, Data Engineer, and Software Engineer."}
                    </p>
                </div>
                <div className="px-5 w-72 h-72">

                </div>
            </div>
            <div className="py-20" />
        </div>
        {/* <div className="py-20" /> */}
        {/* <div className="py-20" /> */}
    </>
    );
}