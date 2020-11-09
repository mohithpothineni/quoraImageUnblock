
var long_answers = []

var all_answers = document.getElementsByClassName(
    "q-box puppeteer_test_question_main")[0].querySelector(".q-box").childNodes[1]

const config = { childList: true }

function simulate_click (long_answer) {
    let wrapper = long_answer.querySelectorAll(".q-click-wrapper")

    if (wrapper.length != 0) {
        wrapper[0].click()
        simulate_click(long_answer)
    }
    else {
        let images = long_answer.querySelectorAll(".q-box.qu-overflow--hidden \
        .q-image.qu-display--block.qu-borderRadius--small")

        for (let j = 0; j < images.length; j++) {
            try {
                images[j].click()
            } catch (err){
                console.log(err)    
            }
        }
    }

}

function assign_observer (element, callback, config) {
    var observer = new MutationObserver((_, __) => callback(element))
    observer.observe(element, config)
}

function assigner (elements, callback, options) {
    elements.forEach(element => callback.apply(null,[element].concat(options)))
}

function new_long_answers_configurer (_) {
    let old_len = long_answers.length
    long_answers = document.querySelectorAll(".q-relative.spacing_log_answer_content")
    
    let new_len = long_answers.length
    let new_answers = Object.values(long_answers).slice(old_len)

    assigner(new_answers, simulate_click, [])
}


new_long_answers_configurer(null)
assign_observer(all_answers,new_long_answers_configurer,config)
