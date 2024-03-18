class FUNCIONARIO {
    public nome: string;
    public email: string;
    public data_nascimento: Date;
    public numero: string;
    protected cpf: string;
    protected endereco: string[];
    protected genero?: string;
    protected matricula: string;
    protected cargo: string;
    constructor(nome: string, email: string, data_nascimento: Date,  numero: string, cpf: string, endereco: string[], matricula: string, cargo: string,genero?: string) {
        this.nome = nome
        this.data_nascimento = data_nascimento
        this.email = email
        this.numero = numero
        this.cpf = cpf
        this.endereco = endereco
        this.matricula = matricula
        this.cargo = cargo
        this.genero = genero
    }
    mostrarDados() {
        console.log('----------dados de funcionário-------------------')
        console.log(`nome----------------: ${this.nome}`)
        console.log(`email---------------: ${this.email}`)
        console.log(`data de nascimento--: ${this.data_nascimento}`)
        console.log(`numero--------------: ${this.numero}`)
        console.log(`cpf-----------------: ${this.cpf}`)
        console.log(`endereco------------: ${this.endereco}`)
        console.log(`genero--------------: ${this.genero}`)
        console.log(`matricula-----------: ${this.matricula}`)
        console.log(`cargo---------------: ${this.cargo}`)
    }
}



class MEMBRO extends FUNCIONARIO{
    protected equipe: string;
    protected tarefas: string[];
    protected projetos: string[];
    constructor(equipe: string, tarefas: string[], projetos: string[], nome: string, email: string, data_nascimento: Date,  numero: string, cpf: string, endereco: string[], matricula: string, cargo: string,genero?: string) {
        super(nome, email, data_nascimento, numero, cpf, endereco, matricula, cargo, genero)
        this.equipe = equipe
        this.tarefas = tarefas
        this.projetos = projetos
    }
    mostrarDados() {
        console.log('----------dados de membro-------------------')
        console.log(`equipe----------------: ${this.equipe}`)
        console.log(`tarefas----------------: ${this.tarefas}`)
        console.log(`projetos----------------: ${this.projetos}`)
        super.mostrarDados()
    }
}



class LIDER extends FUNCIONARIO{
    public equipe: string;
    constructor(equipe: string, nome: string, email: string, data_nascimento: Date,  numero: string, cpf: string, endereco: string[], matricula: string, cargo: string, genero?: string) {
        super(nome, email, data_nascimento, numero, cpf, endereco, matricula, cargo, genero)
        this.equipe = equipe
    }
    mostrarDados() {
        console.log('----------dados de líder-------------------')
        console.log(`equipe----------------: ${this.equipe}`)
        super.mostrarDados()
    }
}



class TAREFA{
    public nome_tarefa: string;
    public descricao: string; 
    protected responsavel: MEMBRO;
    protected prazo: Date;
    protected status: string;
    constructor(nome_tarefa: string, descricao: string, responsavel: MEMBRO,  prazo: Date, status: string){
    this.nome_tarefa = nome_tarefa
    this.descricao = descricao
    this.responsavel = responsavel
    this.prazo = prazo
    this.status = status
    }
    mostrarDados() {
        console.log('----------dados de tarefa-------------------')
        console.log(`nome de tarefa--------: ${this.nome_tarefa}`)
        console.log(`descricao-------------: ${this.descricao}`)
        console.log(`responsavel-----------: ${membro1.nome}`)
        console.log(`prazo-----------------: ${this.prazo}`)
        console.log(`status----------------: ${this.status}`)
    }
}



class PROJETO {
    public nome_projeto: string;
    public descricao: string;
    protected data_inicio: Date;
    protected data_término_prevista: Date;
    public statusbar: string;
    protected equipe_responsavel: EQUIPE;
    protected tarefas: TAREFA[];
    constructor( nome_projeto: string, descricao: string, data_inicio: Date, data_término_prevista: Date, statusbar: string, equipe_responsavel: EQUIPE, tarefas: TAREFA[]){
        this.nome_projeto = nome_projeto
        this.descricao = descricao
        this.data_inicio = data_inicio
        this.data_término_prevista = data_término_prevista
        this.statusbar = statusbar
        this.equipe_responsavel = equipe_responsavel
        this.tarefas = tarefas
    }
    mostrarDados() {
        console.log('----------dados do projeto-------------------')
        console.log(`nome do projeto--------: ${this.nome_projeto}`)
        console.log(`descricao--------------: ${this.descricao}`)
        console.log(`data de inicio---------: ${this.data_inicio}`)
        console.log(`prazo------------------: ${this.data_término_prevista}`)
        console.log(`status-----------------: ${this.statusbar}`)
        console.log(`responsavel------------: ${equipe1.nome}`)
        console.log(`tarefas----------------: ${tarefa1.nome_tarefa}`)
    }
}





class EQUIPE{
    public nome: string;
    protected lider: LIDER;
    protected membros: MEMBRO[];
    protected projetos: string[];
    constructor( nome : string, lider: LIDER, membros: MEMBRO[], projetos: string[]){
        this.nome = nome
        this.lider = lider
        this.membros = membros
        this.projetos = projetos
    }
    mostrarDados() {
        console.log('----------dados de equipe-------------------')
        console.log(`lider-----------------: ${lider1.nome}`)
        console.log(`membros---------------: ${membro1.nome}`)
        console.log(`equipe----------------: ${this.projetos}`)
    }
}



const membro1 = new MEMBRO("equipe 1" , ['ajustar','limpar'], ['projeto A','projeto B'],"Alam","meu@email.com",new Date('2000-01-03'),"(84)912345678","123.456.789-00",['cidade tal','bairro ele','rua nome','numero 00'],'informatica','algum','M');
membro1.mostrarDados()

const lider1 = new LIDER('equipe 1','agosto','alah@mail.com',new Date('1990-12-25'),'(88)943216587','789.456.123-00',['cidade qual','bairro fall','rua araque','numero 88'],'informatica','algum 2','M');
lider1.mostrarDados()

const equipe1 = new EQUIPE('equipe 1',lider1, [membro1] ,['projeto 1','projeto 2', 'projeto 3']);
equipe1.mostrarDados()

const tarefa1 = new TAREFA('limpar dados','limpar excesso de dados do sistema', membro1 , new Date('2023-12-25'),'em andamento')
tarefa1.mostrarDados()

const projeto1 = new PROJETO('aplicativo A','criar um app para varredura de sistema',new Date('2023-01-25'),new Date('2023-06-13'),'em andamento', equipe1, [tarefa1])
projeto1.mostrarDados()










