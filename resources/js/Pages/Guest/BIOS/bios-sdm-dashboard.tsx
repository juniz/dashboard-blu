import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import dataSDM from "@/datas/sdm";
import { SDMBarPresentase } from "@/Pages/Guest/Renstra/sdm/sdm-bar-presentasi";
import { SDMPie } from "@/Pages/Guest/Renstra/sdm/sdm-pie";
import { TinyLine } from "@/Components/tiny-line";
import BiosSDMPie from "./sdm/bios-sdm-pie";

export default function BiosSDMDashboard({
  tahun,
  mou,
}: {
  tahun: number;
  mou: any;
}) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
        <Card className="col-span-5">
          <CardHeader>
            <CardTitle>Presentase Komplain dan Kepuasan Pasien</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="overflow-x-auto">
              <SDMBarPresentase props={mou} />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-4 lg:col-span-3">
          <CardHeader>
            <CardTitle>Capaian</CardTitle>
          </CardHeader>
          <CardContent>
            <SDMPie dataSDM={mou} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
