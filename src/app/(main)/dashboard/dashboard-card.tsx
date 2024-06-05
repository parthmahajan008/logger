import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type DashboardCardProps = {
  title: string;
  description?: string;
  className: React.HTMLAttributes<HTMLDivElement>["className"];
  children: React.ReactNode;
};

export default function DashboardCard({
  title,
  description,
  className,
  children,
}: DashboardCardProps) {
  return (
    <Card
      className={cn(
        `min-h-[200px] rounded-md border border-slate-900 bg-[#0f0f1b] shadow shadow-black
         transition-all hover:scale-105 hover:shadow-2xl`,
        className,
      )}
    >
      <CardHeader className="p-3">
        <CardTitle className="text-sm font-medium text-slate-200">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-xs">{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="p-0">{children}</CardContent>
    </Card>
  );
}
