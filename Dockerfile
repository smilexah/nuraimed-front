# Используем официальный Node.js образ как базовый
FROM node:20-alpine AS base

# Установим зависимости только при необходимости
FROM base AS deps
# Проверяем https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
# для понимания зачем может понадобиться libc6-compat
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Устанавливаем зависимости на основе предпочтительного менеджера пакетов
COPY package.json package-lock.json* ./
RUN \
  if [ -f package-lock.json ]; then npm ci --only=production; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Пересобираем исходники только при необходимости
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Отключаем телеметрию во время сборки
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Образ для продакшена, копируем все необходимые файлы и запускаем Next.js
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Отключаем телеметрию во время выполнения
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Устанавливаем правильные разрешения для prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Автоматически используем output traces для уменьшения размера образа
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# установить hostname на localhost
ENV HOSTNAME "0.0.0.0"

# server.js создается Next.js с конфигурацией output: "standalone"
CMD ["node", "server.js"]
