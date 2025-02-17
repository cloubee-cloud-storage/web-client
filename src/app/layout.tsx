import { QueryClientProvider } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';

import { queryClient } from '@/libs/api/query-client';

import '../styles/globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Cloubee',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <QueryClientProvider client={queryClient}>
                    <NextIntlClientProvider messages={messages}>
                        {children}
                    </NextIntlClientProvider>
                </QueryClientProvider>
            </body>
        </html>
    );
}
