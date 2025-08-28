import {Locale, routing} from "@/i18n/routing";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {notFound} from "next/navigation";
import {Header} from "@/components/shared/header";
import {Footer} from "@/components/shared/footer";
import JsonLd from "@/components/JsonLd";
import { generateOrganizationSchema } from "@/lib/structured-data";

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
    const organizationSchema = generateOrganizationSchema(locale);

    return (
        <NextIntlClientProvider messages={messages}>
            <JsonLd data={organizationSchema} />
            <div className="flex min-h-screen flex-col">
                <Header/>
                <main className="flex-grow">{children}</main>
                <Footer/>
            </div>
        </NextIntlClientProvider>
    );
}