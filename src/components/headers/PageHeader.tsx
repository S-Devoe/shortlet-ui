import React from "react";

interface Props {
  header: string;
  body?: string;
}
const PageHeader = ({ header, body }: Props) => {
  return (
    <>
      <h1 className="font-serif text-deepBlue text-[1.5rem] leading-[175%] font-[600]">
        {header}
      </h1>
      {body && (
        <p className="font-[400] text-[1rem] text-black">
          {body}
        </p>
      )}
    </>
  );
};

export default PageHeader;
