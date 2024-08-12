const prompt = require('prompt-sync')()




let contatos = require('./contatos')
const atualizar = require('./atualizar')
const adicionar = require('./adicionar')
const remover = require('./remover')
const listar = require('./listar')




function menu(){
    console.log('Menu:\n1. Adicionar novo contato\n2.listar contatos\n3.atualizar contato\n4.remover\n5. sair')
    let opc = prompt('digite a funcao requisitada: ')
    switch(opc){
        case '1':
            let nome = prompt('nome: ')
            let email = prompt('email: ')
            let telefone 
            let telefones = []
            while((telefone = prompt('digite o numero de telefone(deixe em branco para sair)'))){
                telefones.push(telefone)
            }
            adicionar({nome,email,telefones})
            menu()
            break
        case '2':
            if(contatos.length == 0){
                console.log('nenhum contato adicionado ainda')
            }else{
                listar()
            }
            menu()
            break
        case '3':
            if(contatos.length == 0){
                console.log('nenhum contato adicionado ainda')
            }else{
                listar()
                let opcao = prompt('digite o id do contato que voce quer editar: ')
                const id = contatos.findIndex(contato => contato.id == opcao)
                if(id == -1){
                    console.log('nao ha nenhum contato com esse id')
                }else{
                    let certeza = prompt('voce tem certeza que deseja editar esse contato?(sim/nao)')
                    switch(certeza){
                        case 'sim':
                            let novoNome = prompt('Nome: ')
                              let novoEmail = prompt('email: ')
                             let novosTelefones = []
                             let novoTelefone
                             while((novoTelefone = prompt('Telefone(s)(deixe em braco se quiser sair): '))){
                             novosTelefones.push(novoTelefone)
                                }
                             atualizar(id,{nome:novoNome,email:novoEmail,telefones:novosTelefones})
                             break
                        case 'nao':
                            console.log('retornando ao menu')
                            break
                        default:
                            break
                            
                    }
                    
                }
            }
            menu()
            break
        case '4':
            if(contatos.length == 0){
                console.log('nao ha nenhum contato adicionado ainda')
            }else{
                listar()
                let opcao = prompt('digite o id do contato que voce quer remover: ')
                const id = contatos.findIndex(contato => contato.id == opcao)
                if(id == -1){
                    console.log('id nao encontrado')
                    
                }else{
                    let certeza = prompt('voce tem certeza que deseja excluir este contato?(sim/nao) ')
                    switch(certeza){
                        case 'sim':
                            remover(id)
                            console.log('removido com sucesso')
                            break
                            case 'nao':
                                console.log('voltando ao menu')
                                break
                            default:
                                break    
                    }
                }
            }
            menu()
            break
        case '5':
            break
        default:
            console.log('digite apenas numeros')
            menu()
            break
    }
}
menu()