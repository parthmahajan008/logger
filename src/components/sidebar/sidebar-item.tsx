"use client";

import { cn } from "@/lib/utils";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type SidebarItemProps = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

export default function SidebarItem({ name, href, icon }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        `flex cursor-pointer items-center gap-2 rounded-md p-2 px-4 text-sm text-gray-500
     transition-colors hover:bg-[#161724] hover:text-slate-100`,
        clsx({
          "bg-[#1b1c2d] text-slate-50 hover:bg-[#1b1c2d] hover:text-slate-50":
            isActive,
        }),
      )}
    >
      {icon}
      {name}
    </Link>
  );
}
