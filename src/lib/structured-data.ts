export interface Organization {
  name: string;
  url: string;
  logo: string;
  contactPoint: ContactPoint[];
  address: Address;
  sameAs: string[];
}

export interface ContactPoint {
  "@type": string;
  telephone: string;
  contactType: string;
  availableLanguage: string[];
}

export interface Address {
  "@type": string;
  streetAddress: string;
  addressLocality: string;
  addressCountry: string;
  postalCode: string;
}

export interface MedicalOrganization extends Organization {
  "@type": string;
  medicalSpecialty: string[];
  availableService: MedicalService[];
}

export interface MedicalService {
  "@type": string;
  name: string;
  description: string;
  provider: {
    "@type": string;
    name: string;
  };
}

export function generateOrganizationSchema(locale: string = 'ru'): MedicalOrganization {
  const baseUrl = 'https://di-clinic.kz';

  const organizationData = {
    ru: {
      name: 'DI-CLINIC',
      description: 'Современная медицинская клиника в Алматы',
      streetAddress: 'г. Алматы, ул. Примерная, 123', // Замените на реальный адрес
      specialties: [
        'Терапия',
        'Кардиология',
        'Неврология',
        'Гастроэнтерология',
        'Эндокринология',
        'Дерматология'
      ],
      services: [
        {
          name: 'Консультация терапевта',
          description: 'Первичная консультация и осмотр врача-терапевта'
        },
        {
          name: 'Диагностические исследования',
          description: 'Комплексная диагностика состояния здоровья'
        },
        {
          name: 'Лабораторные анализы',
          description: 'Полный спектр лабораторных исследований'
        }
      ]
    },
    kk: {
      name: 'DI-CLINIC',
      description: 'Алматыдағы заманауи медициналық клиника',
      streetAddress: 'Алматы қ., Үлгілі көш., 123', // Замените на реальный адрес
      specialties: [
        'Терапия',
        'Кардиология',
        'Неврология',
        'Гастроэнтерология',
        'Эндокринология',
        'Дерматология'
      ],
      services: [
        {
          name: 'Терапевт консультациясы',
          description: 'Терапевт дәрігерінің алғашқы консультациясы мен тексерісі'
        },
        {
          name: 'Диагностикалық зерттеулер',
          description: 'Денсаулық жағдайының кешенді диагностикасы'
        },
        {
          name: 'Зертханалық талдаулар',
          description: 'Зертханалық зерттеулердің толық спектрі'
        }
      ]
    }
  };

  const data = organizationData[locale as keyof typeof organizationData] || organizationData.ru;

  return {
    "@type": "MedicalOrganization",
    name: data.name,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+7-727-XXX-XX-XX", // Замените на реальный номер
        contactType: "customer service",
        availableLanguage: ["Russian", "Kazakh"]
      }
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: data.streetAddress,
      addressLocality: "Алматы",
      addressCountry: "KZ",
      postalCode: "050000" // Замените на реальный индекс
    },
    sameAs: [
      "https://www.facebook.com/di-clinic", // Замените на реальные ссылки
      "https://www.instagram.com/di_clinic_almaty",
      "https://wa.me/77271234567" // Замените на реальный WhatsApp
    ],
    medicalSpecialty: data.specialties,
    availableService: data.services.map(service => ({
      "@type": "MedicalProcedure",
      name: service.name,
      description: service.description,
      provider: {
        "@type": "MedicalOrganization",
        name: data.name
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: Array<{name: string, url: string}>): object {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function generatePersonSchema(doctor: {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  worksFor: string;
}): object {
  return {
    "@type": "Person",
    name: doctor.name,
    jobTitle: doctor.jobTitle,
    description: doctor.description,
    image: doctor.image,
    worksFor: {
      "@type": "MedicalOrganization",
      name: doctor.worksFor
    }
  };
}
