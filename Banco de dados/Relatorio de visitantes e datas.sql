SELECT
  V.nome,
  I.data_visita
FROM ingresso AS I
JOIN visitante AS V ON (I.visitante_id = V.id)
ORDER BY nome, data_visita

--FROM ingresso I <-- esquerda JOIN direita --> visitante V
--ON (chave primária = chave estrangeira)
