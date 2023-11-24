import BackBtn from "@/components/button/BackBtn";
import Button from "@/components/button/button-cva";
import ValidatedInput from "@/components/forms/inputs/ValidatedInput";
import { Input, InputType } from "@/components/forms/inputs/input";
import PageHeader from "@/components/headers/PageHeader";
import PhoneIcon from "@/components/icons/PhoneIcon";
import SmsIcon from "@/components/icons/SmsIcon";
import { Avatar, Modal } from "antd";
import { FormProvider, useForm } from "react-hook-form";

interface Props {
  open: boolean;
  setOpen: () => void;
}
const EditProfileModal = ({ open, setOpen }: Props) => {
  const methods = useForm({
    defaultValues: {
      email: "madison@emailsample.co",
      phone: "+234 7625 562 653",
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
    setOpen();
  };

  return (
    <Modal
      centered
      closeIcon={null}
      open={open}
      onCancel={setOpen}
      footer={null}
      styles={modalStyles}
      //   wrapClassName="w-full max-w-[30rem] bg-white rounded-[1rem] p-[2.5rem] md:p-[4rem]"
    >
      <BackBtn onClick={setOpen} />
      <div className="mt-6">
        <PageHeader
          headerClassName="text-[2rem] text-primary-lighter"
          header="Edit Profile"
        />
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <Avatar size={96} src="/profile/Avatar.png" alt="profile-img" />
            <ValidatedInput
              icon={<SmsIcon />}
              name="email"
              label="Email addreess"
              placeholder="Enter your email address"
              type="email"
            />
            <ValidatedInput
              icon={<PhoneIcon />}
              name="phone"
              label="Phone"
              placeholder="Enter your phone number"
              type="tel"
            />
            <Button
              className="py-[0.75rem] mt-2"
              type="submit"
              text="Save Changes"
            />
          </form>
        </FormProvider>
      </div>
    </Modal>
  );
};

export default EditProfileModal;

const modalStyles = {
  body: {
    width: "100%",
  },
  content: {
    borderRadius: "1rem",
    maxWidth: "30rem",
    padding: "2.5rem",
  },
};
