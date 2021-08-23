const requestURL = 'https://psychologist-1976-default-rtdb.europe-west1.firebasedatabase.app/results.json'
const enterURL = 'https://psychologist-1976-default-rtdb.europe-west1.firebasedatabase.app/enter.json'

class Enter {
  static create(results) {
    return fetch(enterURL, {
      method: 'POST',
      body: JSON.stringify(results),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
  }
}

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
        // console.log('Внезапно', response)
        return response
      })
  }
}
