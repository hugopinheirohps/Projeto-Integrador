const inputFile = document.querySelector('#perfil');

        const pictureImg = document.querySelector('.picture-image')

        const pictureImgText = "imagem do perfil"

        pictureImg.innerHTML = pictureImgText

        inputFile.addEventListener('change', (event) => {
            const inputTarget = event.target

            const file = inputTarget.file[0]

            if (file) {
                pictureImg.innerHTML = "imagem selecionada"
            } else {
                pictureImg.innerHTML = pictureImgText
            }
        })

<<<<<<< HEAD
        /*Validando o login SCRIPT - Matheus
        const logar = document.getElementById('logar');
=======
        //Validando o login SCRIPT - Matheus
        // const logar = document.getElementById('logar');
>>>>>>> 9c6a44195471bd0067bc7f07183e254c8e04fcca

        // logar.addEventListener('click', (event) => {
        //     event.preventDefault();

        //     const email = document.getElementById('email');
        //     const password = document.getElementById('password');

        //     if (email.value == '') {
        //         email.classList.add('errorInput');
        //         alert('Campo de e-mail está vazio ou invalido!');
        //     } 

        //     if (password.value == '') {
        //         password.classList.add('errorInput');
        //         alert('Campo de senha está vazio ou invalido!');
        //     } 

        //     if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") -
        //             email.value.indexOf("@") == 1)) {
        //         email.classList.add('errorInput');
        //     }
            
        //     if (password.value.length < 7) {
        //         password.classList.add('errorInput');
                
        //     }
        // });


        //Validando o Formulário - Matheus

        // const cadastro = document.getElementById('cadastro');

        // cadastro.addEventListener('click', (event)=>{
        //     event.preventDefault();

        //     const nomeCompleto = document.getElementById('nome');
        //     const Email = document.getElementById('email');
        //    const endereco = document.getElementById('endereco');
        //     const cpf = document.getElementById('cpf');
        //     const contato = document.getElementById('telefone');
        //     const senha = document.getElementById('password');

        //     if(nomeCompleto.value == ''){
        //         nomeCompleto.classList.add('errorInput');
        //         alert('O campo nome não está preenchido corretamente');
        //     }
        //     if(Email.value == ''){
        //         Email.classList.add('errorInput');
        //         alert('O campo email não está preenchido corretamente');
        //     }
        //     if(endereco.value == ''){
        //         endereco.classList.add('errorInput');
        //         alert('O campo endereco não está preenchido corretamente');
        //     }
        //     if(cpf.value == ''){
        //         cpf.classList.add('errorInput');
        //         alert('O campo cpf não está preenchido corretamente');
        //     }
        //     if(contato.value == ''){
        //         contato.classList.add('errorInput');
        //         alert('O campo telefone não está preenchido corretamente');
        //     }
        //     if(isNaN(cpf.value)){
        //         cpf.classList.remove('errorInput');
        //         alert("Digite um numero de cpf valido")
        //     }

            
        //     if(isNaN(contato.value)){
        //         contato.classList.remove('errorInput');
        //         alert("Digite um numero de telefone valido")
        //     }

        //     if(senha.value == ''){
        //         senha.classList.add('errorInput');
        //         alert("O campo senha não está preenchido corretamente")
                
        //     }

<<<<<<< HEAD
        });*/
=======
        // });
>>>>>>> 9c6a44195471bd0067bc7f07183e254c8e04fcca
