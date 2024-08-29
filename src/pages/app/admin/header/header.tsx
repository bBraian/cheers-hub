import { Home, LineChart, Menu, Package, Package2, PanelLeft, Search, ShoppingCart, Users2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Link, useLocation } from "react-router-dom"
import { DynamicBreadcrumb } from "../componets/dynamic-breadcumb"
import clsx from "clsx"

export function AdminHeader() {
    const location = useLocation()

    const isActive = (path: string): boolean => location.pathname === path;

    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline" className="sm:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link to="#" className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base">
                            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        <Link
                            to="/admin"
                            className={clsx("flex items-center gap-4 px-2.5", 
                                isActive("/admin") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <Home className="h-5 w-5" />
                            Dashboard
                        </Link>
                        <Link
                            to="/admin/products"
                            className={clsx("flex items-center gap-4 px-2.5", 
                                isActive("/admin/products") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <Package className="h-5 w-5" />
                            Products
                        </Link>
                        <Link
                            to="/customers"
                            className={clsx("flex items-center gap-4 px-2.5", 
                                isActive("/customers") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <Users2 className="h-5 w-5" />
                            Customers
                        </Link>
                        <Link
                            to="/settings"
                            className={clsx("flex items-center gap-4 px-2.5", 
                                isActive("/settings") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <LineChart className="h-5 w-5" />
                            Settings
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <DynamicBreadcrumb />
            <div className="relative ml-auto flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                />
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="overflow-hidden rounded-full"
                    >
                        <img
                            src="https://avatars.githubusercontent.com/u/77290279?v=4"
                            width={36}
                            height={36}
                            alt="Avatar"
                            className="overflow-hidden rounded-full"
                        />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}