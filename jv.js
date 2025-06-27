const input = document.getElementById("itemInput");
const btn = document.getElementById("addBtn");
const lista = document.getElementById("lista");

// Carrega a lista do localStorage ao iniciar
window.onload = () => {
  const dadosSalvos = localStorage.getItem("listaDeCompras");
  if (dadosSalvos) {
    lista.innerHTML = dadosSalvos;
    adicionarEventos();
  }
};

btn.addEventListener("click", () => {
  const valor = input.value.trim();
  if (valor !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="texto">${valor}</span>
      <button class="removeBtn">X</button>
    `;
    lista.appendChild(li);
    input.value = "";
    salvarLista();
    adicionarEventos();
  }
});

function adicionarEventos() {
  const itens = document.querySelectorAll("#lista li");
  itens.forEach(item => {
    item.onclick = () => {
      item.classList.toggle("comprado");
      salvarLista();
    };
    const btn = item.querySelector(".removeBtn");
    btn.onclick = (e) => {
      e.stopPropagation();
      item.remove();
      salvarLista();
    };
  });
}

function salvarLista() {
  localStorage.setItem("listaDeCompras", lista.innerHTML);
}
