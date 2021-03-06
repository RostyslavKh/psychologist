const testName = document.querySelector('.name-of-test-M')
const testDescription = document.querySelector('.test-description-M')
const wripper = document.querySelector('.questions')
const nextButton = document.querySelector('#next-question-M')
const startButton = document.querySelector('#start-question-M')
const testsModal = document.querySelector('#tests-modal')
const finishButton = document.querySelector('#finish-button')

const MODAL_ACTIVE_CLASS = 'modal-active'
const BODY_SCROLL_DISABLE_CLASS = 'body-scroll-disable'

//Тест на тревожность
const testsAnxietyEvent = document.querySelector('#test-anxiete-link')
const anxietyResultTable = document.querySelector('#anxiety-result-table')

let fileAnxietyTestResult = []

fileAnxietyTestResult = []
let fileItem = []
let questionNumber = 0
let summa = 0

testsAnxietyEvent.addEventListener('click', (event) => {
  testName.innerText = testsAnxietyEvent.innerText
  wripper.innerHTML = `<div class="test-description-M">${questionsAnxiety.description}</div>`

  testsModal.classList.add(MODAL_ACTIVE_CLASS)
  document.body.classList.add(BODY_SCROLL_DISABLE_CLASS)

  fileAnxietyTestResult = []
  fileItem = []
  questionNumber = 0
  summa = 0

  const listenerStart = (event) => {
    questionAnxietyRender(questionNumber, questionsAnxiety, wripper)
    startButton.removeEventListener('click', listenerStart)
    startButton.style.display = 'none'
    nextButton.style.display = 'block'
  }
  startButton.addEventListener('click', listenerStart)

  const listenerTest = (event) => {
    let answers = document.getElementsByName('answer')
    let isChecked = false
    answers.forEach((answer) => {
      if (answer.checked == true) {
        isChecked = true
        fileItem.push(questionsAnxiety[questionNumber])
        fileItem.push(answer.value)
        fileItem.push(questionsAnxiety.answers[answer.value])
        fileAnxietyTestResult.push(fileItem)
        fileItem = []
        summa += +answer.value
      }
    })
    if (isChecked) {
      questionNumber++
      if (questionNumber < questionsAnxiety.length) {
        questionAnxietyRender(questionNumber, questionsAnxiety, wripper)
      } else {
        anxietyResultTable.innerHTML = `<h1 class="test-result" style = "color:#5aa23e">&#10004;</h1>`
        // innerText = summa
        sessionStorage.setItem('anxietyResult', anxietyResultTable.innerText)
        sessionStorage.setItem('anxietyResultArray', JSON.stringify(fileAnxietyTestResult))
        nextButton.removeEventListener('click', listenerTest)
        nextButton.style.display = 'none'
        fileAnxietyTestResult.result = resultMessageAnxietyRender(summa, wripper)
        sessionStorage.setItem('anxietyMessage', fileAnxietyTestResult.result)
        console.log(fileAnxietyTestResult)
        finishButton.style.display = 'block'
        const listenerFinish = (event) => {
          finishButton.style.display = 'none'
          startButton.style.display = 'block'
          finishButton.removeEventListener('click', listenerFinish)
          testsModal.classList.remove(MODAL_ACTIVE_CLASS)
          document.body.classList.remove(BODY_SCROLL_DISABLE_CLASS)
        }
        finishButton.addEventListener('click', listenerFinish)
      }
    } else {
      alert('Вы не ответили на вопрос')
    }
  }
  nextButton.addEventListener('click', listenerTest)
})

// Создание вопроса в тесте на тревожность
function questionAnxietyRender(number, questions, htmlPlace) {
  let html
  html = ` <h3 class="question-title"> ${questions[number]} </h3>`
  for (j = 0; j < questions.answers.length; j++) {
    html += `
      <div class="question-item large">
        <input class="question-input" type="radio" name="answer" value= ${j} id="input${j}">
        <label for = "input${j}" class = "question-label">${questions.answers[j]}
      </div>
      `
  }
  html += `<br><h4 class="question-number">Вопрос ${number + 1} из ${questions.length}</h4>`

  htmlPlace.innerHTML = html

  /* const inputChecked = document.getElementsByName('answer')
  inputChecked.forEach((item) => {
    item.addEventListener('click', () => {
      fileItem.push(questionsAnxiety[number])
      fileItem.push(item.value)
      fileItem.push(questionsAnxiety.answers[item.value])
      fileAnxietyTestResult.push(fileItem)
      fileItem = []
      summa += +item.value
      console.log(number, item.value, summa)

      if (number < questions.length - 1) {
        number++
        setTimeout(questionAnxietyRender(number, questions, htmlPlace), 5000)
      } else {
        anxietyResultTable.innerText = summa
        setTimeout(resultMessageAnxietyRender(summa, wripper), 5000)
        finishButton.style.display = 'block'
        const listenerFinish = (event) => {
          finishButton.style.display = 'none'
          startButton.style.display = 'block'
          finishButton.removeEventListener('click', listenerFinish)
          testsModal.classList.remove(MODAL_ACTIVE_CLASS)
          document.body.classList.remove(BODY_SCROLL_DISABLE_CLASS)
        }
        finishButton.addEventListener('click', listenerFinish)
      }
    })
  }) */
}

function resultMessageAnxietyRender(summa, htmlPlace) {
  let messageHTML =
    summa < 22
      ? `<p class = "result-message"> <strong>Результаты теста:<span style='color:red'>(${summa})</span></strong> — Незначительный уровень тревоги. Низкая тревожность.<br>
       Отличная вещь! (если вы были реалистичны в своей оценке)<br>
       Слишком низкая тревога может указывать на то, что вы оторваны от себя, других или своего окружения.</p>`
      : summa < 36
      ? `<p class = "result-message"><strong>Результаты теста:<span style='color:red'>(${summa})</span></strong> — Средняя выраженность тревоги.</p>
       <p class = "result-message">   Предрасположенность к восприятию широкого круга ситуаций как угрожающих своей самооценке, престижу, самоуважению или жизнедеятельности.<br>
          Склонность реагировать на такие ситуации состоянием тревоги. Чувствительность в отношении тех негативных событий или неудач которые предположительно могут случиться или произойти.`
      : `<p class = "result-message"><strong>Результаты теста: <span style='color:red'>(${summa})</span></strong> - Очень высокая тревога. Это потенциальная причина для беспокойства. <br>
         Стоит задуматься — в каких обстоятельствах, как и когда проявляются эти симптомы.<br>
      Постоянное и сильное беспокойство не является признаком личной слабости или неудачи. Однако такой высокий уровень тревоги требует не просто вашего внимания, такое состояние стоит проактивно лечить. (Иначе это может иметь значительные последствия для вас, и умственно и физически).<br>
      Если накал чувств сохраняется, стоит обратиться к врачу или психологу.</p>`
  htmlPlace.innerHTML = messageHTML
  return messageHTML
}

// Тест на депрессию
const testsDepressionEvent = document.querySelector('#test-depression-link')
const depressionResultTable = document.querySelector('#depression-result-table')
let fileDepressionTestResult = []

testsDepressionEvent.addEventListener('click', (event) => {
  testName.innerText = testsDepressionEvent.innerText
  wripper.innerHTML = `<div class="test-description-M">${questionsDepression.description}</div>`

  testsModal.classList.add(MODAL_ACTIVE_CLASS)
  document.body.classList.add(BODY_SCROLL_DISABLE_CLASS)

  fileDepressionTestResult = []
  let questionNumber = 0
  let summa = 0

  const listenerStart = (event) => {
    questionDepressionRender(questionNumber, questionsDepression, wripper)
    startButton.removeEventListener('click', listenerStart)
    startButton.style.display = 'none'
    nextButton.style.display = 'block'
  }
  startButton.addEventListener('click', listenerStart)

  const listenerTest = (event) => {
    let answers = document.getElementsByName('answer')
    let isChecked = false
    answers.forEach((answer) => {
      if (answer.checked == true) {
        isChecked = true
        fileItem.push(questionsDepression[questionNumber][answer.value])
        fileItem.push(answer.value)
        fileDepressionTestResult.push(fileItem)
        fileItem = []
        summa += +answer.value
      }
    })
    if (isChecked) {
      questionNumber++
      if (questionNumber < questionsDepression.length) {
        questionDepressionRender(questionNumber, questionsDepression, wripper)
      } else {
        depressionResultTable.innerHTML = `<h1 class="test-result" style = "color:#5aa23e">&#10004;</h1>`
        // innerText = summa
        sessionStorage.setItem('depressionResult', depressionResultTable.innerText)
        sessionStorage.setItem('depressionResultArray', JSON.stringify(fileDepressionTestResult))
        nextButton.removeEventListener('click', listenerTest)
        nextButton.style.display = 'none'
        fileDepressionTestResult.result = resultMessageDepressionRender(summa, wripper)
        sessionStorage.setItem('depressionMessage', fileDepressionTestResult.result)

        finishButton.style.display = 'block'
        const listenerFinish = (event) => {
          finishButton.style.display = 'none'
          startButton.style.display = 'block'
          finishButton.removeEventListener('click', listenerFinish)
          testsModal.classList.remove(MODAL_ACTIVE_CLASS)
          document.body.classList.remove(BODY_SCROLL_DISABLE_CLASS)
        }
        finishButton.addEventListener('click', listenerFinish)
      }
    } else {
      alert('Вы не ответили на вопрос')
    }
  }
  nextButton.addEventListener('click', listenerTest)
})

function questionDepressionRender(number, questions, htmlPlace) {
  htmlPlace.innerHTML = `<h3></h3>`
  for (j = 0; j < 4; j++) {
    htmlPlace.innerHTML += `
      <div class="question-item large">
      <input class="question-input" type="radio" name="answer" value= ${j} id="input${j}">
      <label for = "input${j}" class = "question-label">${questions[number][j]}
      `
  }
  htmlPlace.innerHTML += `<br><h4 class="question-number">Вопрос ${number + 1} из ${questions.length}</h4>`
}

function resultMessageDepressionRender(summa, htmlPlace) {
  let messageHTML =
    summa < 10
      ? `<p class = "result-message"><strong>Ваш результат: <span style='color:red'>(${summa})</span></strong> — отсутствие депрессивных симптомов [0-9] </p>`
      : summa < 16
      ? `<p class = "result-message"><strong>Ваш результат: <span style='color:red'>(${summa})</span></strong> — легкая депрессия (субдепрессия) [10-15]</p>`
      : summa < 20
      ? `<p class = "result-message"><strong>Ваш результат: <span style='color:red'>(${summa})</span></strong> — умеренная депрессия [16-19]</p>`
      : summa < 30
      ? `<p class = "result-message"><strong>Ваш результат: <span style='color:red'>(${summa})</span></strong> — выраженная депрессия (средней тяжести) [20-29]</p>`
      : `<p class = "result-message"  ><strong>Ваш результат: <span style='color:red'>(${summa})</span></strong> — тяжёлая депрессия [30-63]</p>`
  htmlPlace.innerHTML = messageHTML
  return messageHTML
}

//Тест на диссоциацию
const testsDissociationEvent = document.querySelector('#test-dissociation-link')
const dissociationResultTable = document.querySelector('#dissociation-result-table')
let fileDissociationTestResult = []

testsDissociationEvent.addEventListener('click', (event) => {
  testName.innerText = testsDissociationEvent.innerText
  wripper.innerHTML = `<div class="test-description-M test-description-dissociation">${questionsDissociation.description}</div>`

  testsModal.classList.add(MODAL_ACTIVE_CLASS)
  document.body.classList.add(BODY_SCROLL_DISABLE_CLASS)

  fileDissociationTestResult = []
  let fileItem = []
  let questionNumber = 0
  let summa = 0

  const listenerStart = (event) => {
    startButton.removeEventListener('click', listenerStart)
    startButton.style.display = 'none'
    nextButton.style.display = 'block'
    questionDissociationRender(questionNumber, questionsDissociation, wripper)
  }
  startButton.addEventListener('click', listenerStart)

  const listenerTest = (event) => {
    let answers = document.getElementsByName('answer')
    let isChecked = false
    answers.forEach((answer) => {
      if (answer.checked == true) {
        isChecked = true
        fileItem.push(questionsDissociation[questionNumber])
        fileItem.push(questionsDissociation.answers[answer.value])
        fileDissociationTestResult.push(fileItem)
        fileItem = []
        summa += +answer.value
      }
    })
    if (isChecked) {
      questionNumber++
      if (questionNumber < questionsDissociation.length) {
        questionDissociationRender(questionNumber, questionsDissociation, wripper)
      } else {
        dissociationResultTable.innerHTML = `<h1 class="test-result" style = "color:#5aa23e">&#10004;</h1>`
        // Number((summa / 28) * 10).toFixed(0) + '%'
        sessionStorage.setItem('dissociationResult', dissociationResultTable.innerText)
        sessionStorage.setItem('dissociationResultArray', JSON.stringify(fileDissociationTestResult))

        nextButton.removeEventListener('click', listenerTest)
        nextButton.style.display = 'none'
        fileDissociationTestResult.result = resultMessageDissociationRender(summa, wripper)
        sessionStorage.setItem('dissociationMessage', fileDissociationTestResult.result)

        finishButton.style.display = 'block'
        const listenerFinish = (event) => {
          finishButton.style.display = 'none'
          startButton.style.display = 'block'
          finishButton.removeEventListener('click', listenerFinish)
          testsModal.classList.remove(MODAL_ACTIVE_CLASS)
          document.body.classList.remove(BODY_SCROLL_DISABLE_CLASS)
        }
        finishButton.addEventListener('click', listenerFinish)
      }
    } else {
      alert('Вы не ответили на вопрос')
    }
  }
  nextButton.addEventListener('click', listenerTest)
})

function questionDissociationRender(number, questions, htmlPlace) {
  htmlPlace.innerHTML = `
   <h3 class="question-title-dissociation"> ${questions[number]} </h3>`
  for (j = 0; j < questions.answers.length; j++) {
    htmlPlace.innerHTML += `
      <div class="question-item">
      <input class="question-input" type="radio" name="answer" value= ${j} id="input${j}">
      <label for = "input${j}" class = "question-label question-label-dissociation">${questions.answers[j]}
      `
  }
  htmlPlace.innerHTML += `<br><h4 class="question-number">Вопрос ${number + 1} из ${questions.length}</h4>`
}

function resultMessageDissociationRender(summa, htmlPlace) {
  let message = Number((summa / 28) * 10).toFixed(0)
  messageHTML = `<p class = "result-message"> Результат теста: <strong><span style='color:red'>${message}%</span><strong></p>`
  htmlPlace.innerHTML = messageHTML
  // fileDissociationTestResult.result = messageHTML
  return messageHTML
}

// Влияние события
const testsEventInfluance = document.querySelector('#event-influance-link')
const eventInfluanceResultTable = document.querySelector('#event-infliance-test-result')
let fileEventInfluanceTestResult = []
let allAnswersEventInfluance = []

testsEventInfluance.addEventListener('click', (event) => {
  testName.innerText = testsEventInfluance.innerText
  wripper.innerHTML = `<div class="test-description-M">${questionsEventInfluance.description}</div>`

  testsModal.classList.add(MODAL_ACTIVE_CLASS)
  document.body.classList.add(BODY_SCROLL_DISABLE_CLASS)

  fileEventInfluanceTestResult = []
  allAnswersEventInfluance = []
  let fileItem = []
  let questionNumber = 0
  let summa = 0

  const listenerStart = (event) => {
    questionsEventInfluanceRender(questionNumber, questionsEventInfluance, wripper)
    startButton.removeEventListener('click', listenerStart)
    startButton.style.display = 'none'
    nextButton.style.display = 'block'
  }
  startButton.addEventListener('click', listenerStart)

  const listenerTest = (event) => {
    let answers = document.getElementsByName('answer')
    let isChecked = false

    let subScaleAvoidance = [4, 6, 7, 10, 11, 12, 16, 21] // уникнення
    let subScaleIntrusion = [0, 1, 2, 5, 8, 13, 15, 19] //інтрузія
    let subScaleHyperexcitation = [3, 9, 14, 17, 18, 20] //гіперзбудження

    answers.forEach((answer) => {
      if (answer.checked == true) {
        isChecked = true
        fileItem.push(questionsEventInfluance[questionNumber])
        fileItem.push(answer.value)
        fileItem.push(questionsEventInfluance.answers[answer.value])
        fileEventInfluanceTestResult.push(fileItem)
        fileItem = []
        allAnswersEventInfluance.push(+answer.value)
        summa += +answer.value
      }
    })

    if (isChecked) {
      questionNumber++
      if (questionNumber < questionsEventInfluance.length) {
        questionsEventInfluanceRender(questionNumber, questionsEventInfluance, wripper)
      } else {
        sumAvoidance = (subSumma(allAnswersEventInfluance, subScaleAvoidance) / 8).toFixed(2)
        sumIntrusion = (subSumma(allAnswersEventInfluance, subScaleIntrusion) / 8).toFixed(2)
        sumHyperexcitation = (subSumma(allAnswersEventInfluance, subScaleHyperexcitation) / 6).toFixed(2)
        eventInfluanceResultTable.classList.add('test-result-even-Influance')
        eventInfluanceResultTable.innerHTML = `<h1 class="test-result" style = "color:#5aa23e">&#10004;</h1>`
        // 'A:' + sumAvoidance + ' I:' + sumIntrusion + ' H:' + sumHyperexcitation
        sessionStorage.setItem('evantInfluanceResult', eventInfluanceResultTable.innerText)
        sessionStorage.setItem('evantInfluanceResultArray', JSON.stringify(fileEventInfluanceTestResult))

        nextButton.removeEventListener('click', listenerTest)
        nextButton.style.display = 'none'
        fileEventInfluanceTestResult.result = resultMessageEventInfluanceRender(
          sumAvoidance,
          sumIntrusion,
          sumHyperexcitation,
          wripper
        )
        sessionStorage.setItem('eventInfluanceMessage', fileEventInfluanceTestResult.result)

        finishButton.style.display = 'block'
        const listenerFinish = (event) => {
          finishButton.style.display = 'none'
          startButton.style.display = 'block'
          finishButton.removeEventListener('click', listenerFinish)
          testsModal.classList.remove(MODAL_ACTIVE_CLASS)
          document.body.classList.remove(BODY_SCROLL_DISABLE_CLASS)
        }
        finishButton.addEventListener('click', listenerFinish)
      }
    } else {
      alert('Вы не ответили на вопрос')
    }
  }
  nextButton.addEventListener('click', listenerTest)
})

function questionsEventInfluanceRender(number, questions, htmlPlace) {
  htmlPlace.innerHTML = `<h3 class="question-title"> ${questions[number]} </h3>`
  for (j = 0; j < questions.answers.length; j++) {
    htmlPlace.innerHTML += `
      <div class="question-item">
      <input class="question-input" type="radio" name="answer" value= ${j} id="input${j}">
      <label for = "input${j}" class = "question-label">${questions.answers[j]}
      `
  }
  htmlPlace.innerHTML += `<br><h4 class="question-number">Вопрос ${number + 1} из ${questions.length}</h4>`
}

function resultMessageEventInfluanceRender(summaA, summaI, summaH, htmlPlace) {
  let messageHTML = `
  <p class = "result-message"> Шкала избегания: ${summaA}</p>
  <p class = "result-message"> Шкала интрузии: ${summaI}</p>
  <p class = "result-message"> Шкале гипервозбуждения: ${summaH}</p>
  
  <p class = "result-message"> Перевищення значення 2.00  будь-якого показника може свідчити про наявність ПТСР (максимальне можливе значення 4.00). У цьому випадку наполегливо рекомендуємо звернутися до психолога чи психатерапевта.</p>
  `
  htmlPlace.innerHTML = messageHTML
  // fileEventInfluanceTestResult.result = messageHTML
  return messageHTML
}

function subSumma(allAnswer, subArray) {
  let subSum = 0
  for (j = 0; j < subArray.length; j++) {
    subSum += allAnswer[+subArray[j]]
  }
  return subSum
}

// Самооценка
const testSelfEstimEvent = document.querySelector('#test-selfEstim-link')
const selfEstimResultTable = document.querySelector('#selfEstim-result-table')
let fileSelfEstimTestResult = []

testSelfEstimEvent.addEventListener('click', (event) => {
  testName.innerText = testSelfEstimEvent.innerText
  wripper.innerHTML = `<div class="test-description-M">${questionsSelfEstim.description}</div>`

  testsModal.classList.add(MODAL_ACTIVE_CLASS)
  document.body.classList.add(BODY_SCROLL_DISABLE_CLASS)

  fileSelfEstimTestResult = []
  let fileItem = []
  let questionNumber = 0
  let summa = 0

  const listenerStart = (event) => {
    questionsSelfEstimRender(questionNumber, questionsSelfEstim, wripper)
    startButton.removeEventListener('click', listenerStart)
    startButton.style.display = 'none'
    nextButton.style.display = 'block'
  }
  startButton.addEventListener('click', listenerStart)

  const listenerTest = (event) => {
    let answers = document.getElementsByName('answer')
    let isChecked = false
    answers.forEach((answer) => {
      if (answer.checked == true) {
        isChecked = true
        fileItem.push(questionsSelfEstim[questionNumber])
        fileItem.push(answer.value)
        fileItem.push(questionsSelfEstim.answers[answer.value])
        fileSelfEstimTestResult.push(fileItem)
        fileItem = []
        summa += +answer.value
      }
    })
    if (isChecked) {
      questionNumber++
      if (questionNumber < questionsSelfEstim.length) {
        questionsSelfEstimRender(questionNumber, questionsSelfEstim, wripper)
      } else {
        selfEstimResultTable.innerHTML = `<h1 class="test-result" style = "color:#5aa23e">&#10004;</h1>`
        sessionStorage.setItem('selfEstimResult', selfEstimResultTable.innerText)
        sessionStorage.setItem('selfEstimResultArray', JSON.stringify(fileSelfEstimTestResult))

        nextButton.removeEventListener('click', listenerTest)
        nextButton.style.display = 'none'
        fileSelfEstimTestResult.result = resultMessageSelfEstimRender(summa, wripper)
        sessionStorage.setItem('selfEstimMessage', fileSelfEstimTestResult.result)

        finishButton.style.display = 'block'
        const listenerFinish = (event) => {
          finishButton.style.display = 'none'
          startButton.style.display = 'block'
          finishButton.removeEventListener('click', listenerFinish)
          testsModal.classList.remove(MODAL_ACTIVE_CLASS)
          document.body.classList.remove(BODY_SCROLL_DISABLE_CLASS)
        }
        finishButton.addEventListener('click', listenerFinish)
      }
    } else {
      alert('Вы не ответили на вопрос')
    }
  }
  nextButton.addEventListener('click', listenerTest)
})

function questionsSelfEstimRender(number, questions, htmlPlace) {
  htmlPlace.innerHTML = ` <h3 class="question-title"> ${questions[number]} </h3>`
  for (j = 0; j < questions.answers.length; j++) {
    htmlPlace.innerHTML += `
      <div class="question-item">
      <input class="question-input" type="radio" name="answer" value= ${j} id="input${j}">
      <label for = "input${j}" class = "question-label">${questions.answers[j]}
      `
  }
  htmlPlace.innerHTML += `<br><h4 class="question-number">Вопрос ${number + 1} из ${questions.length}</h4>`
}
function resultMessageSelfEstimRender(summa, htmlPlace) {
  let messageHTML =
    summa < 40
      ? `<p  class = "result-message"><strong>Ваш результат: <span style='color:red'>(${summa}) </span></strong> — [0-39]. Якщо результат більше 40, то можна говорити про ПТСР</p>`
      : `<p  class = "result-message"><strong>Ваш результат: <span style='color:red'>(${summa})</span></strong> Високий показник. Можливий ПТСР. Рекомендуємо звернутися до психолога чи психотерапевта. —[40-68]</p>`
  htmlPlace.innerHTML = messageHTML
  // fileSelfEstimTestResult.result = messageHTML
  return messageHTML
}

// BasicPH
const testsBasicPHEvent = document.querySelector('#test-basicPH-link')
const basicPHResultTable = document.querySelector('#basicPH-result-table')
let fileBasicPHTestResult = []
let allAnswerBasicPH = []

testsBasicPHEvent.addEventListener('click', (event) => {
  // event.preventDefault()
  testName.innerText = testsBasicPHEvent.innerText
  wripper.innerHTML = `<div class="test-description-M">${questionsBasicPH.description}</div>`

  testsModal.classList.add(MODAL_ACTIVE_CLASS)
  document.body.classList.add(BODY_SCROLL_DISABLE_CLASS)

  fileBasicPHTestResult = []
  allAnswerBasicPH = []
  let fileItem = []
  let questionNumber = 0
  let summa = 0
  let counter = 0
  let subSummaBasicPH = []

  const listenerStart = (event) => {
    questionsBasicPHRender(questionNumber, questionsBasicPH, wripper)
    startButton.removeEventListener('click', listenerStart)
    startButton.style.display = 'none'
    nextButton.style.display = 'block'
  }
  startButton.addEventListener('click', listenerStart)

  const listenerTest = (event) => {
    let answers = document.getElementsByName('answer')
    let isChecked = false
    answers.forEach((answer) => {
      if (answer.checked == true) {
        isChecked = true
        fileItem.push(questionsBasicPH[questionNumber])
        fileItem.push(answer.value)
        fileItem.push(questionsBasicPH.answers[answer.value])
        fileBasicPHTestResult.push(fileItem)
        fileItem = []
        allAnswerBasicPH.push(+answer.value)
        summa += +answer.value
      }
    })
    if (isChecked) {
      questionNumber++
      if (questionNumber < questionsBasicPH.length) {
        questionsBasicPHRender(questionNumber, questionsBasicPH, wripper)
      } else {
        nextButton.removeEventListener('click', listenerTest)
        nextButton.style.display = 'none'
        counter = 0
        subSummaBasicPH = [0, 0, 0, 0, 0, 0]
        for (j = 0; j < questionsBasicPH.length; j++) {
          subSummaBasicPH[counter] += +allAnswerBasicPH[j]
          // console.log(allAnswerBasicPH[j], counter)
          counter++
          if (counter == 6) {
            counter = 0
          }
          basicPHResultTable.classList.add('test-result-basicPH')
          basicPHResultTable.innerHTML = `<h1 class="test-result" style = "color:#5aa23e">&#10004;</h1>`
          /*   'B: ' +
            subSummaBasicPH[0] +
            '  a: ' +
            subSummaBasicPH[1] +
            '  s: ' +
            subSummaBasicPH[2] +
            '  i: ' +
            subSummaBasicPH[3] +
            '  c: ' +
            subSummaBasicPH[4] +
            '  PH: ' +
            subSummaBasicPH[5] */
        }

        sessionStorage.setItem('basicPHResult', basicPHResultTable.innerText)
        sessionStorage.setItem('basicPHResultArray', JSON.stringify(fileBasicPHTestResult))

        fileBasicPHTestResult.result = resultMessageBasicPHRender(subSummaBasicPH, wripper)
        sessionStorage.setItem('basicPH', fileBasicPHTestResult.result)

        finishButton.style.display = 'block'
        const listenerFinish = (event) => {
          finishButton.style.display = 'none'
          startButton.style.display = 'block'
          finishButton.removeEventListener('click', listenerFinish)
          testsModal.classList.remove(MODAL_ACTIVE_CLASS)
          document.body.classList.remove(BODY_SCROLL_DISABLE_CLASS)
        }
        finishButton.addEventListener('click', listenerFinish)
      }
    } else {
      alert('Вы не ответили на вопрос')
    }
  }
  nextButton.addEventListener('click', listenerTest)
})

function questionsBasicPHRender(number, questions, htmlPlace) {
  htmlPlace.innerHTML = ` <h3 class="question-title"> ${questions[number]} </h3>`
  for (j = 0; j < questions.answers.length; j++) {
    htmlPlace.innerHTML += `
      <div class="question-item">
      <input class="question-input" type="radio" name="answer" value= ${j} id="input${j}">
      <label for = "input${j}" class = "question-label question-label-basicPH">${questions.answers[j]}
      `
  }
  htmlPlace.innerHTML += `<br><h4 class="question-number">Вопрос ${number + 1} из ${questions.length}</h4>`
}

function resultMessageBasicPHRender(subSumma, htmlPlace) {
  let messageHTML = `<p class = "result-message">B 1 – Віра ${(subSumma[0] / 6).toFixed(2)} з 6.00</p>
    <p class = "result-message"> A 2 – Емоції: ${(subSumma[1] / 6).toFixed(2)} з 6.00</p>
    <p class = "result-message">S 3 – Соціум, стосунки: ${(subSumma[2] / 6).toFixed(2)} з 6.00</p>
    <p class = "result-message">I 4 – Уява: ${(subSumma[3] / 6).toFixed(2)} з 6.00</p>
    <p class = "result-message"> C 5 – Розум: ${(subSumma[4] / 6).toFixed(2)} з 6.00</p>
    <p class = "result-message">Ph 6 – Тіло, фізична діяльність: ${(subSumma[5] / 6).toFixed(2)} з 6.00</p>
    
    <p class = "result-message"> Ізраїльський психолог Mooli Lahad прийшов до висновку, що зазвичай долати стрес і кризу допомагають В (belief and values) - віра (переконання), А (affect and emotions) - почуття, S (sociability) - соціалізація (підтримка родини, групи, друзів), I (imagination and creativity) - уява, C (cognition and thought) – мислення (когніції, думки), Ph (physiological activity) - фізичне (тіло, вправи). Всі використовують ці ресурси, однак часто користуючись активно одним-двома ресурсами, не враховують інші. Цей тест допомогає дізнатися які ресурси є провідними саме для вас, а які ви використовуєте менше. </p>`
  htmlPlace.innerHTML = messageHTML
  return messageHTML
}

// Тест на ADHD
const testsADHDEvent = document.querySelector('#test-adhd-link')
const adhdResultTable = document.querySelector('#adhd-result-table')
let fileADHDTestResult = []

testsADHDEvent.addEventListener('click', (event) => {
  testName.innerText = questionsADHD.name
  wripper.innerHTML = `<div class="test-description-M">${questionsADHD.description}</div>`

  testsModal.classList.add(MODAL_ACTIVE_CLASS)
  document.body.classList.add(BODY_SCROLL_DISABLE_CLASS)

  fileADHDResult = []
  let questionNumber = 0
  let summa = [0, 0, 0]
  let result = []

  const listenerStart = (event) => {
    questionsRender(questionNumber, questionsADHD, wripper)
    startButton.removeEventListener('click', listenerStart)
    startButton.style.display = 'none'
    nextButton.style.display = 'block'
  }
  startButton.addEventListener('click', listenerStart)

  const listenerTest = (event) => {
    let answers = document.getElementsByName('answer')
    let isChecked = false
    answers.forEach((answer) => {
      if (answer.checked == true) {
        isChecked = true
        fileItem.push(questionsADHD[questionNumber])
        fileItem.push(+answer.value)

        fileItem.push(questionsADHD.answers[answer.value])
        fileADHDResult.push(fileItem)
        fileItem = []
        let k = +answer.value < 2 ? 0 : +answer.value - 1
        result.push(k)
        summa[0] += k
        /*   if (questionNumber in questionsADHD.keyAD) {
          console.log(questionNumber, k)
          summa[1] += k
        } else {
          summa[2] += k
        } */
      }
    })
    if (isChecked) {
      questionNumber++
      if (questionNumber < questionsADHD.length) {
        questionsRender(questionNumber, questionsADHD, wripper)
      } else {
        adhdResultTable.innerHTML = `<h1 class="test-result" style = "color:#5aa23e">&#10004;</h1>`
        // innerText = summa

        for (let m = 0; m < questionsADHD.keyAD.length; m++) {
          summa[1] += result[questionsADHD.keyAD[m] - 1]
        }
        for (let m = 0; m < questionsADHD.keyHD.length; m++) {
          summa[2] += result[questionsADHD.keyHD[m] - 1]
        }

        sessionStorage.setItem('adhdResult', adhdResultTable.innerText)
        sessionStorage.setItem('ADHDResultArray', JSON.stringify(fileADHDResult))
        fileADHDResult.result = resultMessageADHDRender(summa, wripper)
        sessionStorage.setItem('ADHDMessage', fileADHDResult.result)

        nextButton.removeEventListener('click', listenerTest)
        nextButton.style.display = 'none'

        finishButton.style.display = 'block'
        const listenerFinish = (event) => {
          finishButton.style.display = 'none'
          startButton.style.display = 'block'
          finishButton.removeEventListener('click', listenerFinish)
          testsModal.classList.remove(MODAL_ACTIVE_CLASS)
          document.body.classList.remove(BODY_SCROLL_DISABLE_CLASS)
        }
        finishButton.addEventListener('click', listenerFinish)
      }
    } else {
      alert('Вы не ответили на вопрос')
    }
  }
  nextButton.addEventListener('click', listenerTest)
})

function questionsRender(number, questions, htmlPlace) {
  let html
  html = ` <h3 class="question-title"> ${questions[number]} </h3>`
  for (j = 0; j < questions.answers.length; j++) {
    html += `
      <div class="question-item large">
        <input class="question-input" type="radio" name="answer" value= ${j} id="input${j}">
        <label for = "input${j}" class = "question-label">${questions.answers[j]}
      </div>
      `
  }
  html += `<br><h4 class="question-number">Вопрос ${number + 1} из ${questions.length}</h4>`

  htmlPlace.innerHTML = html
}

function resultMessageADHDRender(summa, htmlPlace) {
  let messageHTML = `<p class = "result-message"> <span style='color:blue'>Гиперактивность: </span> <strong>${summa[2]}</strong> из 27 </p>
      <p class = "result-message"> <span style='color:blue'>Дифецит внимания: </span> <strong>${summa[1]}</strong> из 27 </p>
      <p class = "result-message"> <span style='color:blue'>Общий уровень СДВГ: </span> <strong>${summa[0]}</strong> из 54 </p>`

  htmlPlace.innerHTML = messageHTML
  return messageHTML
}
