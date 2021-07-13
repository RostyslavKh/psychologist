let results = {}
let userName
let baseResult
let testsDataBase

const beforSection = document.querySelector('.befor-section')
const tableSection = document.querySelector('.table-section')
const submitBtn = document.getElementById('befor-submit')
const inputName = document.getElementById('pressmark-id')
const sendBtn = document.getElementById('send-results-btn')
const fromBaseBtn = document.querySelector('#from-base')
const userNameTable = document.querySelector('.user-name')
const testsDateNow = document.querySelector('.date')

const listenerIsInput = (event) => (submitBtn.disabled = !isValid(inputName.value))
inputName.addEventListener('input', listenerIsInput)

const listenerSubmit = (event) => {
  userName = inputName.value.trim()
  testsDate = new Date().toLocaleDateString()
  userNameTable.innerHTML = `<span class="name-code">Ваш шифр:  </span> ${userName}`
  testsDateNow.innerText = testsDate
  beforSection.style.display = 'none'
  tableSection.style.display = 'flex'

  submitBtn.removeEventListener('click', listenerSubmit)
  inputName.removeEventListener('click', listenerSubmit)
}
submitBtn.addEventListener('click', listenerSubmit)

function isValid(string) {
  return string.length >= 7
}

const listenerSendBtn = (event) => {
  results = {
    name: userName,
    date: new Date().toLocaleDateString(),
    test1: {
      testName: fileEventInfluanceTestResultName,
      testResult: fileEventInfluanceTestResult.result,
      answers: fileEventInfluanceTestResult,
    },
    test2: {
      testName: fileSelfEstimTestResultName,
      testResult: fileSelfEstimTestResult.result,
      answers: fileSelfEstimTestResult,
    },
    test3: {
      testName: fileBasicPHTestResultName,
      testResult: fileBasicPHTestResult.result,
      answers: fileBasicPHTestResult,
    },
    test4: {
      testName: fileDissociationTestResultName,
      testResult: fileDissociationTestResult.result,
      answers: fileDissociationTestResult,
    },
    test5: {
      testName: fileAnxietyTestResultName,
      testResult: fileAnxietyTestResult.result,
      answers: fileAnxietyTestResult,
    },
    test6: {
      testName: fileDepressionTestResultName,
      testResult: fileDepressionTestResult.result,
      answers: fileDepressionTestResult,
    },
  }
  baseResult = TestResults.create(results).then(alert('Дані відправлені'))
}
sendBtn.addEventListener('click', listenerSendBtn)

/* fromBaseBtn.addEventListener('click', () => {
  baseResult = TestResults.get('GET', requestURL).then((response) => {
    testsDataBase = response ? Object.keys(response).map((key) => ({ ...response[key], id: key })) : []
  })
}) */
