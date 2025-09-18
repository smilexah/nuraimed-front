"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {Controller, useForm} from "react-hook-form";
import {reviewSchema, ReviewValues} from "@/schemas/review";
import React from "react";
import InputMask from "@mona-health/react-input-mask";
import axiosInstance from "@/api/axiosInstance";
import {Review} from "@/app/[locale]/reviews/page";

export default function ReviewForm() {
    const {
        register,
        control,
        handleSubmit,
        formState: {errors, isSubmitting, isValid},
        reset,
    } = useForm<ReviewValues>({
        resolver: zodResolver(reviewSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            phone: "",
            comment: "",
        },
    });

    const onSubmit = async (data: ReviewValues) => {
        const payload = {
            name: data.name.trim(),
            phone: data.phone.trim(),
            message: data.comment.trim(),
        };

        try {
            await axiosInstance.post<Review>("/reviews", payload);

            // await fetchReviews(0, true);

            reset();
        } catch (err) {
            console.error("Ошибка отправки отзыва", err);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ваше имя
                    </label>
                    <input
                        type="text"
                        {...register("name")}
                        placeholder="Введите ваше имя"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F59E2D] focus:border-transparent transition-all"
                        disabled={isSubmitting}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs sm:text-sm">{errors.name.message}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ваш телефон
                    </label>
                    <Controller
                        name="phone"
                        control={control}
                        render={({field}) => (
                            <InputMask
                                mask="+7 (999) 999-99-99"
                                placeholder="+7 (___) ___-__-__"
                                value={field.value || ""}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e.target.value)}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F59E2D] focus:border-transparent transition-all"
                                disabled={isSubmitting}
                            />
                        )}
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-xs sm:text-sm">{errors.phone.message}</p>
                    )}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваш отзыв *
                </label>
                <textarea
                    rows={5}
                    placeholder="Расскажите о своем опыте лечения в нашей клинике..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F59E2D] focus:border-transparent transition-all resize-none"
                    disabled={isSubmitting}
                    {...register("comment")}
                />
                {errors.comment && (
                    <p className="mt-1 text-xs text-red-500">{errors.comment.message}</p>
                )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="w-full bg-[#2A5963] hover:bg-[#1e4147] text-[#F59E2D] font-semibold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <div className="flex items-center justify-center">
                        <div
                            className="animate-spin rounded-full h-5 w-5 border-2 border-[#F59E2D] border-t-transparent mr-2"></div>
                        Отправка...
                    </div>
                ) : (
                    "Отправить отзыв"
                )}
            </button>
        </form>
    )
}