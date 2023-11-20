let frutas = []
let laticinios = []
let congelados = []
let doces =[]
let c = 0
let lista = "Sim"
lista = prompt('Você deseja adicionar comida na sua lista de compra ?')
  while(lista =="Sim"){  
    for(c=0;c<10;c++){
      let comida = prompt('Qual o alimento deseja adicionar?')
      let box = prompt ('Qual categoria ele se encaixa?(frutas, laticinios, congelados ou doces)')
        if(box==='frutas'){
          frutas.push(comida)          
        }
        if(box==='laticinios'){
          laticinios.push(comida)
        }
        if(box==='congelados'){
          congelados.push(comida)
        }
        if(box==='doces'){
          doces.push(comida)
        }  
        lista = prompt('Deseja adicionar mais?')
        if(lista==='Não'){
          break;
        }
      }
    }
  
alert('Lista de compras: \n Frutas: '+[frutas]+'\n Laticínios: '+[laticinios]+'\n Congelados: '+[congelados]+'\n Doces: '+[doces])


