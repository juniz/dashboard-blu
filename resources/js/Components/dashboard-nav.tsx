import { cn } from "@/lib/utils";
import { Link, usePage } from "@inertiajs/react";

export function DashboardNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const { url } = usePage();
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className={
          url === "/dashboard" ? "text-primary" : "text-sm font-medium"
        }
      >
        MOU
      </Link>
      <Link
        href="/renstra"
        className={
          url === "/renstra"
            ? "text-primary transition-colors"
            : "text-sm font-medium transition-colors hover:text-primary"
        }
      >
        RENSTRA
      </Link>
    </nav>
  );
}
