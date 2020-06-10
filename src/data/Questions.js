const questions = [
  {
    question:
      "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
    answer: ["Richard Branson", "Alan Sugar", "Donald Trump", "Bill Gates"],
    correctAnswer: "Richard Branson",
    questionId: "099099"
  },
  {
    question:
      'Where is the train station "Llanfair­pwllgwyngyll­gogery­chwyrn­drobwll­llan­tysilio­gogo­goch"?',
    answer: ["Wales", "Moldova", "Czech Republic", "Denmark"],
    correctAnswer: "Wales",
    questionId: "183452"
  },
  {
    question:
      "Which company did Valve cooperate with in the creation of the Vive?",
    answer: ["HTC", "Oculus", "Google", "Razer"],
    correctAnswer: "HTC",
    questionId: "267908"
  },
  {
    question: "What's the name of Batman's  parents?",
    answer: [
      "Thomas & Martha",
      "Joey & Jackie",
      "Jason & Sarah",
      "Todd & Mira"
    ],
    correctAnswer: "Thomas & Martha",
    questionId: "333247"
  },
  {
    question: "What is the most common surname Wales?",
    answer: ["Jones", "Williams", "Davies", "Evans"],
    correctAnswer: "Jones",
    questionId: "496293"
  },
  {
    question:
      "What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?",
    answer: [
      "Demolition",
      "The Dream Team",
      "The Bushwhackers",
      "The British Bulldogs"
    ],
    correctAnswer: "Demolition",
    questionId: "588909"
  },
  {
    question:
      'What name represents the letter "M" in the NATO phonetic alphabet?',
    answer: ["Mike", "Matthew", "Mark", "Max"],
    correctAnswer: "Mike",
    questionId: "648452"
  },
  {
    question: "What is the first book of the Old Testament?",
    answer: ["Genesis", "Exodus", "Leviticus", "Numbers"],
    correctAnswer: "Genesis",
    questionId: "786649"
  },
  {
    question:
      "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
    answer: ["Key", "Sword", "Pen", "Cellphone"],
    correctAnswer: "Key",
    questionId: "839754"
  },
  {
    question:
      "Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
    answer: [
      "Cabbage Patch Kids",
      "Transformers",
      "Care Bears",
      "Rubik’s Cube"
    ],
    correctAnswer: "Cabbage Patch Kids",
    questionId: "98390"
  },
  {
    question: "What does a funambulist walk on?",
    answer: ["A Tight Rope", "Broken Glass", "Balls", "The Moon"],
    correctAnswer: "A Tight Rope",
    questionId: "1071006"
  },
  {
    question: "In past times, what would a gentleman keep in his fob pocket?",
    answer: ["Watch", "Money", "Keys", "Notebook"],
    correctAnswer: "Watch",
    questionId: "1174154"
  },
  {
    question: "Area 51 is located in which US state?",
    answer: ["Nevada", "Arizona", "New Mexico", "Utah"],
    correctAnswer: "Nevada",
    questionId: "1226535"
  },
  {
    question: "How would one say goodbye in Spanish?",
    answer: ["Adiós", " Hola", "Au Revoir", "Salir"],
    correctAnswer: "Adiós",
    questionId: "1310938"
  },
  {
    question: "What is the largest organ of the human body?",
    answer: ["Skin", "Heart", "large Intestine", "Liver"],
    correctAnswer: "Skin",
    questionId: "1436873"
  },
  {
    question: "Which sign of the zodiac is represented by the Crab?",
    answer: ["Cancer", "Libra", "Virgo", "Sagittarius"],
    correctAnswer: "Cancer",
    questionId: "1515110"
  },
  {
    question: "On a dartboard, what number is directly opposite No. 1?",
    answer: ["19", "20", "12", "15"],
    correctAnswer: "19",
    questionId: "1642728"
  },
  {
    question:
      "What does the 'S' stand for in the abbreviation SIM, as in SIM card? ",
    answer: ["Subscriber", "Single", "Secure", "Solid"],
    correctAnswer: "Subscriber",
    questionId: "1747256"
  },
  {
    question:
      "What word represents the letter 'T' in the NATO phonetic alphabet?",
    answer: ["Tango", "Target", "Taxi", "Turkey"],
    correctAnswer: "Tango",
    questionId: "1822532"
  },
  {
    question: "Which American president appears on a one dollar bill?",
    answer: [
      "George Washington",
      "Thomas Jefferson",
      "Abraham Lincoln",
      "Benjamin Franklin"
    ],
    correctAnswer: "George Washington",
    questionId: "195075"
  },
  {
    question: 'What is "dabbing"?',
    answer: ["A dance", "A medical procedure", "A sport", "A language"],
    correctAnswer: "A dance",
    questionId: "2019778"
  },
  {
    question: "What is the name of the Jewish New Year?",
    answer: ["Rosh Hashanah", "Elul", "New Year", "Succoss"],
    correctAnswer: "Rosh Hashanah",
    questionId: "2134343"
  },
  {
    question: "Which one of the following rhythm games was made by Harmonix?",
    answer: [
      "Rock Band",
      "Meat Beat Mania",
      "Guitar Hero Live",
      "Dance Dance Revolution"
    ],
    correctAnswer: "Rock Band",
    questionId: "2210799"
  },
  {
    question:
      "What type of animal was Harambe, who was shot after a child fell into it's enclosure at the Cincinnati Zoo?",
    answer: ["Gorilla", "Tiger", "Panda", "Crocodile"],
    correctAnswer: "Gorilla",
    questionId: "2379831"
  },
  {
    question: "Red Vines is a brand of what type of candy?",
    answer: ["Licorice", "Lollipop", "Chocolate", "Bubblegum"],
    correctAnswer: "Licorice",
    questionId: "2426418"
  },
  {
    question: "What is the nickname of the US state of California?",
    answer: ["Golden State", "Sunshine State", "Bay State", "Treasure State"],
    correctAnswer: "Golden State",
    questionId: "2510086"
  },
  {
    question: "What is on display in the Madame Tussaud's museum in London?",
    answer: [
      "Wax sculptures",
      "Designer clothing",
      "Unreleased film reels",
      "Vintage cars"
    ],
    correctAnswer: "Wax sculptures",
    questionId: "2685745"
  },
  {
    question:
      "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
    answer: ["Spruce Goose", "Noah's Ark", "Fat Man", "Trojan Horse"],
    correctAnswer: "Spruce Goose",
    questionId: "2796884"
  },
  {
    question: "Which of these colours is NOT featured in the logo for Google?",
    answer: ["Pink", "Yellow", "Blue", "Green"],
    correctAnswer: "Pink",
    questionId: "2838900"
  },
  {
    question: 'What is the French word for "hat"?',
    answer: ["Chapeau", "Bonnet", " Écharpe", " Casque"],
    correctAnswer: "Chapeau",
    questionId: "298060"
  },
  {
    question: "Five dollars is worth how many nickles?",
    answer: ["100", "50", "25", "69"],
    correctAnswer: "100",
    questionId: "3096579"
  },
  {
    question: "Who is depicted on the US hundred dollar bill?",
    answer: [
      "Benjamin Franklin",
      "George Washington",
      "Abraham Lincoln",
      "Thomas Jefferson"
    ],
    correctAnswer: "Benjamin Franklin",
    questionId: "3182461"
  },
  {
    question: "What do the letters in the GMT time zone stand for?",
    answer: [
      "Greenwich Mean Time",
      "Global Meridian Time",
      "General Median Time",
      "Glasgow Man Time"
    ],
    correctAnswer: "Greenwich Mean Time",
    questionId: "3239112"
  },
  {
    question: "Which one of these is not a typical European sword design?",
    answer: ["Scimitar", "Falchion", "Ulfberht", "Flamberge"],
    correctAnswer: "Scimitar",
    questionId: "3318503"
  },
  {
    question:
      'According to Sherlock Holmes, "If you eliminate the impossible, whatever remains, however improbable, must be the..."',
    answer: ["Truth", "Answer", "Cause", "Source"],
    correctAnswer: "Truth",
    questionId: "3410327"
  },
  {
    question: "What is the name of Poland in Polish?",
    answer: ["Polska", "Pupcia", "Polszka", "Póland"],
    correctAnswer: "Polska",
    questionId: "3542596"
  },
  {
    question: "The New York Times slogan is, “All the News That’s Fit to…”",
    answer: ["Print", "Digest", "Look", "Read"],
    correctAnswer: "Print",
    questionId: "3667517"
  },
  {
    question: "What do the letters of the fast food chain KFC stand for?",
    answer: [
      "Kentucky Fried Chicken",
      "Kentucky Fresh Cheese",
      "Kibbled Freaky Cow",
      "Kiwi Food Cut"
    ],
    correctAnswer: "Kentucky Fried Chicken",
    questionId: "3791672"
  },
  {
    question: "Which restaurant's mascot is a clown?",
    answer: ["McDonald's", "Whataburger", "Burger King", "Sonic"],
    correctAnswer: "McDonald's",
    questionId: "3893585"
  },
  {
    question: 'What color is the "Ex" in FedEx Ground?',
    answer: ["Green", "Red", "Light Blue", "Orange"],
    correctAnswer: "Green",
    questionId: "3913430"
  },
  {
    question: "How tall is the Burj Khalifa?",
    answer: ["2,722 ft", "2,717 ft", "2,546 ft", "3,024 ft"],
    correctAnswer: "2,722 ft",
    questionId: "4049121"
  },
  {
    question:
      "Which of the following card games revolves around numbers and basic math?",
    answer: ["Uno", "Go Fish", "Twister", "Munchkin"],
    correctAnswer: "Uno",
    questionId: "4150746"
  },
  {
    question:
      "What machine element is located in the center of fidget spinners?",
    answer: ["Bearings", "Axles", "Gears", "Belts"],
    correctAnswer: "Bearings",
    questionId: "4235063"
  },
  {
    question: "Which sign of the zodiac comes between Virgo and Scorpio?",
    answer: ["Libra", "Gemini", "Taurus", "Capricorn"],
    correctAnswer: "Libra",
    questionId: "4321002"
  },
  {
    question: "Which of the following presidents is not on Mount Rushmore?",
    answer: [
      "John F. Kennedy",
      "Theodore Roosevelt",
      "Abraham Lincoln",
      "Thomas Jefferson"
    ],
    correctAnswer: "John F. Kennedy",
    questionId: "4442286"
  },
  {
    question: "What is Tasmania?",
    answer: [
      "An Australian State",
      "A flavor of Ben and Jerry's ice-cream",
      "A Psychological Disorder",
      "The Name of a Warner Brothers Cartoon Character"
    ],
    correctAnswer: "An Australian State",
    questionId: "4564430"
  },
  {
    question: "What company developed the vocaloid Hatsune Miku?",
    answer: ["Crypton Future Media", "Sega", "Sony", "Yamaha Corporation"],
    correctAnswer: "Crypton Future Media",
    questionId: "4630606"
  },
  {
    question:
      "Which country, not including Japan, has the most people of japanese decent?",
    answer: ["Brazil", "China", "South Korea", "United States of America"],
    correctAnswer: "Brazil",
    questionId: "4795960"
  },
  {
    question: "Which candy is NOT made by Mars?",
    answer: ["Almond Joy", "M&M's", "Twix", "Snickers"],
    correctAnswer: "Almond Joy",
    questionId: "4811162"
  },
  {
    question: "In which fast food chain can you order a Jamocha Shake?",
    answer: ["Arby's", "McDonald's", "Burger King", "Wendy's"],
    correctAnswer: "Arby's",
    questionId: "4982981"
  }
];

export default questions;


