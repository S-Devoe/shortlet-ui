import Person from "@/assets/images/user-img.png";
import VerifyIcon from "@/components/icons/VerifyIcon";
import Image from "next/image";

const MessageDetails = () => {
  const userId = 1;
  return (
    <section className="mt-[1.5rem] ">
      <div className="flex items-center gap-2">
        <h2 className="font-serif text-deepBlue font-[600] text-[1.5rem] leading-[2.625rem]">
          John Ken
        </h2>
        <VerifyIcon />
      </div>
      <p className="text-gray6 text-[0.75rem] font-[400] ">
        Response time: 20 mins
      </p>
      <div className="mt-[1.5rem]">
        <h3 className="text-gray75 text-[1rem] leading-[1.125rem] font-[500] mb-[1rem]">
          {mockChat.messageTime}
        </h3>
        <div className="w-full">
          {mockChat.chat.map((chat, i) => (
            <>
              <div className="flex gap-4 w-full mb-6" key={`chat-${i + 1}`}>
                {userId !== chat.chatId && (
                  <div className="relative h-[2.25rem] w-[2.25rem] ">
                    <Image
                      src={chat.senderImage!}
                      alt="img"
                      sizes="100%"
                      fill
                    />
                  </div>
                )}
                <div className={`w-full flex flex-col ${userId !== chat.chatId ? "" : "items-end"} `}>
                  <p
                    className={`p-3 rounded-[1rem] text-black23 text-[0.875rem] font-[400] ${
                      userId !== chat.chatId
                        ? "border border-gray7 w-full"
                        : "self-end bg-tertiaryNude w-[90%]"
                    } `}
                  >
                    {chat.messageBody}
                  </p>
                  <p className='text-gray75 text-[0.625rem] font-[400] mt-[2px]' >{chat.messageTime}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessageDetails;

const mockChat = {
  messageTime: "Today",
  chat: [
    {
      chatId: 123,
      senderImage: Person,
      messageBody: "Hey Jane!, I’d like to enquire more about your space.",
      messageTime: "2:48 PM",
    },
    {
      chatId: 1,
      messageBody:
        "Oh great man, thanks for inquiring, what would you like to know?",
      messageTime: "2:49 PM",
    },
    {
      chatId: 1,
      messageBody: "Any specifics?",
      messageTime: "2:49 PM",
    },
    {
      chatId: 123,
      senderImage: Person,
      messageBody: "Hey Jane!, I’d like to enquire more about your space.",
      messageTime: "2:48 PM",
    },
  ],
};
