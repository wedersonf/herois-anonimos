import { isAdmin } from '@/auth/auth'
import { redirect } from 'next/navigation'

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (!isAdmin()) {
    redirect('/dashboard')
  }

  return <div className="px-4 lg:px-0 w-full">{children}</div>
}
