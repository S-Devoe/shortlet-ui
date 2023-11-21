"use client";
import Container from "@/components/container/Container";
import EmptyPage from "@/components/empty-state/EmptyPage";
import PageHeader from "@/components/headers/PageHeader";
import { useEffect, useState } from "react";

const BookingsContent = () => {
  const [emptyState, setEmptyState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEmptyState(false);
    }, 3500);
  }, []);

  return (
    <Container className="h-full w-full">
      <PageHeader header="My Bookings" />
      <EmptyPage />
    </Container>
  );
};

export default BookingsContent;
