import { Head } from "@inertiajs/react";
import Login from "@/Layouts/LoginLayout";
export default function Dashboard({ mou }: { mou: any }) {
  return (
    <Login>
      <Head title="Dashboard" />

      <div className="py-8">
        <div className="container mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            {/* <Tabs defaultValue="input">
              <TabsList>
                <TabsTrigger value="input">Input</TabsTrigger>
                <TabsTrigger value="data">Data</TabsTrigger>
              </TabsList>
              <TabsContent value="input">
                <FormMou />
              </TabsContent>
              <TabsContent value="data" className="m-4">
                <DataMou mou={mou} />
              </TabsContent>
            </Tabs> */}
          </div>
        </div>
      </div>
    </Login>
  );
}
