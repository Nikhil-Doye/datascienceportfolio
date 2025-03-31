"use client"

import React from 'react'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Layout/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Nikhil Doye | Data Engineer Portfolio</title>
        <meta name="description" content="Professional portfolio of Nikhil Doye, Data Engineer" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
