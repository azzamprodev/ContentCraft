import { SendHorizonal } from "lucide-react";
import { Plus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const ChatForm = ({
  sendBtnClicked,
  handleInputChange,
  inputValue,
  triggerValue,
  setTriggerValue,
  newChatBtn,
}) => {
  const { toast } = useToast();

  function triggerChange() {
    setTriggerValue(!triggerValue);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      sendBtnClicked();
    }
  }

  return (
    <div className="bg-teal-50 h-[8rem] rounded-3xl flex justify-center items-center mt-60 shadow-xl px-4">
      <input
        onChange={handleInputChange}
        value={inputValue}
        onKeyPress={handleKeyPress}
        className="text-sm border border-teal-800 bg-teal-50 rounded-xl text-teal-800 w-2/3 px-4 py-2 placeholder:text-sm focus:outline-none placeholder:text-teal-800"
        placeholder="Ask me anything"
      />
      <button
        onClick={sendBtnClicked}
        onMouseEnter={triggerChange}
        onMouseLeave={triggerChange}
        className="border border-teal-800 rounded-xl p-2 ml-1 flex justify-center items-center"
      >
        <SendHorizonal
          className={`transform text-teal-800 ${
            triggerValue ? "" : "-rotate-90"
          } transition-all duration-150`}
        />
      </button>
      <button
        className={`border border-teal-800 hover:border-teal-800 text-teal-800 hover:text-white hover:bg-teal-800 rounded-xl p-2 ml-1 flex justify-center items-center transition-all duration-150`}
        onClick={() => {
          newChatBtn();
        }}
      >
        <Plus />
      </button>
    </div>
  );
};
