FROM php:8.2-fpm

# Instalar dependencias necesarias, incluyendo Node.js 22
RUN apt-get update && apt-get install -y \
    curl \
    nano \
    git \
    zip \
    unzip \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Instalar Node.js versión 22 y npm
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest

# Instalar Composer
COPY --from=composer/composer:latest-bin /composer /usr/bin/composer
RUN mkdir -p /root/.composer && echo '{}' > /root/.composer/composer.json

# Crear directorio de trabajo
WORKDIR /var/www/html

# Crear las carpetas necesarias si no existen
RUN mkdir -p /var/www/html/storage /var/www/html/bootstrap/cache

# Ajustar permisos para Laravel
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage \
    && chmod -R 755 /var/www/html/bootstrap/cache

RUN cp /usr/local/etc/php/php.ini-production /usr/local/etc/php/php.ini

# Exponer puertos para PHP y Vite
EXPOSE 8000 5173
