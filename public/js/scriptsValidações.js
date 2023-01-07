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

        //Validando o login SCRIPT - Matheus
        const logar = document.getElementById('logar');

        logar.addEventListener('click', (event) => {
            event.preventDefault();

            const email = document.getElementById('email');
            const password = document.getElementById('password');

            if (email.value == '') {
                email.classList.add('errorInput');
                alert('Campo de e-mail está vazio ou invalido!');
            } 

            if (password.value == '') {
                password.classList.add('errorInput');
                alert('Campo de senha está vazio ou invalido!');
            } 

            if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") -
                    email.value.indexOf("@") == 1)) {
                email.classList.add('errorInput');
            }
            
            if (password.value.length < 7) {
                password.classList.add('errorInput');
                
            }
        });


        //Validando o Formulário - Matheus

        const cadastro = document.getElementById('cadastro');

        cadastro.addEventListener('click', (event)=>{
            event.preventDefault();

            const nomeCompleto = document.getElementById('nome');
            const Email = document.getElementById('email');
            const endereco = document.getElementById('enderco');
            const cpf = document.getElementById('cpf');
            const contato = document.getElementById('telefone');
            const senha = document.getElementById('password');

            if(nomeCompleto == ''){
                nomeCompleto.classList.add('errorInput');
                alert('O campo nome não está preenchido corretamente');
            }
            if(Email == ''){
                Email.classList.add('errorInput');
                alert('O campo nome não está preenchido corretamente');
            }
            if(endereco == ''){
                endereco.classList.add('errorInput');
                alert('O campo nome não está preenchido corretamente');
            }
            if(cpf == ''){
                cpf.classList.add('errorInput');
                alert('O campo nome não está preenchido corretamente');
            }
            if(!isNaN(cpf.value)== true && email.value.length <= 11){
                cpf.classList.remove('errorInput');
            }

            if(contato == ''){
                contato.classList.add('errorInput');
                alert('O campo nome não está preenchido corretamente');
            }
            if(!isNaN(contato.value)== true && contato.value.length <= 11){
                contato.classList.remove('errorInput');
            }

            if(senha == ''){
                senha.classList.add('errorInput');
                
            }

        });