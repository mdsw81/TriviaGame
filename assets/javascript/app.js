var panel = $("#quiz");

// Questions and answer arrays
var gameQAndA = [{
  question: "Which composer preferred not to listen to his contemporaries works for fear it would influence his own writing?",
  answers: ["Stravinksi", "Beethoven", "Handel", "Durufle"],
  correctAnswer: "Beethoven"
}, {
  question: "In which composer's short lifetime did he produce over 600 compositions of which over 40 or which were symphonies?",
  answers: ["Bach", "Haydn", "Mozart", "Rachmaninoff"],
  correctAnswer: "Mozart"
}, {
  question: "The \"Fireworks Suite\" was written for King George II of England in 1749. It was to be a performance in the park with a specially designed wooden backdrop and fireworks. The music was a hit but the building collapsed and caught fire during the performance. Who composed this suite?",
  answers: ["Handel", "Haydn", "Delius", "Faure"],
  correctAnswer: "Handel"
}, {
  question: "Which composition by Peter Ilych Tchaikowsky is often played as the finale on Fourth of July with fireworks in the background?",
  answers: ["1812 Overture", "The Minute Waltz", "The Fifth Symphony", "Dueling Banjos"],
  correctAnswer: "1812 Overture"
}, {
  question: "Which composer's body was exhumed and removed by phrenologists to have the head removed and studied?",
  answers: ["Buxtehude", "Chopin", "Brahms", "Haydn"],
  correctAnswer: "Haydn"
}, {
  question: "Which composer had so many fans begging for his hair clippings that he kept a dog whose fur he would shear off and send in place of his own?",
  answers: ["Mozart", "Liszt", "Bach", "Beethoven"],
  correctAnswer: "Liszt"
}, {
  question: "Which composer reportedly would only wear silk or satin underwear and wrote letters to wealthy dressmakers revealing he had a very keen interest in women’s clothing?",
  answers: ["Wagner", "Mozart", "Handel", "Tchaikovsky"],
  correctAnswer: "Wagner"
}, {
  question: "Which composer would drink up to 30 cups of coffee a day, an addiction that inspired him to write \"The Coffee Cantata\"?",
  answers: ["Shostakovich", "Chopin", "Bach", "Debussy"],
  correctAnswer: "Bach"
}];

// Timer variable and functions
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 180,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      game.done();
    }
  },

  begin: function() {
    timer = setInterval(game.countdown, 1000);

    $("#wrapper2").prepend("<h2>Remaining time: <span id='counter-number'>180</span> Seconds</h2>");

    $("#begin").remove();

    for (var i = 0; i < gameQAndA.length; i++) {
      panel.append("<h4>" + gameQAndA[i].question + "</h4>");
      for (var j = 0; j < gameQAndA[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + gameQAndA[i].answers[j] + "''>" + gameQAndA[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === gameQAndA[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === gameQAndA[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === gameQAndA[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === gameQAndA[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === gameQAndA[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === gameQAndA[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === gameQAndA[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === gameQAndA[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#wrapper2 h2").remove();

    panel.html("<h2>Finished!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (gameQAndA.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#begin", function() {
  game.begin();
});


$(document).on("click", "#done", function() {
  game.done();
});
