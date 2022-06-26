document.onreadystatechange = function(){
    if (document.readyState == "loading"){
        document.getElementById('loading').style.display = "block";
    }
    else if (document.readyState == "complete"){
        document.getElementById('loading').style.display = "none";
    }
}

const card_question = document.querySelectorAll(".question");

card_question.forEach((elem) => {
    elem.addEventListener('click', () => {
        const answer_div = elem.nextElementSibling;
        const button_div = elem.lastElementChild;

        if (answer_div.style.maxHeight) {
            button_div.innerHTML = '+';
            answer_div.style.maxHeight = null;
        } else {
            button_div.innerHTML = '&#215';
            answer_div.style.maxHeight = answer_div.scrollHeight + "px";
        }
    });
});