import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/Components/ui/tabs"
import { MainNav } from "@/Pages/Guest/components/main-nav"
import DokpolDashboard from "./components/dokpol-dashboard"
import PasienDashboard from "./components/pasien-dashboard"
import SDMDashboard from "./components/sdm-dashboard"
import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/Components/ui/select"
import { Head } from "@inertiajs/react"
import { Label } from "@/Components/ui/label"
import { ModeToggle } from "@/Components/mode-toggle"

export default function DashboardPage() {
  
  const [tahun, setTahun] =  useState(2022);

    return (
      <>
      <Head title="Dashboar Renstra" />
        <div className="flex-col md:flex">
          <div className="border-b">
            <div className="flex h-16 items-center px-4 gap-2">
              <img src="/images/logo.png" alt="logo" className="w-10" />
              <h5 className="font-bold">RS BHAYANGKARA NGANJUK</h5>
              <MainNav className="mx-6" />
              <div className="ml-auto flex items-center space-x-4">
              <ModeToggle />
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-lg md:text-3xl lg:text-3xl font-bold tracking-tight">Dashboard Rencana Strategis</h2>
              <div className="flex items-center space-x-2">
                <Label className="invisible md:visible lg:visible">Tahun</Label>
                <Select onValueChange={(value)=>setTahun(parseInt(value))}>
                  <SelectTrigger className="w-[150px] lg:w-[200px]">
                    <SelectValue placeholder="Pilih Tahun" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Tabs defaultValue="dokpol" className="space-y-4">
              <TabsList>
                <TabsTrigger value="dokpol">DOKPOL</TabsTrigger>
                <TabsTrigger value="pelayanan">
                  Pelayanan Kesehatan
                </TabsTrigger>
                <TabsTrigger value="sdm">
                  SDM
                </TabsTrigger>
              </TabsList>
              <TabsContent value="dokpol" className="space-y-4">
                <DokpolDashboard tahun={tahun} />
              </TabsContent>
              <TabsContent value="pelayanan" className="space-y-4">
                <PasienDashboard tahun={tahun} />
              </TabsContent>
              <TabsContent value="sdm" className="space-y-4">
                <SDMDashboard tahun={tahun} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </>
    )
  }