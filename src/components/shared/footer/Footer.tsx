import {FC} from "react";
import Image from "next/image";

export const Footer: FC = () => {
    return (
        <footer className="bg-[rgba(42,89,99,0.1)] py-[50px]">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2 items-start">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={200}
                            height={50}
                        />
                        <div className="flex gap-2 justify-center items-center">
                            <Image
                                src="/footer-location-point.svg"
                                alt="Location"
                                width={16}
                                height={16}
                            />
                            <p className="text-sm">1234 Street Name, City, State, 12345</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start">
                        <p>Отделение</p>
                        <p>Офтальмология</p>
                        <p>Педиатрия</p>
                        <p>Гинекология</p>
                        <p>Урология</p>
                        <p>Анализы</p>
                        <p>Процедурный кабинет</p>
                        <p>Рентгенография</p>
                        <p>Магнитно-резонансная томография МРТ</p>
                        <p>Компьютерная Томография КТ</p>
                        <p>Отоларингология</p>
                        <p>Невропатология</p>
                    </div>
                    <div className="flex flex-col gap-2 items-start">
                        <p>Клиентам</p>
                        <p>Корпоративным клиентам</p>
                    </div>
                    <div className="flex flex-col gap-2 items-start">
                        <div className="flex gap-[10px] items-center">
                            <Image
                                src="/footer-phone.svg"
                                alt="Logo"
                                width={24}
                                height={24}
                            />
                            <div className="flex flex-col">
                                <p>Отвечаем 24/7 без выходных</p>
                                <a href="tel:+7 (708) 911-37-90">+7 (708) 911-37-90</a>
                            </div>
                        </div>
                        <div className="flex gap-[10px] items-center">
                            <Image
                                src="/footer-phone.svg"
                                alt="Logo"
                                width={24}
                                height={24}
                            />
                            <div className="flex flex-col">
                                <p>Телефон жалоб и предложений</p>
                                <a href="tel:+7 (708) 911-37-90">+7 (708) 911-37-90</a>
                            </div>
                        </div>
                        <div className="flex gap-[10px] items-center">
                            <Image
                                src="/footer-phone.svg"
                                alt="Logo"
                                width={24}
                                height={24}
                            />
                            <div className="flex flex-col">
                                <p>По вопросам вакансий</p>
                                <a href="tel:+7 (708) 911-37-90">+7 (708) 911-37-90</a>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <a href="#" className="text-white hover:text-gray-400">
                                <Image
                                    src="/whatsapp-icon.svg"
                                    alt="Whatsapp"
                                    width={30}
                                    height={30}
                                />
                            </a>
                            <a href="#" className="text-white hover:text-gray-400">
                                <Image
                                    src="/instagram-icon.svg"
                                    alt="Instagram"
                                    width={30}
                                    height={30}
                                />
                            </a>
                            <a href="#" className="text-white hover:text-gray-400">
                                <Image
                                    src="/facebook-icon.svg"
                                    alt="Facebook"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Nuraimed. Все права защищены.
                </p>
            </div>
        </footer>
    );
}