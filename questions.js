// questions.js

const questions = [ {
    question_text: "In which Disney room do you come up with ideas?",
    question_type: "multiple_choice",
    options: ["Swimming Room", "Critic Room", "Realist Room", "Dreamer Room"],
    correct_option: 3,
    correct_explanation: `In the Dreamer room there are no wrong answers so you can come up with lots of ideas.
                           The Realist room is where you narrow them down to what you can realistically do.
                           The Critic room is where you look at it from all angles and pick holes in ideas.
                           The Swimming Room is a pool, probably.`,
},

{
    question_text: "When we leave the school of code how should we think of ourselves",
    question_type: "multiple_choice",
    options: ["Junior developer", "senior without experience", "Senior developer", "expert coder",],
    correct_option: 1,
    correct_explanation: `Although our job title may be junior our mindset should be that of a senior.
                          We are aiming to become seniors without experienece.`
                           
                           
},

{
  question_text: "Which of these should we be?",
  question_type: "multiple_choice",
  options: ["Have-it-all", "Know-it-all", "Learn-it-all", "Seen-it-all",],
  correct_option: 2,
  correct_explanation: `Knowing it all is not possible or even helpful. Instead of clogging your brain up with everything you might ever need,
  come ready to learn whatever you need for this particular project. It will always be something new!`
                                                 
},

{
  question_text: "Against what criteria does an AI optimise its responses?",
  question_type: "multiple_choice",
  options: ["Sounding plausible", "Being truthful", "Being friendly", "Being concise",],
  correct_option: 0,
  correct_explanation: `AI only "cares" about sounding plausible because that's how it's been trained to pass tests.`
                                                 
},

{
  question_text: "According to Agile principles, if your code is 95% working, that's equivalent to what?",
  question_type: "multiple_choice",
  options: ["Being 100% working", "Being 0% working", "Being 50% working", "Invalid question",],
  correct_option: 1,
  correct_explanation: `In Agile, the point is always to have working code, even if what works is a lesser version of what you're aiming for.
  If it's only 95% working, it doesn't count yet, and is equivalent to having nothing. Build something that works first! Optimise later.`
                                                 
},

{
  question_text: "What handsome man was the list of learning styles in reference to?",
  question_type: "multiple_choice",
  options: ["Chris", "Luke", "Rincewind", "Gandalf",],
  correct_option: 0,
  correct_explanation: `Although Luke, Rincewind, and Gandalf are all incredibly handsome men,
                       Challenge, Hunger, Retrieval, Interleaved Practice, and Spaced Repetition spell out CHRIS!`
},
{
  question_text: "What is the number 1 thing that you can do to help retain knowledge?",
  question_type: "multiple_choice",
  options: ["Spend another hour revising", "Take a 20 minute break", "Make notes and reread them", "Get a good sleep",],
  correct_option: 3,
  correct_explanation: `Powering through a reading as much as possible quickly loses its effectiveness - the number one thing
                      to do that will help the knowledge massage into your brain is to get consistent good sleep`
},
{
  question_text: "What is NOT a tenet of the Agile manifesto?",
  question_type: "multiple_choice",
  options: ["Individuals and interactions over processes and tools", "Working software over comprehensive documentation", "Customer collaboration over contract negotiation", "Working smarter over working hard",],
  correct_option: 3,
  correct_explanation: `Working smarter (not harder) is a good idea, and maximising your efficiency through good learning practices is very beneficial,
                          however it is not one of the tenets of the Agile manifesto`
},
{
  question_text: "What was the name of the 1st quest speaker",
  question_type: "multiple_choice",
  options: ["Ira Rainey", "Barry Windy", "Steven Gerrad", "Carl Pilkinton",],
  correct_option: 0,
  correct_explanation: `The correct name is Ira Rainey.`
} ,
{
  question_text: "What is the name of learning style used at the school of code",
  question_type: "multiple_choice",
  options: ["Just late", "Just incase", "Just in time", "Just learn",],
  correct_option: 2,
  correct_explanation: `The correct answer is Just in time learning , its a method used to learn what is needed not everything.`
},
  
];



// Don't worry about this, we're just exporting the questions
module.exports = questions;


