# ⚠️  DEMO FIXTURE — INTENTIONALLY INSECURE. DO NOT DEPLOY.
#
# This file exists so the Trivy config scan in .github/workflows/ci.yml has
# something to find. Every "mistake" below is deliberate and annotated with the
# Trivy check ID it triggers.

# DS001: using the ':latest' tag — unpinned, non-reproducible builds.
FROM php:latest

# DS017: running apt-get upgrade/dist-upgrade in a container image.
RUN apt-get update && apt-get upgrade -y

# DS013: 'RUN <package-manager> update' without installing in the same layer.
RUN apt-get update

# DS005: using ADD for a local file instead of COPY.
ADD www.conf /usr/local/etc/php-fpm.d/www.conf
ADD php.ini /usr/local/etc/php/php.ini

# DS004: exposing SSH (port 22) from a container.
EXPOSE 22
EXPOSE 9000

# DS026: no HEALTHCHECK instruction is defined.

# DS002: the final USER is root — the container runs with full privileges.
USER root

CMD ["php-fpm"]
