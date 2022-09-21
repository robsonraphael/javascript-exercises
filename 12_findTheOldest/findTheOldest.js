const findTheOldest = function(pessoas) {
    let idadeMaior = 0;
    let pessoaVelha = {};
    pessoas.map(element => {
        let name = element.name
        let idade = element.yearOfDeath - element.yearOfBirth

        if (idade > idadeMaior){
            idadeMaior = idade
            pessoaVelha.name = name
            pessoaVelha.idade = idade
        }
    })
   return pessoaVelha
};

// Do not edit below this line
module.exports = findTheOldest;
