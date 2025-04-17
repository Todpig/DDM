interface Aluno {
  nome: string;
  matricula: number;
  ativo: boolean;
}

const nome: string = "Jonh Doe";

const idade: number = 20;
console.log(`Idade: ${idade} anos`);

function saudacao(nome: string): string {
  return `Olá, ${nome}!`;
}

function dobro(numero: number): number {
  return numero * 2;
}

const notas: number[] = [8, 7, 9, 10];
const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
console.log(`Média: ${media}`);

const cores: string[] = ["vermelho", "azul", "verde"];
for (const cor of cores) {
  console.log(cor);
}

const livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  paginas: 1200,
};
console.log(
  `O livro "${livro.titulo}" foi escrito por ${livro.autor} e tem ${livro.paginas} páginas.`
);

const aluno: Aluno = {
  nome: "João",
  matricula: 12345,
  ativo: true,
};

function ehPar(numero: number): boolean {
  return numero % 2 === 0;
}

function calcularAreaRetangulo(largura: number, altura: number): number {
  return largura * altura;
}

enum DiaSemana {
  SEGUNDA,
  TERÇA,
  QUARTA,
  QUINTA,
  SEXTA,
}
const dia: DiaSemana = DiaSemana.QUARTA;
console.log(`Dia da semana: ${DiaSemana[dia]}`);

function identificarTipo(valor: string | number): void {
  if (typeof valor === "string") {
    console.log(`O valor é uma string: ${valor}`);
  } else {
    console.log(`O valor é um número: ${valor}`);
  }
}

function filtrarProdutosDisponiveis(
  produtos: { nome: string; emEstoque: boolean }[]
): { nome: string; emEstoque: boolean }[] {
  return produtos.filter((produto) => produto.emEstoque);
}

function descreverPessoa(pessoa: {
  nome: string;
  idade: number;
  profissao: string;
}): string {
  return `${pessoa.nome} tem ${pessoa.idade} anos e é ${pessoa.profissao}.`;
}

const alunos: Aluno[] = [
  { nome: "Ana", matricula: 111, ativo: true },
  { nome: "Carlos", matricula: 222, ativo: false },
  { nome: "Mariana", matricula: 333, ativo: true },
];
for (const aluno of alunos) {
  if (aluno.ativo) {
    console.log(aluno.nome);
  }
}
