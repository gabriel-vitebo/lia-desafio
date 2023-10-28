RFs (Requisitos funcionais)

[ ] A função search deve receber um objeto com a estrutura do arquivo X e também um array com os filtros necessários
[ ] Dado os filtros a função deve retornar uma lista de todos os objetos que estiverem abaixo deste filtro (no caso o que estamos chamando de objeto seria { "id": 1 } por exemplo);
[ ] Os nomes dos cursos são únicos (no exemplo acima: ingles e espanhol).

RNs (Regras de negócio)

[ ] Cenário vazio, retorna todos os objetos
      => search(courses, [])
      => [{ id:1 },{ id:2 },{ id:3 },{ id:4 },{ id:5 },{ id:6 }, { id:11 }, { id:21 }]
[ ] Cenário onde passa apenas curso, retorna todos os objetos daquele curso
      => search(courses, ['espanhol'])
      => [{ id:1 },{ id:2 },{ id:3 },{ id:4 },{ id:5 },{ id:6 }]
[ ] Cenário onde passa curso + nível, retorna todos os objetos daquele curso + nivel
      => search(courses, ['espanhol', 'iniciante'])
      => [{ id:1 },{ id:2 },{ id:3 },{ id:4 }]
[ ] Cenário onde passa curso + nível + turno, retorna todos os objetos daquele curso + nivel + turno
      => search(courses, ['espanhol', 'iniciante', 'manha'])
      => [{ id:1 },{ id:2 }]