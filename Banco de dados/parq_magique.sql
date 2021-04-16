--DDL E DML
-- DBA

CREATE TABLE visitante
(
  id serial PRIMARY KEY,
  nome character varying(50) NOT NULL,
  cpf character varying(11) NOT NULL,
  nascimento DATE
)

ALTER TABLE visitante
ALTER COLUMN cpf DROP NOT NULL;
--DROP COLUMN cpf;


CREATE TABLE ingresso
(
  id serial primary key,
  data_visita date NOT NULL,
  tipo smallint,
  visitante_id integer NOT NULL
)

ALTER TABLE ingresso
ADD UNIQUE (visitante_id, data_visita) -- na mesma linha
