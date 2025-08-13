import {FC} from "react";
import {Banner} from "@/components/shared/banner/Banner";

const AboutUsPage: FC = () => {
    return (
        <>
            <Banner
                title="О КЛИНИКЕ"
                backgroundImage="/specialists-banner.jpg"
                breadcrumbItems={["О клинике"]}
            />
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
                <h1 className="text-[96px] font-bold text-[#4147BF] dark:text-[#666CF4] mb-4">О клинике</h1>
                <p className="text-base md:text-lg text-[#232323] dark:text-white mb-6">
                    Здесь будет информация о нашей клинике, услугах и команде.
                </p>
            </div>
        </>
    );
}

export default AboutUsPage;