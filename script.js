class Funcionario{
    constructor(nome, idade, salario){
        this.nome = nome;
        this.idade = idade;
        this.salario = salario
    }
    getNome(){
        return this.nome;
    }
    getIdade(){
        return this.idade
    }
    getSalario(){
        return this.salario
    }
    setNome(nome){
        this.nome = nome
    }
    setIdade(idade){
        this.idade = idade
    }
    setSalario(salario){
        this.salario=salario
    }
}

class Gerente extends Funcionario{
    constructor(nome,idade,salario,departamento){
        super(nome,idade,salario);
        this.departamento = departamento;
    }
    getDepartamento(){
        return this.departamento;
    }
    setDepartamento(departamento){
        this.departamento = departamento;
    }
}

class Programador extends Funcionario{
    constructor(nome,idade,salario,linguagem){
        super(nome,idade,salario);
        this.linguagem = linguagem;
    }
    getLinguagem(){
        return this.linguagem;
    }
    setLinguagem(linguagem){
        this.linguagem = linguagem;
    }
}

const gerente = new Gerente('Delson', 55, 5000, "Desenvolvimento")
console.log('Informações do gerente:');
console.log('Nome: ', gerente.getNome());
console.log('Idade: ', gerente.getIdade());
console.log('Salario: ', gerente.getSalario());
console.log('Departamento: ', gerente.getDepartamento());
console.log('');

const programador = new Programador('Andrea', 52, 15000, "Full Stack")
console.log('Informações do programador:');
console.log('Nome: ', programador.getNome());
console.log('Idade: ', programador.getIdade());
console.log('Salario: ', programador.getSalario());
console.log('Departamento: ', programador.getLinguagem());





