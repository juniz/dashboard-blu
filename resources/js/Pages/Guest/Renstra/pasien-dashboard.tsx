import { PasienPie } from "@/Pages/Guest/Renstra/pasien/pasien-pie";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { PasienBar } from "@/Pages/Guest/Renstra/pasien/pasien-bar";
import dataPasien from "@/datas/pasien";
import { PasienBarPresentase } from "@/Pages/Guest/Renstra/pasien/pasien-bar-presentase";
import { TinyLine } from "@/Components/tiny-line";

export default function PasienDashboard({ tahun }: { tahun: number }) {
    const data = dataPasien.filter((item) => {
        if (item.tahun == tahun) {
            return item;
        }
    });

    return (
        <>
            <span className="font-bold text-2xl">Capaian Individu</span>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {data.map((item, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-2">
                            <CardTitle className="text-sm font-medium">
                                {item.name}
                            </CardTitle>
                            <div className="text-2xl font-bold">
                                {item.capaian_individu}%
                            </div>
                        </CardHeader>
                        <CardContent>
                            <TinyLine data={dataPasien} name={item.name} />
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
                <Card className="col-span-5 lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Pelayanan Pasien</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="overflow-x-auto">
                            <PasienBar props={data} />
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-5 lg:col-span-3">
                    <CardHeader>
                        <CardTitle>
                            Presentase Komplain dan Kepuasan Pasien
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="overflow-x-auto">
                            <PasienBarPresentase props={data} />
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-5 lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Capaian</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <PasienPie dataPasien={data} />
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
