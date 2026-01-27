"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { Card } from "@/components/ui/Card";

export function NewsletterGravity() {
    const sceneRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted || !sceneRef.current) return;

        const Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            Bodies = Matter.Bodies,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint,
            Runner = Matter.Runner;

        const engine = Engine.create();
        const world = engine.world;

        // Disable gravity for "floating" effect or reduce it
        engine.world.gravity.y = 0.5;

        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: sceneRef.current.clientWidth,
                height: 600,
                wireframes: false,
                background: "transparent",
            },
        });

        // Create bounds
        const ground = Bodies.rectangle(
            sceneRef.current.clientWidth / 2,
            610,
            sceneRef.current.clientWidth,
            20,
            { isStatic: true, render: { visible: false } }
        );
        const leftWall = Bodies.rectangle(
            -10,
            300,
            20,
            600,
            { isStatic: true, render: { visible: false } }
        );
        const rightWall = Bodies.rectangle(
            sceneRef.current.clientWidth + 10,
            300,
            20,
            600,
            { isStatic: true, render: { visible: false } }
        );

        // Create newsletter items (represented as bodies)
        const articles = [
            { title: "Legal Aid Camp", color: "#007FFF" },
            { title: "Moot Court Win", color: "#a3e635" },
            { title: "Guest Lecture", color: "#F472B6" },
            { title: "Sports Fest", color: "#60A5FA" },
            { title: "Cultural Night", color: "#C084FC" },
        ];

        const bodies = articles.map((article, i) => {
            const x = Math.random() * (sceneRef.current?.clientWidth || 800);
            const y = Math.random() * -500; // Start above
            return Bodies.rectangle(x, y, 180, 60, {
                chamfer: { radius: 10 },
                render: {
                    fillStyle: article.color,
                    strokeStyle: "#ffffff",
                    lineWidth: 2,
                    // Text rendering is tricky in Matter.js canvas, usually we overlay DOM elements
                    // For this demo, we'll just use colored blocks and maybe overlay text if possible,
                    // or just let them be "abstract" representations.
                    // To keep it simple and robust, we'll just have colored blocks for now.
                },
                label: article.title,
            });
        });

        World.add(world, [ground, leftWall, rightWall, ...bodies]);

        // Add mouse control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });
        World.add(world, mouseConstraint);

        // Keep the mouse in sync with rendering
        render.mouse = mouse;

        // Run the engine
        const runner = Runner.create();
        Runner.run(runner, engine);
        Render.run(render);

        // Resize handler
        const handleResize = () => {
            if (!sceneRef.current) return;
            render.canvas.width = sceneRef.current.clientWidth;
            render.canvas.height = 600;
            Matter.Body.setPosition(ground, {
                x: sceneRef.current.clientWidth / 2,
                y: 610,
            });
            Matter.Body.setPosition(rightWall, {
                x: sceneRef.current.clientWidth + 10,
                y: 300,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => {
            Render.stop(render);
            Runner.stop(runner);
            window.removeEventListener("resize", handleResize);
            if (render.canvas) render.canvas.remove();
        };
    }, [isMounted]);

    return (
        <div className="relative h-[600px] w-full bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <div ref={sceneRef} className="absolute inset-0" />
            <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <h3 className="text-lg font-bold text-slate-500">Interactive Zone</h3>
                <p className="text-sm text-slate-400">Drag the blocks!</p>
            </div>
        </div>
    );
}
