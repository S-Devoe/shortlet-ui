"use client";
import Container from "@/components/container/Container";
import EmptyPage from "@/components/empty-state/EmptyPage";
import PageHeader from "@/components/headers/PageHeader";
import { useEffect, useState } from "react";
import WaitllistMainContent from "./contents/WaitllistMainContent";

const WaitlistContent = () => {
  const [emptyState, setEmptyState] = useState(true);

  // to temporarily show the empty state for 3.5s
  useEffect(() => {
    setTimeout(() => {
      setEmptyState(false);
    }, 3500);
  }, []);

  return (
    <Container className="h-full w-full">
      <PageHeader
        header="My Waitlist"
        body="Hello Benjamin, here are the apartments you wish to book in the future"
      />
      {emptyState ? <EmptyPage /> : <WaitllistMainContent />}
    </Container>
  );
};

export default WaitlistContent;
