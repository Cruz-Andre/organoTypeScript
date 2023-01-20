export interface IColaborador {
  nome: string
  cargo: string
  imagem: string
  time?: string // para escolher as opções na Lista Suspensa de times a que pertence.
}

//Então teremos que ir à interface IColaborador em "src > compartilhado > interfaces > IColaborador.ts" e adicionar um time: Mas deveremos tomar cuidado, pois se no outro momento não tínhamos o time, isso quer dizer que pode ser opcional com a adição de uma interrogação, além de ser uma string.