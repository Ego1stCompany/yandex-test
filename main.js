const sliderPlayersDecktop = () => {
    const SLIDER_DECKTOP = document.querySelectorAll('.slider__container')
    const BUTTON_DECKTOP_PREV = document.querySelector('.prev__slider-decktop')
    const BUTTON_DECKTOP_NEXT = document.querySelector('.next__slider-decktop')
    let counter = document.querySelector('.next__counter')
    let countItem = 0;

    BUTTON_DECKTOP_NEXT.addEventListener('click', () => {
        counter.innerHTML = '6'

        SLIDER_DECKTOP[countItem].classList.remove('active__slider')
        countItem++
        SLIDER_DECKTOP[countItem].classList.add('active__slider')

        if (countItem >= 1) {
            BUTTON_DECKTOP_NEXT.disabled = true
            BUTTON_DECKTOP_NEXT.classList.add('disabled__button')
        }

        disabledButton(countItem)
    })

    BUTTON_DECKTOP_PREV.addEventListener('click', () => {
        counter.innerHTML = '3'

        SLIDER_DECKTOP[countItem].classList.remove('active__slider')
        countItem--
        SLIDER_DECKTOP[countItem].classList.add('active__slider')

        disabledButton(countItem)
    })
    const disabledButton = (counter) => {

        if (counter >= 1) {
            BUTTON_DECKTOP_NEXT.disabled = true
            BUTTON_DECKTOP_NEXT.classList.add('disabled__button')
        } else {
            BUTTON_DECKTOP_NEXT.disabled = false
            BUTTON_DECKTOP_NEXT.classList.remove('disabled__button')
        }

        if (counter <= 0) {
            BUTTON_DECKTOP_PREV.disabled = true
            BUTTON_DECKTOP_PREV.classList.add('disabled__button')
        } else {
            BUTTON_DECKTOP_PREV.disabled = false
            BUTTON_DECKTOP_PREV.classList.remove('disabled__button')
        }
    }
}
const sliderStagesMobile = () => {
    const SLIDER_STAGES = document.querySelectorAll('.stages__card-mobile')
    const BUTTON_STAGES_MOBILE_PREV = document.querySelector('.slider__prev-mobile')
    const BUTTON_STAGES_MOBILE_NEXT = document.querySelector('.slider__next-mobile')
    const STAGES__POINTERS = document.querySelectorAll('.stages__point')

    let countItem = 0

    BUTTON_STAGES_MOBILE_NEXT.addEventListener('click', () => {

        SLIDER_STAGES[countItem].classList.remove('card__active')
        STAGES__POINTERS[countItem].classList.remove('active__point-slider')
        countItem++
        SLIDER_STAGES[countItem].classList.add('card__active')
        STAGES__POINTERS[countItem].classList.add('active__point-slider')
        disabledButton(countItem)
    })

    BUTTON_STAGES_MOBILE_PREV.addEventListener('click', () => {

        SLIDER_STAGES[countItem].classList.remove('card__active')
        STAGES__POINTERS[countItem].classList.remove('active__point-slider')
        countItem--
        SLIDER_STAGES[countItem].classList.add('card__active')
        STAGES__POINTERS[countItem].classList.add('active__point-slider')

        disabledButton(countItem)
    })
    const disabledButton = (counter) => {
        if (counter >= 4) {
            BUTTON_STAGES_MOBILE_NEXT.disabled = true
            BUTTON_STAGES_MOBILE_NEXT.classList.add('disabled__button')
        } else {
            BUTTON_STAGES_MOBILE_NEXT.disabled = false
            BUTTON_STAGES_MOBILE_NEXT.classList.remove('disabled__button')
        }

        if (counter <= 0) {
            BUTTON_STAGES_MOBILE_PREV.disabled = true
            BUTTON_STAGES_MOBILE_PREV.classList.add('disabled__button')
        } else {
            BUTTON_STAGES_MOBILE_PREV.disabled = false
            BUTTON_STAGES_MOBILE_PREV.classList.remove('disabled__button')
        }
    }
}

const sliderPlayersMobile = () => {
    const SLIDER_PLAYERS = document.querySelectorAll('.slider__item-mobile')
    const BUTTON_MOBILE_PREV = document.querySelector('.slider__button-prev')
    const BUTTON_MOBILE_NEXT = document.querySelector('.slider__button-next')
    let slider__number = document.querySelector('.number__slider-mobile')
    slider__number.innerHTML = '1'
    let countItem = 0

    BUTTON_MOBILE_NEXT.addEventListener('click', () => {


        SLIDER_PLAYERS[countItem].classList.remove('active__slider')
        countItem++
        slider__number.innerHTML = `${countItem + 1}`
        SLIDER_PLAYERS[countItem].classList.add('active__slider')

        disabledButton(countItem)
    })

    BUTTON_MOBILE_PREV.addEventListener('click', () => {

        SLIDER_PLAYERS[countItem].classList.remove('active__slider')
        countItem--
        slider__number.innerHTML = `${countItem + 1}`
        SLIDER_PLAYERS[countItem].classList.add('active__slider')

        disabledButton(countItem)
    })

    const disabledButton = (counter) => {
        if (counter >= 5) {
            BUTTON_MOBILE_NEXT.disabled = true
            BUTTON_MOBILE_NEXT.classList.add('disabled__button')
        } else {
            BUTTON_MOBILE_NEXT.disabled = false
            BUTTON_MOBILE_NEXT.classList.remove('disabled__button')
        }

        if (counter <= 0) {
            BUTTON_MOBILE_PREV.disabled = true
            BUTTON_MOBILE_PREV.classList.add('disabled__button')
        } else {
            BUTTON_MOBILE_PREV.disabled = false
            BUTTON_MOBILE_PREV.classList.remove('disabled__button')
        }
    }
}

sliderPlayersDecktop()
sliderStagesMobile()
sliderPlayersMobile()
