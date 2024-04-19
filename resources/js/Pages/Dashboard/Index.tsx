import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Login from "@/Layouts/LoginLayout";
import { GrafikKunjungan } from "./GrafikKunjungan";
import dataSDM from "@/datas/sdm";

export default function Dashboard({
  user,
  poliklinik,
}: {
  user: string;
  poliklinik: string;
}) {
  const data = dataSDM.filter((item) => {
    if (item.tahun == 2023) {
      return item;
    }
  });
  return (
    <Login>
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="container mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">You're logged in! {user}</div>
            <GrafikKunjungan props={data} />
          </div>
        </div>
      </div>
    </Login>
  );
}
