






function carregar() {
    var msg = window.document.getElementById("msg")
    var img= document.getElementById("imagem")
    var img2 = document.getElementById("calen")
    var txt = document.getElementById("txt")
    var data = new Date()
    var hora = data.getHours()
    var data2 = new Date()
    var min = data2.getMinutes()
    var data3 = new Date()
    var sec = data3.getSeconds()
    var data4 = new Date()
    var dia = data4.getDate()
    var data5 = new Date()
    var mes = data5.getMonth()
    var data6 = new Date()
    var ano = data6.getFullYear()
    
    
          
        if (hora <= 5 || hora >= 19) {
            //esta escuro
            img.src = "noite.png"
            //document.body.style.background = "#051834"
            msg.innerHTML = `agora é ${hora} horas, ${min} minutos e ${sec} segundos.`
    }   else if (hora >= 6 && hora < 9) {
            //bom dia
            img.src = "manha.png"
            document.body.style.background = "#c0a2da"
            msg.innerHTML = `agora é ${hora} horas, ${min} minutos e ${sec} segundos.`
    }   else if (hora >= 9 && hora < 12) {
            //a manha esta acabando
            img.src = "finalmanha.png"
            document.body.style.background = "#faf3ae"
            msg.innerHTML = `agora é ${hora} horas, ${min} minutos e ${sec} segundos.`
    }   else if (hora >= 12 && hora <= 16) {
            //boa tarde
            img.src = "Imagem/tarde.png"
            document.body.style.background = "#fda791"
            msg.innerHTML = `agora é ${hora} horas, ${min} minutos e ${sec} segundos.`
    }   else {
            //esta escurecendo
            img.src = "Imagem/finaltarde.png"
            document.body.style.background = "#cc5861"
            msg.innerHTML = `agora é ${hora} horas, ${min} minutos e ${sec} segundos.`

    }

switch (mes) {
            case 0:
                mes = "Janeiro"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "Imagem/calendario1.png"
                switch (dia) {
                    case 1:
                        txt.innerHTML = `O texto do dia é: Vão e façam discípulos de pessoas de todas as nações. — Mat. 28:19.`
                        break
                    case 2: 
                        txt.innerHTML = "O texto do dia é: O Diabo . . . é um mentiroso e o pai da mentira. — João 8:44."
                        break
                    case 3: 
                        txt.innerHTML = "O texto do dia é: “Quem chegou a conhecer a mente de Jeová, para poder instruí-lo”? Mas nós temos a mente de Cristo. — 1 Cor. 2:16."
                        break
                    case 4: 
                        txt.innerHTML = "O texto do dia é: As pessoas más e os impostores se tornarão cada vez piores. — 2 Tim. 3:13."
                        break
                    case 5: 
                        txt.innerHTML = "O texto do dia é: Certifiquem de quais são as coisas mais importantes. — Fil. 1:10."
                        break
                    case 6: 
                        txt.innerHTML = "O texto do dia é: Meu alimento é fazer a vontade daquele que me enviou e terminar a sua obra. — João 4:34."
                        break
                    case 7: 
                        txt.innerHTML = "O texto do dia é: Que as palavras da minha boca e as reflexões do meu coração sejam agradáveis a ti, ó Jeová. — Sal. 19:14."
                        break
                    case 8: 
                        txt.innerHTML = "O texto do dia é: É bonito da sua parte deixar passar a ofensa. — Pro. 19:11."
                        break
                    case 9: 
                        txt.innerHTML = "O texto do dia é: [Obedeça] a Deus como governante em vez de a homens. — Atos 5:29."
                        break
                    case 10: 
                        txt.innerHTML = "O texto do dia é: Eu me tornei todas as coisas para pessoas de todo tipo, para de todos os modos possíveis salvar alguns. — 1 Cor. 9:22"
                        break
                    case 11: 
                        txt.innerHTML = "O texto do dia é: Sejam firmes, inabaláveis, e tenham sempre bastante para fazer na obra do Senhor, sabendo que o seu trabalho árduo no Senhor não é em vão. — 1 Cor. 15:58."
                        break
                    case 12: 
                        txt.innerHTML = "O texto do dia é: Deixem brilhar sua luz perante os homens, para que vejam suas boas obras. — Mat. 5:16."
                        break
                    case 13: 
                        txt.innerHTML = "O texto do dia é: A lâmpada do corpo é o olho. Então, se o seu olho for focado, todo o seu corpo será luminoso. — Mat. 6:22."
                        break
                    case 14: 
                        txt.innerHTML = "O texto do dia é: Eu resido no lugar alto e santo, mas resido também com os esmagados e humildes de espírito. — Isa. 57:15."
                        break
                    case 15: 
                        txt.innerHTML = "O texto do dia é: As ordens de Jeová são justas, fazem o coração se alegrar; . . . há grande recompensa em guardá-las. — Sal. 19:8, 11."
                        break
                    case 16: 
                        txt.innerHTML = "O texto do dia é: As ordens de Jeová são justas, fazem o coração se alegrar; . . . há grande recompensa em guardá-las. — Sal. 19:8, 11."
                        break
                    case 17: 
                        txt.innerHTML = "O texto do dia é: Amem a Jeová, todos os que lhe são leais! — Sal. 31:23."
                        break
                    case 18: 
                        txt.innerHTML = "O texto do dia é: [Jeová] é um Deus que exige devoção exclusiva. — Êxo. 34:14."
                        break
                    case 19: 
                        txt.innerHTML = "O texto do dia é: Os homens falaram da parte de Deus conforme eram movidos por espírito santo. — 2 Ped. 1:21."
                        break
                    case 20: 
                        txt.innerHTML = "O texto do dia é: Dou-lhes a minha paz. — João 14:27."
                        break
                    case 21: 
                        txt.innerHTML = "O texto do dia é: Não apaguem o fogo do espírito. — 1 Tes. 5:19."
                        break
                    case 22: 
                        txt.innerHTML = "O texto do dia é: Quem exercer fé em mim . . . fará obras maiores do que essas. — João 14:12."
                        break
                    case 23: 
                        txt.innerHTML = "O texto do dia é: Cada um de vocês ame a sua esposa como a si mesmo; por outro lado, a esposa deve ter profundo respeito pelo marido. — Efé. 5:33."
                        break
                    case 24: 
                        txt.innerHTML = "O texto do dia é: O verdadeiro amigo . . . se torna um irmão em tempos de aflição. — Pro. 17:17."
                        break
                    case 25: 
                        txt.innerHTML = "O texto do dia é: Todos ficaram cheios de espírito santo e começaram a falar em línguas. — Atos 2:4."
                        break
                    case 26: 
                        txt.innerHTML = "O texto do dia é: Eu tornei o teu nome conhecido a eles. — João 17:26."
                        break
                    case 27: 
                        txt.innerHTML = "O texto do dia é: Faça todas as coisas para a glória de Deus. Não se torne motivo de tropeço. — 1 Cor. 10:31, 32."
                        break
                    case 28: 
                        txt.innerHTML = "O texto do dia é: Eu sou o menos importante dos apóstolos, e não sou digno de ser chamado apóstolo. — 1 Cor. 15:9."
                        break
                    case 29: 
                        txt.innerHTML = "O texto do dia é: Nós amamos porque ele nos amou primeiro. — 1 João 4:19."
                        break
                    case 30: 
                        txt.innerHTML = "O texto do dia é: Realize plenamente o seu ministério. — 2 Tim. 4:5."
                        break
                    case 31: 
                        txt.innerHTML = `O texto do dia ${dia} é: Nele não há verdade. — João 8:44.`
                        break
                    default :
                    alert("[ERRO 001] Tente novamente!")
    } 
                break
            case 1:
                mes = "fevereiro"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "Imagem/calendario2.png"
                switch (dia) {
                    case 1:
                        txt.innerHTML = `O texto do dia é: `
                        break
                    case 2: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 3: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 4: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 5: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 6: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 7: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 8: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 9: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 10: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 11: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 12: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 13: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 14: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 15: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 16: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 17: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 18: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 19: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 20: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 21: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 22: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 23: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 24: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 25: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 26: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 27: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 28: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                
                    default :
                    alert("[ERRO 001] Tente novamente!")
    } 
                break
            case 2:
                mes = "março"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "Imagem/Imagem/calendario3.png"
                switch (dia) {
                    case 1:
                        txt.innerHTML = `O texto do dia é: `
                        break
                    case 2: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 3: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 4: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 5: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 6: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 7: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 8: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 9: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 10: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 11: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 12: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 13: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 14: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 15: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 16: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 17: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 18: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 19: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 20: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 21: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 22: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 23: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 24: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 25: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 26: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 27: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 28: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 29: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 30: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 31: 
                        txt.innerHTML = `O texto do dia ${dia} é: `
                        break
                    default :
                    alert("[ERRO 001] Tente novamente!")
    } 
                break
            case 3:
                mes = "abril"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "Imagem/calendario4.png"
                switch (dia) {
                    case 1:
                        txt.innerHTML = `O texto do dia é: `
                        break
                    case 2: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 3: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 4: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 5: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 6: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 7: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 8: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 9: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 10: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 11: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 12: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 13: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 14: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 15: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 16: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 17: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 18: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 19: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 20: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 21: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 22: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 23: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 24: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 25: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 26: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 27: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 28: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 29: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 30: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 31: 
                        txt.innerHTML = `O texto do dia ${dia} é: `
                        break
                    default :
                    alert("[ERRO 001] Tente novamente!")
    } 
                break
            case 4:
                mes = "maio"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "Imagem/calendario5.png"
                switch (dia) {
                    case 1:
                        txt.innerHTML = `O texto do dia é: `
                        break
                    case 2: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 3: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 4: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 5: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 6: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 7: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 8: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 9: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 10: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 11: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 12: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 13: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 14: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 15: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 16: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 17: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 18: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 19: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 20: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 21: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 22: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 23: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 24: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 25: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 26: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 27: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 28: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 29: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 30: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 31: 
                        txt.innerHTML = `O texto do dia ${dia} é: `
                        break
                    default :
                    alert("[ERRO 001] Tente novamente!")
    } 
                break
            case 5:
                mes = "junho"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "Imagem/calendario6.png"
                switch (dia) {
                    case 1:
                        txt.innerHTML = `O texto do dia é: `
                        break
                    case 2: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 3: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 4: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 5: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 6: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 7: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 8: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 9: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 10: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 11: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 12: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 13: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 14: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 15: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 16: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 17: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 18: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 19: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 20: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 21: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 22: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 23: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 24: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 25: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 26: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 27: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 28: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 29: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 30: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 31: 
                        txt.innerHTML = `O texto do dia ${dia} é: `
                        break
                    default :
                    alert("[ERRO 001] Tente novamente!")
    } 
                break
            case 6:
                mes = "julho"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "Imagem/calendario7.png"
                switch (dia) {
                    case 1:
                        txt.innerHTML = `O texto do dia é: `
                        break
                    case 2: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 3: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 4: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 5: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 6: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 7: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 8: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 9: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 10: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 11: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 12: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 13: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 14: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 15: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 16: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 17: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 18: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 19: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 20: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 21: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 22: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 23: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 24: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 25: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 26: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 27: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 28: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 29: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 30: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 31: 
                        txt.innerHTML = `O texto do dia ${dia} é: `
                        break
                    default :
                    alert("[ERRO 001] Tente novamente!")
    } 
                break
            case 7:
                mes = "agosto"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "Imagem/calendario8.png"
                switch (dia) {
                    case 1:
                        txt.innerHTML = `O texto do dia é: `
                        break
                    case 2: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 3: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 4: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 5: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 6: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 7: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 8: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 9: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 10: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 11: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 12: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 13: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 14: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 15: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 16: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 17: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 18: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 19: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 20: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 21: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 22: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 23: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 24: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 25: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 26: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 27: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 28: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 29: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 30: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 31: 
                        txt.innerHTML = `O texto do dia ${dia} é: `
                        break
                    default :
                    alert("[ERRO 001] Tente novamente!")
    } 
                break
            case 8:
                mes = "setembro"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "Imagem/calendario9.png"
                switch (dia) {
                    case 1:
                        txt.innerHTML = `O texto do dia é: `
                        break
                    case 2: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 3: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 4: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 5: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 6: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 7: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 8: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 9: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 10: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 11: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 12: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 13: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 14: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 15: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 16: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 17: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 18: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 19: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 20: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 21: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 22: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 23: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 24: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 25: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 26: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 27: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 28: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 29: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 30: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 31: 
                        txt.innerHTML = `O texto do dia ${dia} é: `
                        break
                    default :
                    alert("[ERRO 001] Tente novamente!")
    } 
                break
            case 9:
                mes = "outubro"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "Imagem/calendario10.png"
                switch (dia) {
                    case 1:
                        txt.innerHTML = `O texto do dia é: `
                        break
                    case 2: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 3: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 4: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 5: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 6: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 7: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 8: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 9: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 10: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 11: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 12: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 13: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 14: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 15: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 16: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 17: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 18: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 19: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 20: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 21: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 22: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 23: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 24: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 25: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 26: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 27: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 28: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 29: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 30: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 31: 
                        txt.innerHTML = `O texto do dia ${dia} é: `
                        break
                    default :
                    alert("[ERRO 001] Tente novamente!")
    } 
                break
            case 10:
                mes = "novembro"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "Imagem/calendario11.png"
                switch (dia) {
                    case 1:
                        txt.innerHTML = `O texto do dia é: `
                        break
                    case 2: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 3: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 4: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 5: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 6: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 7: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 8: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 9: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 10: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 11: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 12: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 13: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 14: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 15: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 16: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 17: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 18: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 19: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 20: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 21: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 22: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 23: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 24: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 25: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 26: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 27: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 28: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 29: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 30: 
                        txt.innerHTML = "O texto do dia é:"
                        break
                    case 31: 
                        txt.innerHTML = `O texto do dia ${dia} é: `
                        break
                    default :
                    alert("[ERRO 001] Tente novamente!")
    } 
                break
            case 11:
                mes = "dezembro" 
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                img2.src = "Imagem/calendario12.png"
                     switch (dia) {
                            case 1:
                                txt.innerHTML = `O texto do dia é: `
                                break
                            case 2: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 3: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 4: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 5: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 6: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 7: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 8: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 9: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 10: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 11: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 12: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 13: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 14: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 15: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 16: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 17: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 18: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 19: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 20: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 21: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 22: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 23: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 24: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 25: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 26: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 27: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 28: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 29: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 30: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 31: 
                                txt.innerHTML = `O texto do dia ${dia} é: `
                                break
                            default :
                            alert("[ERRO 001] Tente novamente!")
            }  
                break
            default:
                alert("[ERRO 000] Ação invalida, verefique e tente novamente!")
        }
}
/* switch (dia) {
                            case 1:
                                txt.innerHTML = `O texto do dia é: Vão e façam discípulos de pessoas de todas as nações. — Mat. 28:19.`
                                break
                            case 2: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 3: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 4: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 5: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 6: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 7: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 8: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 9: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 10: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 11: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 12: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 13: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 14: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 15: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 16: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 17: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 18: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 19: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 20: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 21: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 22: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 23: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 24: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 25: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 26: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 27: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 28: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 29: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 30: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            case 31: 
                                txt.innerHTML = "O texto do dia é:"
                                break
                            default :
                            alert("[ERRO 001] Tente novamente!")
                    }*/