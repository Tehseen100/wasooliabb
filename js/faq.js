
const faq_inner = document.querySelector(".frequentlyAskedQuestions-inner");

const qaLoad = document.getElementById("qaLoad");
const qaLoadText = qaLoad.querySelector(".qaLoadText");
const qaLoadIcon = qaLoad.querySelector("i");

qaLoad.addEventListener("click", () => {

    const hideItems = document.querySelectorAll(".QA-container.hide-qa");
    if (hideItems.length > 0) {
        hideItems.forEach(qaBox => {
            qaBox.classList.remove('hide-qa');

        });
        qaLoadText.textContent = "Show Less";
        qaLoadIcon.classList.add("rotate");
    } else {
        QAcontainer.forEach((qaBox, index) => {
            if (index > 5) {
                qaBox.classList.add('hide-qa');
            }
        });
        qaLoadText.textContent = "Show More";
        qaLoadIcon.classList.remove("rotate");
    }

})


const QAcontainer = document.querySelectorAll('.QA-container');

QAcontainer.forEach(container => {
    const qaToggleBtn = container.querySelector('.qaToggleBtn');
    const qaAnswer = container.querySelector('.answer');

    // Only add event listener if elements are found
    if (qaToggleBtn && qaAnswer) {
        container.addEventListener('click', () => {
            // Close other open answers
            QAcontainer.forEach(item => {
                const otherToggleBtn = item.querySelector('.qaToggleBtn');
                const otherAnswer = item.querySelector('.answer');

                if (item !== container) {
                    if (otherAnswer && otherToggleBtn) {
                        otherAnswer.classList.remove('active-answer');
                        otherToggleBtn.classList.remove('fa-minus');
                        otherToggleBtn.classList.add('fa-plus');
                    }
                }
            });

            // Toggle current answer
            qaAnswer.classList.toggle('active-answer');
            qaToggleBtn.classList.toggle('fa-plus');
            qaToggleBtn.classList.toggle('fa-minus');
        });
    }
});
