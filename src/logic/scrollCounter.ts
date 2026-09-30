// /src/logic/scrollCounter.ts
import { showLockScreen } from './LockScreen';

let scrollCount = 0;
let isCooldown = false;
const MAX_SCROLLS = 2; // Limite antes de bloquear

export function initScrollCounter() {
  window.addEventListener('wheel', (event) => {
    // 1. Se já passou o limite, impede a página de fazer scroll
    if (scrollCount >= MAX_SCROLLS) {
      event.preventDefault();
      return;
    }

    // 2. Se o utilizador rodou para baixo (deltaY > 0) e não está em cooldown
    if (event.deltaY > 0 && !isCooldown) {
      scrollCount++;
      console.log(`Fez scroll: ${scrollCount}/${MAX_SCROLLS}`);

      // Ativa o cooldown para não contar os micro-movimentos seguintes
      isCooldown = true;

      // 3. Verifica se atingiu o limite
      if (scrollCount >= MAX_SCROLLS) {
        showLockScreen();
      } else {
        // Se ainda não atingiu, liberta o rato após 1 segundo
        setTimeout(() => {
          isCooldown = false;
        }, 1000);
      }
    }
  }, { passive: false }); // "passive: false" é obrigatório para o event.preventDefault() funcionar
}