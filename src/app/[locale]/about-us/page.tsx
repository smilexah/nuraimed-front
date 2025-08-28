import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import JsonLd from '@/components/JsonLd';
import AboutUsClient from './components/AboutUsClient';

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoData = {
    ru: {
      title: 'О клинике DI-CLINIC - Современная медицина в Алматы',
      description: 'Узнайте о DI-CLINIC - современной медицинской клинике в Алматы. Наша история, миссия, команда врачей и современное оборудование для вашего здоровья.',
      keywords: 'о клинике, DI-CLINIC, медицинская клиника Алматы, история клиники, команда врачей, современная медицина',
    },
    kk: {
      title: 'DI-CLINIC клиникасы туралы - Алматыдағы заманауи медицина',
      description: 'DI-CLINIC туралы біліңіз - Алматыдағы заманауи медициналық клиника. Біздің тарихымыз, миссиямыз, дәрігерлер тобы және сіздің денсаулығыңыз үшін заманауи жабдықтар.',
      keywords: 'клиника туралы, DI-CLINIC, Алматы медициналық клиникасы, клиника тарихы, дәрігерлер тобы, заманауи медицина',
    }
  };

  const data = seoData[locale as keyof typeof seoData] || seoData.ru;

  return generateSEOMetadata({
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    canonical: '/about-us',
    openGraph: {
      title: data.title,
      description: data.description,
      image: '/about-us-og.jpg',
      type: 'website',
    },
  }, locale);
}

export default async function AboutUsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: 'https://di-clinic.kz' },
    { name: 'О клинике', url: 'https://di-clinic.kz/about-us' }
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <AboutUsClient />
    </>
  );
}
