const planetArts = [
  ["Mercury", "radial-gradient(circle at 50% 43%, #d8d1c6 0 7%, #8b8176 7.4% 13%, transparent 13.5%), radial-gradient(circle at 28% 22%, #fff 0 .4%, transparent .7%), radial-gradient(circle at 78% 29%, #fff 0 .35%, transparent .65%), #000"],
  ["Venus", "radial-gradient(circle at 50% 43%, #ffe1a6 0 8%, #c98243 8.4% 15%, transparent 15.5%), linear-gradient(12deg, transparent 0 46%, rgba(255,255,255,.18) 46.3% 48.2%, transparent 48.5%), radial-gradient(circle at 82% 25%, #fff 0 .35%, transparent .65%), #000"],
  ["Earth", "radial-gradient(circle at 50% 43%, #8ed7ff 0 8%, #1763c9 8.4% 15%, transparent 15.5%), radial-gradient(ellipse at 45% 39%, #68d391 0 4%, transparent 4.4%), radial-gradient(ellipse at 56% 48%, #f5f5f7 0 3%, transparent 3.4%), #000"],
  ["Mars", "radial-gradient(circle at 50% 43%, #ff9a62 0 8%, #9f351f 8.4% 14%, transparent 14.5%), radial-gradient(circle at 44% 39%, rgba(60,15,8,.72) 0 2%, transparent 2.4%), radial-gradient(circle at 80% 72%, #fff 0 .36%, transparent .62%), #000"],
  ["Jupiter", "radial-gradient(circle at 50% 43%, #f0d2a0 0 11%, #a76d42 11.4% 18%, transparent 18.5%), linear-gradient(0deg, transparent 0 38%, rgba(95,50,28,.75) 38.4% 40%, transparent 40.4% 46%, rgba(255,255,255,.42) 46.4% 48%, transparent 48.4% 55%, rgba(130,74,35,.7) 55.4% 57%, transparent 57.4%), #000"],
  ["Saturn", "radial-gradient(circle at 50% 43%, #ecd09b 0 8%, #b58448 8.4% 14%, transparent 14.5%), radial-gradient(ellipse at 50% 43%, transparent 0 17%, rgba(235,210,158,.9) 17.4% 18.8%, transparent 19.2%), #000"],
  ["Uranus", "radial-gradient(circle at 50% 43%, #a8fff4 0 8%, #48a9b9 8.4% 14.5%, transparent 15%), radial-gradient(ellipse at 50% 43%, transparent 0 18%, rgba(190,255,250,.65) 18.4% 19.2%, transparent 19.6%), #000"],
  ["Neptune", "radial-gradient(circle at 50% 43%, #87a7ff 0 8%, #2344c7 8.4% 14.5%, transparent 15%), radial-gradient(ellipse at 54% 40%, rgba(255,255,255,.7) 0 2.5%, transparent 2.9%), radial-gradient(circle at 20% 34%, #fff 0 .35%, transparent .65%), #000"]
];

function imageTiles(folder, prefix, count) {
  return Array.from({ length: count }, (_, index) => ({
    image: `images/${folder}/${prefix}-${String(index + 1).padStart(2, "0")}.png`
  }));
}

const constellationArts = [
  "linear-gradient(28deg, transparent 0 44%, rgba(255,255,255,.55) 44.3% 44.7%, transparent 45%), radial-gradient(circle at 35% 34%, #fff 0 .9%, transparent 1.2%), radial-gradient(circle at 48% 42%, #fff 0 .75%, transparent 1%), radial-gradient(circle at 63% 58%, #fff 0 .85%, transparent 1.15%), #000",
  "linear-gradient(152deg, transparent 0 42%, rgba(255,255,255,.48) 42.3% 42.7%, transparent 43%), radial-gradient(circle at 28% 62%, #fff 0 .8%, transparent 1.1%), radial-gradient(circle at 41% 47%, #fff 0 .7%, transparent 1%), radial-gradient(circle at 72% 30%, #fff 0 .95%, transparent 1.25%), #000",
  "linear-gradient(90deg, transparent 0 35%, rgba(255,255,255,.45) 35.3% 35.7%, transparent 36%), linear-gradient(35deg, transparent 0 54%, rgba(255,255,255,.45) 54.3% 54.7%, transparent 55%), radial-gradient(circle at 34% 43%, #fff 0 .8%, transparent 1.1%), radial-gradient(circle at 62% 43%, #fff 0 .8%, transparent 1.1%), radial-gradient(circle at 49% 60%, #fff 0 .9%, transparent 1.2%), #000",
  "linear-gradient(118deg, transparent 0 48%, rgba(255,255,255,.5) 48.3% 48.7%, transparent 49%), radial-gradient(circle at 38% 28%, #fff 0 .75%, transparent 1%), radial-gradient(circle at 45% 46%, #fff 0 .9%, transparent 1.2%), radial-gradient(circle at 58% 70%, #fff 0 .7%, transparent 1%), #000",
  "linear-gradient(20deg, transparent 0 46%, rgba(255,255,255,.45) 46.3% 46.7%, transparent 47%), linear-gradient(145deg, transparent 0 50%, rgba(255,255,255,.38) 50.3% 50.7%, transparent 51%), radial-gradient(circle at 28% 52%, #fff 0 .7%, transparent 1%), radial-gradient(circle at 50% 40%, #fff 0 .95%, transparent 1.25%), radial-gradient(circle at 72% 52%, #fff 0 .7%, transparent 1%), #000",
  "linear-gradient(72deg, transparent 0 43%, rgba(255,255,255,.42) 43.3% 43.7%, transparent 44%), radial-gradient(circle at 52% 24%, #fff 0 .8%, transparent 1.1%), radial-gradient(circle at 44% 43%, #fff 0 .7%, transparent 1%), radial-gradient(circle at 38% 65%, #fff 0 .9%, transparent 1.2%), #000",
  "linear-gradient(160deg, transparent 0 45%, rgba(255,255,255,.46) 45.3% 45.7%, transparent 46%), radial-gradient(circle at 70% 34%, #fff 0 .9%, transparent 1.2%), radial-gradient(circle at 55% 45%, #fff 0 .7%, transparent 1%), radial-gradient(circle at 35% 66%, #fff 0 .8%, transparent 1.1%), #000",
  "linear-gradient(45deg, transparent 0 47%, rgba(255,255,255,.42) 47.3% 47.7%, transparent 48%), linear-gradient(135deg, transparent 0 47%, rgba(255,255,255,.42) 47.3% 47.7%, transparent 48%), radial-gradient(circle at 36% 36%, #fff 0 .75%, transparent 1%), radial-gradient(circle at 64% 36%, #fff 0 .75%, transparent 1%), radial-gradient(circle at 36% 64%, #fff 0 .75%, transparent 1%), radial-gradient(circle at 64% 64%, #fff 0 .75%, transparent 1%), #000",
  "linear-gradient(12deg, transparent 0 48%, rgba(255,255,255,.5) 48.3% 48.7%, transparent 49%), radial-gradient(circle at 24% 44%, #fff 0 .8%, transparent 1.1%), radial-gradient(circle at 50% 50%, #fff 0 .9%, transparent 1.2%), radial-gradient(circle at 77% 57%, #fff 0 .7%, transparent 1%), #000",
  "linear-gradient(98deg, transparent 0 46%, rgba(255,255,255,.42) 46.3% 46.7%, transparent 47%), radial-gradient(circle at 48% 29%, #fff 0 .9%, transparent 1.2%), radial-gradient(circle at 51% 49%, #fff 0 .7%, transparent 1%), radial-gradient(circle at 54% 70%, #fff 0 .8%, transparent 1.1%), #000",
  "linear-gradient(132deg, transparent 0 46%, rgba(255,255,255,.45) 46.3% 46.7%, transparent 47%), radial-gradient(circle at 68% 26%, #fff 0 .8%, transparent 1.1%), radial-gradient(circle at 52% 48%, #fff 0 .95%, transparent 1.25%), radial-gradient(circle at 31% 72%, #fff 0 .7%, transparent 1%), #000",
  "linear-gradient(0deg, transparent 0 50%, rgba(255,255,255,.38) 50.3% 50.7%, transparent 51%), linear-gradient(65deg, transparent 0 50%, rgba(255,255,255,.42) 50.3% 50.7%, transparent 51%), radial-gradient(circle at 40% 50%, #fff 0 .8%, transparent 1.1%), radial-gradient(circle at 60% 50%, #fff 0 .8%, transparent 1.1%), radial-gradient(circle at 50% 30%, #fff 0 .75%, transparent 1%), #000",
  "linear-gradient(30deg, transparent 0 50%, rgba(255,255,255,.42) 50.3% 50.7%, transparent 51%), radial-gradient(circle at 33% 70%, #fff 0 .75%, transparent 1%), radial-gradient(circle at 48% 53%, #fff 0 .95%, transparent 1.25%), radial-gradient(circle at 66% 31%, #fff 0 .75%, transparent 1%), #000",
  "linear-gradient(115deg, transparent 0 52%, rgba(255,255,255,.45) 52.3% 52.7%, transparent 53%), radial-gradient(circle at 60% 24%, #fff 0 .8%, transparent 1.1%), radial-gradient(circle at 52% 47%, #fff 0 .7%, transparent 1%), radial-gradient(circle at 42% 75%, #fff 0 .9%, transparent 1.2%), #000",
  "linear-gradient(75deg, transparent 0 48%, rgba(255,255,255,.5) 48.3% 48.7%, transparent 49%), radial-gradient(circle at 44% 24%, #fff 0 .7%, transparent 1%), radial-gradient(circle at 50% 47%, #fff 0 .95%, transparent 1.25%), radial-gradient(circle at 58% 72%, #fff 0 .75%, transparent 1%), #000",
  "linear-gradient(148deg, transparent 0 48%, rgba(255,255,255,.42) 48.3% 48.7%, transparent 49%), radial-gradient(circle at 72% 32%, #fff 0 .75%, transparent 1%), radial-gradient(circle at 52% 49%, #fff 0 .9%, transparent 1.2%), radial-gradient(circle at 29% 68%, #fff 0 .75%, transparent 1%), #000"
];

const collections = [
  {
    title: "Black",
    count: 6,
    text: "#f5f5f7",
    arts: imageTiles("black", "black", 6)
  },
  {
    title: "Space",
    count: 24,
    text: "#f5f5f7",
    arts: imageTiles("space", "space", 24)
  },
  {
    title: "Art Deco",
    count: 6,
    text: "#f7ddb0",
    arts: imageTiles("art-deco", "art-deco", 6)
  },
  {
    title: "Nippon",
    count: 12,
    text: "#111",
    arts: imageTiles("nippon", "nippon", 12)
  },
  {
    title: "Matrix",
    count: 6,
    text: "#67ff82",
    arts: imageTiles("matrix", "matrix", 6)
  },
  {
    title: "Racing",
    count: 6,
    text: "#f7ead5",
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
  document.querySelector(".add-face").setAttribute("aria-label", i18n.addFace);
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
