const form = document.getElementById('form-cadastro');
const API_URL = window.location.origin;

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const idade = parseInt(document.getElementById('idade').value);

  console.log({ nome, email, idade });

  const res = await fetch(`${API_URL}/pessoas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, idade })
  });

  if (res.ok) {
    form.reset();
    carregarPessoas();
  }
});

async function carregarPessoas() {
  const resposta = await fetch(`${API_URL}/pessoas`);
  let pessoas = [];
  try {
    pessoas = await resposta.json();
    if (!Array.isArray(pessoas)) {
      pessoas = [];
    }
  } catch (e) {
    pessoas = [];
  }

  const lista = document.getElementById('lista-pessoas');
  lista.innerHTML = '';

  pessoas.forEach(p => {
    const item = document.createElement('div');
    item.className = 'pessoa';
    item.innerHTML = `<strong>${p.nome}</strong> - ${p.email}, ${p.idade} anos`;
    lista.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', carregarPessoas);

async function buscarPessoa() {
  const nome = document.getElementById('busca-nome').value;
  const resposta = await fetch(`${API_URL}/pessoas`);
  const pessoas = await resposta.json();

  const pessoa = pessoas.find(p => p.nome.toLowerCase() === nome.toLowerCase());
  const resultado = document.getElementById('resultado-busca');
  resultado.innerHTML = '';

  if (pessoa) {
    const container = document.createElement('div');
    container.className = 'resultado-container';
    container.innerHTML = `
      <p><strong>${pessoa.nome}</strong> - ${pessoa.email}, ${pessoa.idade} anos</p>
      <button onclick="confirmarExclusao(${pessoa.id})" style="background:red;color:white">Excluir dado</button>
      <button onclick="mostrarAtualizacao(${pessoa.id}, '${pessoa.nome}', '${pessoa.email}', ${pessoa.idade})">Atualizar dado</button>
    `;
    resultado.appendChild(container);
  } else {
    resultado.innerHTML = 'Pessoa não encontrada.';
  }
}

async function confirmarExclusao(id) {
  if (confirm("Tem certeza que deseja excluir esse dado?")) {
    const res = await fetch(`${API_URL}/pessoas/${id}`, { method: 'DELETE' });
    if (res.ok) {
      alert('Pessoa excluída!');
      carregarPessoas();
      document.getElementById('resultado-busca').innerHTML = '';
    }
  }
}

let idAtualizando = null;

function mostrarAtualizacao(id, nome, email, idade) {
  document.getElementById('form-atualizar').style.display = 'block';
  document.getElementById('novo-nome').value = nome;
  document.getElementById('novo-email').value = email;
  document.getElementById('nova-idade').value = idade;
  idAtualizando = id;
}

async function enviarAtualizacao() {
  const nome = document.getElementById('novo-nome').value;
  const email = document.getElementById('novo-email').value;
  const idade = parseInt(document.getElementById('nova-idade').value);

  const res = await fetch(`${API_URL}/pessoas/${idAtualizando}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, idade })
  });

  if (res.ok) {
    alert('Pessoa atualizada!');
    carregarPessoas();
    document.getElementById('form-atualizar').style.display = 'none';
    document.getElementById('resultado-busca').innerHTML = '';
  }
}
