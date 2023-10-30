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

export function search(courses, filters) {
  if (filters.length === 0) {
    // criando um for para pegar todos os IDs
    const allCourseIDs = []

    for (const courseKey in courses) {
      for (const levelKey in courses[courseKey]) {
        for (const turnKey in courses[courseKey][levelKey]) {
          allCourseIDs.push(...courses[courseKey][levelKey][turnKey])
        }
      }
    }
    console.log(allCourseIDs)
    return allCourseIDs
  }

  const courseName = filters[0]
  const courseLevel = filters[1]
  const courseTurn = filters[2]
  const keyNames = Object.entries(courses)
  let courseNameDefault = ''
  let courseLevelDefault = ''
  let courseTurnDefault = ''

  if (courseName) {
    const courseNameToLowerCase = courseName.toLowerCase()
    courseNameDefault = courseNameToLowerCase
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
  }

  if (courseLevel) {
    const courseLevelToLowerCase = courseLevel.toLowerCase()
    courseLevelDefault = courseLevelToLowerCase
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
  }

  if (courseTurn) {
    const courseTurnToLowerCase = courseTurn.toLowerCase()
    courseTurnDefault = courseTurnToLowerCase
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
  }

  const gettingTheTypedCourse = keyNames.filter(
    (keyName) => keyName[0] === courseNameDefault,
  )

  const gettingCurseStringSelected = gettingTheTypedCourse.map((index) => {
    return index[0]
  })

  const doesThisCourseExist = gettingCurseStringSelected.find(
    (name) => name === courseNameDefault,
  )

  if (!doesThisCourseExist) {
    throw new Error('Esse curso não existe!')
  }

  if (doesThisCourseExist) {
    const gettingCurseObjectSelected = gettingTheTypedCourse.map((index) => {
      return index[1]
    })

    if (courseLevelDefault) {
      const gettingLevelCourses = Object.keys(gettingCurseObjectSelected[0])

      const courseLevelSelected = gettingLevelCourses.find(
        (levelCourse) => levelCourse === courseLevelDefault,
      )

      if (!courseLevelSelected) {
        throw new Error(
          `desculpe, não há esse nível disponível para o curso ${gettingCurseStringSelected}`,
        )
      }

      const levelSelected = gettingCurseObjectSelected[0][courseLevelSelected]

      const idsCourseWithLevel = Object.values(levelSelected)

      const arraysIds = idsCourseWithLevel.map((arrayId) => arrayId)

      const idsReturns = arraysIds[0].concat(arraysIds[1])

      if (courseTurnDefault) {
        const gettingTurnCourses = Object.keys(levelSelected)

        const courseTurnSelected = gettingTurnCourses.find(
          (turnCourse) => turnCourse === courseTurnDefault,
        )

        if (!courseTurnSelected) {
          throw new Error(
            `desculpe, não há esse turno disponível para o curso ${gettingCurseStringSelected}`,
          )
        }

        const turnSelected = levelSelected[courseTurnSelected]

        console.log(turnSelected)
        return turnSelected
      }

      console.log(idsReturns)
      return idsReturns
    }

    // criando um for para pegar todos os IDs relacionado ao curso, caso o usuário não passe o nível
    const matchingCourses = []

    for (const courseKey in courses) {
      if (courseKey === courseName) {
        for (const levelKey in courses[courseKey]) {
          for (const turnKey in courses[courseKey][levelKey]) {
            matchingCourses.push(...courses[courseKey][levelKey][turnKey])
          }
        }
      }
    }
    console.log(matchingCourses)
    return matchingCourses
  }
}

search(courses, [])
// search(courses, ['espanhol'])
// search(courses, ['espanhol', 'iniciante'])
// search(courses, ['espanhol', 'iniciante', 'manha'])
