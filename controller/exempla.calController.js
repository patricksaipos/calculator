// display data e hora

class CalcController {

    constructor(){
    //    Declarando os meus atributos, que seriam como váriaveis
        this.locale = "pt-BR"
        this.calc = document.querySelector("#display");
        this.dateEl = document.querySelector("#data");
        this.timeEl = document.querySelector("#hora");
        this.currentDate;
        this.iniciation();
    }

    iniciation(){    
        setInterval(() =>{
            this.displayTime = this.current.toLocaleTimeString(this.locale)
            this.displayDate = this.current.toLocaleDateString(this.locale, {
                day: "2-digit",
                month: "short",
                year: "numeric"
            });
        },1000)
    }

    // displayCalc e vou fazer o get e setter
    get displayCalc(){
        return this.calc.innerHTML;
    }

    set displayCalc(value){
        return this.calc.innerHTML;
    }

    // get e set uma função/metodo para buscar as horas e atualiza-las
    get displayTime(){
        return this.timeEl.innerHTML;
    }

    set displayTime(value){
        return this.timeEl.innerHTML = value;
    }

    // dataEl vou fazer o get e set da data, get e set é um metodo como se fosse uma função
    get displayDate(){
        return this.dateEl.innerHTML;
    }

    set displayDate(value){
        return this.dateEl.innerHTML = value;
    }

    // Aqui eu faço o get e set para puxar as datas e horas ( metodo )
    get current(){
        return new Date();
    }

    set current(value){
        return this.currentCalc = value;
    }

}

