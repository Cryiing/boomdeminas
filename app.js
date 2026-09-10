// ======================================================
// CONFIGURAÇÃO DO SUPABASE
// ======================================================

const SUPABASE_URL =
  "https://wxdlwaoebifpzqclzufr.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_KvzQQJ2UgbU-jIjC86uBXg_onMcmnip";

const { createClient } = window.supabase;

const supabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);


// ======================================================
// ELEMENTOS
// ======================================================

// LOGIN
const loginCard =
  document.getElementById("loginCard");

const loginForm =
  document.getElementById("loginForm");

const loginMessage =
  document.getElementById("loginMessage");

const app =
  document.getElementById("app");

const logoutBtn =
  document.getElementById("logoutBtn");

const userRole =
  document.getElementById("userRole");

const themeToggle =
  document.getElementById("themeToggle");

const themeToggleIcon =
  document.getElementById("themeToggleIcon");

const themeToggleLabel =
  document.getElementById("themeToggleLabel");

const tabButtons =
  document.querySelectorAll(".tab-btn");

const tabBtnAdmin =
  document.getElementById("tabBtnAdmin");


// ======================================================
// USUÁRIOS
// ======================================================

const adminPanel =
  document.getElementById("adminPanel");

const refreshUsersBtn =
  document.getElementById("refreshUsersBtn");

const usersBody =
  document.getElementById("usersBody");

const usersMessage =
  document.getElementById("usersMessage");

const createUserForm =
  document.getElementById("createUserForm");

const newUserName =
  document.getElementById("newUserName");

const newUserEmail =
  document.getElementById("newUserEmail");

const newUserPassword =
  document.getElementById("newUserPassword");

const newUserRole =
  document.getElementById("newUserRole");

const createUserMessage =
  document.getElementById("createUserMessage");


// ======================================================
// PRODUTOS - ADMIN
// ======================================================

const createProductForm =
  document.getElementById("createProductForm");

const newProductType =
  document.getElementById("newProductType");

const newProductFlavorGroup =
  document.getElementById(
    "newProductFlavorGroup"
  );

const newProductFlavor =
  document.getElementById(
    "newProductFlavor"
  );

const newProductNormalFields =
  document.getElementById(
    "newProductNormalFields"
  );

const newProductGrams =
  document.getElementById(
    "newProductGrams"
  );

const newProductWeight =
  document.getElementById(
    "newProductWeight"
  );

const newProductUnits =
  document.getElementById(
    "newProductUnits"
  );
const newProductIsRevenda =
  document.getElementById(
    "newProductIsRevenda"
  );

const newProductRevendedorGroup =
  document.getElementById(
    "newProductRevendedorGroup"
  );

const newProductRevendedor =
  document.getElementById(
    "newProductRevendedor"
  );
const productMessage =
  document.getElementById(
    "productMessage"
  );

const productsBody =
  document.getElementById(
    "productsBody"
  );

const productsMessage =
  document.getElementById(
    "productsMessage"
  );

const refreshProductsBtn =
  document.getElementById(
    "refreshProductsBtn"
  );


// ======================================================
// PRODUÇÃO
// ======================================================

const productionForm =
  document.getElementById(
    "productionForm"
  );

const productionType =
  document.getElementById(
    "productionType"
  );

const productionFlavorGroup =
  document.getElementById(
    "productionFlavorGroup"
  );

const productionFlavor =
  document.getElementById(
    "productionFlavor"
  );

const productionNormalFields =
  document.getElementById(
    "productionNormalFields"
  );

const productionGrams =
  document.getElementById(
    "productionGrams"
  );

const productionWeight =
  document.getElementById(
    "productionWeight"
  );

const boxesInput =
  document.getElementById(
    "boxes"
  );

const productionProductPreview =
  document.getElementById(
    "productionProductPreview"
  );

const productionMessage =
  document.getElementById(
    "productionMessage"
  );

const productionBoxesGroup =
  document.getElementById(
    "productionBoxesGroup"
  );

const productionUnitsGroup =
  document.getElementById(
    "productionUnitsGroup"
  );

const productionUnits =
  document.getElementById(
    "productionUnits"
  );
const clearProductionArea =
  document.getElementById(
    "clearProductionArea"
  );

const clearProductionBtn =
  document.getElementById(
    "clearProductionBtn"
  );

const clearProductionMessage =
  document.getElementById(
    "clearProductionMessage"
  );

const productionIsRevenda =
  document.getElementById(
    "productionIsRevenda"
  );

const productionRevendaGroup =
  document.getElementById(
    "productionRevendaGroup"
  );

const productionRevendaNome =
  document.getElementById(
    "productionRevendaNome"
  );

const productionRevendaHint =
  document.getElementById(
    "productionRevendaHint"
  );
// ======================================================
// SAÍDA
// ======================================================

const exitForm =
  document.getElementById(
    "exitForm"
  );

const exitType =
  document.getElementById(
    "exitType"
  );

const exitFlavorGroup =
  document.getElementById(
    "exitFlavorGroup"
  );

const exitFlavor =
  document.getElementById(
    "exitFlavor"
  );

const exitNormalFields =
  document.getElementById(
    "exitNormalFields"
  );

const exitGrams =
  document.getElementById(
    "exitGrams"
  );

const exitWeight =
  document.getElementById(
    "exitWeight"
  );

const exitBoxes =
  document.getElementById(
    "exitBoxes"
  );

const exitBoxesGroup =
  document.getElementById(
    "exitBoxesGroup"
  );

const exitUnitsGroup =
  document.getElementById(
    "exitUnitsGroup"
  );

const exitUnits =
  document.getElementById(
    "exitUnits"
  );

const exitReasonInput =
  document.getElementById(
    "exitReason"
  );

const exitProductPreview =
  document.getElementById(
    "exitProductPreview"
  );

const stockAfterExit =
  document.getElementById(
    "stockAfterExit"
  );

const exitMessage =
  document.getElementById(
    "exitMessage"
  );


// ======================================================
// ESTOQUE
// ======================================================

const stockTotal =
  document.getElementById(
    "stockTotal"
  );

const refreshBtn =
  document.getElementById(
    "refreshBtn"
  );

const stockSearch =
  document.getElementById(
    "stockSearch"
  );

const stockSearchMessage =
  document.getElementById(
    "stockSearchMessage"
  );

const stockList =
  document.getElementById(
    "stockList"
  );

const editStockToggleBtn =
  document.getElementById(
    "editStockToggleBtn"
  );


// ======================================================
// RESUMO DO DIA
// ======================================================

const dailySummaryKg =
  document.getElementById(
    "dailySummaryKg"
  );

const dailySummaryRate =
  document.getElementById(
    "dailySummaryRate"
  );

const dailySummaryTop =
  document.getElementById(
    "dailySummaryTop"
  );

const dailySummaryPie =
  document.getElementById(
    "dailySummaryPie"
  );

const dailySummaryLegend =
  document.getElementById(
    "dailySummaryLegend"
  );

const dailySummaryByHour =
  document.getElementById(
    "dailySummaryByHour"
  );

const dailySummaryEmpty =
  document.getElementById(
    "dailySummaryEmpty"
  );


// ======================================================
// HISTÓRICO
// ======================================================

const historyBody =
  document.getElementById(
    "historyList"
  );


// ======================================================
// ESTADO
// ======================================================

let currentUser = null;

let currentProfile = null;

let products = [];

let stockProducts = [];

let historyItems = [];

let editStockMode = false;

// Cores usadas no gráfico de pizza do resumo do dia.
const PIE_COLORS = [
  "#b45309",
  "#0ea5e9",
  "#16a34a",
  "#dc2626",
  "#7c3aed",
  "#db2777",
  "#0891b2",
  "#ca8a04"
];


// ======================================================
// NOMES DOS TIPOS
// ======================================================

const TYPE_NAMES = {

  tradicional:
    "Tradicional",

  recheado:
    "Recheado",

  empanado:
    "Empanado / Gourmet",

  palitinho:
    "Palitinho",

  palitao:
    "Palitão",

  chipa:
    "Chipa"

};


// ======================================================
// MENSAGENS
// ======================================================

function showMessage(
  element,
  text,
  error = false
) {

  if (!element) {
    return;
  }

  element.textContent =
    text;

  element.style.color =
    error
      ? "#b42318"
      : "#18794e";
}


// ======================================================
// ESCAPAR HTML
// ======================================================

function escapeHtml(value) {

  return String(
    value ?? ""
  )

    .replaceAll(
      "&",
      "&amp;"
    )

    .replaceAll(
      "<",
      "&lt;"
    )

    .replaceAll(
      ">",
      "&gt;"
    )

    .replaceAll(
      '"',
      "&quot;"
    )

    .replaceAll(
      "'",
      "&#039;"
    );
}


// ======================================================
// FORMATAR PRODUTO
// ======================================================

function getProductName(
  product
) {

  if (!product) {
    return "Produto não selecionado";
  }

  let nome = "";

  if (product.tipo === "recheado") {

    nome =
      "Recheado — " +
      (product.sabor || "-");

  } else {

    nome =
      `${TYPE_NAMES[product.tipo] || product.tipo} — ` +
      `${product.gramas}g — ` +
      `${product.peso_kg}kg`;
  }

  if (
    product.is_revenda &&
    product.revendedor
  ) {

    nome +=
      ` — ${product.revendedor}`;
  }

  return nome;
}


// ======================================================
// PERFIL
// ======================================================

async function loadUserProfile() {

  if (!currentUser) {
    return false;
  }

  const {
    data,
    error
  } =
    await supabaseClient.rpc(
      "obter_meu_usuario"
    );

  if (error) {

    console.error(
      "Erro ao buscar usuário:",
      error
    );

    return false;
  }

  if (
    !data ||
    data.length === 0
  ) {

    console.error(
      "Usuário não encontrado."
    );

    return false;
  }

  currentProfile =
    data[0];

  console.log(
    "PERFIL RECEBIDO DO SUPABASE:",
    currentProfile
  );

  console.log(
    "CARGO RECEBIDO:",
    currentProfile.cargo
  );

  userRole.classList.remove(
    "hidden"
  );

  if (
    isAdminRole(
      currentProfile.cargo
    )
  ) {

    userRole.textContent =
      "👑 Administrador";

    adminPanel.classList.remove(
      "hidden"
    );

    tabBtnAdmin.classList.remove(
      "hidden"
    );

    console.log(
      "4 - TEXTO DO CARGO NA TELA:",
      userRole.textContent
    );
clearProductionArea.classList.remove(
    "hidden"
  );

  editStockToggleBtn?.classList.remove(
    "hidden"
  );

    console.log(
      "5 - ADMIN PANEL ESCONDIDO?",
      adminPanel.classList.contains(
        "hidden"
      )
    );

  } else {

    userRole.textContent =
      "👷 Funcionário";

    adminPanel.classList.add(
      "hidden"
    );

    tabBtnAdmin.classList.add(
      "hidden"
    );
  
clearProductionArea.classList.add(
  "hidden"
);

  editStockToggleBtn?.classList.add(
    "hidden"
  );

  editStockMode = false;
   }
  return true;
}


// ======================================================
// VERIFICAR CARGO
// ======================================================

function isAdminRole(
  cargo
) {

  return (
    cargo === "admin" ||
    cargo === "administrador"
  );
}


// ======================================================
// ADMIN?
// ======================================================

function isAdmin() {

  return (
    currentProfile &&
    isAdminRole(
      currentProfile.cargo
    )
  );
}


// ======================================================
// PRODUTOS DISPONÍVEIS
// ======================================================

async function loadProducts() {

  const {
    data,
    error
  } =
    await supabaseClient.rpc(
      "listar_produtos_disponiveis"
    );

  if (error) {

    console.error(
      "Erro ao carregar produtos:",
      error
    );

    showMessage(
      productionMessage,
      error.message,
      true
    );

    return;
  }

  products =
    data || [];

  populateTypeSelect(
    productionType
  );

  populateTypeSelect(
    exitType
  );

  updateProductionFields();

  updateExitFields();
}


// ======================================================
// PREENCHER TIPOS
// ======================================================

function populateTypeSelect(
  select
) {

  if (!select) {
    return;
  }

  select.innerHTML = `
    <option value="">
      Selecione...
    </option>
  `;

  const types =
    [
      ...new Set(
        products.map(
          product =>
            product.tipo
        )
      )
    ];

  types.forEach(
    type => {

      const option =
        document.createElement(
          "option"
        );

      option.value =
        type;

      option.textContent =
        TYPE_NAMES[type] ||
        type;

      select.appendChild(
        option
      );
    }
  );
}


// ======================================================
// ATUALIZAR CAMPOS DA PRODUÇÃO
// ======================================================

function updateProductionFields() {

  const type =
    productionType.value;

  productionFlavorGroup
    .classList
    .toggle(
      "hidden",
      type !== "recheado"
    );

  productionNormalFields
    .classList
    .toggle(
      "hidden",
      !type ||
      type === "recheado"
    );

  if (
    type === "recheado"
  ) {

    populateFlavorSelect(
      productionFlavor,
      type
    );

    productionGrams.innerHTML =
      `<option value="">Selecione...</option>`;

    productionWeight.innerHTML =
      `<option value="">Selecione...</option>`;

  } else {

    productionFlavor.innerHTML =
      `<option value="">Selecione...</option>`;

    populateGramsSelect(
      productionGrams,
      type
    );

    updateProductionWeights();
  }

  updateProductionSelectionPreview();
}


// ======================================================
// ATUALIZAR PESOS DA PRODUÇÃO
// ======================================================

function updateProductionWeights() {

  const type =
    productionType.value;

  const grams =
    Number(
      productionGrams.value
    );

  productionWeight.innerHTML =
    `<option value="">Selecione...</option>`;

  if (
    !type ||
    !grams
  ) {
    return;
  }

  const weights =
    [
      ...new Set(
        products
          .filter(
            product =>
              product.tipo === type &&
              product.gramas === grams
          )
          .map(
            product =>
              product.peso_kg
          )
      )
    ];

  weights.forEach(
    weight => {

      const option =
        document.createElement(
          "option"
        );

      option.value =
        weight;

      option.textContent =
        `${weight} kg`;

      productionWeight
        .appendChild(
          option
        );
    }
  );
}


// ======================================================
// ATUALIZAR CAMPOS DA SAÍDA
// ======================================================

function updateExitFields() {

  const type =
    exitType.value;

  exitFlavorGroup
    .classList
    .toggle(
      "hidden",
      type !== "recheado"
    );

  exitNormalFields
    .classList
    .toggle(
      "hidden",
      !type ||
      type === "recheado"
    );

  if (
    type === "recheado"
  ) {

    populateFlavorSelect(
      exitFlavor,
      type
    );

    exitGrams.innerHTML =
      `<option value="">Selecione...</option>`;

    exitWeight.innerHTML =
      `<option value="">Selecione...</option>`;

  } else {

    exitFlavor.innerHTML =
      `<option value="">Selecione...</option>`;

    populateGramsSelect(
      exitGrams,
      type
    );

    updateExitWeights();
  }

  updateExitSelectionPreview();
}


// ======================================================
// PESOS DA SAÍDA
// ======================================================

function updateExitWeights() {

  const type =
    exitType.value;

  const grams =
    Number(
      exitGrams.value
    );

  exitWeight.innerHTML =
    `<option value="">Selecione...</option>`;

  if (
    !type ||
    !grams
  ) {
    return;
  }

  const weights =
    [
      ...new Set(
        products
          .filter(
            product =>
              product.tipo === type &&
              product.gramas === grams
          )
          .map(
            product =>
              product.peso_kg
          )
      )
    ];

  weights.forEach(
    weight => {

      const option =
        document.createElement(
          "option"
        );

      option.value =
        weight;

      option.textContent =
        `${weight} kg`;

      exitWeight.appendChild(
        option
      );
    }
  );
}


// ======================================================
// SABORES
// ======================================================

function populateFlavorSelect(
  select,
  type
) {

  select.innerHTML =
    `<option value="">Selecione...</option>`;

  const flavorProducts =
    products
      .filter(
        product =>
          product.tipo === type
      )
      .filter(
        product =>
          product.sabor
      )
      .sort(
        (a, b) =>
          a.sabor.localeCompare(
            b.sabor
          )
      );

  flavorProducts.forEach(
    product => {

      const option =
        document.createElement(
          "option"
        );

      option.value =
        product.id;

      if (
        product.is_revenda &&
        product.revendedor
      ) {

        option.textContent =
          `${product.sabor} — ${product.revendedor}`;

      } else {

        option.textContent =
          product.sabor;

      }

      select.appendChild(
        option
      );
    }
  );
}

// ======================================================
// GRAMATURAS
// ======================================================

function populateGramsSelect(
  select,
  type
) {

  select.innerHTML =
    `<option value="">Selecione...</option>`;

  if (!type) {
    return;
  }

  const grams =
    [
      ...new Set(
        products
          .filter(
            product =>
              product.tipo === type
          )
          .map(
            product =>
              product.gramas
          )
          .filter(Boolean)
          .sort(
            (a, b) =>
              a - b
          )
      )
    ];

  grams.forEach(
    gram => {

      const option =
        document.createElement(
          "option"
        );

      option.value =
        gram;

      option.textContent =
        `${gram}g`;

      select.appendChild(
        option
      );
    }
  );
}


// ======================================================
// ENCONTRAR PRODUTO DA PRODUÇÃO
// ======================================================
function getSelectedProductionProduct() {

  const type =
    productionType.value;

  if (!type) {
    return null;
  }

  if (type === "recheado") {

    const productId =
      Number(productionFlavor.value);

    if (!productId) {
      return null;
    }

    return (
      products.find(
        product =>
          Number(product.id) === productId
      ) || null
    );
  }

  const grams =
    Number(productionGrams.value);

  const weight =
    Number(productionWeight.value);

  if (!grams || !weight) {
    return null;
  }

  return (
    products.find(
      product =>
        product.tipo === type &&
        Number(product.gramas) === grams &&
        Number(product.peso_kg) === weight
    ) || null
  );
}

// ======================================================
// ENCONTRAR PRODUTO DA SAÍDA
// ======================================================
 function getSelectedExitProduct() {

  const type =
    exitType.value;

  if (!type) {
    return null;
  }

  if (type === "recheado") {

    const productId =
      Number(exitFlavor.value);

    if (!productId) {
      return null;
    }

    return (
      products.find(
        product =>
          Number(product.id) === productId
      ) || null
    );
  }

  const grams =
    Number(exitGrams.value);

  const weight =
    Number(exitWeight.value);

  if (!grams || !weight) {
    return null;
  }

  return (
    products.find(
      product =>
        product.tipo === type &&
        Number(product.gramas) === grams &&
        Number(product.peso_kg) === weight
    ) || null
  );
}


// ======================================================
// PREVIEW PRODUÇÃO
// ======================================================

function updateProductionSelectionPreview() {

  const product =
    getSelectedProductionProduct();

  if (!product) {

    productionProductPreview.textContent =
      "Selecione o produto";

    return;
  }

  productionProductPreview.textContent =
    getProductName(product);
}


// ======================================================
// PREVIEW SAÍDA
// ======================================================

function updateExitSelectionPreview() {

  const product =
    getSelectedExitProduct();

  if (!product) {

    exitProductPreview.textContent =
      "Selecione o produto";

    stockAfterExit.textContent =
      "-- unidades";

    return;
  }

  exitProductPreview.textContent =
    getProductName(product);

  updateExitStockPreview();
}


// ======================================================
// BUSCAR ESTOQUE
// ======================================================

async function loadStock() {

  const {
    data,
    error
  } =
    await supabaseClient.rpc(
      "listar_estoque_produtos"
    );

  if (error) {

    console.error(
      "Erro ao carregar estoque:",
      error
    );

    stockTotal.textContent =
      "Erro";

    return;
  }

  stockProducts =
    data || [];

  const total =
    stockProducts.reduce(
      (
        sum,
        item
      ) =>
        sum +
        Number(
          item.quantidade || 0
        ),
      0
    );

  stockTotal.textContent =
    total.toLocaleString(
      "pt-BR"
    );

  renderStockList();

  updateExitStockPreview();
}


// ======================================================
// LISTA DE ESTOQUE (ordenada do que mais tem pro que menos tem,
// sem tabela larga — evita precisar arrastar pro lado no celular)
// ======================================================

function renderStockList() {

  if (
    !stockList
  ) {
    return;
  }

  if (
    !stockProducts ||
    stockProducts.length === 0
  ) {

    stockList.innerHTML = `
      <p class="muted history-empty">
        Nenhum produto encontrado.
      </p>
    `;

    if (stockSearchMessage) {
      stockSearchMessage.textContent =
        "";
    }

    return;
  }

  const search =
    stockSearch
      ? stockSearch.value
          .trim()
          .toLowerCase()
      : "";

  const filteredProducts =
    stockProducts.filter(
      item => {

        if (!search) {
          return true;
        }

        const type =
          TYPE_NAMES[item.tipo] ||
          item.tipo ||
          "";

        const flavor =
          item.sabor ||
          "";

        const grams =
          item.gramas
            ? `${item.gramas}g`
            : "";

        const weight =
          item.peso_kg
            ? `${item.peso_kg}kg`
            : "";

        const searchableText =
          [
            type,
            item.tipo,
            flavor,
            grams,
            weight
          ]
            .join(" ")
            .toLowerCase();

        return searchableText.includes(
          search
        );
      }
    )
    // Do que mais tem no estoque para o que menos tem.
    .sort(
      (a, b) =>
        Number(b.quantidade || 0) -
        Number(a.quantidade || 0)
    );

  if (
    filteredProducts.length === 0
  ) {

    stockList.innerHTML = `
      <p class="muted history-empty">
        Nenhum produto encontrado para
        "<strong>${escapeHtml(
          search
        )}</strong>".
      </p>
    `;

    if (stockSearchMessage) {
      stockSearchMessage.textContent =
        "Nenhum produto encontrado.";
    }

    return;
  }

  stockList.innerHTML =
    filteredProducts
      .map(
        item => {

          let name =
            "-";

          const isRecheado =
            item.tipo ===
            "recheado";

          if (isRecheado) {

            name =
              item.sabor ||
              "-";

          } else {

            name =
              TYPE_NAMES[
                item.tipo
              ] ||
              item.tipo;
          }

          const grams =
            !isRecheado &&
            item.gramas
              ? `${item.gramas}g`
              : null;

          const weight =
            !isRecheado &&
            item.peso_kg
              ? `${item.peso_kg}kg`
              : null;

          const quantity =
            Number(
              item.quantidade || 0
            );

          const metaParts =
            [
              TYPE_NAMES[
                item.tipo
              ] ||
              item.tipo,
              grams,
              weight
            ].filter(Boolean);

          return `
            <div class="stock-item" data-produto-id="${
              item.produto_id
            }">

              <div class="stock-item-info">

                <strong class="stock-item-name">
                  ${escapeHtml(
                    name
                  )}
                </strong>

                <span class="muted stock-item-meta">
                  ${escapeHtml(
                    metaParts.join(" · ")
                  )}
                </span>

              </div>

              <div class="stock-item-side">

                <strong class="stock-item-qty">
                  ${quantity.toLocaleString(
                    "pt-BR"
                  )}
                </strong>

                ${
                  editStockMode &&
                  isAdmin()
                    ? `
                      <button
                        type="button"
                        class="secondary stock-edit-btn"
                        data-produto-id="${item.produto_id}"
                        data-current="${quantity}"
                        data-name="${escapeHtml(
                          name
                        )}"
                      >
                        ✏️ Editar
                      </button>
                    `
                    : ""
                }

              </div>

            </div>
          `;
        }
      )
      .join("");

  if (stockSearchMessage) {

    if (search) {

      stockSearchMessage.textContent =
        `${filteredProducts.length} produto(s) encontrado(s).`;

    } else {

      stockSearchMessage.textContent =
        "";
    }
  }

  document
    .querySelectorAll(
      ".stock-edit-btn"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            promptEditStock(
              Number(
                button.dataset.produtoId
              ),
              Number(
                button.dataset.current
              ),
              button.dataset.name
            );

          }
        );

      }
    );
}


// ======================================================
// ADMIN — EDITAR ESTOQUE MANUALMENTE
// ======================================================

editStockToggleBtn?.addEventListener(
  "click",
  () => {

    editStockMode =
      !editStockMode;

    editStockToggleBtn.textContent =
      editStockMode
        ? "✅ Concluir edição"
        : "✏️ Editar estoque";

    renderStockList();
  }
);

async function promptEditStock(
  produtoId,
  currentQuantity,
  productName
) {

  if (!isAdmin()) {
    return;
  }

  const novaQuantidadeStr =
    prompt(
      `Nova quantidade em estoque para "${productName}":\n\n` +
      `(quantidade atual: ${currentQuantity})`,
      String(
        currentQuantity
      )
    );

  if (
    novaQuantidadeStr === null
  ) {
    return;
  }

  const novaQuantidade =
    Number(
      novaQuantidadeStr
    );

  if (
    !Number.isInteger(
      novaQuantidade
    ) ||
    novaQuantidade < 0
  ) {

    alert(
      "Informe um número inteiro válido (0 ou maior)."
    );

    return;
  }

  const diferenca =
    novaQuantidade -
    currentQuantity;

  if (diferenca === 0) {
    return;
  }

  const confirmed =
    confirm(
      diferenca > 0
        ? `Isso vai ADICIONAR ${diferenca} pacote(s) ao estoque de "${productName}". Confirma?`
        : `Isso vai REMOVER ${Math.abs(
            diferenca
          )} pacote(s) do estoque de "${productName}". Confirma?`
    );

  if (!confirmed) {
    return;
  }

  const rpcName =
    diferenca > 0
      ? "registrar_deposito_unidades"
      : "registrar_retirada_unidades";

  const params =
    diferenca > 0
      ? {
          p_produto_id:
            produtoId,
          p_unidades:
            diferenca
        }
      : {
          p_produto_id:
            produtoId,
          p_unidades:
            Math.abs(
              diferenca
            ),
          p_motivo:
            "Ajuste administrativo de estoque"
        };

  const {
    error
  } =
    await supabaseClient.rpc(
      rpcName,
      params
    );

  if (error) {

    console.error(
      "Erro ao ajustar estoque:",
      error
    );

    alert(
      "Não foi possível ajustar o estoque: " +
      error.message
    );

    return;
  }

  await Promise.all([
    loadProducts(),
    loadStock(),
    refreshHistory()
  ]);
}


// ======================================================
// RESUMO DO DIA
// ======================================================

function renderDailySummary() {

  if (
    !dailySummaryKg
  ) {
    return;
  }

  const today =
    new Date();

  const isToday =
    date =>
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate();

  // Só produção "nossa" (não conta revenda nem saídas).
  const todayProductions =
    historyItems.filter(
      item =>
        item.kind === "producao" &&
        isToday(item.date)
    );

  if (
    todayProductions.length === 0
  ) {

    dailySummaryKg.textContent =
      "0 kg";

    dailySummaryRate.textContent =
      "0";

    dailySummaryTop.textContent =
      "-";

    dailySummaryPie.style.background =
      "var(--surface-muted)";

    dailySummaryLegend.innerHTML =
      "";

    dailySummaryByHour.innerHTML =
      "";

    dailySummaryEmpty?.classList.remove(
      "hidden"
    );

    return;
  }

  dailySummaryEmpty?.classList.add(
    "hidden"
  );

  // Total em kg (usa o peso do pacote quando o produto tem essa info).
  let totalKg = 0;

  // Quantidade produzida por hora do dia (0 a 23h).
  const byHour = {};

  // Quantidade produzida por produto (para o gráfico de pizza).
  const byProduct = {};

  todayProductions.forEach(
    item => {

      const raw =
        item.raw || {};

      const pesoKg =
        Number(
          raw.peso_kg || 0
        );

      if (pesoKg > 0) {

        totalKg +=
          pesoKg *
          item.quantity;
      }

      const hour =
        item.date.getHours();

      byHour[hour] =
        (byHour[hour] || 0) +
        item.quantity;

      const productKey =
        item.product;

      byProduct[productKey] =
        (byProduct[productKey] || 0) +
        item.quantity;
    }
  );

  dailySummaryKg.textContent =
    `${totalKg.toLocaleString(
      "pt-BR",
      { maximumFractionDigits: 1 }
    )} kg`;

  // Média de pacotes por hora com produção registrada.
  const hoursWithProduction =
    Object.keys(byHour).length ||
    1;

  const totalUnits =
    todayProductions.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );

  dailySummaryRate.textContent =
    Math.round(
      totalUnits /
      hoursWithProduction
    ).toLocaleString(
      "pt-BR"
    );

  // Produto campeão do dia.
  const topProductEntry =
    Object.entries(
      byProduct
    ).sort(
      (a, b) =>
        b[1] - a[1]
    )[0];

  dailySummaryTop.textContent =
    topProductEntry
      ? `${topProductEntry[0]} (${topProductEntry[1]})`
      : "-";

  // Gráfico de pizza (conic-gradient), sem depender de bibliotecas.
  const productEntries =
    Object.entries(
      byProduct
    ).sort(
      (a, b) =>
        b[1] - a[1]
    );

  let cumulativePercent = 0;

  const gradientParts = [];

  const legendParts = [];

  productEntries.forEach(
    ([name, qty], index) => {

      const percent =
        (qty / totalUnits) * 100;

      const color =
        PIE_COLORS[
          index % PIE_COLORS.length
        ];

      gradientParts.push(
        `${color} ${cumulativePercent}% ${
          cumulativePercent + percent
        }%`
      );

      cumulativePercent += percent;

      legendParts.push(`
        <div class="daily-summary-legend-item">
          <span class="daily-summary-legend-dot" style="background:${color}"></span>
          <span>${escapeHtml(
            name
          )} — ${qty} (${percent.toFixed(
            0
          )}%)</span>
        </div>
      `);
    }
  );

  dailySummaryPie.style.background =
    `conic-gradient(${gradientParts.join(", ")})`;

  dailySummaryLegend.innerHTML =
    legendParts.join("");

  // Barras simples de produção por hora.
  const hourEntries =
    Object.entries(byHour)
      .map(
        ([hour, qty]) => [
          Number(hour),
          qty
        ]
      )
      .sort(
        (a, b) =>
          a[0] - b[0]
      );

  const maxHourQty =
    Math.max(
      ...hourEntries.map(
        ([, qty]) => qty
      )
    );

  dailySummaryByHour.innerHTML =
    hourEntries
      .map(
        ([hour, qty]) => `
          <div class="daily-summary-hour-row">
            <span class="daily-summary-hour-label">${String(
              hour
            ).padStart(
              2,
              "0"
            )}h</span>
            <div class="daily-summary-hour-bar-wrap">
              <div
                class="daily-summary-hour-bar"
                style="width:${
                  maxHourQty
                    ? (qty / maxHourQty) * 100
                    : 0
                }%"
              ></div>
            </div>
            <span class="daily-summary-hour-qty">${qty}</span>
          </div>
        `
      )
      .join("");
}


// ======================================================
// PREVISÃO DE ESTOQUE NA SAÍDA
// ======================================================

function updateExitStockPreview() {

  const product =
    getSelectedExitProduct();

  if (!product) {

    stockAfterExit.textContent =
      "-- unidades";

    return;
  }

  const current =
    stockProducts.find(
      item =>
        Number(item.produto_id) ===
        Number(product.id)
    );

  if (!current) {

    stockAfterExit.textContent =
      "0 unidades";

    return;
  }

  stockAfterExit.textContent =
    `${Number(
      current.quantidade || 0
    ).toLocaleString(
      "pt-BR"
    )} unidades`;
}


// ======================================================
// HISTÓRICO
// ======================================================

async function refreshHistory() {

  const [
    productionResult,
    exitResult,
    revendaResult
  ] =
    await Promise.all([
      supabaseClient.rpc(
        "listar_historico_producoes"
      ),

      supabaseClient.rpc(
        "listar_historico_saidas"
      ),

      // Função nova (ver SQL). Se ainda não existir no banco,
      // ignoramos o erro para não travar o resto do histórico.
      supabaseClient.rpc(
        "listar_historico_revenda"
      )
    ]);

  if (
    productionResult.error
  ) {

    console.error(
      "Erro ao carregar histórico de produções:",
      productionResult.error
    );
  }

  if (
    exitResult.error
  ) {

    console.error(
      "Erro ao carregar histórico de saídas:",
      exitResult.error
    );
  }

  if (
    revendaResult.error
  ) {

    console.warn(
      "Histórico de revenda indisponível (função ainda não criada no banco?):",
      revendaResult.error
    );
  }

  const productionItems =
    (
      productionResult.data ||
      []
    ).map(
      item => ({

        id:
          item.id ??
          item.producao_id ??
          null,

        kind:
          "producao",

        date:
          new Date(
            item.created_at
          ),

        usuario:
  item.usuario_nome ||
  item.usuario_email ||
  "-",

        type:
          "Produção",

        quantity:
          Number(
            item.quantidade_total ||
            0
          ),

        product:
          formatHistoryProduct(
            item
          ),

        details:
          formatProductionDetails(
            item
          ),

        // Dados brutos, usados no resumo do dia.
        raw: item
      })
    );

  const exitItems =
    (
      exitResult.data ||
      []
    ).map(
      item => ({

        id:
          item.id ??
          item.saida_id ??
          null,

        kind:
          "saida",

        date:
          new Date(
            item.created_at
          ),

       usuario:
  item.usuario_nome ||
  item.usuario_email ||
          "-",

        type:
          "Saída",

        quantity:
          -Number(
            item.quantidade ||
            0
          ),

        product:
          formatHistoryProduct(
            item
          ),

        details:
          formatExitDetails(
            item
          ),

        raw: item
      })
    );

  const revendaItems =
    (
      revendaResult.data ||
      []
    ).map(
      item => ({

        id:
          item.id ??
          null,

        kind:
          "revenda",

        date:
          new Date(
            item.created_at
          ),

        usuario:
          item.usuario_nome ||
          item.usuario_email ||
          "-",

        type:
          "Revenda",

        quantity:
          Number(
            item.quantidade_total ||
            0
          ),

        product:
          formatHistoryProduct(
            item
          ),

        details:
          `${formatMovementQuantity(
            item
          )} · Revendedor: ${
            item.revendedor ||
            "-"
          }`,

        raw: item
      })
    );

  historyItems = [
    ...productionItems,
    ...exitItems,
    ...revendaItems
  ];

  historyItems.sort(
    (a, b) =>
      b.date.getTime() -
      a.date.getTime()
  );

  renderHistory();

  renderDailySummary();
}


// ======================================================
// RENDERIZAR HISTÓRICO
// ======================================================

function renderHistory() {

  if (
    !historyItems ||
    historyItems.length === 0
  ) {

    historyBody.innerHTML = `
      <p class="muted history-empty">
        Nenhuma movimentação registrada.
      </p>
    `;

    return;
  }

  const search =
    stockSearch
      ? stockSearch.value
          .trim()
          .toLowerCase()
      : "";

  let filteredHistory =
    historyItems;

  if (search) {

    filteredHistory =
      historyItems.filter(
        item => {

          const product =
            String(
              item.product ||
              ""
            ).toLowerCase();

          return product.includes(
            search
          );
        }
      );
  }

  const latest =
    filteredHistory.slice(
      0,
      30
    );

  if (
    latest.length === 0
  ) {

    historyBody.innerHTML = `
      <p class="muted history-empty">
        Nenhuma movimentação encontrada
        para
        "<strong>${escapeHtml(
          search
        )}</strong>".
      </p>
    `;

    return;
  }

  historyBody.innerHTML =
    latest
      .map(
        (item, index) => {

          const isProduction =
            item.type ===
            "Produção";

          const isRevenda =
            item.type ===
            "Revenda";

          const quantity =
            item.type === "Saída"
              ? `${item.quantity}`
              : `+${item.quantity}`;

          const icon =
            isRevenda
              ? "🔁"
              : isProduction
                ? "🟢"
                : "🔴";

          const canCancel =
            isAdmin() &&
            item.id !== null &&
            item.id !== undefined;

          return `
            <div class="history-item ${
              isProduction || isRevenda
                ? "history-item--in"
                : "history-item--out"
            }">

              <div class="history-item-icon">
                ${icon}
              </div>

              <div class="history-item-body">

                <div class="history-item-top">

                  <strong class="history-item-product">
                    ${escapeHtml(
                      item.product
                    )}
                  </strong>

                  <strong class="history-item-qty">
                    ${escapeHtml(
                      quantity
                    )}
                  </strong>

                </div>

                <div class="history-item-meta">
                  ${escapeHtml(
                    item.details
                  )}
                  · ${escapeHtml(
                    item.usuario
                  )}
                </div>

                <div class="history-item-date">
                  ${item.date.toLocaleString(
                    "pt-BR"
                  )}
                </div>

                ${
                  canCancel
                    ? `
                      <button
                        type="button"
                        class="secondary danger history-cancel-btn"
                        data-kind="${item.kind}"
                        data-id="${escapeHtml(
                          item.id
                        )}"
                      >
                        🗑️ Cancelar / apagar
                      </button>
                    `
                    : ""
                }

              </div>

            </div>
          `;
        }
      )
      .join("");

  document
    .querySelectorAll(
      ".history-cancel-btn"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            cancelMovement(
              button.dataset.kind,
              button.dataset.id
            );

          }
        );

      }
    );
}


// ======================================================
// CANCELAR / APAGAR MOVIMENTAÇÃO (admin)
// ======================================================

async function cancelMovement(
  kind,
  id
) {

  if (!isAdmin()) {
    return;
  }

  const rpcByKind = {
    producao:
      "cancelar_producao",
    saida:
      "cancelar_saida",
    revenda:
      "cancelar_producao_revenda"
  };

  const rpcName =
    rpcByKind[kind];

  if (!rpcName) {
    return;
  }

  const confirmed =
    confirm(
      "Tem certeza que deseja apagar este lançamento?\n\n" +
      "O estoque será atualizado automaticamente para refletir essa mudança.\n\n" +
      "Essa ação não pode ser desfeita."
    );

  if (!confirmed) {
    return;
  }

  const paramNameByKind = {
    producao:
      "p_producao_id",
    saida:
      "p_saida_id",
    revenda:
      "p_producao_revenda_id"
  };

  const params = {};

  params[
    paramNameByKind[kind]
  ] = Number(id);

  const {
    error
  } =
    await supabaseClient.rpc(
      rpcName,
      params
    );

  if (error) {

    console.error(
      "Erro ao cancelar movimentação:",
      error
    );

    alert(
      "Não foi possível apagar esse lançamento: " +
      error.message
    );

    return;
  }

  await Promise.all([
    loadStock(),
    refreshHistory()
  ]);
}


// ======================================================
// DETALHES DO HISTÓRICO (CAIXAS / UNIDADES AVULSAS)
// ======================================================

function formatMovementQuantity(
  item
) {

  const caixas =
    Number(
      item.caixas ||
      0
    );

  // O nome da coluna pode variar dependendo da função no banco
  // (unidades_avulsas, unidades, avulsas...). Testamos todas para
  // garantir que os pacotes avulsos sempre apareçam no histórico.
  const avulsas =
    Number(
      item.unidades_avulsas ??
      item.unidades_avulsa ??
      item.unidades ??
      item.avulsas ??
      item.quantidade_avulsa ??
      0
    );

  if (
    avulsas > 0 &&
    caixas > 0
  ) {

    return (
      `${caixas} caixa(s) + ${avulsas} un. avulsa(s)`
    );
  }

  if (avulsas > 0) {

    return (
      `${avulsas} unidade(s) avulsa(s)`
    );
  }

  return (
    `${caixas} caixa(s)`
  );
}

function formatProductionDetails(
  item
) {

  return formatMovementQuantity(
    item
  );
}

function formatExitDetails(
  item
) {

  const quantityText =
    formatMovementQuantity(
      item
    );

  return (
    item.motivo
      ? `${quantityText} · ${item.motivo}`
      : quantityText
  );
}


// ======================================================
// PRODUTO DO HISTÓRICO
// ======================================================

function formatHistoryProduct(item) {

  if (!item || !item.tipo) {
    return "Produto antigo";
  }

  const tipo = String(item.tipo).trim();

  if (tipo.toLowerCase() === "recheado") {

    if (item.sabor) {
      return `Pão de Queijo Recheado - ${item.sabor}`;
    }

    return "Pão de Queijo Recheado";
  }

  let produto = `Pão de Queijo ${tipo}`;

  if (item.gramas) {
    produto += ` - ${item.gramas}g`;
  }

  if (item.peso_kg) {
    produto += ` - ${item.peso_kg}kg`;
  }

  return produto;
}

// ======================================================
// LISTAR USUÁRIOS
// ======================================================

async function refreshUsers() {

  if (!isAdmin()) {
    return;
  }

  usersBody.innerHTML = `
    <tr>
      <td colspan="4">
        Carregando usuários...
      </td>
    </tr>
  `;

  const {
    data,
    error
  } =
    await supabaseClient.rpc(
      "listar_usuarios"
    );

  if (error) {

    console.error(
      "Erro ao carregar usuários:",
      error
    );

    showMessage(
      usersMessage,
      error.message,
      true
    );

    return;
  }

  if (
    !data ||
    data.length === 0
  ) {

    usersBody.innerHTML = `
      <tr>
        <td colspan="4">
          Nenhum usuário encontrado.
        </td>
      </tr>
    `;

    return;
  }

  usersBody.innerHTML =
    data
      .map(
        user => {

          const isCurrentUser =
            user.id ===
            currentUser.id;

          let actionHtml =
            "";

          if (
            isCurrentUser
          ) {

            actionHtml = `
              <span class="muted">
                Usuário atual
              </span>
            `;

          } else {

            const roleButton =
              isAdminRole(
                user.cargo
              )

                ? `
                  <button
                    type="button"
                    class="secondary change-role-btn"
                    data-user-id="${escapeHtml(
                      user.id
                    )}"
                    data-new-role="funcionario"
                  >
                    Tornar funcionário
                  </button>
                `

                : `
                  <button
                    type="button"
                    class="change-role-btn"
                    data-user-id="${escapeHtml(
                      user.id
                    )}"
                    data-new-role="admin"
                  >
                    Tornar administrador
                  </button>
                `;

            actionHtml = `
              <div class="user-actions">

                ${roleButton}

                <button
                  type="button"
                  class="secondary change-password-btn"
                  data-user-id="${escapeHtml(
                    user.id
                  )}"
                  data-user-name="${escapeHtml(
                    user.nome ||
                    user.email ||
                    "usuário"
                  )}"
                >
                  Alterar senha
                </button>

                <button
                  type="button"
                  class="delete-user-btn"
                  data-user-id="${escapeHtml(
                    user.id
                  )}"
                  data-user-name="${escapeHtml(
                    user.nome ||
                    user.email ||
                    "usuário"
                  )}"
                >
                  Excluir
                </button>

              </div>
            `;
          }

          return `
            <tr>

              <td>
                ${escapeHtml(
                  user.nome ||
                  "-"
                )}
              </td>

              <td>
                ${escapeHtml(
                  user.email ||
                  "-"
                )}
              </td>

              <td>
                ${
                  isAdminRole(
                    user.cargo
                  )
                    ? "👑 Administrador"
                    : "👷 Funcionário"
                }
              </td>

              <td>
                ${actionHtml}
              </td>

            </tr>
          `;
        }
      )
      .join("");


  // ====================================================
  // BOTÕES DE ALTERAR CARGO
  // ====================================================

  document
    .querySelectorAll(
      ".change-role-btn"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            changeUserRole(
              button.dataset.userId,
              button.dataset.newRole
            );

          }
        );

      }
    );


  // ====================================================
  // BOTÕES DE ALTERAR SENHA
  // ====================================================

  document
    .querySelectorAll(
      ".change-password-btn"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            changeUserPassword(
              button.dataset.userId,
              button.dataset.userName
            );

          }
        );

      }
    );


  // ====================================================
  // BOTÕES DE EXCLUIR
  // ====================================================

  document
    .querySelectorAll(
      ".delete-user-btn"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            deleteUser(
              button.dataset.userId,
              button.dataset.userName
            );

          }
        );

      }
    );
}


// ======================================================
// ALTERAR CARGO
// ======================================================

async function changeUserRole(
  userId,
  newRole
) {

  if (!isAdmin()) {

    showMessage(
      usersMessage,
      "Você não tem permissão.",
      true
    );

    return;
  }

  const roleName =
    newRole ===
    "admin"
      ? "administrador"
      : "funcionário";

  if (
    !confirm(
      `Tem certeza que deseja tornar este usuário ${roleName}?`
    )
  ) {
    return;
  }

  showMessage(
    usersMessage,
    "Alterando cargo..."
  );

  // O banco espera "administrador" (por extenso) ou "funcionario".
  const cargoParaBanco =
    newRole === "admin"
      ? "administrador"
      : "funcionario";

  const {
    error
  } =
    await supabaseClient.rpc(
      "alterar_cargo_usuario",
      {
        p_usuario_id:
          userId,

        p_novo_cargo:
          cargoParaBanco
      }
    );

  if (error) {

    console.error(
      "Erro ao alterar cargo:",
      error
    );

    showMessage(
      usersMessage,
      error.message,
      true
    );

    return;
  }

  showMessage(
    usersMessage,
    "Cargo alterado com sucesso."
  );

  await refreshUsers();
}


// ======================================================
// EXCLUIR USUÁRIO
// ======================================================

async function deleteUser(
  userId,
  userName
) {

  if (!isAdmin()) {

    showMessage(
      usersMessage,
      "Você não tem permissão.",
      true
    );

    return;
  }

  if (
    userId ===
    currentUser.id
  ) {

    showMessage(
      usersMessage,
      "Você não pode excluir o próprio usuário.",
      true
    );

    return;
  }

  const confirmed =
    confirm(
      `Tem certeza que deseja excluir o usuário "${userName}"?\n\nEssa ação não poderá ser desfeita.`
    );

  if (!confirmed) {
    return;
  }

  showMessage(
    usersMessage,
    "Excluindo usuário..."
  );

  try {

    const authHeaders =
      await getAuthHeaders();

    const {
      data,
      error
    } =
      await supabaseClient.functions.invoke(
        "excluir-usuarios",
        {
          headers:
            authHeaders,

          body: {
            usuario_id:
              userId
          }
        }
      );

    if (error) {
      throw error;
    }

    if (
      !data?.success
    ) {

      throw new Error(
        data?.error ||
        "Não foi possível excluir o usuário."
      );
    }

    showMessage(
      usersMessage,
      "Usuário excluído com sucesso!"
    );

    await refreshUsers();

  } catch (error) {

    console.error(
      "Erro ao excluir usuário:",
      error
    );

    showMessage(
      usersMessage,
      error.message ||
        "Não foi possível excluir o usuário.",
      true
    );
  }
}


// ======================================================
// ALTERAR SENHA
// ======================================================

async function changeUserPassword(
  userId,
  userName
) {

  if (!isAdmin()) {

    showMessage(
      usersMessage,
      "Você não tem permissão.",
      true
    );

    return;
  }

  const novaSenha =
    prompt(
      `Digite a nova senha para ${userName}:\n\nMínimo de 6 caracteres.`
    );

  if (
    novaSenha ===
    null
  ) {
    return;
  }

  if (
    novaSenha.length < 6
  ) {

    showMessage(
      usersMessage,
      "A senha precisa ter pelo menos 6 caracteres.",
      true
    );

    return;
  }

  const confirmar =
    prompt(
      "Digite novamente a nova senha para confirmar:"
    );

  if (
    confirmar ===
    null
  ) {
    return;
  }

  if (
    novaSenha !==
    confirmar
  ) {

    showMessage(
      usersMessage,
      "As senhas não são iguais.",
      true
    );

    return;
  }

  showMessage(
    usersMessage,
    "Alterando senha..."
  );

  try {

    const authHeaders =
      await getAuthHeaders();

    const {
      data,
      error
    } =
      await supabaseClient.functions.invoke(
        "alterar-senha",
        {
          headers:
            authHeaders,

          body: {
            usuario_id:
              userId,

            nova_senha:
              novaSenha
          }
        }
      );

    if (error) {

      showMessage(
        usersMessage,
        error.message,
        true
      );

      return;
    }

    if (
      !data?.success
    ) {

      showMessage(
        usersMessage,
        data?.error ||
          "Não foi possível alterar a senha.",
        true
      );

      return;
    }

    showMessage(
      usersMessage,
      "Senha alterada com sucesso!"
    );

  } catch (error) {

    console.error(
      "Erro ao alterar senha:",
      error
    );

    showMessage(
      usersMessage,
      error.message ||
        "Não foi possível alterar a senha.",
      true
    );
  }
}


// ======================================================
// HEADERS DA SESSÃO
// ======================================================

async function getAuthHeaders() {

  const {
    data: {
      session
    }
  } =
    await supabaseClient.auth
      .getSession();

  if (!session) {

    throw new Error(
      "Sessão do usuário não encontrada."
    );
  }

  return {
    Authorization:
      `Bearer ${session.access_token}`
  };
}


// ======================================================
// ADMIN — CARREGAR PRODUTOS
// ======================================================

async function refreshAdminProducts() {

  if (!isAdmin()) {
    return;
  }

  productsBody.innerHTML = `
    <tr>
      <td colspan="7">
        Carregando produtos...
      </td>
    </tr>
  `;

  const {
    data,
    error
  } =
    await supabaseClient.rpc(
      "listar_produtos_admin"
    );

  if (error) {

    console.error(
      "Erro ao carregar produtos:",
      error
    );

    showMessage(
      productsMessage,
      error.message,
      true
    );

    return;
  }

  renderAdminProducts(
    data || []
  );
}


// ======================================================
// ADMIN — TABELA DE PRODUTOS
// ======================================================

function renderAdminProducts(
  data
) {

  if (
    data.length === 0
  ) {

    productsBody.innerHTML = `
      <tr>
        <td colspan="7">
          Nenhum produto cadastrado.
        </td>
      </tr>
    `;

    return;
  }

  productsBody.innerHTML =
    data
      .map(
        product => {

          const isRecheado =
            product.tipo ===
            "recheado";

          let produto;

          if (isRecheado) {

            produto =
              product.sabor || "-";

          } else {

            produto = "-";

          }

          /*
           * Produto de revenda
           */
          if (
            product.is_revenda &&
            product.revendedor
          ) {

            if (produto === "-") {

              produto =
                `Revenda: ${product.revendedor}`;

            } else {

              produto +=
                ` — Revenda: ${product.revendedor}`;

            }

          }

          const grams =
            isRecheado
              ? "-"
              : `${product.gramas}g`;

          const weight =
            isRecheado
              ? "-"
              : `${product.peso_kg}kg`;

          return `
            <tr>

              <td>
                ${escapeHtml(
                  TYPE_NAMES[
                    product.tipo
                  ] ||
                  product.tipo
                )}
              </td>

              <td>
                ${escapeHtml(
                  produto
                )}
              </td>

              <td>
                ${grams}
              </td>

              <td>
                ${weight}
              </td>

              <td>
                ${product.unidades_por_caixa}
              </td>

              <td>
                ${
                  product.ativo
                    ? "🟢 Ativo"
                    : "🔴 Inativo"
                }
              </td>

              <td>

                <button
                  type="button"
                  class="secondary admin-product-toggle"
                  data-id="${product.id}"
                  data-active="${product.ativo}"
                >
                  ${
                    product.ativo
                      ? "Desativar"
                      : "Ativar"
                  }
                </button>

                <button
                  type="button"
                  class="secondary admin-product-edit"
                  data-id="${product.id}"
                  data-type="${product.tipo}"
                  data-flavor="${escapeHtml(
                    product.sabor || ""
                  )}"
                  data-grams="${product.gramas || ""}"
                  data-weight="${product.peso_kg || ""}"
                  data-units="${product.unidades_por_caixa}"
                >
                  Editar
                </button>

              </td>

            </tr>
          `;
        }
      )
      .join("");


  document
    .querySelectorAll(
      ".admin-product-toggle"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            toggleProduct(
              Number(
                button.dataset.id
              ),
              button.dataset.active !==
                "true"
            );

          }
        );

      }
    );


  document
    .querySelectorAll(
      ".admin-product-edit"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            editProduct(
              Number(
                button.dataset.id
              ),
              button.dataset.type,
              button.dataset.flavor,
              button.dataset.grams,
              button.dataset.weight,
              button.dataset.units
            );

          }
        );

      }
    );
}

// ======================================================
// ADMIN — CRIAR PRODUTO
// ======================================================

createProductForm.addEventListener(
  "submit",
  async event => {

    event.preventDefault();

    if (!isAdmin()) {

      showMessage(
        productMessage,
        "Você não tem permissão.",
        true
      );

      return;
    }

    const tipo =
      newProductType.value;

    const sabor =
      newProductFlavor.value.trim();

    const gramas =
      Number(
        newProductGrams.value
      ) || null;

    const peso =
      Number(
        newProductWeight.value
      ) || null;

    let unidades =
      Number(
        newProductUnits.value
      );
const isRevenda =
  newProductIsRevenda.value === "true";

const revendedor =
  newProductRevendedor.value.trim();
    if (!tipo) {

      showMessage(
        productMessage,
        "Selecione o tipo.",
        true
      );

      return;
    }

    if (
      tipo ===
      "recheado"
    ) {

      if (!sabor) {

        showMessage(
          productMessage,
          "Informe o sabor.",
          true
        );

        return;
      }

      unidades = 20;

    } else {

      if (
        !gramas ||
        !peso
      ) {

        showMessage(
          productMessage,
          "Informe gramatura e peso.",
          true
        );

        return;
      }

      if (
        !Number.isInteger(
          unidades
        ) ||
        unidades <= 0
      ) {

        showMessage(
          productMessage,
          "Informe unidades por caixa.",
          true
        );

        return;
      }
    }
if (
  isRevenda &&
  !revendedor
) {

  showMessage(
    productMessage,
    "Informe o nome do revendedor.",
    true
  );

  return;
}
    showMessage(
      productMessage,
      "Cadastrando produto..."
    );
console.log(
  "DADOS ENVIADOS PARA ADICIONAR PRODUTO:",
  {
    tipo,
    sabor,
    gramas,
    peso,
    unidades,
    isRevenda,
    revendedor
  }
);
 const {
  data,
  error
} =
  await supabaseClient.rpc(
    "adicionar_produto",
    {
      p_tipo:
        tipo,

      p_sabor:
        tipo === "recheado"
          ? sabor
          : null,

      p_gramas:
        tipo === "recheado"
          ? null
          : gramas,

      p_peso_kg:
        tipo === "recheado"
          ? null
          : peso,

      p_unidades_por_caixa:
        unidades,

      p_is_revenda:
        isRevenda,

      p_revendedor:
        isRevenda
          ? revendedor
          : null
    }
  );
    if (error) {

      console.error(
        "Erro ao cadastrar produto:",
        error
      );

      showMessage(
        productMessage,
        error.message,
        true
      );

      return;
    }

    console.log(
      "Produto criado:",
      data
    );

    showMessage(
      productMessage,
      "Produto cadastrado com sucesso!"
    );

   createProductForm.reset();

updateAdminProductFields();

updateAdminRevendaField();

    await Promise.all([
      loadProducts(),
      loadStock(),
      refreshAdminProducts()
    ]);
  }
);


// ======================================================
// CAMPOS DO CADASTRO ADMIN
// ======================================================

function updateAdminProductFields() {

  const type =
    newProductType.value;

  const recheado =
    type === "recheado";

  newProductFlavorGroup
    .classList
    .toggle(
      "hidden",
      !recheado
    );

  newProductNormalFields
    .classList
    .toggle(
      "hidden",
      !type ||
      recheado
    );

  if (recheado) {

    newProductUnits.value =
      20;

    newProductUnits.readOnly =
      true;

  } else {

    newProductUnits.readOnly =
      false;

    if (
      newProductUnits.value ===
      "20"
    ) {

      newProductUnits.value =
        "";
    }
  }
}
 function updateAdminRevendaField() {

  const isRevenda =
    newProductIsRevenda.value === "true";

  newProductRevendedorGroup
    .classList
    .toggle(
      "hidden",
      !isRevenda
    );

  if (!isRevenda) {

    newProductRevendedor.value =
      "";

  }

}


newProductIsRevenda.addEventListener(
  "change",
  updateAdminRevendaField
);

// ======================================================
// ADMIN — ATIVAR / DESATIVAR
// ======================================================

async function toggleProduct(
  productId,
  active
) {

  const action =
    active
      ? "ativar"
      : "desativar";

  if (
    !confirm(
      `Deseja ${action} este produto?`
    )
  ) {
    return;
  }

  showMessage(
    productsMessage,
    `${active ? "Ativando" : "Desativando"} produto...`
  );

  const {
    error
  } =
    await supabaseClient.rpc(
      "alterar_status_produto",
      {
        p_produto_id:
          productId,

        p_ativo:
          active
      }
    );

  if (error) {

    showMessage(
      productsMessage,
      error.message,
      true
    );

    return;
  }

  showMessage(
    productsMessage,
    `Produto ${active ? "ativado" : "desativado"} com sucesso.`
  );

  await Promise.all([
    loadProducts(),
    loadStock(),
    refreshAdminProducts()
  ]);
}


// ======================================================
// ADMIN — EDITAR PRODUTO
// ======================================================

async function editProduct(
  productId,
  type,
  flavor,
  grams,
  weight,
  units
) {

  let newFlavor =
    flavor || "";

  let newGrams =
    grams || "";

  let newWeight =
    weight || "";

  let newUnits =
    units || "";


  if (
    type ===
    "recheado"
  ) {

    newFlavor =
      prompt(
        "Novo sabor:",
        newFlavor
      );

    if (
      newFlavor ===
      null
    ) {
      return;
    }

    newUnits =
      20;

  } else {

    newGrams =
      prompt(
        "Nova gramatura:",
        newGrams
      );

    if (
      newGrams ===
      null
    ) {
      return;
    }

    newWeight =
      prompt(
        "Novo peso (1 ou 2 kg):",
        newWeight
      );

    if (
      newWeight ===
      null
    ) {
      return;
    }

    newUnits =
      prompt(
        "Novas unidades por caixa:",
        newUnits
      );

    if (
      newUnits ===
      null
    ) {
      return;
    }
  }


  const {
    error
  } =
    await supabaseClient.rpc(
      "editar_produto",
      {
        p_produto_id:
          productId,

        p_sabor:
          type === "recheado"
            ? newFlavor.trim()
            : null,

        p_gramas:
          type === "recheado"
            ? null
            : Number(
                newGrams
              ),

        p_peso_kg:
          type === "recheado"
            ? null
            : Number(
                newWeight
              ),

        p_unidades_por_caixa:
          Number(
            newUnits
          )
      }
    );

  if (error) {

    showMessage(
      productsMessage,
      error.message,
      true
    );

    return;
  }

  showMessage(
    productsMessage,
    "Produto atualizado com sucesso."
  );

  await Promise.all([
    loadProducts(),
    loadStock(),
    refreshAdminProducts()
  ]);
}
// ======================================================
// ADMIN — LIMPAR HISTÓRICO DE PRODUÇÃO
// ======================================================

async function clearProductionHistory() {

  if (!isAdmin()) {

    showMessage(
      clearProductionMessage,
      "Você não tem permissão.",
      true
    );

    return;
  }

  const confirmed =
    confirm(
      "⚠️ ATENÇÃO!\n\n" +
      "Isso irá apagar TODO o histórico de PRODUÇÃO.\n\n" +
      "O estoque NÃO será alterado.\n" +
      "O histórico de SAÍDAS NÃO será alterado.\n\n" +
      "Deseja realmente continuar?"
    );

  if (!confirmed) {
    return;
  }

  showMessage(
    clearProductionMessage,
    "Limpando histórico..."
  );

  const {
    data,
    error
  } =
    await supabaseClient.rpc(
      "limpar_historico_producoes"
    );

  if (error) {

    console.error(
      "Erro ao limpar histórico de produção:",
      error
    );

    showMessage(
      clearProductionMessage,
      error.message,
      true
    );

    return;
  }

  showMessage(
    clearProductionMessage,
    `${data || 0} produção(ões) apagada(s) com sucesso.`
  );

  await refreshHistory();
}

// ======================================================
// LOGIN
// ======================================================

loginForm.addEventListener(
  "submit",
  async event => {

    event.preventDefault();

    showMessage(
      loginMessage,
      "Entrando..."
    );

    const email =
      document
        .getElementById(
          "email"
        )
        .value
        .trim();

    const password =
      document
        .getElementById(
          "password"
        )
        .value;

    const {
      error
    } =
      await supabaseClient.auth
        .signInWithPassword(
          {
            email,
            password
          }
        );

    if (error) {

      console.error(
        "Erro no login:",
        error
      );

      showMessage(
        loginMessage,
        error.message,
        true
      );

      return;
    }

    loginForm.reset();

    const {
      data: {
        user
      }
    } =
      await supabaseClient.auth
        .getUser();

    currentUser =
      user;

    await loadApp();
  }
);


// ======================================================
// LOGOUT
// ======================================================

logoutBtn.addEventListener(
  "click",
  async () => {

    const {
      error
    } =
      await supabaseClient.auth
        .signOut();

    if (error) {

      console.error(
        "Erro ao sair:",
        error
      );

      return;
    }

    currentUser =
      null;

    currentProfile =
      null;

    products =
      [];

    stockProducts =
      [];

    historyItems =
      [];

    app.classList.add(
      "hidden"
    );

    logoutBtn.classList.add(
      "hidden"
    );

    userRole.classList.add(
      "hidden"
    );

    adminPanel.classList.add(
      "hidden"
    );

    editStockToggleBtn?.classList.add(
      "hidden"
    );

    editStockMode = false;

    loginCard.classList.remove(
      "hidden"
    );
  }
);

// ======================================================
// REGISTRAR PRODUÇÃO
// ======================================================

productionForm.addEventListener(
  "submit",
  async event => {

    event.preventDefault();

    const product =
      getSelectedProductionProduct();

    if (!product) {

      showMessage(
        productionMessage,
        "Selecione o produto.",
        true
      );

      return;
    }

    const caixas =
      Number(
        boxesInput.value ||
        0
      );

    const unidades =
      Number(
        productionUnits.value ||
        0
      );

    if (
      !Number.isInteger(caixas) ||
      caixas < 0 ||
      !Number.isInteger(unidades) ||
      unidades < 0
    ) {

      showMessage(
        productionMessage,
        "Informe quantidades válidas de caixas e/ou unidades.",
        true
      );

      return;
    }

    if (
      caixas === 0 &&
      unidades === 0
    ) {

      showMessage(
        productionMessage,
        "Informe ao menos uma caixa ou unidade avulsa.",
        true
      );

      return;
    }

    const unidadesPorCaixa =
      Number(
        product.unidades_por_caixa || 0
      );

    const totalPacotes =
      (caixas * unidadesPorCaixa) +
      unidades;

    const isRevenda =
      productionIsRevenda?.checked;

    const revendedor =
      productionRevendaNome?.value
        .trim() || "";

    if (
      isRevenda &&
      !revendedor
    ) {

      showMessage(
        productionMessage,
        "Informe o nome do revendedor.",
        true
      );

      return;
    }

    // Confirmação com o total de pacotes antes de gravar.
    const partesConfirmacao = [];

    if (caixas > 0) {

      partesConfirmacao.push(
        `${caixas} caixa(s)` +
        (
          unidadesPorCaixa
            ? ` de ${unidadesPorCaixa} un. (${caixas * unidadesPorCaixa})`
            : ""
        )
      );
    }

    if (unidades > 0) {

      partesConfirmacao.push(
        `${unidades} avulso(s)`
      );
    }

    const confirmMessage =
      (
        isRevenda
          ? `Você vai colocar no estoque de revenda (${revendedor}): `
          : "Você vai colocar no estoque: "
      ) +
      partesConfirmacao.join(" + ") +
      ` = ${totalPacotes} pacote(s) no total.\n\nConfirma?`;

    if (
      !confirm(
        confirmMessage
      )
    ) {
      return;
    }

    showMessage(
      productionMessage,
      "Registrando produção..."
    );

    if (isRevenda) {

      // Revenda continua sendo estoque normal, mas com um produto
      // separado pelo nome do revendedor (ex.: Requeijão — João).
      // Assim ele aparece na mesma lista de produtos/estoque.
      const result =
        await supabaseClient.rpc(
          "registrar_producao_revenda",
          {
            p_produto_id:
              product.id,

            p_caixas:
              caixas,

            p_unidades_avulsas:
              unidades,

            p_revendedor:
              revendedor
          }
        );

      if (result.error) {

        console.error(
          "Erro ao registrar produção de revenda:",
          result.error
        );

        showMessage(
          productionMessage,
          result.error.message,
          true
        );

        return;
      }

    } else {

      if (caixas > 0) {

        const result =
          await supabaseClient.rpc(
            "registrar_deposito",
            {
              p_produto_id:
                product.id,

              p_caixas:
                caixas
            }
          );

        if (result.error) {

          console.error(
            "Erro ao registrar produção (caixas):",
            result.error
          );

          showMessage(
            productionMessage,
            result.error.message,
            true
          );

          return;
        }
      }

      if (unidades > 0) {

        const result =
          await supabaseClient.rpc(
            "registrar_deposito_unidades",
            {
              p_produto_id:
                product.id,

              p_unidades:
                unidades
            }
          );

        if (result.error) {

          console.error(
            "Erro ao registrar produção (unidades):",
            result.error
          );

          showMessage(
            productionMessage,
            result.error.message,
            true
          );

          return;
        }
      }
    }

    productionForm.reset();

    productionFlavorGroup
      .classList
      .add(
        "hidden"
      );

    productionNormalFields
      .classList
      .add(
        "hidden"
      );

    productionRevendaGroup
      ?.classList
      .add(
        "hidden"
      );

    productionRevendaHint
      ?.classList
      .add(
        "hidden"
      );

    productionProductPreview.textContent =
      "Selecione o produto";

    showMessage(
      productionMessage,
      "Produção registrada com sucesso!"
    );

    await Promise.all([
      loadProducts(),
      loadStock(),
      refreshHistory()
    ]);
  }
);


// ======================================================
// REGISTRAR SAÍDA
// ======================================================

exitForm.addEventListener(
  "submit",
  async event => {

    event.preventDefault();

    const product =
      getSelectedExitProduct();

    const reason =
      exitReasonInput.value;

    if (!product) {

      showMessage(
        exitMessage,
        "Selecione o produto.",
        true
      );

      return;
    }

    const caixas =
      Number(
        exitBoxes.value ||
        0
      );

    const unidades =
      Number(
        exitUnits.value ||
        0
      );

    if (
      !Number.isInteger(caixas) ||
      caixas < 0 ||
      !Number.isInteger(unidades) ||
      unidades < 0
    ) {

      showMessage(
        exitMessage,
        "Informe quantidades válidas de caixas e/ou unidades.",
        true
      );

      return;
    }

    if (
      caixas === 0 &&
      unidades === 0
    ) {

      showMessage(
        exitMessage,
        "Informe ao menos uma caixa ou unidade avulsa.",
        true
      );

      return;
    }

    const unidadesPorCaixaSaida =
      Number(
        product.unidades_por_caixa || 0
      );

    const totalPacotesSaida =
      (caixas * unidadesPorCaixaSaida) +
      unidades;

    const partesConfirmacaoSaida = [];

    if (caixas > 0) {

      partesConfirmacaoSaida.push(
        `${caixas} caixa(s)` +
        (
          unidadesPorCaixaSaida
            ? ` de ${unidadesPorCaixaSaida} un. (${caixas * unidadesPorCaixaSaida})`
            : ""
        )
      );
    }

    if (unidades > 0) {

      partesConfirmacaoSaida.push(
        `${unidades} avulso(s)`
      );
    }

    const confirmExitMessage =
      "Você vai retirar do estoque: " +
      partesConfirmacaoSaida.join(" + ") +
      ` = ${totalPacotesSaida} pacote(s) no total.\n\nConfirma?`;

    if (
      !confirm(
        confirmExitMessage
      )
    ) {
      return;
    }

    showMessage(
      exitMessage,
      "Registrando saída..."
    );

    if (caixas > 0) {

      const result =
        await supabaseClient.rpc(
          "registrar_retirada",
          {
            p_produto_id:
              product.id,

            p_caixas:
              caixas,

            p_motivo:
              reason
          }
        );

      if (result.error) {

        console.error(
          "Erro ao registrar saída (caixas):",
          result.error
        );

        showMessage(
          exitMessage,
          result.error.message,
          true
        );

        await loadStock();

        return;
      }
    }

    if (unidades > 0) {

      const result =
        await supabaseClient.rpc(
          "registrar_retirada_unidades",
          {
            p_produto_id:
              product.id,

            p_unidades:
              unidades,

            p_motivo:
              reason
          }
        );

      if (result.error) {

        console.error(
          "Erro ao registrar saída (unidades):",
          result.error
        );

        showMessage(
          exitMessage,
          result.error.message,
          true
        );

        await loadStock();

        return;
      }
    }

    exitForm.reset();

    exitProductPreview.textContent =
      "Selecione o produto";

    stockAfterExit.textContent =
      "-- unidades";

    showMessage(
      exitMessage,
      "Saída registrada com sucesso!"
    );

    await Promise.all([
      loadProducts(),
      loadStock(),
      refreshHistory()
    ]);
  }
);


// ======================================================
// CRIAR USUÁRIO
// ======================================================

createUserForm.addEventListener(
  "submit",
  async event => {

    event.preventDefault();

    if (!isAdmin()) {

      showMessage(
        createUserMessage,
        "Você não tem permissão.",
        true
      );

      return;
    }

    const nome =
      newUserName.value.trim();

    const email =
      newUserEmail.value
        .trim()
        .toLowerCase();

    const senha =
      newUserPassword.value;

    const cargo =
      newUserRole.value;

    if (
      !nome ||
      !email ||
      !senha
    ) {

      showMessage(
        createUserMessage,
        "Preencha todos os campos.",
        true
      );

      return;
    }

    if (
      senha.length < 6
    ) {

      showMessage(
        createUserMessage,
        "A senha precisa ter pelo menos 6 caracteres.",
        true
      );

      return;
    }

    showMessage(
      createUserMessage,
      "Criando usuário..."
    );

    try {

      const authHeaders =
        await getAuthHeaders();

      const {
        data,
        error
      } =
        await supabaseClient
          .functions
          .invoke(
            "criar-usuario",
            {
              headers:
                authHeaders,

              body: {
                nome,
                email,
                senha,
                cargo
              }
            }
          );

      if (error) {
        throw error;
      }

      if (
        !data?.success
      ) {

        throw new Error(
          data?.error ||
          "Não foi possível criar o usuário."
        );
      }

      showMessage(
        createUserMessage,
        "Usuário criado com sucesso!"
      );

      createUserForm.reset();

      await refreshUsers();

    } catch (error) {

      console.error(
        "Erro ao criar usuário:",
        error
      );

      showMessage(
        createUserMessage,
        error.message ||
          "Não foi possível criar o usuário.",
        true
      );
    }
  }
);


// ======================================================
// EVENTOS DOS PRODUTOS
// ======================================================
clearProductionBtn.addEventListener(
  "click",
  clearProductionHistory
);
productionType.addEventListener(
  "change",
  updateProductionFields
);

productionFlavor.addEventListener(
  "change",
  updateProductionSelectionPreview
);

productionGrams.addEventListener(
  "change",
  () => {

    updateProductionWeights();

    updateProductionSelectionPreview();
  }
);

productionWeight.addEventListener(
  "change",
  updateProductionSelectionPreview
);


exitType.addEventListener(
  "change",
  updateExitFields
);

exitFlavor.addEventListener(
  "change",
  updateExitSelectionPreview
);

exitGrams.addEventListener(
  "change",
  () => {

    updateExitWeights();

    updateExitSelectionPreview();
  }
);

exitWeight.addEventListener(
  "change",
  updateExitSelectionPreview
);


exitBoxes.addEventListener(
  "input",
  updateExitStockPreview
);

exitUnits.addEventListener(
  "input",
  updateExitStockPreview
);


newProductType.addEventListener(
  "change",
  updateAdminProductFields
);

productionIsRevenda?.addEventListener(
  "change",
  () => {

    const checked =
      productionIsRevenda.checked;

    productionRevendaGroup
      .classList
      .toggle(
        "hidden",
        !checked
      );

    productionRevendaHint
      .classList
      .toggle(
        "hidden",
        !checked
      );

    productionRevendaNome.required =
      checked;
  }
);


// ======================================================
// PESQUISA DE PRODUTO
// ======================================================

if (stockSearch) {

  stockSearch.addEventListener(
    "input",
    () => {

      renderStockList();

      renderHistory();
    }
  );
}


// ======================================================
// ATUALIZAR PRODUTOS
// ======================================================

refreshProductsBtn.addEventListener(
  "click",
  async () => {

    await Promise.all([
      refreshAdminProducts(),
      loadProducts()
    ]);
  }
);


// ======================================================
// ATUALIZAR USUÁRIOS
// ======================================================

refreshUsersBtn.addEventListener(
  "click",
  async () => {

    await refreshUsers();
  }
);


// ======================================================
// BOTÃO ATUALIZAR GERAL
// ======================================================

refreshBtn.addEventListener(
  "click",
  async () => {

    await Promise.all([
      loadProducts(),
      loadStock(),
      refreshHistory()
    ]);

    if (isAdmin()) {

      await Promise.all([
        refreshUsers(),
        refreshAdminProducts()
      ]);
    }
  }
);


// ======================================================
// MODO CLARO / ESCURO
// ======================================================

function applyTheme(theme) {

  document.documentElement.setAttribute(
    "data-theme",
    theme
  );

  localStorage.setItem(
    "theme",
    theme
  );

  const isDark = theme === "dark";

  themeToggleIcon.textContent = isDark ? "☀️" : "🌙";
  themeToggleLabel.textContent = isDark ? "Claro" : "Escuro";
}

// Sincroniza o botão com o tema já aplicado no <head> (evita flash)
applyTheme(
  document.documentElement.getAttribute("data-theme") || "light"
);

themeToggle.addEventListener(
  "click",
  () => {

    const current =
      document.documentElement.getAttribute("data-theme");

    applyTheme(
      current === "dark" ? "light" : "dark"
    );
  }
);


// ======================================================
// NAVEGAÇÃO POR ABAS
// ======================================================

function switchTab(tabId) {

  tabButtons.forEach((btn) => {

    btn.classList.toggle(
      "active",
      btn.dataset.tab === tabId
    );
  });

  document
    .querySelectorAll(".tab-panel")
    .forEach((panel) => {

      panel.classList.toggle(
        "hidden",
        panel.id !== tabId
      );
    });
}

tabButtons.forEach((btn) => {

  btn.addEventListener(
    "click",
    () => {

      switchTab(
        btn.dataset.tab
      );
    }
  );
});


// ======================================================
// ABRIR APLICATIVO
// ======================================================

async function loadApp() {

  loginCard.classList.add(
    "hidden"
  );

  app.classList.remove(
    "hidden"
  );

  logoutBtn.classList.remove(
    "hidden"
  );

  const profileLoaded =
    await loadUserProfile();

  if (!profileLoaded) {

    await supabaseClient.auth
      .signOut();

    app.classList.add(
      "hidden"
    );

    logoutBtn.classList.add(
      "hidden"
    );

    loginCard.classList.remove(
      "hidden"
    );

    showMessage(
      loginMessage,
      "Não foi possível carregar as permissões do usuário.",
      true
    );

    return;
  }

  await loadProducts();

  await loadStock();

  await refreshHistory();

  if (isAdmin()) {

    await refreshUsers();

    await refreshAdminProducts();
  }
}


// ======================================================
// INICIALIZAÇÃO
// ======================================================

async function init() {

  const {
    data: {
      session
    }
  } =
    await supabaseClient.auth
      .getSession();

  if (session) {

    currentUser =
      session.user;

    await loadApp();
  }
}


init();
