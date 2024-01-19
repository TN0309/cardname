  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  async function createCards() {
      try {
                  const response = await fetch(apiUrl);
          const data = await response.json();

                 const randomUsers = data.slice(0, 8);

                const cardElement = document.getElementById('card');
          cardElement.innerHTML = '';

           randomUsers.forEach(user => {
              const cardItem = document.createElement('div');
              cardItem.className = 'card-item';

              const name = document.createElement('p');
              name.textContent = `Ism: ${user.name}`;

              const email = document.createElement('p');
              email.textContent = `Email: ${user.email}`;

              const phone = document.createElement('p');
              phone.textContent = `Telefon: ${user.phone}`;

              cardItem.appendChild(name);
              cardItem.appendChild(email);
              cardItem.appendChild(phone);
              cardElement.appendChild(cardItem);
          });
      } catch (error) {
          console.error('Xatolik yuz berdi:', error);
      }
  }

  document.addEventListener('DOMContentLoaded', createCards);