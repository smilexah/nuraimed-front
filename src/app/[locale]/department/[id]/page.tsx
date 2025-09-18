import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import JsonLd from '@/components/JsonLd';
import DepartmentClient from './components/DepartmentClient';
import axiosInstance from '@/api/axiosInstance';

type Props = {
    params: Promise<{ locale: string; id: string }>
}

interface Translation {
    languageCode: string;
    title: string;
    description: string;
    offerDetails: string;
}

interface DepartmentResponse {
    id: number;
    directionImage: string;
    translations: Translation[];
}

async function getDepartment(id: string): Promise<DepartmentResponse | null> {
    try {
        const { data } = await axiosInstance.get(`/directions/${id}`);
        return data;
    } catch (error) {
        console.error('Error fetching department:', error);
        return null;
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, id } = await params;
    const department = await getDepartment(id);

    if (!department) {
        return generateSEOMetadata({
            title: 'Отделение не найдено | DI-CLINIC',
            description: 'Отделение не найдено в нашей медицинской клинике',
            canonical: `/department/${id}`,
        }, locale);
    }

    const currentTranslation = department.translations.find(
        t => t.languageCode === locale
    ) || department.translations[0];

    const seoData = {
        ru: {
            title: `${currentTranslation.title} | DI-CLINIC - Медицинская клиника в Алматы`,
            description: currentTranslation.description || `Отделение ${currentTranslation.title} в медицинской клинике DI-CLINIC. Профессиональные врачи, современное оборудование, качественное лечение в Алматы.`,
            keywords: `${currentTranslation.title}, медицинское отделение, DI-CLINIC, клиника Алматы, лечение, диагностика`,
        },
        kk: {
            title: `${currentTranslation.title} | DI-CLINIC - Алматыдағы медициналық клиника`,
            description: currentTranslation.description || `DI-CLINIC медициналық клиникасының ${currentTranslation.title} бөлімі. Кәсіби дәрігерлер, заманауи жабдықтар, Алматыда сапалы емдеу.`,
            keywords: `${currentTranslation.title}, медициналық бөлім, DI-CLINIC, Алматы клиникасы, емдеу, диагностика`,
        }
    };

    const data = seoData[locale as keyof typeof seoData] || seoData.ru;

    return generateSEOMetadata({
        title: data.title,
        description: data.description,
        keywords: data.keywords,
        canonical: `/department/${id}`,
        openGraph: {
            title: data.title,
            description: data.description,
            image: department.directionImage ? `data:image/jpeg;base64,${department.directionImage}` : '/banners/department-banner.jpg',
            type: 'website',
        },
    }, locale);
}

export default async function DepartmentPage({ params }: Props) {
    const { locale, id } = await params;

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Главная', url: 'https://nurai-med.kz' },
        { name: 'Отделения', url: 'https://nurai-med.kz/department' },
        { name: 'Отделение', url: `https://nurai-med.kz/department/${id}` }
    ]);

    return (
        <>
            <JsonLd data={breadcrumbSchema} />
            <DepartmentClient id={id} locale={locale} />
        </>
    );
}
