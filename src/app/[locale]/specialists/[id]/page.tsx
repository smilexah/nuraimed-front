import {Metadata} from 'next';
import {generateMetadata as generateSEOMetadata} from '@/lib/seo';
import {generateBreadcrumbSchema, generatePersonSchema} from '@/lib/structured-data';
import JsonLd from '@/components/JsonLd';
import SpecialistClient from './components/SpecialistClient';
import axiosInstance from '@/api/axiosInstance';

type Props = {
    params: Promise<{ locale: string; id: string }>
}

interface SpecialistTranslation {
    languageCode: string;
    description: string;
    education: string;
    experience: string;
    serviceRecord: string;
    specialization: string;
}

interface Specialist {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    profileImage: string;
    translations: SpecialistTranslation[];
}

async function getSpecialist(id: string): Promise<Specialist | null> {
    try {
        const {data} = await axiosInstance.get(`/doctors/${id}`);
        return data;
    } catch (error) {
        console.error('Error fetching specialist:', error);
        return null;
    }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const {locale, id} = await params;
    const specialist = await getSpecialist(id);

    if (!specialist) {
        return generateSEOMetadata({
            title: 'Специалист не найден | DI-CLINIC',
            description: 'Специалист не найден в нашей медицинской клинике',
            canonical: `/specialists/${id}`,
        }, locale);
    }

    const translation = specialist.translations.find(t => t.languageCode === locale) || specialist.translations[0];
    const fullName = `${specialist.firstName} ${specialist.lastName} ${specialist.middleName || ''}`.trim();

    return generateSEOMetadata({
        title: `${fullName} - ${translation.specialization} | DI-CLINIC`,
        description: `${fullName} - ${translation.specialization} в DI-CLINIC. ${translation.description.substring(0, 150)}...`,
        keywords: `${fullName}, ${translation.specialization}, врач, доктор, медицина, Алматы, DI-CLINIC`,
        canonical: `/specialists/${id}`,
        openGraph: {
            title: `${fullName} - ${translation.specialization}`,
            description: `Запишитесь на прием к врачу ${fullName} в клинике DI-CLINIC`,
            image: specialist.profileImage ? `/api/image/${specialist.id}` : '/doctor-placeholder.jpg',
            type: 'article',
        },
    }, locale);
}

export default async function SpecialistPage({params}: Props) {
    const {id} = await params;
    const specialist = await getSpecialist(id);

    if (!specialist) {
        return <SpecialistClient specialistId={id}/>;
    }

    const translation = specialist.translations.find(t => t.languageCode === 'ru') || specialist.translations[0];
    const fullName = `${specialist.firstName} ${specialist.lastName} ${specialist.middleName || ''}`.trim();

    // Генерируем структурированные данные для врача
    const personSchema = generatePersonSchema({
        name: fullName,
        jobTitle: translation.specialization,
        description: translation.description,
        image: specialist.profileImage ? `/api/image/${specialist.id}` : undefined,
        worksFor: 'DI-CLINIC',
        education: translation.education,
        experience: translation.experience,
        specialization: translation.specialization
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        {name: 'Главная', url: 'https://di-clinic.kz'},
        {name: 'Специалисты', url: 'https://di-clinic.kz/specialists'},
        {name: fullName, url: `https://di-clinic.kz/specialists/${id}`}
    ]);

    return (
        <>
            <JsonLd data={personSchema}/>
            <JsonLd data={breadcrumbSchema}/>
            <SpecialistClient specialistId={id}/>
        </>
    );
}
