let currentAudio = null;

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const src = button.dataset.audio;

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(src);
    currentAudio.play();
  });
});
