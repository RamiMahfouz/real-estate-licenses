import TopNav from "@/components/top-nav";

export default function LicenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full flex flex-col fixed top-0 z-[100]">
        <div className="w-full bg-[#08706d] h-[64px] "></div>
        <div className="w-full flex items-center px-8 lg:px-40 bg-[#fff] h-[60px] shadow ">
          <span>{"بيانات الرخصة"}</span>
        </div>
      </div>
      <div className="w-full h-full min-h-[100vh] flex p-6  flex-grow pt-[150px]  bg-[#eceff2]">
        {children}
      </div>
    </>
  );
}
