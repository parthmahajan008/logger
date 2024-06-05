import DashboardCard from "./dashboard-card";
import LogTable from "./log-table";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-2 gap-2 p-4 xl:grid-cols-6">
      <DashboardCard
        title="Logs by Count"
        className="col-span-2 row-span-2 bg-[#0f0f1b]"
      >
        <LogTable />
      </DashboardCard>
      <DashboardCard title="Traffic" className="col-span-2 bg-[#0f0f1b]">
        B
      </DashboardCard>
      <DashboardCard
        title="CPU Utilizations"
        className="col-span-2 bg-[#0f0f1b]"
      >
        C
      </DashboardCard>
      <DashboardCard
        title="Traffic by HTTP method"
        className="col-span-2 bg-[#0f0f1b]"
      >
        D
      </DashboardCard>
      <DashboardCard title="Users online" className="bg-[#0f0f1b]">
        E
      </DashboardCard>
      <DashboardCard title="Organisations last week" className="bg-[#0f0f1b]">
        F
      </DashboardCard>
    </div>
  );
}
