import DokpolPie from "../Renstra/dokpol/dokpol-pie";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { DokpolBar } from "@/Pages/Guest/Renstra/dokpol/dokpol-bar";
import dataDokpol from "@/datas/dokpol";
import { TinyLine } from "@/Components/tiny-line";

export default function DokpolDashboard({ tahun }: { tahun: number }) {
    const data = dataDokpol.filter((item) => {
        if (item.tahun == tahun) {
            return item;
        }
    });

    return (
        <>
            <span className="font-bold text-2xl">Capaian Individu</span>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
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
                            <TinyLine data={dataDokpol} name={item.name} />
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-5">
                    <CardHeader>
                        <CardTitle>DOKPOL</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="overflow-x-auto">
                            <DokpolBar props={data} />
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-5 lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Capaian</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <DokpolPie props={data} />
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
