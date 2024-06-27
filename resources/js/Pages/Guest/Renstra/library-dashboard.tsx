import DokpolPie from "../Renstra/dokpol/dokpol-pie";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Link } from "@inertiajs/react";
import { ArrowRightFromLineIcon } from "lucide-react";
import HumasFile from "";

export default function LibraryDashboard() {
  return (
    <>
      {/* <span className="font-bold text-2xl">Capaian Individu</span> */}
      <div className="grid gap-4 grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>E-Library</CardTitle>
          </CardHeader>
          <CardContent className="pl-2 mx-7">
            <ul className="list-disc w-full">
              <li>
                <div className="flex flex-row">
                  <span>Hak Pasien dan Keluarga</span>{" "}
                  <a
                    href="https://rsbhayangkaranganjuk.com/hak-pasien-dan-keluarga/"
                    target="_blank"
                  >
                    <ArrowRightFromLineIcon />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <span>Kewajiban Pasien dan Keluarga</span>{" "}
                  <a
                    href="https://rsbhayangkaranganjuk.com/kewajiban-pasien-dan-keluarga/"
                    target="_blank"
                  >
                    <ArrowRightFromLineIcon />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <span>Tata Tertib Penunggu Pasien</span>{" "}
                  <a
                    href="https://rsbhayangkaranganjuk.com/?page_id=1172"
                    target="_blank"
                  >
                    <ArrowRightFromLineIcon />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <span>Kerja Sama</span>
                  <a
                    href="https://rsbhayangkaranganjuk.com/kerja-sama/"
                    target="_blank"
                  >
                    <ArrowRightFromLineIcon />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <span>Leflet Informasi Kesehatan</span>{" "}
                  <a
                    href="https://rsbhayangkaranganjuk.com/leaflet-informasi-kesehatan/"
                    target="_blank"
                  >
                    <ArrowRightFromLineIcon />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <span>Survey Kepuasan Pasien</span>
                  <a
                    href="https://rsbhayangkaranganjuk.com/survey-kepuasan-masyarakat/"
                    target="_blank"
                  >
                    <ArrowRightFromLineIcon />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <span>Zona Integritas</span>{" "}
                  <a
                    href="https://rsbhayangkaranganjuk.com/zona-integritas/"
                    target="_blank"
                  >
                    <ArrowRightFromLineIcon />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <span>Penghargaan</span>{" "}
                  <a
                    href="https://rsbhayangkaranganjuk.com/penghargaan/"
                    target="_blank"
                  >
                    <ArrowRightFromLineIcon />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <span>Sarana Penyampaian Masukan Dan Saran</span>{" "}
                  <a href="/assets/humas.docx" target="_blank">
                    <ArrowRightFromLineIcon />
                  </a>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
