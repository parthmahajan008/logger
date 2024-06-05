"use client";

import { sidebarItems } from "@/components/sidebar/sidebar";
import { usePathname } from "next/navigation";

export default function BreadCrumb() {
  const pathname = usePathname();
  const item = sidebarItems.find(
    (sidebarItem) => sidebarItem.href === pathname,
  );

  return (
    <div className="flex h-[50px] items-center border-b border-b-slate-900">
      <p className="flex items-center gap-2 rounded-md p-2 px-4 text-sm text-gray-500">
        {item?.icon ?? ""}
        {item?.name ?? pathname.split("/").at(-1)}
      </p>
    </div>
  );
}
