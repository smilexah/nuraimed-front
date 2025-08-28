import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import JsonLd from '@/components/JsonLd';
import ContactClient from './components/ContactClient';

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoData = {
    ru: {
      title: 'Контакты DI-CLINIC - Запись на прием в Алматы',
      description: 'Контакты медицинской клиники DI-CLINIC в Алматы. Адрес, телефоны, время работы. Запишитесь на прием к врачу онлайн или по телефону.',
      keywords: 'контакты DI-CLINIC, запись на прием, телефон клиники, адрес клиники Алматы, время работы',
    },
    kk: {
      title: 'DI-CLINIC байланыстары - Алматыда дәрігерге жазылу',
      description: 'Алматыдағы DI-CLINIC медициналық клиникасының байланыстары. Мекенжайы, телефондары, жұмыс уақыты. Дәрігерге онлайн немесе телефон арқылы жазылыңыз.',
      keywords: 'DI-CLINIC байланыстары, дәрігерге жазылу, клиника телефоны, Алматы клиника мекенжайы, жұмыс уақыты',
    }
  };

  const data = seoData[locale as keyof typeof seoData] || seoData.ru;

  return generateSEOMetadata({
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    canonical: '/contact',
    openGraph: {
      title: data.title,
      description: data.description,
      image: '/contact-og.jpg',
      type: 'website',
    },
  }, locale);
}

export default async function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: 'https://di-clinic.kz' },
    { name: 'Контакты', url: 'https://di-clinic.kz/contact' }
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <ContactClient />
    </>
  );
}
