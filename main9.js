function init(name, password){
    this.Name = name;
    let _Password = password;





    this.get = function(){
        return _Password
    }
       

    this.set = function(newPassword){
        if(newPassword.lenght > 8){
            _Password = newPassword;
        }
        else{
            console.log('Error')
        }
    }





    this.print = function () {
        console.log(this.Name,_Password)
    }
}

let a = new init('TABS', 'VandalIsIum')
a.print()



function initi(number){
    let _Number = number;

this.gete = function(){
    return _Number
}

this.sete = function(newNumber){
    if(newNumber % 2 == 0){
        _Number = newNumber
    }
    else{
        console.log('Не парне число')
    }
}

this.printe = function(){
    console.log(_Number)
   }

}

let s = new initi(14)
s.printe()

