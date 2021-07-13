const questionsAnxiety = [
  'Притупление чувств, покалывание или жжение:',
  'Ощущение жары:',
  'Дрожь в ногах, непроизвольные движения ногами:',
  'Невозможность успокоиться:',
  'Страх, что случится самое страшное:',
  'Головокружение или затуманенное сознание:',
  'Неуравновешенность:',
  'Ощущение паники:',
  'Нервозность:',
  'Ощущение удушья:',
  'Дрожь в руках:',
  "Слабость и/или 'ватные ноги':",
  'Страх потерять самообладание:',
  'Затрудненное дыхание:',
  'Страх смерти:',
  'Испуг:',
  'Расстройство пищеварения (ощущение дискомфорта в животе):',
  'Ощущение обморока:',
  'Покраснение лица (жар):',
  'Холодный пот:',
  'Учащенное сердцебиение:',
]

questionsAnxiety.answers = [
  'Совсем не беспокоило',
  'Беспокоило в лёгкой степени (не особенно беспокоит)',
  'Беспокоило в средней степени (это было очень неприятно, но я справился/лась с этим)',
  'Беспокоило в значительной степени (с трудом справился/лась с этим)',
]
questionsAnxiety.description =
  'Перед Вами список симптомов тревоги. Внимательно прочтите каждый из симптомов. Выберите и обозначьте в какой степени, каждый из симптомов, беспокоил Вас в последнюю неделю, включая сегодня.'

const questionsDepression = [
  [
    'Я не грустный',
    'Я грустный',
    'Я постоянно грустный и не могу выйти из этого состояния',
    'Я настолько грустный, что не могу выдержать это состояние,',
  ],

  [
    'Я не отчаявшийся, особенно, когда думаю о будущем',
    'Я чувствую отчаяние, когда думаю о будущем',
    'Я чувствую, что в будущем меня не ждет ничего хорошего',
    'Я чувствую, что будущее безнадежно, и что ничего не может измениться к лучшему',
  ],

  [
    'Я не чувствую себя неудачником',
    'Я чувствую, что терплю неудачи чаще, чем среднестатистический человек',
    'Когда я оглядываюсь на мою жизнь, я вижу лишь множество неудач',
    'Я чувствую, что я конченый неудачник',
  ],

  [
    'Я получаю удовольствие от тех же вещей, что и в прошлом',
    'Я не получаю удовольствия от тех вещей. от которых получал в прошлом',
    'Я уже реально ничем не удовлетворен',
    'Я совершенно не удовлетворен, и меня ничто не интересует',
  ],

  [
    'Я не чувствую себя особенно виноватым',
    'Какое-то время, я чувствую себя виноватым',
    'Я чувствую себя виноватым большую часть времени',
    'Я все время чувствую себя виноватым',
  ],

  [
    'Я не чувствую, что я наказан',
    'Я чувствую, что могу быть наказан',
    'Я жду, что буду наказан',
    'Я чувствую, что наказан',
  ],

  ['Я не чувствую разочарования в себе', 'Я разочарован в себе', 'Я себе противен', 'Я ненавижу себя'],

  [
    'Я не чувствую себя хуже, чем кто-либо',
    'Я критичен по отношению к себе за свои ошибки и слабости',
    'Я всё время себя обвиняю за свои недостатки',
    'Я виню себя за всё плохое, что происходит',
  ],

  [
    'У меня нет мыслей о самоубийстве',
    'У меня есть мысли о самоубийстве, но я этого не сделаю',
    'Я бы хотел покончить с собой',
    'Я бы покончил с собой, если бы представилась такая возможность',
  ],

  [
    'Я не плачу больше, чем обычно',
    'Я плачу сейчас больше, чем в прошлом',
    'Сейчас я плачу всё время',
    'Когда-то я мог плакать, но сейчас я не могу, хотя мне этого хочется',
  ],

  [
    'Я не нервничаю больше, чем обычно',
    'Я раздражаюсь легче, чем когда-либо',
    'Я нервничаю всё время',
    'Я даже не раздражаюсь теперь от вещей, которые когда-то меня раздражали',
  ],

  [
    'Я не потерял интерес к другим людям',
    'Теперь я меньше интересуюсь другими людьми',
    'Я в значительной степени потерял интерес к другим людям',
    'Я потерял всякий интерес к другим людям',
  ],

  [
    'Я принимаю решения с той же лёгкостью, как обычно',
    'Я откладываю принятия решений чаще, чем обычно',
    'Я затрудняюсь принимать решения больше, чем обычно',
    'Я совершенно не могу принимать решения',
  ],

  [
    'Я не чувствую, что выгляжу хуже, чем обычно',
    'Я чувствую, что выгляжу старше своих лет и непривлекателен',
    'Я чувствую, что в моей внешности постоянно происходят изменения, которые делают меня непривлекательным',
    'Я считаю, что выгляжу уродливым',
  ],

  [
    'Я могу сейчас работать так же, как и раньше',
    'Мне приходится специально напрягаться, чтобы начать что-то делать',
    'Мне приходиться сильно себя заставлять, чтобы что-то сделать',
    'Я не могу теперь выполнять вообще никакой работы',
  ],

  [
    'Я могу спать сейчас как обычно',
    'Я сплю сейчас хуже, чем обычно',
    'Я просыпаюсь на час-два раньше обычного и мне трудно заснуть снова',
    'Я просыпаюсь на несколько часов раньше обычного и не могу заснуть снова',
  ],

  [
    'Я не устаю сейчас больше, чем обычно',
    'Я устаю быстрее, чем обычно',
    'Я устаю теперь от всего, что бы я ни делал',
    'Я слишком устал, чтобы делать что-либо',
  ],

  [
    'У меня хороший аппетит, как обычно',
    'Мой аппетит хуже, чем был раньше',
    'Мой аппетит гораздо хуже, чем был раньше',
    'У меня совершенно нет аппетита',
  ],

  [
    'Я не потерял в весе, разве что совсем немного или намеренно в результате диеты',
    'Я потерял в весе более 2-2.5 кг',
    'Я потерял в весе более 4-4.5 кг',
    'Я потерял в весе более 6.5-7 кг',
  ],
  [
    'Я не обеспокоен своим здоровьем больше, чем обычно',
    'Я беспокоюсь о физических проблемах, таких как боли, расстройство желудка, запоры',
    'Я настолько обеспокоен проблемами физического здоровья, что не могу думать о других вещах',
    'Я настолько обеспокоен проблемами физического здоровья, что не могу думать ни о чём другом',
  ],
  [
    'Я не заметил никаких перемен в моем отношении к сексу',
    'Я меньше заинтересован в сексе, чем обычно',
    'Я гораздо меньше заинтересован в сексе сейчас',
    'Я полностью потерял интерес к сексу',
  ],
]

questionsDepression.description =
  'Этот вопросник составлен из групп предложений. Прочтите внимательно каждую из этих групп. Затем, выберите из группы предложение (утверждение), которое наилучшим образом описывает Ваше состояние в последнюю неделю, включая сегодня. Прочтите все утверждения во всех группах, прежде, чем сделать выбор. Для удобства в вопроснике используются выражения в мужском роде, но они имеют в равной степени отношение и к женскому роду.  '

const questionsDissociation = [
  'Во время поездки на метро, автобусе, другом виде транспорта или на автомашине неожиданно осознаю, что не помню того, что со мной происходило в это время или в какую-то часть этого времени.',
  'Слушая кого-то, вдруг осознаю, что не слышал/а всего или части того, что было сказано.',
  'Находясь в каком-то месте, не могу вспомнить, как я туда попал/а.',
  'Обнаруживаю себя одетым в одежду, о которой не могу вспомнить, как и когда я ее надевал/а.',
  'Нахожу среди своих вещей новую и не помню, как и когда ее покупал/а.',
  'Иногда ко мне обращаются незнакомые люди, называя меня при этом другим именем и утверждая, что встречали меня раньше.',
  'Испытываю такое чувство, как будто бы стою рядом с собой или наблюдаю себя со стороны, как другого человека.',
  'Мне говорят, что я иногда не узнаю друзей или членов своей семьи.',
  'Забываю некоторые важные события своей жизни (например, свадьбу или окончание учебного заведения).',
  'Меня обвиняли во лжи, но мне казалось, что я говорил/а правду.',
  'Глядя в зеркало, я не узнаю себя.',
  'Испытываю чувство нереальности окружающих меня людей и предметов, а может быть и всего окружающего меня мира.',
  'Испытываю ощущение, что моё тело мне не принадлежит.',
  'Иногда переживаю какое-то событие (или ситуацию) из своего прошлого так, как будто оно опять происходит со мной в настоящее время.',
  'Испытываю чувство сомнения в том, действительно ли происходили какие-то события в моей жизни или эти события только пригрезились мне.',
  'Находясь в знакомом и привычном для себя месте, вдруг ощущаю, что я тут впервые и это место мне незнакомо.',
  'Меня настолько поглощает содержание кинофильма или телепередачи, что я уже не замечаю ничего, что происходит вокруг меня.',
  'Фантазия или мечта кажется мне реальностью.',
  'Иногда я не замечаю физической боли.',
  'Иногда я сижу, уставившись в пространство, ни о чем при этом не думая и не замечая при этом времени.',
  'Находясь в одиночестве иногда замечаю, что разговариваю сам/а с собой.',
  'Веду себя в двух похожих ситуациях настолько по-разному, что у меня возникает ощущение будто я - два разных человека.',
  'Иногда мне вдруг становится легко действовать в тех ситуациях (например, работа, общение, спорт и т.д.), которые обычно вызывают у меня затруднение.',
  'Иногда я вдруг не могу вспомнить, действительно ли я сделал/а что-то или только подумал/а о том, что это нужно сделать (например, не помню, действительно ли я только что опустил/а письмо в почтовый ящик или только подумал/а об этом.',
  'Вдруг обнаруживаю, что совершил/а какой-то поступок, и не помню, как это случилось.',
  'Иногда нахожу собственные записи, заметки или рисунки, о которых не помню, чтобы я их делал/а.',
  'Иногда слышу посторонние голоса внутри своей головы, которые говорят мне, что делать и комментируют мои поступки.',
  'Иногда ощущаю, что смотрю на мир как бы сквозь туман или дымку, что предметы и люди кажутся мне далекими или неясными.',
]

questionsDissociation.description =
  'Вам предлагается серия вопросов о некоторых ситуациях и переживаниях из повседневной жизни. Нас интересует, как часто это происходило с Вами. Помните, что Ваши ответы должны относиться только к тем ситуациям и переживаниям, когда Вы НЕ находились под влиянием алкоголя или наркотиков. При ответе на вопрос определите, пожалуйста, в какой степени описанное в нем переживание (или ситуация) происходило лично с Вами. Выберите ту цифру, которая соответствует тому, как часто, в процентном соотношении, Вам доводилось испытывать данное переживание или попадать в такую ситуацию. Если то, о чем сказано в этом предложении, с Вами никогда не происходит, выбирайте 0%, если это происходит с Вами всегда, то 100%.'

questionsDissociation.answers = ['0', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']

const questionsBasicPH = [
  'Я здаюся і покладаюся на вищі сили чи долю у вирішенні проблеми',
  'Я не говорю про свої емоції прямо, але виражаю їх опосередковано, - до прикладу, плачу, коли думаю про себе',
  'Я шукаю підтримки інших людей',
  'Я фантазую і даю волю своїй уяві, - наприклад, уявляю себе у спокійному, безтурботному місці',
  'Я збираю інформацію, щоб бути певним/ною у тому, що я маю найкращій варіант вирішення проблеми',
  'Я їм або сплю менше, ніж звичайно, - або ж, навпаки, я їм та сплю більше, аніж зазвичай',
  'Я вірю у мої сили і мою здатність долати перешкоди',
  'Я висловлюю мої почуття у власний завуальований спосіб - через натяки, сарказм або навіть флірт',
  'Я веду бесіди з друзями по телефону',
  'Я згадую свої улюблені історії, байки, притчі або ж казки - як спосіб пошуку вирішення проблеми',
  'Я аналізую проблеми, намагаючись знайти їх вирішення',
  'Я постійно займаю себе фізично працею - наприклад, прибиранням, приготуванням їжі, роботою з деревом, ремонтом автомобіля чи навіть створенням моделі літака',
  'Моє кредо: "Я зможу пережити це, незважаючи ні на що"',
  'Я звільняюсь від почуттів через плач, сміх або крик і не тримаю все це всередині',
  'Я намагаюся знайти підтримку у друга або членів моєї сім`ї',
  'Слухаючи музику, я даю волю своїй уяві',
  'Я створюю спеціальний план і дію згідно з ним крок за кроком',
  'Я використовую вправи для розслаблення',
  'Я прошу допомоги у Бога в молитві',
  'Я накручую себе емоційно, щоб посилити свою мотивацію',
  'Я глибоко занурююсь у стосунки з членами моєї громади або організації, до якої я належу',
  'Я згадую часи, коли мені було набагато краще, ніж зараз, або ж дума про час, коли все зміниться на краще',
  'Насамперед я намагаюся зрозуміти, що, власне, відбувається ',
  'Я розслабляюся, коли роблю щось: приймаю душ або ванну, йду на прогулянку або бігаю підтюпцем',
  'Я опираюся на свої духовні переконання або на свою життєву філософію',
  'Я розповідаю або слухаю жарти і смішні історії',
  'Я шукаю людей, з якими можна провести час, нічим особливо не займаючись',
  'Я переглядаю спортивні змагання, фільми або читаю книги, уявляючи себе на місці дійових осіб',
  'Я зважую всі можливі варіанти вирішення проблеми і, якщо це можливо, обираю найкращий з них',
  'Я намагаюся постійно займати себе якоюсь фізичною діяльністю',
  'Моє кредо: "Те, що не вбиває мене, робить мене сильнішим"',
  'Я даю вихід моїм емоціям',
  'Я пишу листи та е-мейли до друзів - з надією на їх відповідь',
  'Я мрію, думаю про кращі часи, уявляючи собі їх',
  'Я намагаюся знайти вирішення проблеми у найкращій спосіб з тих, які знаю, обмірковуючи кожен з них',
  'Я виходжу з дому або намагаюся бути активним/ною для того, щоб позбутися надлишку енергії',
]

questionsBasicPH.description =
  'Подумайте про себе, коли Ви знаходитеся у кризі, сильному стресі. Що, здебільшого, Ви робите, щоб допомогти собі впоратися з цим станом? Що, на Вашу думку, допомагає Вам найкраще, а що - незначною мірою? Зважте кожен вислів і оберіть той варіант відповіді, який найточніше співпадає з Вашим.'

questionsBasicPH.answers = [
  'Ніколи не користуюся цим способом, щоб впоратися з ситуацією',
  'Я рідко користуюся цим способом, щоб впоратися з ситуацією',
  'Я іноді користуюся цим способом, щоб впоратися з ситуацією',
  'Я періодично користуюся цим способом, щоб впоратися з ситуацією',
  'Я часто користуюся цим способо, щоб впоратися з ситуацією',
  'Я майже завжди користуюся цим способом, щоб впоратися з ситуацією',
  'Я завжди користуюся цим способом, щоб впоратися з ситуацією',
]

const questionsSelfEstim = [
  'Думки і спогади, що повторюються і турбують, або нав`язливі картини травматичного досвіду з минулого?',
  'Повторювані, турбуючі сни про травматичний досвід з минулого?',
  'Чи часто ви починаєте діяти так, як у травмуючій ситуації, або почуваєтеся, ніби ви ще там, ніби вона знову повторюється (переживаєте ситуацію знову) ?',
  'Почуваєтеся пригніченим, засмучуєтесь, якщо дещо нагадує вам травматичну ситуацію з минулого?',
  'Фізично реагуєте (тобто - сильне серцебиття, проблеми з диханням або сильне потіння) коли щось нагадує вам про травматичний досвід з минулого?',
  'Уникаєте думок або розмов про травматичну ситуацію у минулому або уникаєте почуттів, пов`язаних з цією ситуацією?',
  'Уникаєте певної діяльності чи ситуацій, тому що вони нагадують вам травмуючу ситуацію з минулого?',
  'Відчуваєте труднощі з пригадуванням важливих частин травмуючої ситуації з минулого?',
  'Втрата інтересу до того, що раніше приносило задоволення?',
  'Відчуваєте відстороненість або ж відрізаність від інших людей?',
  'Відчуваєте емоційне заціпеніння або неможливість відчувати любов до близьких вам людей?',
  'Відчуття, що ваше майбутнє відрізане?',
  'Труднощі із засинанням або переривчастий сон?',
  'Відчуття роздратування або вибухи гніву?',
  'Труднощі з концентрацією уваги?',
  'Постійно "насторожені", занадто пильні, постійно очікуєте на небезпеку?',
  'Відчуваєте себе засмиканим/ною, дратівливим/ою або легко лякаєтесь?',
]

questionsSelfEstim.description =
  'Внизу перераховано проблеми або скарги, які людина може мати внаслідок стресового (травматичного) досвіду у минулому. Будь ласка, прочитайте кожен пункт уважно, та поставте позначку "Х" у графі, що найбільш чітко відображає частоту з якою Вас турбувало це питання минулого місяця.'

questionsSelfEstim.answers = ['Не було зовсім', 'Інколи', 'Помірно', 'Часто', 'Дуже часто']

const questionsEventInfluance = [
  'Будь-що, що нагадувало мені про цю подію, викликало почуття, пов`язані з нею.',
  'Мені було важко спати, я часто будився/лась уночі.',
  'З різних причин я знову і знову починав думати про цю подію.',
  'Я відчував/ла роздратування і злість.',
  'Я намагався не дозволяти собі засмучуватися, коли я думав/ла про цю подію, чи вона нагадувалася мені.',
  'Я думав/ла про цю подію, хоч і не хотів/ла цього робити.',
  'Я почувався/лась так, наче це не відбулося або наче це не було насправді.',
  'Я намагався/лась уникати усього, що могло мені нагадувати про цю подію.',
  'Образи про це неочікувано з`явились у мене в голові.',
  'Я був/ла нервовий/а, я "заводився/лась" з нічого.',
  'Я намагався/лась про це не думати.',
  'Я знав/ла, що маю багато відчуттів, пов`язаних з цією подією, але я нічого з ними не робив/ла.',
  'Мої почуття, пов`язані з цим, в певній мірі, притупилися.',
  'Я помітив/ла, що я поводжуся або почуваюся так, ніби я знову повернувся/лась у той час.',
  'Мені було важко засинати.',
  'На мене хвилями находили сильні відчуття, пов`язані з цим.',
  'Я намагався/лась викинути це зі своєї пам`яті.',
  'Мені було важко зосереджуватися.',
  'Спогади про це викликали у мене фізичні реакції (такі як, потовиділення, важке дихання, нудота або серцебиття та ін.)',
  'Це мені снилося.',
  'Я почуваюсь цілий час "на поготові" - в очікуванні, що щось страшне має статися знову.',
  'Я намагався/лась про це не говорити ні з ким.',
]
questionsEventInfluance.description =
  'Нижче подається список труднощів, з якими люди іноді зіштовхуються після стресових життєвих подій. Будь ласка, прочитайте кожен пункт, а потім вкажіть наскільки Вас виснажувала кожна трудність протягом останніх 7 днів або протягом іншого узгодженого проміжку часу:'

questionsEventInfluance.answers = ['Ані-трохи', 'Трохи', 'Помірно', 'Досить сильно', 'Дуже сильно']
