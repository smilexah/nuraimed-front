import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";

const locales = ["ru", "kk"];
const defaultLocale = "ru";

export const localeMiddleware = createMiddleware({ locales, defaultLocale });

export function handleLocaleMiddleware(req: NextRequest) {
    return localeMiddleware(req);
}