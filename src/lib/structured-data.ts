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
    hoursAvailable?: {
        "@type": string;
        opens: string;
        closes: string;
        dayOfWeek: string[];
    };
}

export interface Address {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    addressCountry: string;
    postalCode: string;
}

export interface MedicalOrganization extends Organization {
    "@type": string;
    medicalSpecialty: string[];
    availableService: MedicalService[];
    priceRange?: string;
    aggregateRating?: {
        "@type": string;
        ratingValue: string;
        reviewCount: string;
    };
    geo?: {
        "@type": string;
        latitude: string;
        longitude: string;
    };
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
      streetAddress: 'г. Алматы, ул. Жунисова, 4а', // Обновил адрес
      specialties: [
        'Терапия',
        'Кардиология',
        'Неврология',
        'Гастроэнтерология',
        'Эндокринология',
        'Дерматология',
        'Гинекология',
        'Урология'
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
        },
        {
          name: 'УЗИ диагностика',
          description: 'Ультразвуковое исследование органов'
        }
      ]
    },
    kk: {
      name: 'DI-CLINIC',
      description: 'Алматыдағы заманауи медициналық клиника',
      streetAddress: 'Алматы қ., Жүнісов даңғылы, 4а',
      specialties: [
        'Терапия',
        'Кардиология',
        'Неврология',
        'Гастроэнтерология',
        'Эндокринология',
        'Дерматология',
        'Гинекология',
        'Урология'
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
        },
        {
          name: 'УДЗ диагностикасы',
          description: 'Органдардың ультрадыбыстық зерттеуі'
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
        telephone: "+7-727-344-03-03", // Реальный номер DI-CLINIC
        contactType: "customer service",
        availableLanguage: ["Russian", "Kazakh"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          opens: "08:00",
          closes: "20:00",
          dayOfWeek: [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ]
        }
      }
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: data.streetAddress,
      addressLocality: "Алматы",
      addressRegion: "Алматы",
      addressCountry: "KZ",
      postalCode: "050012"
    },
    sameAs: [
      "https://www.instagram.com/di_clinic_almaty",
      "https://wa.me/77273440303",
      "https://2gis.kz/almaty/firm/70000001018392421"
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
    })),
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "43.2567",
      longitude: "76.9286"
    }
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
  education?: string;
  experience?: string;
  specialization?: string;
}): object {
  const baseUrl = 'https://di-clinic.kz';

  return {
    "@type": "Person",
    name: doctor.name,
    jobTitle: doctor.jobTitle,
    description: doctor.description,
    image: doctor.image ? `${baseUrl}${doctor.image}` : undefined,
    worksFor: {
      "@type": "MedicalOrganization",
      name: doctor.worksFor,
      url: baseUrl
    },
    // Дополнительные поля для медицинского профиля
    knowsAbout: doctor.specialization ? [doctor.specialization] : undefined,
    hasOccupation: {
      "@type": "Occupation",
      name: doctor.jobTitle,
      occupationLocation: {
        "@type": "City",
        name: "Алматы"
      }
    },
    // Образование (если передано)
    ...(doctor.education && {
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        educationalLevel: doctor.education
      }
    }),
    // Опыт работы (если передан)
    ...(doctor.experience && {
      hasOccupation: {
        "@type": "Occupation",
        name: doctor.jobTitle,
        experienceRequirements: doctor.experience,
        occupationLocation: {
          "@type": "City",
          name: "Алматы"
        }
      }
    }),
    // Контактная информация через организацию
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+7-727-344-03-03",
      contactType: "appointment booking",
      availableLanguage: ["Russian", "Kazakh"]
    }
  };
}
