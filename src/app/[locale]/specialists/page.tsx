import {FC} from "react";
import {Banner} from "@/components/shared/banner/Banner";
import {Link} from "@/i18n/navigation";

const SpecialistsPage: FC = () => {
    return (
        <>
            <Banner
                title="СПЕЦИАЛИСТЫ"
                backgroundImage="/specialists-banner.jpg"
                overlayColor="rgba(1, 168, 91, 0.6)"
                breadcrumb={
                    <>
                        <Link href="/">Главная</Link> <span className="mx-1">•</span>{" "}
                        <span className="font-semibold">Специалисты</span>
                    </>
                }
            />
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
                <h1 className="text-[96px] font-bold text-[#4147BF] dark:text-[#666CF4] mb-4">Специалисты</h1>
                <p className="text-base md:text-lg text-[#232323] dark:text-white mb-6">
                    Здесь будет информация о наших специалистах, их квалификации и опыте работы.
                </p>
            </div>
        </>
    );
}

export default SpecialistsPage;