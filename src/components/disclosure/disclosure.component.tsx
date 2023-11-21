import React from "react";
import { Disclosure } from "@headlessui/react";
import { HiChevronUp as ChevronUpIcon } from "react-icons/hi";

function CustomDisclosure() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open
                    ? "text-[#25292D] bg-[#E0FFA9] rounded-t-lg"
                    : "rounded-lg mb-4"
                } flex w-full justify-between px-4 py-2 text-left text-sm font-medium text-[#25292D] hover:bg-[#E0FFA9] focus:outline-none focus-visible:ring focus-visible:ring-[#E0FFA9]`}
              >
                <span>Where are you located?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-90 transform bg-[#E0FFA9]" : ""
                  } h-5 w-5 text-[#25292D]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500 bg-[#E0FFA9] rounded-b-lg mb-4">
                If you&apos;re unhappy with your purchase for any reason, email
                us within 90 days and we&apos;ll refund you in full, no
                questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open
                    ? "text-[#25292D] bg-[#E0FFA9] rounded-t-lg"
                    : "rounded-lg mb-4"
                } flex w-full justify-between px-4 py-2 text-left text-sm font-medium text-[#25292D] hover:bg-[#E0FFA9] focus:outline-none focus-visible:ring focus-visible:ring-[#E0FFA9]`}
              >
                <span>Who is eligible to apply for income protection?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-90 transform bg-[#E0FFA9]" : ""
                  } h-5 w-5 text-[#25292D]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500 bg-[#E0FFA9] rounded-b-lg mb-4">
                We are currently only open to employees with companies
                headquartered in Lagos.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default CustomDisclosure;
