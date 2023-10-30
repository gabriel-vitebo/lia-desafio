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

const spanish = {
  beginnerMorningSpanish: courses.espanhol.iniciante.manha,
  beginnerNigthSpanish: courses.espanhol.iniciante.noite,
  advancedMorningSpanish: courses.espanhol.avancado.manha,
}

const english = {
  advancedMorningEnglish: courses.ingles.avancado.manha,
}

export function search(courses, filters) {
  if (!filters.length) {
    const allCourses = spanish.beginnerMorningSpanish.concat(
      spanish.beginnerNigthSpanish,
      spanish.advancedMorningSpanish,
      english.advancedMorningEnglish,
    )
    return allCourses
  }

  const courseName = filters[0]
  const courseLevel = filters[1]
  const courseTurn = filters[2]
  const keyNames = Object.entries(courses)
  console.log(keyNames)

  if (courseName) {
    const gettingTheTypedCourse = keyNames.filter(
      (keyName) => keyName[0] === courseName,
    )

    const gettingCurseSelected = gettingTheTypedCourse.map((index) => {
      return index[1]
    })

    if (courseLevel) {
      const gettingLevelCourses = Object.keys(gettingCurseSelected[0])

      const courseLevelSelected = gettingLevelCourses.find(
        (levelCourse) => levelCourse === courseLevel,
      )

      const levelSelected = gettingCurseSelected[0][courseLevelSelected]

      const idsCourseWithLevel = Object.values(levelSelected)

      const arraysIds = idsCourseWithLevel.map((arrayId) => arrayId)

      const idsReturns = arraysIds[0].concat(arraysIds[1])

      if (courseTurn) {
        const gettingTurnCourses = Object.keys(levelSelected)

        const courseTurnSelected = gettingTurnCourses.find(
          (turnCourse) => turnCourse === courseTurn,
        )

        const turnSelected = levelSelected[courseTurnSelected]

        return turnSelected
      }

      return idsReturns
    }
  }
}

search(courses, ['espanhol'])
// search(courses, ['espanhol'])
