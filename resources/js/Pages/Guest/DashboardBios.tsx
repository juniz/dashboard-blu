import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { MainNav } from "@/Components/main-nav";
import DokpolDashboard from "./Renstra/dokpol-dashboard";
import PasienDashboard from "./Renstra/pasien-dashboard";
import SDMDashboard from "./Renstra/sdm-dashboard";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { Head } from "@inertiajs/react";
import { Label } from "@/Components/ui/label";
import { ModeToggle } from "@/Components/mode-toggle";
import BiosSDMDashboard from "./BIOS/bios-sdm-dashboard";

export default function DashboardRenstra(props: any) {
  const [tahun, setTahun] = useState(2022);
  const { data } = props;

  return (
    <>
      <Head title="Dashboar Renstra" />
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="container flex h-16 items-center px-4 gap-2">
            <img src="/images/logo.png" alt="logo" className="w-10" />
            <h5 className="font-bold">RS BHAYANGKARA NGANJUK</h5>
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <ModeToggle />
            </div>
          </div>
        </div>
        <div className="container flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-lg md:text-3xl lg:text-3xl font-bold tracking-tight">
              Dashboard MOU
            </h2>
          </div>
          <BiosSDMDashboard tahun={tahun} mou={data} />
        </div>
      </div>
    </>
  );
}
