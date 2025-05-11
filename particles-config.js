particlesJS("particles-js", {
  particles: {
    number: {
      value: 40,
      density: { enable: true, value_area: 1000 }
    },
    color: {
      value: ["#00ff00", "#55ff55", "#88ff88"]  // Green Minecraft-style particles
    },
    shape: {
      type: "square", // makes them pixel-like
      stroke: { width: 0, color: "#000" }
    },
    opacity: {
      value: 0.8,
      random: true,
      anim: {
        enable: true,
        speed: 0.4,
        opacity_min: 0.4,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true
    }
  },
  retina_detect: true
});
