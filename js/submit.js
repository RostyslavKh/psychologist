let results = {}
let userName
let baseResult
let testsDataBase

function isValid(string) {
  return string.length >= 7
}

const beforSection = document.querySelector('.befor-section')
const tableSection = document.querySelector('.table-section')
const submitBtn = document.getElementById('befor-submit')
const inputName = document.getElementById('pressmark-id')
const sendBtn = document.getElementById('send-results-btn')
const fromBaseBtn = document.querySelector('#from-base')
const userNameTable = document.querySelector('.user-name')
const testsDateNow = document.querySelector('.date')

window.addEventListener('load', () => {
  userName = sessionStorage.getItem('userKey')
  testsDate = sessionStorage.getItem('date')
  if (userName && testsDate) {
    userNameTable.innerHTML = `<span class="name-code">Ваш шифр:  </span> ${userName}`
    testsDateNow.innerText = testsDate
    beforSection.style.display = 'none'
    tableSection.style.display = 'flex'

    anxietyResultTable.innerText = sessionStorage.getItem('anxietyResult') || '0'
    fileAnxietyTestResult = JSON.parse(sessionStorage.getItem('anxietyResultArray')) || []
    fileAnxietyTestResult.result = sessionStorage.getItem('anxietyMessage') || ''

    depressionResultTable.innerText = sessionStorage.getItem('depressionResult') || '0'
    fileDepressionTestResult = JSON.parse(sessionStorage.getItem('depressionResultArray')) || []
    fileDepressionTestResult.result = sessionStorage.getItem('depressionMessage') || ''

    dissociationResultTable.innerText = sessionStorage.getItem('dissociationResult') || '0'
    fileDissociationTestResult = JSON.parse(sessionStorage.getItem('dissociationResultArray')) || []
    fileDissociationTestResult.result = sessionStorage.getItem('dissociationMessage') || ''

    eventInfluanceResultTable.innerText = sessionStorage.getItem('evantInfluanceResult') || '0'
    fileEventInfluanceTestResult = JSON.parse(sessionStorage.getItem('evantInfluanceResultArray')) || []
    fileEventInfluanceTestResult.result = sessionStorage.getItem('eventInfluanceMessage') || ''

    selfEstimResultTable.innerText = sessionStorage.getItem('selfEstimResult') || '0'
    fileSelfEstimTestResult = JSON.parse(sessionStorage.getItem('selfEstimResultArray')) || []
    fileSelfEstimTestResult.result = sessionStorage.getItem('selfEstimMessage') || ''

    basicPHResultTable.innerText = sessionStorage.getItem('basicPHResult') || '0'
    fileBasicPHTestResult = JSON.parse(sessionStorage.getItem('basicPHResultArray')) || []
    fileBasicPHTestResult.result = sessionStorage.getItem('basicPH') || ''
  }
})

const listenerIsInput = (event) => (submitBtn.disabled = !isValid(inputName.value))
inputName.addEventListener('input', listenerIsInput)

const listenerSubmit = (event) => {
  userName = inputName.value.trim()
  testsDate = new Date().toLocaleDateString()
  userNameTable.innerHTML = `<span class="name-code">Ваш шифр:  </span> ${userName}`
  testsDateNow.innerText = testsDate
  sessionStorage.setItem('userKey', userName)
  sessionStorage.setItem('date', testsDate)
  beforSection.style.display = 'none'
  tableSection.style.display = 'flex'

  submitBtn.removeEventListener('click', listenerSubmit)
  inputName.removeEventListener('click', listenerSubmit)
}
submitBtn.addEventListener('click', listenerSubmit)

const listenerSendBtn = (event) => {
  results = {
    name: userName,
    date: new Date().toLocaleDateString(),
    test1: {
      testName: questionsEventInfluance.name,
      testResult: fileEventInfluanceTestResult.result,
      answers: fileEventInfluanceTestResult,
    },
    test2: {
      testName: questionsSelfEstim.name,
      testResult: fileSelfEstimTestResult.result,
      answers: fileSelfEstimTestResult,
    },
    test3: {
      testName: questionsBasicPH.name,
      testResult: fileBasicPHTestResult.result,
      answers: fileBasicPHTestResult,
    },
    test4: {
      testName: questionsDissociation.name,
      testResult: fileDissociationTestResult.result,
      answers: fileDissociationTestResult,
    },
    test5: {
      testName: questionsAnxiety.name,
      testResult: fileAnxietyTestResult.result,
      answers: fileAnxietyTestResult,
    },
    test6: {
      testName: questionsDepression.name,
      testResult: fileDepressionTestResult.result,
      answers: fileDepressionTestResult,
    },
  }
  baseResult = TestResults.create(results).then(alert('Дані відправлені'))
}
sendBtn.addEventListener('click', listenerSendBtn)
