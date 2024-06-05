import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function LogTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-slate-800 bg-[#171827] text-slate-200 hover:bg-[#1b1c2d]">
          <TableHead className="w-[100px] text-xs text-slate-200">
            Invoice
          </TableHead>
          <TableHead className="text-xs text-slate-200 ">Status</TableHead>
          <TableHead className="text-xs text-slate-200 ">Method</TableHead>
          <TableHead className="text-right text-xs text-slate-200">
            Amount
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="border-slate-800 text-xs text-gray-500 hover:bg-[#1b1c2d]">
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow className="border-slate-800  text-xs text-gray-500 hover:bg-[#1b1c2d]">
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow className="border-slate-800 text-xs text-gray-500 hover:bg-[#1b1c2d]">
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
