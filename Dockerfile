# =========================
# 1️⃣ BUILD STAGE
# =========================
FROM node:20-alpine AS build

WORKDIR /app

# Chỉ copy package.json (KHÔNG cần package-lock.json)
COPY package.json ./

# npm install sẽ tự generate package-lock.json
RUN npm install

# Copy toàn bộ source
COPY . .

# Build Astro
RUN npm run build


# =========================
# 2️⃣ RUNTIME STAGE
# =========================
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
