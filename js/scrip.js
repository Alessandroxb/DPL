
// SWEETALERTS ICONS FOOTER


// ICON GITHUB
document.getElementById('icon1').addEventListener('click', function () {
    Swal.fire({
        title: 'Github',
        text: 'Através dos botões abaixo acesse o repositório Github desejado',
        icon: 'info',
        showCloseButton: true,
        showConfirmButton: false,
        html: `
            <button class="swal-button" id="button1">Alessandro</button>

        `,

    });

    document.getElementById('button1').addEventListener('click', function () {
        window.location.href = 'https://github.com/Alessandroxb';
    });


});


// ICON LINKEDIN

document.getElementById('icon2').addEventListener('click', function () {
Swal.fire({
    title: 'Linkedin',
    icon: 'info',
    showCloseButton: true,
    showConfirmButton: false,
    html: `
        <button class="swal-button" id="button5">Alessandro</button>

    `,

});


document.getElementById('button5').addEventListener('click', function () {
    window.location.href = 'https://www.linkedin.com/in/alessandro-ximenes-01371826a/';
});


});


// ICON WHATSAPP

document.getElementById('icon3').addEventListener('click', function () {
Swal.fire({
    title: 'Whatsapp',
    icon: 'info',
    showCloseButton: true,
    showConfirmButton: false,
    html: `
        <button class="swal-button" id="button9">Alessandro</button>
        <button class="swal-button" id="button10">Samuel</button>
        <button class="swal-button" id="button11">Freitas</button>
        <button class="swal-button" id="button12">Kékel</button>
    `,

});


document.getElementById('button9').addEventListener('click', function () {
    window.location.href = 'https://wa.me/+5598985692982';
});

document.getElementById('button10').addEventListener('click', function () {
    window.location.href = 'https://wa.me/+5598987674825';
});

document.getElementById('button11').addEventListener('click', function () {
    window.location.href = 'https://wa.me/+5598987370138';
});

document.getElementById('button12').addEventListener('click', function () {
    window.location.href = 'https://wa.me/+55989870032349';
});
});


// ICON INSTAGRAM

document.getElementById('icon4').addEventListener('click', function () {
Swal.fire({
    title: 'Instagram',
    icon: 'info',
    showCloseButton: true,
    showConfirmButton: false,
    html: `
        <button class="swal-button" id="button13">Alessandro</button>

    `,

});


document.getElementById('button13').addEventListener('click', function () {
    window.location.href = 'https://www.instagram.com/sandrin_magox/';
});

});





// nexts



document.addEventListener("DOMContentLoaded", function () {
const b1Button = document.getElementById("b1");
const next1Button = document.getElementById("next1");
const next2Button = document.getElementById("next2");
const next3Button = document.getElementById("next3");
const next4Button = document.getElementById("next4");
const next5Button = document.getElementById("next5");
const next6Button = document.getElementById("next6");
const next7Button = document.getElementById("next7");
const next8Button = document.getElementById("next8");

const conteudoDiv = document.getElementById("conteudo");
const f1Div = document.getElementById("f1");
const f2Div = document.getElementById("f2");
const f3Div = document.getElementById("f3");
const f4Div = document.getElementById("f4");
const f5Div = document.getElementById("f5");
const f6Div = document.getElementById("f6");
const f7Div = document.getElementById("f7");
const f8Div = document.getElementById("f8");

let currentStep = 1;

// Função para validar campos obrigatórios da div atual
function validateCurrentStep() {
  switch (currentStep) {
    case 1:
      const inputsF1 = f1Div.querySelectorAll("input");
      let allFieldsFilledF1 = true;

      inputsF1.forEach((input) => {
        if (input.value.trim() === "") {
          input.style.border = "3px solid red";
          allFieldsFilledF1 = false;
        } else {
          input.style.border = "";
        }
      });

      return allFieldsFilledF1;

    case 2:
      const inputsF2 = f2Div.querySelectorAll("input");
      let allFieldsFilledF2 = true;

      inputsF2.forEach((input) => {
        if (input.value.trim() === "") {
          input.style.border = "3px solid red";
          allFieldsFilledF2 = false;
        } else {
          input.style.border = "";
        }
      });

      return allFieldsFilledF2;

    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      const checkboxesF = document.getElementsByName(`regra${currentStep}`);
      let atLeastOneCheckedF = false;

      checkboxesF.forEach((checkbox) => {
        if (checkbox.checked) {
          atLeastOneCheckedF = true;
        }
      });

      if (!atLeastOneCheckedF) {
        Swal.fire({
            title: 'Erro',
            icon: 'error',
            text: 'Selecione alguma opção',
            showCloseButton: true,
            showConfirmButton: true,
    
        });
      }

      return atLeastOneCheckedF;

    default:
      return true; 
  }
}

// Função para avançar para a próxima div
function goToNextStep() {
  if (validateCurrentStep()) {
    currentStep++;
    hideAllDivs();
    showCurrentDiv();
  }
}

// Função para mostrar a div atual
function showCurrentDiv() {
  switch (currentStep) {
    case 1:
      conteudoDiv.classList.add("d-none");
      f1Div.classList.remove("d-none");
      break;
    case 2:
      f1Div.classList.add("d-none");
      f2Div.classList.remove("d-none");
      break;
    case 3:
      f2Div.classList.add("d-none");
      f3Div.classList.remove("d-none");
      break;
    case 4:
      f3Div.classList.add("d-none");
      f4Div.classList.remove("d-none");
      break;
    case 5:
      f4Div.classList.add("d-none");
      f5Div.classList.remove("d-none");
      break;
    case 6:
      f5Div.classList.add("d-none");
      f6Div.classList.remove("d-none");
      break;
    case 7:
      f6Div.classList.add("d-none");
      f7Div.classList.remove("d-none");
      break;
    case 8:
      f7Div.classList.add("d-none");
      f8Div.classList.remove("d-none");
      break;
  }
}

// Função para ocultar todas as divs
function hideAllDivs() {
  conteudoDiv.classList.add("d-none");
  f1Div.classList.add("d-none");
  f2Div.classList.add("d-none");
  f3Div.classList.add("d-none");
  f4Div.classList.add("d-none");
  f5Div.classList.add("d-none");
  f6Div.classList.add("d-none");
  f7Div.classList.add("d-none");
  f8Div.classList.add("d-none");
}

//evento de clique ao botão "b1"
b1Button.addEventListener("click", function () {
  conteudoDiv.classList.add("d-none");
  f1Div.classList.remove("d-none");
});

//evento de clique ao botão "Next" na div atual
next1Button.addEventListener("click", goToNextStep);
next2Button.addEventListener("click", goToNextStep);
next3Button.addEventListener("click", goToNextStep);
next4Button.addEventListener("click", goToNextStep);
next5Button.addEventListener("click", goToNextStep);
next6Button.addEventListener("click", goToNextStep);
next7Button.addEventListener("click", goToNextStep);

// evento de clique ao botão "Finalizar" na div com id "f8"
next8Button.addEventListener("click", function () {
    if (currentStep === 8) {
      const checkboxesF8 = f8Div.querySelectorAll('input[type="radio"]');
      let atLeastOneCheckedF8 = false;
  
      checkboxesF8.forEach((checkbox) => {
        if (checkbox.checked) {
          atLeastOneCheckedF8 = true;
        }
        
      });
      

          Swal.fire('Ação realizada!');


      

    }
  });

// Desabilitar o botão "Finalizar" 
next8Button.disabled = true;

// Adicionar listener de evento para habilitar o botão quando um radiobutton for marcado
const radioButtonsF8 = f8Div.querySelectorAll('input[type="radio"]');

radioButtonsF8.forEach((radioButton) => {
  radioButton.addEventListener("change", function () {
    next8Button.disabled = false;
    
  });
  
});

});




