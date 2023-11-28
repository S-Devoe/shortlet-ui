import { SVGProps } from "react";

const ExportIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M16.8 9H12.75V15.25C12.75 15.66 12.41 16 12 16C11.59 16 11.25 15.66 11.25 15.25V9H7.2C4 9 2 11 2 14.2V16.79C2 20 4 22 7.2 22H16.79C19.99 22 21.99 20 21.99 16.8V14.2C22 11 20 9 16.8 9Z"
        fill="currentColor"
      />
      <path
        d="M12.7498 4.56141L14.8198 6.63141C14.9698 6.78141 15.1598 6.85141 15.3498 6.85141C15.5398 6.85141 15.7298 6.78141 15.8798 6.63141C16.1698 6.34141 16.1698 5.86141 15.8798 5.57141L12.5298 2.22141C12.2398 1.93141 11.7598 1.93141 11.4698 2.22141L8.11984 5.57141C7.82984 5.86141 7.82984 6.34141 8.11984 6.63141C8.40984 6.92141 8.88984 6.92141 9.17984 6.63141L11.2498 4.56141V9.00141H12.7498V4.56141Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ExportIcon;
