function submitAnswers() {
    var total = 4
    var score = 0

    var q1 = document.forms['quizform']['q1'].value
    var q2 = document.forms['quizform']['q2'].value
    var q3 = document.forms['quizform']['q3'].value
    var q4 = document.forms['quizform']['q4'].value

    for (i = 1; i <= total; i++) {
        if (eval("q" + i) == null || eval("q" + i) == "") {
            alert("Please select answer for question " + i + " !")
            return false;
        }
    }

    var answers = ['a', 'a', 'c', 'c']

    for (i = 1; i <= total; i++) {
        if (eval("q" + i) == answers[i - 1]) {
            score++
        }
    }

    var result = document.getElementById('scored')
    scored.innerHTML = '<h3>You Scored ' + score + 'out of ' + total + '</h3>'

    alert('You Scored ' + score + ' out of ' + total)
}