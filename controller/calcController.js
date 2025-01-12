class CalcController {

    constructor() {
        this.locale = 'pt-BR';
        this.displayCalcEl = document.querySelector("#display");
        this.dateEl = document.querySelector("#data");
        this.timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvent();
    }


    

    initialize() {
        setInterval(() => {
            this.displayDate = this.currentDate.toLocaleDateString(this.locale, {
                day: "2-digit",
                month: "short",
                year: "numeric"
            });
            this.displayTime = this.currentDate.toLocaleTimeString(this.locale);
        }, 1000);
    }

    addEventListenerAll(element, events, fn){

           events.split(' ').forEach(event =>{
            element.addEventListener(event, fn, false)
           })

    }

    initButtonsEvent(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{
            this.addEventListenerAll(btn, "click drag" , e =>{
                console.log(btn.className.baseVal.replace("btn-", ""));
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            })
        });


    }

    // DATA GET E SET

    get displayDate() {
        return this.dateEl.innerHTML;
    }

    set displayDate(value) {
        return this.dateEl.innerHTML = value;
    }

    // DISPLAY TIME

    get displayTime() {
        return this.timeEl.innerHTML;
    }

    set displayTime(value) {
        return this.timeEl.innerHTML = value;
    }

    // DISPLAY GET E SET

    get displayCalc() {
        return this.displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this.displayCalcEl.innerHTML = value;
    }

    // CALCULADORA GET E SET

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._currentDate = value;
    }

}