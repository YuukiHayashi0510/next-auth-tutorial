import '~/styles/globals.css'
import { NextComponentType } from 'next'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import AuthGuard from './auth/AuthGuard'
import Layout from './Layout'
import type { AppProps } from 'next/app'

export type CustomAppProps = AppProps<{ session: Session }> & {
  Component: NextComponentType & { requireAuth?: boolean }
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        {Component.requireAuth ? (
          <AuthGuard>
            <Component {...pageProps} />
          </AuthGuard>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </SessionProvider>
  )
}
