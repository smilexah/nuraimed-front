import {FC} from "react";
import {Banner} from "@/components/shared/banner/Banner";
import DepartmentsCarousel from "@/components/shared/departments/DepartmentsCarousel";
import ReviewsCarousel from "@/components/shared/reviews/ReviewsCarousel";

const DepartmentPage: FC = () => {
    return (
        <>
            <Banner
                title="ОТДЕЛЕНИЯ"
                backgroundImage="/specialists-banner.jpg"
                breadcrumbItems={["Отделения"]}
            />
            <div className="container mx-auto py-10">
                <DepartmentsCarousel/>

                <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#03224b]">
                    СЕТЬ МНОГОПРОФИЛЬНЫХ КЛИНИК &quot;ЭМИРМЕД&quot;
                </h2>
                <p className="mt-6 max-w-5xl mx-auto text-center leading-7 text-slate-700">
                    В НУРАЙМЕД своё здоровье доверяют те, для кого важны конфиденциальность и безупречное качество
                    медицинской помощи. Мы собрали команду опытных специалистов разных профилей, что позволяет оказывать
                    пациентам высококвалифицированную комплексную поддержку и при необходимости оперативно
                    организовывать консилиумы с участием узких экспертов.
                    Мультидисциплинарный подход — основа нашей работы. Хирурги, онкологи, терапевты, гистопатологи,
                    радиологи и другие врачи ежедневно совместно разбирают клинические случаи, что обеспечивает
                    предельно точную диагностику и выверенные решения в лечении. Такой формат работы гарантирует высокий
                    результат во всех направлениях медицины, представленных в клинике.
                </p>

                <h3 className="text-center text-3xl font-extrabold text-[#03224b] mb-8">ОТЗЫВЫ</h3>
                <ReviewsCarousel/>
            </div>
        </>
    );
};

export default DepartmentPage;
