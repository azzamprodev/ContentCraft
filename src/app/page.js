"use client";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
        <nav className="px-2 md:px-4 flex justify-between items-center h-[10vh]">
          <Link href={"/"}>
            <h1 className="text-3xl font-bold">
              Content<span className="text-teal-500">Craft</span>
            </h1>
          </Link>
          <div className="flex items-center justify-center">
            <Link href={"/dashboard"}>
              <Button className="bg-teal-500 text-white hover:bg-teal-800">
                Dashboard
              </Button>
            </Link>
          </div>
        </nav>
        <div className="h-[85vh] flex items-center justify-center">
          <div className="h-full flex flex-col justify-center items-center">
            <h1 className="font-semibold text-6xl md:text-7xl lg:text-9xl text-center">
              AI <span className=" text-teal-500">powered </span> <br />
              copywriting <br />
            </h1>
            <div className="font-semibold text-6xl md:text-7xl text-center mt-4">
              <Typewriter
                className=""
                options={{
                  strings: [
                    `<span style="color: #14b8a6;">assistant.<span/>`,
                    `<span style="color: #14b8a6;">genius.<span/>`,
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 100,
                  cursorClassName: "text-teal-500",
                }}
              />
            </div>

            <div className="flex justify-center items-center mt-16">
              <Link href={"/dashboard"}>
                <Button className="bg-teal-500 hover:bg-teal-800">
                  Get Started <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          {/* <div className="flex justify-center items-center mt-16 text-xl text-center h-[2rem]">
            <Typewriter
              options={{
                strings: [
                  "Transform your SaaS website's narrative effortlessly with ContentCraft. 🚀",
                  "Empower your SaaS journey with tailored website copy that speaks directly to your audience ✍🏻",
                  "Elevate your SaaS website's appeal with professionally crafted content, at your fingertips ✨",
                ],
                autoStart: true,
                loop: true,
                delay: 15,
                deleteSpeed: 10,
              }}
            />
          </div> */}
        </div>
        <div className="h-[5vh] text-teal-800 px-6 flex items-center justify-end gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                onClick={() =>
                  window.open("https://github.com/azzamprodev", "_blank")
                }
              >
                azzamprodev
              </TooltipTrigger>
              <TooltipContent className="bg-teal-500 border-teal-500 text-white">
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </>
  );
}
