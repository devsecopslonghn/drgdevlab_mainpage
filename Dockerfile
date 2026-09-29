# =========================
# 1. BUILD STAGE
# =========================
FROM node:20-alpine AS build

WORKDIR /app

# Only package.json is currently committed; npm install generates the lockfile.
COPY package.json ./
RUN npm install

COPY . .
RUN npm run build


# =========================
# 2. RUNTIME STAGE
# =========================
FROM nginx:alpine

# Apply available Alpine security fixes, including patched runtime libraries.
RUN apk upgrade --no-cache \
    && rm -f /etc/nginx/conf.d/default.conf \
    && touch /var/run/nginx.pid \
    && chown -R nginx:nginx /var/cache/nginx /var/run/nginx.pid /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build --chown=nginx:nginx /app/dist /usr/share/nginx/html

# Run the web server without root privileges.
USER nginx

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
