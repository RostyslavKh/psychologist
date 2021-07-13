const requestURL = 'https://psychologist-1976-default-rtdb.europe-west1.firebasedatabase.app/results.json'

class TestResults {
  static create(results) {
    return fetch(requestURL, {
      method: 'POST',
      body: JSON.stringify(results),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        results.id = response.name
        console.log(results)
        return response
      })
  }
  static get() {
    return fetch(requestURL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        return response
      })
  }
}

const resultsLoad = document.querySelector('#load-result-from-database')
const resultsLoadPlace = document.querySelector('.load-result-table')
let baseResult, testsDataBase

resultsLoad.addEventListener('click', () => {
  baseResult = TestResults.get('GET', requestURL).then((response) => {
    // console.log('Вдруг', response)
    testsDataBase = response ? Object.keys(response).map((key) => ({ ...response[key], id: key })) : []
    // console.log('внешние данные', testsDataBase)
    resultsLoadPlace.innerHTML = databaseRender(testsDataBase)
  })
})

function databaseRender(array) {
  let html = `<p class="result-item"> База данных </p>`
  array.forEach((el, idx) => {
    html += `<p class="result-item"> №${idx + 1} Имя пользователя: ${el.name}  Дата теста: ${el.date} </p>`
  })
  return html
}
