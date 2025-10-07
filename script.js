// ==========================
// ELEMENTOS
// ==========================
const html = document.documentElement
const switchBtn = document.querySelector("#switch button")
const profileImg = document.querySelector("#profile img")

// ==========================
// FUNÇÃO DE TOGGLE DE TEMA
// ==========================
function toggleMode() {
  html.classList.toggle("light")

  // Salva o tema no localStorage
  if (html.classList.contains("light")) {
    localStorage.setItem("theme", "light")
  } else {
    localStorage.setItem("theme", "dark")
  }

  updateUI()
}

// ==========================
// ATIVA O CLIQUE NO BOTÃO
// ==========================
switchBtn.addEventListener("click", toggleMode)

// ==========================
// ATUALIZA AVATAR E ÍCONE DO SWITCH
// ==========================
function updateUI() {
  if (html.classList.contains("light")) {
    profileImg.setAttribute("src", "./assets/avatar-light.png")
    switchBtn.style.background = "white url(./assets/sun.svg) no-repeat center"
  } else {
    profileImg.setAttribute("src", "./assets/avatar.png")
    switchBtn.style.background =
      "white url(./assets/moon-stars.svg) no-repeat center"
  }
}

// ==========================
// FUNÇÃO HARD/SOFT SKILLS
// ==========================
function showSkills(type) {
  const hard = document.getElementById("hard-skills")
  const soft = document.getElementById("soft-skills")
  const btnHard = document.getElementById("btn-hard")
  const btnSoft = document.getElementById("btn-soft")

  if (type === "hard") {
    hard.classList.add("active")
    soft.classList.remove("active")
    btnHard.classList.add("active")
    btnSoft.classList.remove("active")
  } else {
    soft.classList.add("active")
    hard.classList.remove("active")
    btnSoft.classList.add("active")
    btnHard.classList.remove("active")
  }
}

// ==========================
// CARREGA TEMA SALVO AO INICIAR
// ==========================
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "light") {
    html.classList.add("light")
  } else {
    html.classList.remove("light")
  }

  updateUI()
})
