        // /src/logic/LockScreen.ts
import { startTimer } from './lockTimer';

export function showLockScreen() {
  // Cria a div do fundo preto
  const lockScreenDiv = document.createElement('div');
  lockScreenDiv.id = 'lock-screen';
  lockScreenDiv.style.position = 'absolute'; // Vai sobrepor-se ao telemóvel
  lockScreenDiv.style.top = '0';
  lockScreenDiv.style.left = '0';
  lockScreenDiv.style.width = '100%';
  lockScreenDiv.style.height = '100%';
  lockScreenDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
  lockScreenDiv.style.display = 'flex';
  lockScreenDiv.style.flexDirection = 'column';
  lockScreenDiv.style.justifyContent = 'center';
  lockScreenDiv.style.alignItems = 'center';
  lockScreenDiv.style.color = '#fff';
  lockScreenDiv.style.fontFamily = 'Arial, sans-serif';
  lockScreenDiv.style.zIndex = '9999';

  // Cria a mensagem de aviso
  const message = document.createElement('h2');
  message.textContent = 'Tempo limite atingido.';

  // Cria a div onde os números vão aparecer
  const timerDisplay = document.createElement('div');
  timerDisplay.style.fontSize = '3rem';
  timerDisplay.style.fontWeight = 'bold';
  timerDisplay.style.marginTop = '20px';
  timerDisplay.textContent = '05:00'; // Valor inicial

  // Junta tudo
  lockScreenDiv.appendChild(message);
  lockScreenDiv.appendChild(timerDisplay);

  // Procura a moldura do telemóvel (da Pessoa 1) para injetar lá dentro.
  // Se ainda não existir, injeta no body.
  const phoneContainer = document.querySelector('.phone-simulator') || document.body;
  phoneContainer.appendChild(lockScreenDiv);

  // Inicia o cronómetro para 5 minutos (300 segundos)
  startTimer(300, timerDisplay);
}