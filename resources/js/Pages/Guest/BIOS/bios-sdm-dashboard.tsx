import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import dataSDM from "@/datas/sdm";
import { SDMBarPresentase } from "@/Pages/Guest/Renstra/sdm/sdm-bar-presentasi";
import { SDMPie } from "@/Pages/Guest/Renstra/sdm/sdm-pie";
import { TinyLine } from "@/Components/tiny-line";
import BiosSDMPie from "./sdm/bios-sdm-pie";

export default function BiosSDMDashboard({ tahun }: { tahun: number }) {
    const data = dataSDM.filter((item) => {
        if (item.tahun == tahun) {
            return item;
        }
    });

    return (
        <>
            <span className="font-bold text-2xl">Capaian Individu</span>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {data.map((item, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {item.name}
                            </CardTitle>
                            <div className="text-2xl font-bold">
                                {item.capaian_individu}%
                            </div>
                        </CardHeader>
                        <CardContent>
                            <TinyLine data={dataSDM} name={item.name} />
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Pelayanan Pasien</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="overflow-x-auto">
                            <BiosSDMPie props={data} />
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>
                            Presentase Komplain dan Kepuasan Pasien
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="overflow-x-auto">
                            <SDMBarPresentase props={data} />
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3 lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Capaian</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <SDMPie dataSDM={data} />
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
