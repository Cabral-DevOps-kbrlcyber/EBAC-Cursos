function Pessoa(nome) {
    this.nome = nome;
}

function Colaborador(nome, cargo, salario) {
    this.cargo = cargo;

    let _salario = salario;

    // getters e setters
    this.getSalario = function() {
        return `O salário do ${cargo} ${nome} é ${_salario}`;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number')
        _salario = valor;
    }

    this.remuneracao = function() {
        const salarioFixo = _salario;
        _salario = salarioFixo;
    }
    
    Pessoa.call(this, nome);
}

function Gerente(nome) {
    Colaborador.call(this, nome, 'Gerente', 15000);

    this.remuneracao = function() {
        const salarioFixo = this.getSalario();
        this.setSalario(salarioFixo);
    }
}

function Designer(nome) {
    Colaborador.call(this, nome, 'Designer', 4000);

    this.remuneracao = function() {
        const salarioFixo = this.getSalario();
        this.setSalario(salarioFixo);
    }
}

function Desenvolvedor(nome) {
    Colaborador.call(this, nome, 'Desenvolvedor', 8000);

    this.remuneracao = function() {
        const salarioFixo = this.getSalario();
        this.setSalario(salarioFixo);
    }
}

const pessoa = new Colaborador("nome", "cargo", "salário");
const gerente = new Gerente('Paulo');
const designer = new Designer('Pedro');
const desenvolvedor = new Desenvolvedor('Cabral');

gerente.remuneracao();
console.log(gerente.getSalario())

designer.remuneracao();
console.log(designer.getSalario())

desenvolvedor.remuneracao();
console.log(desenvolvedor.getSalario())
