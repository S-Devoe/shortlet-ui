import { Flex } from "antd";
import { Input, InputType } from "../forms/inputs/input";
import Button from "../button/button";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { useForm } from "@formspree/react";

export default function ComingSoonForm({
  reference,
}: {
  reference: React.RefObject<HTMLInputElement>;
}) {
  const [email, setEmail] = useState("");
  const [state, handleSubmit] = useForm("xjvqzloj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <form className="w-full max-w-[600px] mx-auto" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-4 items-end justify-center">
        <fieldset className="grow w-full md:w-fit">
          <Input
            name="email"
            type={InputType.email}
            placeholder="Email address"
            value={email}
            icon={<MdEmail className="h-8 w-8 text-[#6E717C]" />}
            onChange={onEmailChange}
            reference={reference}
          />
        </fieldset>
        <Button
          className={["py-4 w-full md:w-fit text-white"]}
          text={"Join the waitlist"}
        />
      </div>
    </form>
  );
}
