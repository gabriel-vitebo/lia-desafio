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

test('Cenário onde passa apenas curso ingles, retorna todos os objetos daquele curso', () => {
  expect(search(courses, ['ingles'])).toStrictEqual([{ id: 11 }, { id: 21 }])
})

test.only('Cenário onde o curso não existe, retorna mensagem de erro', () => {
  expect(() => search(courses, ['coreano'])).toThrowError(
    new Error('curso não existe!'),
  )
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
