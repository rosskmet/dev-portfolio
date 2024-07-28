"use client";

import React, {useEffect, useRef} from 'react';
import {SpiralModel} from '@/models/SpiralModel'

const SpiralAnimation:React.FC = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    let spiral: SpiralModel;
    let mouseEvent: React.MouseEvent;

    useEffect(() => {
        const {current: canvas} = canvasRef;
        if (!canvas) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const ctx = canvas.getContext('2d');

        // if (ctx) {
        //     for (let i = 0; i < count; i++){
        //         spiral.push(new SpiralModel(canvas.width, canvas.height));
        //     }
        // }

        if (ctx) { 
            spiral = new SpiralModel(canvas.width, canvas.height, mouseEvent); 
            // mouseEvent = new MouseEvent();
        }
        else {return}

        spiral.setup(ctx, canvas.width, canvas.height);
        spiral.render(ctx);
        // spiral.resize(1000,200);

        const animate = () => {
            spiral.step(ctx);
            window.requestAnimationFrame(animate);
        };
        animate();

    }, [])

    return <canvas ref={canvasRef} />
}

export default function Spiral() {
    return <SpiralAnimation />
}