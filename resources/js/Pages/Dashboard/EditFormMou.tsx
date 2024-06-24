import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { router, usePage } from "@inertiajs/react";
import { useToast } from "@/components/ui/use-toast";

const formScheme = z.object({
  nomor: z.string().min(3, "Nomor tidak boleh kosong"),
  uraian: z.string().min(3, "Uraian tidak boleh kosong"),
  pihakKedua: z.string().min(3, "Pihak Kedua tidak boleh kosong"),
  tmtAwal: z.string(),
  tmtAkhir: z.string(),
});

export default function FormMou({ mou }: { mou: any }) {
  const { errors } = usePage().props;
  const { toast } = useToast();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formScheme>>({
    resolver: zodResolver(formScheme),
    defaultValues: {
      nomor: mou?.nomor || "",
      uraian: mou?.uraian || "",
      pihakKedua: mou?.pihak_kedua || "",
      tmtAwal: mou?.tmt_awal || new Date().toISOString().split("T")[0],
      tmtAkhir: mou?.tmt_akhir || new Date().toISOString().split("T")[0],
    },
  });

  function onReset() {
    form.reset();
  }

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formScheme>) {
    // console.log(values);
    router.post("/mou", values, {
      onSuccess: () => {
        form.reset();
        toast({
          title: "Data berhasil disimpan",
          color: "green",
          className: "text-white bg-green-500",
        });
        router.reload({
          only: ["mou"],
        });
      },
      onError: (error) => {
        toast({
          title: "Gagal menyimpan data",
          color: "red",
          className: "text-white bg-red-500",
        });
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 m-8">
        <FormField
          control={form.control}
          name="nomor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
              {errors.nomor && (
                <div className="text-red-600 text-muted text-sm">
                  {errors.nomor}
                </div>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="uraian"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Uraian</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
              {errors.uraian && (
                <div className="text-red-600 text-muted text-sm">
                  {errors.uraian}
                </div>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pihakKedua"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pihak Kedua</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
              {errors.pihakKedua && (
                <div className="text-red-600 text-muted text-sm">
                  {errors.pihakKedua}
                </div>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tmtAwal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>TMT Awal</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
              {errors.tmtAwal && (
                <div className="text-red-600 text-muted text-sm">
                  {errors.tmtAwal}
                </div>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tmtAkhir"
          render={({ field }) => (
            <FormItem>
              <FormLabel>TMT Akhir</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
              {errors.tmtAkhir && (
                <div className="text-red-600 text-muted text-sm">
                  {errors.tmtAkhir}
                </div>
              )}
            </FormItem>
          )}
        />
        <div className="flex flex-row justify-center space-x-2">
          <Button type="submit">Simpan</Button>
          <Button type="reset" variant="outline" onClick={onReset}>
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
}
