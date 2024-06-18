'use client'

import { useAuth } from '@/contexts/auth'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  const { user, signOut } = useAuth()

  function handleSignOut() {
    signOut()
  }

  return (
    <div className="flex items-center justify-center min-h-20 max-h-20 bg-slate-600 px-6">
      <div className="flex items-center w-full gap-4">
        <Image
          src={require('@/assets/icon-black.svg')}
          alt=""
          className="size-10 object-cover mr-6"
        />

        <Link
          href="/"
          data-active={pathname === '/'}
          className="text-slate-300 data-[active=true]:text-slate-50 data-[active=true]:underline underline-offset-4"
        >
          Início
        </Link>

        {user && (
          <Link
            href="/dashboard"
            data-active={pathname === '/dashboard'}
            className="text-slate-300 data-[active=true]:text-slate-50 data-[active=true]:underline underline-offset-4"
          >
            Minhas publicações
          </Link>
        )}
      </div>

      {user ? (
        <button
          type="button"
          onClick={handleSignOut}
          className="bg-slate-800 px-4 py-2 rounded text-slate-50 hover:bg-slate-800/70"
        >
          Sair
        </button>
      ) : (
        <Link
          href="/auth/sign-in"
          className="bg-slate-800 px-4 py-2 rounded text-slate-50 hover:bg-slate-800/70 text-nowrap"
        >
          Acessar Conta
        </Link>
      )}
    </div>
  )
}