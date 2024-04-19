import { cn } from "@/lib/utils";
import { Link, usePage } from "@inertiajs/react";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const { url } = usePage();
    return (
        <nav
            className={cn(
                "flex items-center space-x-4 lg:space-x-6",
                className
            )}
            {...props}
        >
            <Link
                href="/"
                className={url === "/" ? "text-primary" : "text-sm font-medium"}
            >
                RENSTRA
            </Link>
            <Link
                href="/bios"
                className={
                    url === "/bios"
                        ? "text-primary transition-colors"
                        : "text-sm font-medium transition-colors hover:text-primary"
                }
            >
                BIOS
            </Link>
        </nav>
    );
}
