particlesJS("particles-js", {
  particles: {
    number: {
      value: 40,
      density: { enable: true, value_area: 900 }
    },
    color: {
      value: ["#00ff00", "#55ff55", "#88ff88"]  // MC green
    },
    shape: {
      type: "square",
      stroke: { width: 0, color: "#000" }
    },
    opacity: {
      value: 0.8,
      random: true,
      anim: { enable: true, speed: 0.2, opacity_min: 0.4, sync: false }
    },
    size: {
      value: 4,
      random: true
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "top",
      random: true,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true
    }
  },
  retina_detect: true
});
