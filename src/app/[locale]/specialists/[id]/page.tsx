import {FC} from "react";

const SpecialistsPageId: FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-[96px] font-bold text-[#4147BF] dark:text-[#666CF4] mb-4">Специалист</h1>
            <p className="text-base md:text-lg text-[#232323] dark:text-white mb-6">
                Здесь будет информация о конкретном специалисте, его квалификации и опыте работы.
            </p>
        </div>
    );
}

export default SpecialistsPageId;