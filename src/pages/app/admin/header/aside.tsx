import { Home, LineChart, Package, Package2, Settings, Users2 } from "lucide-react"
import { Link } from "react-router-dom"
import { NavLink } from "../componets/nav-link"

export function AdminAside() {
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
                <Link to="/admin" className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
                    <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <NavLink to="/admin">
                    <Home className="h-5 w-5" />
                    <span className="sr-only">Home</span>
                </NavLink>
                <NavLink to="/admin/products">
                    <Package className="h-5 w-5" />
                    <span className="sr-only">Products</span>
                </NavLink>
                <NavLink to="#">
                    <Users2 className="h-5 w-5" />
                    <span className="sr-only">Customers</span>
                </NavLink>
                <NavLink to="/admin/dashboard">
                    <LineChart className="h-5 w-5" />
                    <span className="sr-only">Analytics</span>
                </NavLink>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
                <NavLink to="/admin/settings">
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                </NavLink>
            </nav>
        </aside>
    )
}
