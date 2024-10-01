import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      
        <div className="h-screen flex">
          {/* Left*/}
          <div className="w-[14%] md:w-[12%] lg:w-[14%] xl:w-[14%] p-1">
            <Link href='/' className="flex items-center justify-center lg:justify-start gap-2">
            <Image src='/logo.png' alt="logo" width={32} height={32}/>
            <span className="hidden lg:block">CampusConnect</span>
            </Link>
            <Menu/>
          </div>
          {/*Right */}
          <div className="w-[86%] md:w-[88%] lg:w-[86%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll felx flex-col">
            <Navbar/>
            {children}
          </div>
        </div>
      
    );
  }