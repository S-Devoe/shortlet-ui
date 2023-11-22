import MobileBottomBar from "@/layouts/MobileBottomBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative w-full flex min-h-[100dvh] h-full flex-col items-center justify-between ">
      <section className="h-full w-full pb-[4rem] max-w-[71rem] ">
        {children}
      </section>
      <MobileBottomBar />
    </main>
  );
}
