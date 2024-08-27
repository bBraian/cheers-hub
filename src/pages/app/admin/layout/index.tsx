import { Outlet } from 'react-router-dom'
import { AdminAside } from "../header/aside"
import { AdminHeader } from "../header/header"

export function AdminLayout() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <AdminAside />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <AdminHeader />
                <main className="flex-1 items-start p-4 sm:px-6 sm:py-0 md:gap-8">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
