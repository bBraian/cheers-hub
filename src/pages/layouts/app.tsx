import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <div className="flex flex-1 gap-4 p-4 w-full justify-center">
        <Outlet />
      </div>
    </div>
  )
}
