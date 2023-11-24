"use client";
import { Avatar } from "antd";
import VerifyIcon from "@/components/icons/VerifyIcon";
import SmsIcon from "@/components/icons/SmsIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import Button from "@/components/button/button-cva";
import ShortletYourPlace from "./ShortletYourPlace";
import CoinIcon from "@/components/icons/CoinIcon";
import VerifyBoldIcon from "@/components/icons/VerifyBoldIcon";
import NotesIcon from "@/components/icons/NotesIcon";
import HeadphoneIcon from "@/components/icons/HeadphoneIcon";
import Link from "next/link";
import ArrowSquareRight from "@/components/icons/ArrowSquareRight";
import Badge from "@/components/badge/badge";
import { useState } from "react";
import EditProfileModal from "../modals/EditProfileModal";

const ProfileSection = () => {
  const [editModal, setEditModal] = useState(false);

  const handleEditModal = () => {
    setEditModal((prev) => !prev);
  };

  return (
    <>
      <section className="w-full h-full mt-[2.5rem]">
        {/* name and other info */}
        <div className="flex items-center gap-5">
          <div className="relative w-fit">
            <Avatar size={60} src="/profile/Avatar.png" alt="profile-img" />
            <VerifyIcon className="absolute bottom-0 right-0" />
          </div>
          <div className="">
            <h2 className="text-primary-lighter text-[1.5rem] font-[600] leading-[1rem] font-serif">
              Benjamin
            </h2>
            <h3 className="text-primary text-[1rem] font-[600] font-serif">
              Oyemonlan
            </h3>
          </div>
        </div>
        {/* email and phone */}
        <div className="flex items-center gap-[2rem] md:gap-[7.5rem] my-[1.5rem]">
          <div className="text-gray-five flex items-center gap-2">
            <SmsIcon />
            <div className="flex flex-col gap-[2px]">
              <span className="text-[0.75rem] font-[400] leading-[1rem]">
                Email address
              </span>
              <h3 className="text-[1rem] font-[500] text-gray-two leading-[1rem] ">
                madison@emailsample.co
              </h3>
            </div>
          </div>
          {/* phone  */}
          <div className="text-gray-five flex items-center gap-2">
            <PhoneIcon />
            <div className="flex flex-col gap-[2px] ">
              <span className="text-[0.75rem] font-[400] leading-[1rem]">
                Phone
              </span>
              <h3 className="text-[1rem] font-[500] text-gray-two leading-[1rem] ">
                +2347625562653
              </h3>
            </div>
          </div>
        </div>
        {/* edit profile  */}
        <Button
          className="max-w-[13rem]"
          variant="orangeOutline"
          type="button"
          text="Edit Profile"
          onClick={handleEditModal}
        />
        {/* shortlet  */}
        <ShortletYourPlace />
        {/* settings  */}

        <div className="my-6">
          <h3 className="text-[1.125rem] mb-4 text-primary-darker font-[700]">
            Settings
          </h3>
          <div className="flex flex-col gap-2">
            {settings.map((setting, i) => (
              <Link
                href=""
                className="border-b border-gray-six flex items-center justify-between py-4"
                key={`ind-${i + 1}`}
              >
                <div className="flex items-center gap-1 text-gray-five ">
                  <div className="w-[2rem] shrink-0 ">{setting.icon}</div>
                  <h4 className="text-black06 text-[1rem] font-[500] ">
                    {setting.title}
                  </h4>
                  {setting.badge && (
                    <Badge
                      variant="success"
                      className="ml-2"
                      text={setting.badge}
                    />
                  )}
                </div>
                <div className="text-gray-five">
                  <ArrowSquareRight />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <EditProfileModal open={editModal} setOpen={handleEditModal} />
    </>
  );
};

export default ProfileSection;

const settings = [
  {
    icon: <CoinIcon />,
    title: "Payments",
  },
  {
    icon: <VerifyBoldIcon />,
    title: "Verification",
    badge: "verified",
  },
  {
    icon: <NotesIcon />,
    title: "Terms and Conditions",
  },
  {
    icon: <HeadphoneIcon />,
    title: "Support",
  },
];
