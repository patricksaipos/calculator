class CalcController {

    constructor() {
        this.operation = [];
        this.locale = 'pt-BR';
        this.displayCalcEl = document.querySelector("#display");
        this.dateEl = document.querySelector("#data");
        this.timeEl = document.querySelector("#hora");
        // this._currentDate;
        this.initialize();
        this.initButtonsEvent();
    }


    initialize() {

        setInterval(() => {
            this.dateEl.innerHTML = new Date().toLocaleDateString(this.locale, {
                day: "2-digit",
                month: "short",
                year: "numeric"
            });
            // this.dateEl.innerHTML = date;
        }, 1000);



        setInterval(() => {
            this.displayDate = this.currentDate.toLocaleDateString(this.locale, {
                day: "2-digit",
                month: "short",
                year: "numeric"
            });
            this.displayTime = this.currentDate.toLocaleTimeString(this.locale);
        }, 1000);
    }

    clearAll() {
        this.operation = [];
    }

    setError() {
        this.displayCalcEl = 'Error';
    }

    clearEntry() {
        this.operation.pop();
    }

    getLastOperation() {
        return this.operation[this.operation.length -1]
    }

    isOperator(value) {
        if (['+', '-', '*', '%', '/'].indexOf(value) > -1) {
            return true;
        } else {
            return false;
        }
    }

    setLastOperation(value) {
        this.operation[this.operation.length -1] = value;
    }

    pushOperation(value){
        this.operation.push(value);

        if(this.operation.length > 3){
            this.calc();
        }
    }

    calc(){
        let last = this.operation.pop();
        let result = eval(this.operation.join(''));
        
        this.operation = [result, last]
    }

    setLastNumberToDisplay(){
        
    }

    addOperation(value) {

          console.log(value, isNaN(this.getLastOperation()));

        if (isNaN(this.getLastOperation())) {
            // String
            if (this.isOperator(value)) {
                this.setLastOperation(value)
            } else if (isNaN(value)) {
                // outra coisa
                console.log(value)
            } else {
                this.pushOperation(value);
            }

        } else {
            // Number
            // console.log(value)
            if (this.isOperator(value)) {
                this.pushOperation(value);
            } else {
                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(parseInt(newValue));
                this.setLastNumberToDisplay()
            }
            

        }


        console.log(this.operation)
    }

    execBtn(value) {
        switch (value) {
            case 'ac':
                clearAll();
                break;
            case 'ce':
                clearEntry();
                break;
            case 'soma':
                this.addOperation('+');
                break;
            case 'subtracao':
                this.addOperation('-');
                break;
            case 'divisao':
                this.addOperation('/');
                break;
            case 'multiplicacao':
                this.addOperation('*');
                break;
            case 'porcento':
                this.addOperation('%');
                break;
            case 'igual':

                break;
            case 'ponto':
                this.addOperation('.');
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                setError();
                break;
        }
    }




    initButtonsEvent() {
        // for (var i = 0; i <= 10; i++){
        //     console.log(i);
        // }

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        // const buttons = document.getElementById("buttons")
        // for (const g of buttons.children){
        //     console.log(g.className.baseVal)
        //     addEventListenerAll(g, "click drag" , e =>{
        //         console.log(g.className.baseVal.replace("btn-", ""));
        //     });
        //     addEventListenerAll(g, "mouseover mouseup mousedown", e => {
        //         g.style.cursor = "pointer";
        //     })
        // }
        // console.log(buttons[0]);
        buttons.forEach((btn, index) => {
            addEventListenerAll(btn, "click drag", e => {
                let textBtn = btn.className.baseVal.replace("btn-", "");

                this.execBtn(textBtn);
            });

            addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            });
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


}
