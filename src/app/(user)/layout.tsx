import MobileBottomBar from "@/layouts/MobileBottomBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full flex flex-col items-center justify-center ">
      <section className="h-full w-full pb-[4rem] max-w-[71rem] ">
        {children}
      </section>
      <MobileBottomBar />
    </main>
  );
}
