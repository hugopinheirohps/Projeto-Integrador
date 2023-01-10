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

       