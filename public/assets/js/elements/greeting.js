function getGreeting(name) {
  const currentHour = new Date().getHours();
  let greetingMessage = '';
  let icon = '';

  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = `Guten morgen, ${name}!`;
    icon = 'haze';
  } else if (currentHour >= 12 && currentHour < 20) {
    greetingMessage = `Guten Abend, ${name}!`;
    icon = 'sun-medium';
  } else {
    greetingMessage = `Gute Nacht, ${name}!`;
    icon = 'moon-star';
  }

  return { greetingMessage, icon };
}

const name = 'User';
const { greetingMessage, icon } = getGreeting(name);
document.getElementById('greeting').innerHTML = `<i data-lucide="${icon}"></i><span>${greetingMessage}</span>`;
lucide.create();
