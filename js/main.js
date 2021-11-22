const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const toolKit = document.querySelector("#tool-kit");
const toolKitContent = document.querySelector("#tool-kit-content");

toolKit.addEventListener("click", () => {
  const toolKitBox = new WinBox({
    title: "My toolKit",
    // modal: true,
    width: "400px",
    height: "400px",
    top: 400,
    right: 50,
    bottom: 50,
    left: 50,
    mount: toolKitContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    // modal: true,
    width: "400px",
    height: "400px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    width: "400px",
    height: "400px",
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
