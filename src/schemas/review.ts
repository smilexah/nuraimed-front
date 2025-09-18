import {z} from "zod";

export const reviewSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Имя должно содержать минимум 2 символа")
        .max(100, "Имя должно содержать не более 100 символов"),
    phone: z
        .string()
        .transform((val) => val.replace(/\D/g, ""))
        .refine((val) => val.length === 11 && val.startsWith("7"), {
            message: "Введите номер в формате +7 (777) 777-77-77",
        })
        .transform((val) => {
            return `+7 (${val.slice(1, 4)}) ${val.slice(4, 7)}-${val.slice(
                7,
                9
            )}-${val.slice(9, 11)}`;
        }),
    comment: z
        .string()
        .trim()
        .min(10, "Сообщение должно содержать минимум 10 символов")
        .max(1000, "Сообщение должно содержать не более 1000 символов"),
});

export type ReviewValues = z.infer<typeof reviewSchema>;