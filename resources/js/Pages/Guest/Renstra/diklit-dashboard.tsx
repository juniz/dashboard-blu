import DokpolPie from "../Renstra/dokpol/dokpol-pie";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import dataKeu from "@/datas/keu";
import { TargetBar } from "./keu/target-bar";
import { LineTargetKeu } from "./keu/line-target";
import { LinePendapatanKeu } from "./keu/line-pendapatan-keu";
import { LineBelanjaKeu } from "./keu/line-belanja-keu";

export default function DiklitDashboard({ tahun }: { tahun: number }) {
  const data = dataKeu.filter((item) => {
    if (item.tahun == tahun) {
      return item;
    }
  });

  const formatCurrency = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <>
      {/* <span className="font-bold text-2xl">Capaian Individu</span> */}
      {/* <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
        <Card className="h-[150px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Target</CardTitle>
            <div className="text-2xl font-bold">
              {formatCurrency(data[0].value)}
            </div>
          </CardHeader>
          <CardContent>
            <LineTargetKeu data={dataKeu} />
          </CardContent>
        </Card>
        <Card className="h-[150px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Pendapatan</CardTitle>
            <div className="text-2xl font-bold">
              {formatCurrency(data[0].pendapatan)}
            </div>
          </CardHeader>
          <CardContent>
            <LinePendapatanKeu data={dataKeu} />
          </CardContent>
        </Card>
        <Card className="h-[150px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Belanja</CardTitle>
            <div className="text-2xl font-bold">
              {formatCurrency(data[0].belanja)}
            </div>
          </CardHeader>
          <CardContent>
            <LineBelanjaKeu data={dataKeu} />
          </CardContent>
        </Card>
      </div> */}
      <div className="grid gap-4 grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>KEUANGAN</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="overflow-x-auto">
              <TargetBar props={dataKeu} />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
