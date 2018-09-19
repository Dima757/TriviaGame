// Global Variables
// =========================================
var trivia = {
    initialScreen: "",
    correctCounter: 0,
    inCorrectCounter: 0,
    unAnsweredCounter: 0,
    clickSound: new Audio(),
    gameHTML: "",
    questionsArray: ["At the beginning of the first film, Rocky beats Spider Rico. How much money did he win?", "When Rocky meets Adrian, what kind of store is she working in?", "When we first met Micky, he kicked Rocky out of his locker. Why?", "On which holiday does Rocky and Adrian have their first date?", "In Rocky IV, which Round was it when Drago killed Apollo Creed?"],
    answerArray: [["$70", "$50", "$40", "$20"],["Pharmacy", "Pet Store", "Clothing Store", "Grocery Store"], ["Because Rocky hasn't paid his locker fees", "Because Rocky works for a loan Shark", "Because he thinks Rocky is washed up", "Because Rocky has stolen from the gym"],["Thanksgiving", "St.Patricks Day", "Valenties Day","Christmas"],["1st", "10th", "5th","2nd"],],
    correctAnswers: ["C. $40", "B. Pet Store", "C. Because he thinks Rocky is washed up", "A. Thanksgiving", "D. 2nd" ],
    imageArray: [],
    clock: "",
    questionCounter: 0,
    timeCounter: 20,

};