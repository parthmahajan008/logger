import {
  BarChartIcon,
  DiscIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";
import SidebarItem, { type SidebarItemProps } from "./sidebar-item";

export const sidebarItems: SidebarItemProps[] = [
  {
    name: "Live Trail",
    href: "/live",
    icon: <DiscIcon />,
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <BarChartIcon />,
  },
  {
    name: "Alerts",
    href: "/alerts",
    icon: <ExclamationTriangleIcon />,
  },
];

export default function Sidebar() {
  return (
    <aside className="h-full w-[250px] bg-[#0f0f1b]">
      <div className="p-4">
        <p className="text-center text-lg font-semibold">Logger</p>
      </div>
      <div className="flex flex-col gap-2 p-4">
        {sidebarItems.map((sidebarItem) => (
          <SidebarItem key={sidebarItem.href} {...sidebarItem} />
        ))}
      </div>
    </aside>
  );
}
