import Sidebar from "@/components/sidebar";
import BreadCrumb from "./breadcrumb";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="h-full grow overflow-auto">
        <BreadCrumb />
        <div className="h-[calc(100vh-50px)]">{children}</div>
      </div>
    </main>
  );
}
