import Container from "@/components/container/Container";
import PageHeader from "@/components/headers/PageHeader";
import MessageSection from "./section/MessageSection";

const MessagePageContent = () => {
  return (
    <Container>
      <PageHeader
        header="Messages"
        body="Hello Benjamin, here are your shortlet messages so far"
      />
      <MessageSection />
    </Container>
  );
};

export default MessagePageContent;
