import {getMessages} from 'next-intl/server';
import {NextIntlClientProvider} from 'next-intl';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import {NotFound} from "@/components/shared/notFound";

type Props = {
    params: Promise<{ locale: string; catchAll: string[] }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function CatchAllNotFoundPage({params}: Props) {
    const resolvedParams = await params;
    const {locale} = resolvedParams;

    if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
        notFound();
    }

    const messages = await getMessages({locale});

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="flex min-h-screen flex-col">
                <div className="flex-grow">
                    <NotFound/>
                </div>
            </div>
        </NextIntlClientProvider>
    );
}
