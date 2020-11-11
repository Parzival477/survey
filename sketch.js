var form, voter, survey;
var count = 0;
var question1, question2, question3, question4, question_1, question_2, question_3, question_4;
var email;
var database;
var form_input, submit, title, greeting;
var question1_value, question2_value, question3_value, question4_value;
var voterEmailList = []
var vote1 = []
var vote2 = []
var vote3 = []
var vote4 = []


function setup() {
  createCanvas(800,400);
  database = firebase.database()
  title = createElement('h1')
  title.html("SurveyForEnviornment")
  title.position(400,100)
  greeting = createElement('h2')
  greeting.html("Hello!")
  greeting.position(400,100)
  question1 = createElement('h3',"Are you willing to doate money for the cause of the enviornment?")
  question_1 = createRadio()
  question_1.option("Yes")
  question_1.option("No")
  question_1.option("Maybe")
  question1_value = question1_value()
  question1.position(displayWidth/2 - 100, displayHeight/2 + 20)
  question1_value.position(displayWidth/2 - 280, displayHeight/2 + 50)
  question2 = createElement('h3',"Do you save whatever you can?(Please be Honest)")
  question_2 = createRadio()
  question_2.option("Yes")
  question_2.option("No")
  question_2.option("Maybe")
  question2_value = question2_value()
  question2.position(displayWidth/2 - 280, displayHeight/2 + 50)
  question2_value.position(displayWidth/2 - 100, displayHeight/2 + 110)
  question3 = createElement('h3',"Do yuo care for all animals?")
  question_3 = createRadio()
  question_3.option("Yes")
  question_3.option("No")
  question_3.option("Maybe")
  question3_value = question3_value()
  question3.position(displayWidth/2 - 280, displayHeight/2 + 150)
  question3_value.position(displayWidth/2 - 100, displayHeight/2 + 230)
  question4 = createElement('h3',"Are you willing to change your practices, if they are not eco-friendly?")
  question_4 = createRadio()
  question_4.option("Yes")
  question_4.option("No")
  question_4.option("Maybe")
  question4_value = question4_value()
  question4.position(displayWidth/2 - 280, displayHeight/2 + 270)
  question4_value.position(displayWidth/2 - 100, displayHeight/2 + 330)
  email = createElement('h3')
  email.html('Please write your email id')
  email.position(displayWidth/2 - 70, displayHeight/2 + 400)
  email_input = createInput()
  email_input.position(displayWidth/2 -130, displayHeight/2 + 450)
  submit = createButton("Submit")
  submit.position(displayWidth/ - 70, displayHeight/2 + 520)

}

function draw() {
  background(255,255,255);  
  drawSprites();
  submit.mousePressed(()=>{
    vote1.push(question1_value())
    vote2.push(question2_value())
    vote3,push(question3_value())
    vote4.push(question4_value())
    voterEmailList(email_input.value())
    question_1_vote();
    question_2_vote();
    question_3_vote();
    question_4_vote();
    updateInputemail();
    updateVoterCount();

  })
}
count = Count + 1
function question_1_vote() {
database.ref('/survey/question1').update({
  vote: vote1
})
}
function question_2_vote() {
  database.ref('/survey/question1').update({
    vote: vote2
  })
  }
  function question_3_vote() {
    database.ref('/survey/question1').update({
      vote: vote3
    })
    }
    function question_4_vote() {
      database.ref('/survey/question1').update({
        vote: vote4
      })
      }
    function updateInputemail(){
      database.ref('/survey/').update({
        voterEmail: voterEmailList
      })
    } 
    //count = Count + 1 
    function updateVoterCount(){
      database,ref('/survey/').update({
        votercount: count
      })
    }