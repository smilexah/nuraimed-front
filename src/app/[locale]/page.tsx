import {Metadata} from 'next';
import {generateMetadata as generateSEOMetadata, defaultSEO} from '@/lib/seo';
import {generateBreadcrumbSchema} from '@/lib/structured-data';
import JsonLd from '@/components/JsonLd';
import HomePage from './components/HomePage';

export async function generateMetadata(): Promise<Metadata> {
    const seoData = defaultSEO.ru;

    return generateSEOMetadata({
        title: seoData.title,
        description: seoData.description,
        keywords: seoData.keywords,
        canonical: '/',
        openGraph: {
            title: seoData.title.default,
            description: seoData.description,
            image: '/og-image.jpg',
            type: 'website',
        },
    });
}

export default async function Page() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        {name: 'Главная', url: 'https://di-clinic.kz'}
    ]);

    return (
        <>
            <JsonLd data={breadcrumbSchema}/>
            <HomePage/>
        </>
    );
}
