// Lida com o envio do formulário de cadastro
document.getElementById('member-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o recarregamento da página
  
    let formData = new FormData(this); // Obtém os dados do formulário
  
    fetch('/cadastrar', {
      method: 'POST', // Método HTTP para envio
      body: formData, // Dados do formulário
    })
      .then((response) => response.json()) // Converte a resposta para JSON
      .then((data) => {
        alert(data.message); // Exibe a mensagem de sucesso
  
        // Adiciona o novo membro à lista na interface
        const memberList = document.getElementById('member-list');
        const newMember = document.createElement('li');
        newMember.textContent = formData.get('name') + ' - ' + formData.get('type');
        memberList.appendChild(newMember);
      })
      .catch((error) => {
        console.error('Erro ao cadastrar membro:', error); // Loga o erro no console
      });
  });
  
  // Alterna a exibição dos grupos ao clicar em "Membros"
  document.getElementById('toggle-members').addEventListener('click', function (event) {
    event.preventDefault(); // Previne o redirecionamento padrão
    const memberGroups = document.getElementById('member-groups');
    const toggleMembers = document.getElementById('toggle-members');
  
    // Alterna entre visível e oculto
    if (memberGroups.style.display === 'none') {
      memberGroups.style.display = 'block';
      toggleMembers.textContent = 'Ocultar Membros';
    } else {
      memberGroups.style.display = 'none';
      toggleMembers.textContent = 'Mostrar Membros';
    }
  });
  