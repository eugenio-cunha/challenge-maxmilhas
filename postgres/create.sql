CREATE TABLE public.black_list
(
    "id" SERIAL PRIMARY KEY,
    cpf character varying(11) NOT NULL,
    block boolean NOT NULL DEFAULT false
)
