// import DataTable from "react-data-table-component";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LucideMenu, Edit, Delete, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const columns = [
  {
    name: "Nomor",
    selector: (row: { nomor: any }) => row.nomor,
    sortable: true,
  },
  {
    name: "Uraian",
    selector: (row: { uraian: any }) => row.uraian,
  },
  {
    name: "Pihak Kedua",
    selector: (row: { pihak_kedua: any }) => row.pihak_kedua,
  },
  {
    name: "TMT Awal",
    selector: (row: { tmt_awal: any }) => row.tmt_awal,
  },
  {
    name: "TMT Akhir",
    selector: (row: { tmt_akhir: any }) => row.tmt_akhir,
  },
  {
    name: "Menu",
    cell: (row: { id: any }) => (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <LucideMenu size={24} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            <Dialog key={row.id}>
              <DialogTrigger>Open</DialogTrigger>
            </Dialog>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Trash className="mr-2 h-4 w-4" />
            <span>Hapus</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

const conditionalRowStyles = [
  {
    when: (row: any) => new Date(row.tmt_akhir) < new Date(),
    style: {
      backgroundColor: "rgba(242, 38, 19, 0.9)",
      color: "white",
    },
  },
];

export function DataMou({ mou }: { mou: any }) {
  return (
    <>
      {/* <DataTable
      columns={columns}
        data={mou}
        conditionalRowStyles={conditionalRowStyles}
        selectableRows
        pagination
        highlightOnHover
        pointerOnHover
      /> */}
    </>
  );
}
