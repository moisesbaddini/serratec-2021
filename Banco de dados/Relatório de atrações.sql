/*
2. O parque agora gostaria de saber quais brinquedos o visitante escolheu no dia em que esteve no parque.
Para isso, foram criadas novas tabelas, uma com o nome dos brinquedos, e outra com o vínculo entre o ingresso e o brinquedo.
*/

SELECT
  id,
  nome
FROM
  visitante
WHERE
  (nome = 'Moises')

--Escolhi um ingresso do visitante 1
SELECT
  id,
  visitante_id,
  data_visita
FROM 
  ingresso
WHERE
  (visitante_id = 1)

-- no dia do ingresso 14, quis foram as atrações?
SELECT
  *
FROM
  catraca
WHERE
   (ingresso_id = 14)

-- Qual é o brinquedo ?
SELECT
  *
FROM
  atracao
WHERE
  (id = 4);

-- Query final
SELECT
  V.nome AS pessoa,
  A.nome,
  I.data_visita AS dia
FROM
  catraca C
JOIN
  ingresso I ON (C.ingresso_id = I.id)
JOIN
  atracao A ON (C.atracao_id = A.id)
JOIN
  visitante V ON (I.visitante_id = V.id)
WHERE
  (V.nome = 'Moises')
--(ingresso_id = 14)



