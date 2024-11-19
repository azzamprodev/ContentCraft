"use client";
import { ChatForm } from "./ChatForm";
import { Response } from "./Respones";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

function Dashboard() {
  const [inputValue, setInputValue] = useState("");
  const [responesValue, setResponesValue] = useState("");
  const [toggleTypeEffect, setToggleTypeEffect] = useState(true);
  const [triggerValue, setTriggerValue] = useState(true);
  const authSecreteKey = process.env.NEXT_PUBLIC_OPENAI_API_AUTH_TOKEN;
  const { toast } = useToast();

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function sendBtnClicked() {
    if (inputValue === "") {
      toast({
        variant: "destructive",
        description: "You Need To Enter A Prompt",
      });
    } else {
      setResponesValue("");
      setToggleTypeEffect(false);
      console.log("calling OpenAI api");
      let headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authSecreteKey,
      };

      let body = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a professional content creator. Generate a detailed and structured content script based on the user's input.",
          },
          {
            role: "user",
            content: inputValue,
          },
        ],
      };

      axios
        .post("https://api.openai.com/v1/chat/completions", body, {
          headers: headers,
        })
        .then((response) => {
          setResponesValue(response.data.choices[0].message.content);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  function newChatBtn() {
    if (inputValue === "") {
      toast({
        variant: "destructive",
        description: "You Need To Enter A Prompt",
      });
    } else {
      toast({
        description: "New Chat has been created",
      });
      setInputValue("");
      setToggleTypeEffect(true);
      setResponesValue("");
    }
  }

  return (
    <>
      <div className="min-h-screen max-h-fit bg-gradient-to-r from-rose-100 to-teal-100">
        <nav className="flex justify-between items-center py-4 px-6">
          <Link href={"/"}>
            <h1 className="text-3xl font-bold">
              Content<span className="text-teal-500">Craft</span>
            </h1>
          </Link>
          <UserButton />
        </nav>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="w-11/12 sm:w-10/12 md:w-8/12 xl:w-6/12">
            <ChatForm
              sendBtnClicked={sendBtnClicked}
              handleInputChange={handleInputChange}
              inputValue={inputValue}
              triggerValue={triggerValue}
              setTriggerValue={setTriggerValue}
              newChatBtn={newChatBtn}
            />
            <Response
              responesValue={responesValue}
              toggleTypeEffect={toggleTypeEffect}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
