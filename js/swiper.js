const questionNumbers = questionsAnxiety.length

function testAnxiety() {
  let inputNames = []
  for (let i = 0; i < questionsAnxiety.length; i++) {
    inputNames.push(`answer${i}`)
  }

  let slide = []
  for (let i = 0; i < questionsAnxiety.length; i++) {
    if (i == questionsAnxiety.length - 1) {
      slide.push(`
      <div class="anxiety-answer swiper-slide">
        <h3> ${questionsAnxiety[i]} </h3>
        <input class="form-check-input" type="radio" name="${inputNames[i]}" value= 0> Совсем не беспокоит<br>
        <input class="form-check-input" type="radio" name="${inputNames[i]}" value= 1> Беспокоит в лёгкой степени (не особенно беспокоит)<br>
        <input class="form-check-input" type="radio" name="${inputNames[i]}" value= 2 checked> Беспокоит в средней степени (это было очень неприятно, но я справился/лась с этим)<br>
        <input class="form-check-input" type="radio" name="${inputNames[i]}" value= 3> Беспокоит в значительной степени (с трудом справился/лась с этим)    
        <button class="btn btn-success" id="count-test-sum" onclick="AnxietySum()">Посчитать результаты теста</button>   
      </div>     
      `)
    } else {
      slide.push(`
        <div class="anxiety-answer swiper-slide">
          <h3> ${questionsAnxiety[i]} </h3>
          <input class="form-check-input" type="radio" name="${inputNames[i]}" value= 0> Совсем не беспокоит<br>
          <input class="form-check-input" type="radio" name="${inputNames[i]}" value= 1> Беспокоит в лёгкой степени (не особенно беспокоит)<br>
          <input class="form-check-input" type="radio" name="${inputNames[i]}" value= 2 checked> Беспокоит в средней степени (это было очень неприятно, но я справился/лась с этим)<br>
          <input class="form-check-input" type="radio" name="${inputNames[i]}" value= 3> Беспокоит в значительной степени (с трудом справился/лась с этим)      
        </div>    
      `)
    }
  }

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // loop: true,
    spaceBetween: 10,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    virtual: {
      addSlidesBefore: 100,
      addSlidesAfter: 100,
      slides: slide,
    },
  })
  return swiper
}
/* const questionsAnxiety=[ 
  "Притупление чувств, покалывание или жжение:",
  "Ощущение жары:",
  "Дрожь в ногах, непроизвольные движения ногами:",
  "Невозможность успокоиться:",
  "Страх, что случится самое страшное:",
  "Головокружение или затуманенное сознание:",
  "Неуравновешенность:",
  "Ощущение паники:",
  "Нервозность:",
  "Ощущение удушья:",
  "Дрожь в руках:",
  "Слабость и/или 'ватные ноги':",
  "Страх потерять самообладание:",
  "Затрудненное дыхание:",
  "Страх смерти:",
  "Испуг:",
  "Расстройство пищеварения (ощущение дискомфорта в животе):",
  "Ощущение обморока:",
  "Покраснение лица (жар):",
  "Холодный пот:",
  "Учащенное сердцебиение:"]

const questionNumbers = questionsAnxiety.length

let inputNames = []
for(let i=0; i<questionsAnxiety.length; i++){
  inputNames.push(`answer${i}`)    
}

let slide=[]
for (let i=0; i<questionsAnxiety.length; i++){

  slide.push(`
    <div class="anxiety-answer swiper-slide">
      <h3> ${questionsAnxiety[i]} </h3>
      <input class="form-check-input" type="radio" name="${inputNames[i]}" value= 0> Совсем не беспокоит<br>
      <input class="form-check-input" type="radio" name="${inputNames[i]}" value= 1> Беспокоит в лёгкой степени (не особенно беспокоит)<br>
      <input class="form-check-input" type="radio" name="${inputNames[i]}" value= 2 checked> Беспокоит в средней степени (это было очень неприятно, но я справился/лась с этим)<br>
      <input class="form-check-input" type="radio" name="${inputNames[i]}" value= 3> Беспокоит в значительной степени (с трудом справился/лась с этим)      
    </div>    
  `)
}

const swiper = new Swiper('.swiper-container', {
  // Optional parameters  
  // loop: true, 
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  virtual: {
    addSlidesBefore:100, 
    addSlidesAfter:100,    
    slides: slide,  
  },
}); */

function AnxietySum() {
  let isChecked = []
  let answer
  let summaOfTest = 0
  let messageHTML
  let currentName
  for (let j = 0; j < questionNumbers; j++) {
    currentName = 'answer' + Number(j)
    answer = document.getElementsByName(currentName)
    isChecked[j] = false
    for (let i = 0; i < answer.length; i++) {
      if (answer[i].checked) {
        summaOfTest += Number(answer[i].value)
        isChecked[j] = true
      }
    }
  }
  console.log(summaOfTest)
  const testResult = document.querySelector('#event-infliance-test-result')
  testResult.innerText = summaOfTest
  let anxietyTableResult
  localStorage.setItem(anxietyTableResult, summaOfTest)
  return summaOfTest
}
