FROM postgres:alpine

ENV POSTGRES_DB=challenge
COPY ./ ./
RUN ./script.sh \
    && rm -rf scripts.sh
