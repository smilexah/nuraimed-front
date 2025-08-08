import {Locale, routing} from "@/i18n/routing";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {notFound} from "next/navigation";
import {Header} from "@/components/shared/header";
import {Footer} from "@/components/shared/footer";

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: Readonly<{
    children: React.ReactNode;
    params: { locale: Locale };
}>) {
    const {locale} = await params;

    if (!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <div className="flex min-h-screen flex-col">
                <Header/>
                <div className="flex-grow">{children}</div>
                <Footer/>
            </div>
        </NextIntlClientProvider>
    );
}