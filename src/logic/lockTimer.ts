// /src/logic/lockTimer.ts
export function startTimer(durationSeconds: number, displayElement: HTMLElement) {
  let timer = durationSeconds;

  const interval = setInterval(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    // Formata o tempo (ex: "04:09")
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    const secondsStr = seconds < 10 ? '0' + seconds : seconds;

    displayElement.textContent = `${minutesStr}:${secondsStr}`;

    if (--timer < 0) {
      clearInterval(interval);
      displayElement.textContent = "00:00, Tudo disponivel novamente";
      // Aqui podes adicionar a lógica para desbloquear o ecrã, se quiseres
    }
  }, 1000);
}