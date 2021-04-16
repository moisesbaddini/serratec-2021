/*
2. O parque agora gostaria de saber quais brinquedos o visitante escolheu no dia em que esteve no parque. Para isso, foram criadas novas tabelas, uma com o nome dos brinquedos, e outra com o vínculo entre o ingresso e o brinquedo.
*/

CREATE TABLE atracao (
  id serial primary key,
  nome character varying(50),
  altura_maxima DOUBLE PRECISION
);

/* catraca == muitos pra muitos */
-- Receber dados ESTRANGEIROS

CREATE TABLE catraca (
  id serial PRIMARY KEY,
  atracao_id INTEGER,
  ingresso_id INTEGER
);
