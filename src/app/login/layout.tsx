export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full h-full min-h-[100vh] flex p-6  flex-grow pt-[150px]  bg-[#eceff2]">
        {children}
      </div>
      <div className="w-[50%] hidden md:block bg-[#08706d]"></div>
    </>
  );
}
