function imageTiles(folder, prefix, count) {
  return Array.from({ length: count }, (_, index) => ({
    image: `images/${folder}/${prefix}-${String(index + 1).padStart(2, "0")}.png`
  }));
}

const watchfaceVersion = "20260827-live-preview-1";

const collections = [
  {
    title: "Black",
    count: 6,
    text: "#f5f5f7",
    watchface: "watchfaces/black/black.watchface",
    arts: imageTiles("black", "black", 6)
  },
  {
    title: "Space",
    count: 8,
    text: "#f5f5f7",
    watchface: "watchfaces/space/space.watchface",
    arts: imageTiles("space", "space", 8)
  },
  {
    title: "Art Deco",
    count: 6,
    text: "#f7ddb0",
    watchface: "watchfaces/art-deco/art-deco.watchface",
    arts: imageTiles("art-deco", "art-deco", 6)
  },
  {
    title: "Nippon",
    count: 12,
    text: "#111",
    watchface: "watchfaces/nippon/nippon.watchface",
    arts: imageTiles("nippon", "nippon", 12)
  },
  {
    title: "Matrix",
    count: 6,
    text: "#67ff82",
    watchface: "watchfaces/matrix/matrix.watchface",
    arts: imageTiles("matrix", "matrix", 6)
  },
  {
    title: "Racing",
    count: 6,
    text: "#f7ead5",
    watchface: "watchfaces/racing/racing.watchface",
    arts: imageTiles("racing", "racing", 6)
  }
];

const translations = {
  es: {
    tagline: "Colecciones visuales diseñadas para Apple Watch.",
    imageSingular: "imagen",
    imagePlural: "imágenes",
    weather: "Tiempo",
    battery: "Batería",
    pay: " Pay",
    purchaseStatus: "✓ Tuyo.",
    purchaseCopy: "Abre esta página en tu iPhone enlazado y añade la esfera al Apple Watch.",
    addFace: "Add Apple Watch Face",
    termsLink: "Términos",
    privacyLink: "Privacidad",
    contactLink: "Contacto",
    disclaimer: "Apple Watch es una marca comercial de Apple Inc. FACES no está afiliada ni respaldada por Apple Inc.",
    previewLabel: "Vista previa",
    footerLabel: "Pie de página",
    homeLabel: "Inicio de FACES",
    modalClose: "Cerrar",
    modals: {
      terms: {
        title: "Términos",
        body: [
          "Cada compra concede uso personal de una colección visual y de su preset instalable de esfera Apple Watch cuando esté disponible.",
          "El contenido digital se entrega inmediatamente tras el pago. El checkout debería pedir al comprador que reconozca la entrega inmediata y la posible pérdida del derecho de desistimiento una vez iniciada la entrega.",
          "Las imágenes de preview son diseños visuales originales preparados para la esfera Fotos, con zonas limpias para la hora y dos complicaciones comunes.",
          "La compatibilidad con Apple Watch puede cambiar con futuras actualizaciones de watchOS.",
          "Apple Watch es una marca comercial de Apple Inc. FACES no está afiliada, patrocinada ni respaldada por Apple Inc."
        ]
      },
      privacy: {
        title: "Privacidad",
        body: [
          "Esta tienda está pensada para evitar cuentas de usuario en el flujo de compra impulsiva.",
          "Los datos de pago deberían ser gestionados por el proveedor de pagos, no almacenados directamente por FACES.",
          "La web debería conservar sólo la información mínima necesaria para entrega, impuestos, prevención de fraude, analítica y soporte.",
          "Antes del lanzamiento, este popup debería enlazar a la política de privacidad completa e identificar responsable, contacto, periodo de conservación y derechos del usuario bajo normativa europea."
        ]
      },
      contact: {
        title: "Contacto",
        body: [
          "Soporte: hello@faces.example",
          "Reembolsos: usa este canal si un archivo comprado no se instala o el enlace de entrega no funciona.",
          "Antes del lanzamiento hay que añadir aquí identidad fiscal, datos del vendedor y dirección comercial.",
          "Para España y la UE, incluye la identificación del vendedor exigida por la normativa de comercio electrónico y mantén este contacto disponible desde toda confirmación de compra."
        ]
      }
    }
  },
  en: {
    tagline: "Visual collections designed for Apple Watch.",
    imageSingular: "image",
    imagePlural: "images",
    weather: "Weather",
    battery: "Battery",
    pay: " Pay",
    purchaseStatus: "✓ Yours.",
    purchaseCopy: "Open this page on your paired iPhone and add the face to Apple Watch.",
    addFace: "Add Apple Watch Face",
    termsLink: "Terms",
    privacyLink: "Privacy",
    contactLink: "Contact",
    disclaimer: "Apple Watch is a trademark of Apple Inc. FACES is not affiliated with or endorsed by Apple Inc.",
    previewLabel: "Preview",
    footerLabel: "Footer",
    homeLabel: "FACES home",
    modalClose: "Close",
    modals: {
      terms: {
        title: "Terms",
        body: [
          "Each purchase grants personal use of one visual collection and its installable Apple Watch face preset when available.",
          "Digital content is supplied immediately after payment. The checkout should ask the buyer to acknowledge immediate delivery and the possible loss of withdrawal rights once delivery begins.",
          "The preview images are original visual designs prepared for the Photos face layout, with clean areas for the time and two common complications.",
          "Apple Watch compatibility can change with future watchOS updates.",
          "Apple Watch is a trademark of Apple Inc. FACES is not affiliated with, sponsored by or endorsed by Apple Inc."
        ]
      },
      privacy: {
        title: "Privacy",
        body: [
          "This storefront is designed to avoid user accounts for the impulse-purchase flow.",
          "Payment data should be handled by the payment provider, not stored directly by FACES.",
          "The site should keep only the minimum purchase information needed for delivery, tax, fraud prevention, analytics and support.",
          "Before launch, this popup should link to the full privacy policy and identify the controller, contact channel, retention period and user rights under EU privacy rules."
        ]
      },
      contact: {
        title: "Contact",
        body: [
          "Support: hello@faces.example",
          "Refunds: use this channel if a purchased file fails to install or the delivery link does not work.",
          "Business identity, tax details and seller address should be added here before launch.",
          "For Spain and the EU, include the seller identity required by ecommerce rules and keep this contact available from every checkout confirmation."
        ]
      }
    }
  }
};

let currentLang = "es";

const catalog = document.querySelector("#catalog");
const purchaseModal = document.querySelector("#purchaseModal");
const purchaseTitle = document.querySelector("#purchaseTitle");
const purchasePreview = document.querySelector("#purchasePreview");
const addFaceLink = document.querySelector(".add-face");
const infoModal = document.querySelector("#infoModal");
const infoTitle = document.querySelector("#infoTitle");
const infoBody = document.querySelector("#infoBody");
const langButtons = document.querySelectorAll("[data-lang]");

function openModal(modal) {
  if (modal && typeof modal.showModal === "function") {
    modal.showModal();
  } else if (modal) {
    modal.setAttribute("open", "");
  }
}

function closeModal(modal) {
  if (modal && typeof modal.close === "function") {
    modal.close();
  } else if (modal) {
    modal.removeAttribute("open");
  }
}

function watchMarkup(art, text) {
  const i18n = translations[currentLang];
  const face = typeof art === "string" ? { art } : art;
  const artSize = face.artSize || "cover";
  const artPosition = face.artPosition || "center";
  const artBackground = face.image ? `url('${face.image}')` : face.art || "#000";
  return `
    <div class="watch" style="--faceText:${text};--glyphColor:${face.glyphColor || text}">
      <span class="art-layer" style="--artBackground:${artBackground};--artSize:${artSize};--artPosition:${artPosition}" aria-hidden="true"></span>
      <span class="complication top">${i18n.weather}</span>
      ${face.glyph ? `<span class="glyph" aria-hidden="true">${face.glyph}</span>` : ""}
      <span class="time">10:09</span>
      <span class="complication bottom">${i18n.battery}</span>
    </div>
  `;
}

function renderCatalog() {
  const i18n = translations[currentLang];
  catalog.innerHTML = "";
  collections.forEach((collection) => {
  const section = document.createElement("article");
  section.className = "collection";
  section.innerHTML = `
    <div class="collection-head">
      <h1>${collection.title}</h1>
      <span class="count">${collection.count} ${collection.count === 1 ? i18n.imageSingular : i18n.imagePlural}</span>
    </div>
    <div class="watch-wrap">${watchMarkup(collection.arts[0], collection.text)}</div>
    <div class="swatches" aria-label="${collection.title} variants">
      ${collection.arts.map((art, index) => {
        const face = typeof art === "string" ? { art } : art;
        const artBackground = face.image ? `url('${face.image}')` : face.art || "#000";
        return `<button class="swatch" aria-label="${i18n.previewLabel} ${collection.title} ${index + 1}" data-index="${index}"><span class="art-layer" style="--artBackground:${artBackground};--artSize:${face.artSize || "cover"};--artPosition:${face.artPosition || "center"}" aria-hidden="true"></span></button>`;
      }).join("")}
    </div>
    <div class="collection-foot">
      <p class="price">€0.99</p>
      <button class="buy">${i18n.pay}</button>
    </div>
  `;

  const preview = section.querySelector(".watch-wrap");
  section.querySelectorAll(".swatch").forEach((button) => {
    button.addEventListener("click", () => {
      const art = collection.arts[Number(button.dataset.index)];
      preview.innerHTML = watchMarkup(art, collection.text);
    });
  });

  section.querySelector(".buy").addEventListener("click", () => {
    purchaseTitle.textContent = collection.title;
    const face = typeof collection.arts[0] === "string" ? { art: collection.arts[0] } : collection.arts[0];
    const artBackground = face.image ? `url('${face.image}')` : face.art || "#000";
    purchasePreview.setAttribute("style", `--faceText:${collection.text};--glyphColor:${face.glyphColor || collection.text}`);
    purchasePreview.innerHTML = `<span class="art-layer" style="--artBackground:${artBackground};--artSize:${face.artSize || "cover"};--artPosition:${face.artPosition || "center"}" aria-hidden="true"></span>${face.glyph ? `<span class="glyph" aria-hidden="true">${face.glyph}</span>` : ""}`;
    if (collection.watchface) {
      addFaceLink.href = `${collection.watchface}?v=${watchfaceVersion}`;
      addFaceLink.removeAttribute("aria-disabled");
    } else {
      addFaceLink.href = "#";
      addFaceLink.setAttribute("aria-disabled", "true");
    }
    openModal(purchaseModal);
  });

  catalog.appendChild(section);
  });
}

function applyLanguage(lang) {
  currentLang = lang;
  const i18n = translations[currentLang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = i18n[element.dataset.i18n];
  });
  document.querySelector(".brand").setAttribute("aria-label", i18n.homeLabel);
  document.querySelector(".footer-links").setAttribute("aria-label", i18n.footerLabel);
  document.querySelectorAll("[data-close]").forEach((button) => button.setAttribute("aria-label", i18n.modalClose));
  addFaceLink.setAttribute("aria-label", i18n.addFace);
  langButtons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderCatalog();
}

document.querySelectorAll("[data-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const content = translations[currentLang].modals[button.dataset.modal];
    infoTitle.textContent = content.title;
    infoBody.innerHTML = content.body.map((paragraph) => `<p>${paragraph}</p>`).join("");
    openModal(infoModal);
  });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => {
    closeModal(button.closest("dialog"));
  });
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeModal(dialog);
  });
});

applyLanguage("es");
