export const courses = {
  espanhol: {
    iniciante: {
      manha: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
      noite: [
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    },
    avancado: {
      manha: [
        {
          id: 5,
        },
        {
          id: 6,
        },
      ],
    },
  },
  ingles: {
    avancado: {
      manha: [
        {
          id: 11,
        },
        {
          id: 21,
        },
      ],
    },
  },
}

const courseInputName = {
  spanish: 'espanhol',
  english: 'ingles',
}

const spanish = {
  beginnerMorningSpanish: courses.espanhol.iniciante.manha,
  beginnerNigthSpanish: courses.espanhol.iniciante.noite,
  advancedMorningSpanish: courses.espanhol.avancado.manha,
}

const english = {
  advancedMorningEnglish: courses.ingles.avancado.manha,
}

export function search(courses, filters) {
  console.log(filters)

  if (!filters.length) {
    const allCourses = spanish.beginnerMorningSpanish.concat(
      spanish.beginnerNigthSpanish,
      spanish.advancedMorningSpanish,
      english.advancedMorningEnglish,
    )
    return allCourses
  }

  const spanishInput = filters.includes(courseInputName.spanish)
  const englishInput = filters.includes(courseInputName.english)

  if (!spanishInput && !englishInput) {
    console.log('entrou')
    throw new Error('curso não existe!')
  }

  if (spanishInput) {
    return spanish.beginnerMorningSpanish.concat(
      spanish.beginnerNigthSpanish,
      spanish.advancedMorningSpanish,
    )
  }

  if (englishInput) {
    return english.advancedMorningEnglish
  }
}

search(courses, [])
// search(courses, ['espanhol'])
