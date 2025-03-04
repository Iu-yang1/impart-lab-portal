function loadFont() {
    const isProduction = import.meta.env.VITE_APP_ENV === 'production';
    const fontFaceRule = `
    @font-face {
      font-family: "MinecraftFont";
      src: url("/${isProduction ? 'generated/Minecraft' : 'Minecraft'}.ttf");
    }
    .mf {
      font-family: MinecraftFont,Microsoft YaHei UI,sans-serif;
    }
  `;

    const styleElement = document.createElement('style');
    styleElement.textContent = fontFaceRule;
    document.head.appendChild(styleElement);
}

export default loadFont;