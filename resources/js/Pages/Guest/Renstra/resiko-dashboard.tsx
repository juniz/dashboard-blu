import DokpolPie from "../Renstra/dokpol/dokpol-pie";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { RisikoBar } from "./risiko/risiko-bar";

export default function RisikoDashboard() {
  return (
    <>
      {/* <span className="font-bold text-2xl">Capaian Individu</span> */}
      <div className="grid gap-4 grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Profil Risiko</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="overflow-x-auto">
              <RisikoBar />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
