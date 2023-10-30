import { courses, search } from './search'
import { expect, test } from 'vitest'

test('Quando o filtro for vazio, retorne todos os cursos', () => {
  expect(search(courses, [])).toStrictEqual([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 11 },
    { id: 21 },
  ])
})

test('Cenário onde passa apenas curso espanhol, retorna todos os objetos daquele curso', () => {
  expect(search(courses, ['espanhol'])).toStrictEqual([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ])
})

test('Cenário onde passa curso + nível, retorna todos os objetos daquele curso + nivel', () => {
  expect(search(courses, ['espanhol', 'iniciante'])).toStrictEqual([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ])
})

test('Cenário onde passa curso + nível + turno, retorna todos os objetos daquele curso + nivel + turno', () => {
  expect(search(courses, ['espanhol', 'iniciante', 'manha'])).toStrictEqual([
    { id: 1 },
    { id: 2 },
  ])
})

test.only('Deve saber filtrar com qualquer lista de cursos que siga o mesmo padrão', () => {
  const newCourses = {
    ...courses,
    portugues: {
      intermediario: {
        tarde: [{ id: 22 }, { id: 23 }],
      },
    },
  }
  expect(search(newCourses, ['portugues'])).toStrictEqual([
    { id: 22 },
    { id: 23 },
  ])
})

// tese de Erros

test('Cenário onde o curso não existe, retorna mensagem de erro', () => {
  expect(() => search(courses, ['coreano'])).toThrowError(
    new Error('Esse curso não existe!'),
  )
})

test('Cenário onde o nível não existe, retorna mensagem de erro', () => {
  expect(() => search(courses, ['espanhol', 'naotem'])).toThrowError(
    new Error('desculpe, não há esse nível disponível para o curso espanhol'),
  )
})

test('Cenário onde o turno não existe, retorna mensagem de erro', () => {
  expect(() =>
    search(courses, ['espanhol', 'iniciante', 'naotem']),
  ).toThrowError(
    new Error('desculpe, não há esse turno disponível para o curso espanhol'),
  )
})
