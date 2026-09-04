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

const productionMovementType =
  document.getElementById(
    "productionMovementType"
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
const exitMovementType =
  document.getElementById(
    "exitMovementType"
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

const stockBody =
  document.getElementById(
    "stockBody"
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


// ======================================================
// HISTÓRICO
// ======================================================

const historyBody =
  document.getElementById(
    "historyBody"
  );


// ======================================================
// ESTADO
// ======================================================

let currentUser = null;

let currentProfile = null;

let products = [];

let stockProducts = [];

let historyItems = [];


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

  if (
    product.tipo ===
    "recheado"
  ) {

    return (
      "Recheado — " +
      (product.sabor || "-")
    );
  }

  return (
    `${TYPE_NAMES[product.tipo] || product.tipo} — ` +
    `${product.gramas}g — ` +
    `${product.peso_kg}kg`
  );
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

  const flavors =
    products
      .filter(
        product =>
          product.tipo === type
      )
      .map(
        product =>
          product.sabor
      )
      .filter(Boolean)
      .sort();

  flavors.forEach(
    flavor => {

      const option =
        document.createElement(
          "option"
        );

      option.value =
        flavor;

      option.textContent =
        flavor;

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

  if (
    type === "recheado"
  ) {

    const flavor =
      productionFlavor.value;

    if (!flavor) {
      return null;
    }

    return (
      products.find(
        product =>
          product.tipo === "recheado" &&
          product.sabor === flavor
      ) || null
    );
  }

  const grams =
    Number(
      productionGrams.value
    );

  const weight =
    Number(
      productionWeight.value
    );

  if (
    !grams ||
    !weight
  ) {
    return null;
  }

  return (
    products.find(
      product =>
        product.tipo === type &&
        product.gramas === grams &&
        product.peso_kg === weight
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

  if (
    type === "recheado"
  ) {

    const flavor =
      exitFlavor.value;

    if (!flavor) {
      return null;
    }

    return (
      products.find(
        product =>
          product.tipo === "recheado" &&
          product.sabor === flavor
      ) || null
    );
  }

  const grams =
    Number(
      exitGrams.value
    );

  const weight =
    Number(
      exitWeight.value
    );

  if (
    !grams ||
    !weight
  ) {
    return null;
  }

  return (
    products.find(
      product =>
        product.tipo === type &&
        product.gramas === grams &&
        product.peso_kg === weight
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

  renderStockTable();

  updateExitStockPreview();
}


// ======================================================
// TABELA DE ESTOQUE
// ======================================================

function renderStockTable() {

  if (
    !stockProducts ||
    stockProducts.length === 0
  ) {

    stockBody.innerHTML = `
      <tr>
        <td colspan="5">
          Nenhum produto encontrado.
        </td>
      </tr>
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
    );

  if (
    filteredProducts.length === 0
  ) {

    stockBody.innerHTML = `
      <tr>
        <td colspan="5">
          Nenhum produto encontrado para
          "<strong>${escapeHtml(
            search
          )}</strong>".
        </td>
      </tr>
    `;

    if (stockSearchMessage) {
      stockSearchMessage.textContent =
        "Nenhum produto encontrado.";
    }

    return;
  }

  stockBody.innerHTML =
    filteredProducts
      .map(
        item => {

          let grams =
            "-";

          let weight =
            "-";

          let name =
            "-";

          if (
            item.tipo ===
            "recheado"
          ) {

            name =
              item.sabor ||
              "-";

          } else {

            name =
              TYPE_NAMES[
                item.tipo
              ] ||
              item.tipo;

            grams =
              item.gramas
                ? `${item.gramas}g`
                : "-";

            weight =
              item.peso_kg
                ? `${item.peso_kg}kg`
                : "-";
          }

          const quantity =
            Number(
              item.quantidade || 0
            );

          return `
            <tr>

              <td>
                ${escapeHtml(
                  TYPE_NAMES[
                    item.tipo
                  ] ||
                  item.tipo
                )}
              </td>

              <td>
                ${escapeHtml(
                  name
                )}
              </td>

              <td>
                ${escapeHtml(
                  grams
                )}
              </td>

              <td>
                ${escapeHtml(
                  weight
                )}
              </td>

              <td>
                <strong>
                  ${quantity.toLocaleString(
                    "pt-BR"
                  )}
                </strong>
              </td>

            </tr>
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
    exitResult
  ] =
    await Promise.all([
      supabaseClient.rpc(
        "listar_historico_producoes"
      ),

      supabaseClient.rpc(
        "listar_historico_saidas"
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

  const productionItems =
    (
      productionResult.data ||
      []
    ).map(
      item => ({

        date:
          new Date(
            item.created_at
          ),

        email:
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
          `${Number(
            item.caixas || 0
          )} caixa(s)`
      })
    );

  const exitItems =
    (
      exitResult.data ||
      []
    ).map(
      item => ({

        date:
          new Date(
            item.created_at
          ),

        email:
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
          item.motivo ||
          "-"
      })
    );

  historyItems = [
    ...productionItems,
    ...exitItems
  ];

  historyItems.sort(
    (a, b) =>
      b.date.getTime() -
      a.date.getTime()
  );

  renderHistory();
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
      <tr>
        <td colspan="6">
          Nenhuma movimentação registrada.
        </td>
      </tr>
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
      <tr>
        <td colspan="6">
          Nenhuma movimentação encontrada
          para
          "<strong>${escapeHtml(
            search
          )}</strong>".
        </td>
      </tr>
    `;

    return;
  }

  historyBody.innerHTML =
    latest
      .map(
        item => {

          const isProduction =
            item.type ===
            "Produção";

          const typeHtml =
            isProduction
              ? `<strong>🟢 Produção</strong>`
              : `<strong>🔴 Saída</strong>`;

          const quantity =
            isProduction
              ? `+${item.quantity}`
              : `${item.quantity}`;

          return `
            <tr>

              <td>
                ${item.date.toLocaleString(
                  "pt-BR"
                )}
              </td>

              <td>
                ${escapeHtml(
                  item.email
                )}
              </td>

              <td>
              ${typeHtml}
              </td>

              <td>
                <strong>
                  ${escapeHtml(
                    quantity
                  )}
                </strong>
              </td>

              <td>
                ${escapeHtml(
                  item.product
                )}
              </td>

              <td>
                ${escapeHtml(
                  item.details
                )}
              </td>

            </tr>
          `;
        }
      )
      .join("");
}


// ======================================================
// PRODUTO DO HISTÓRICO
// ======================================================

function formatHistoryProduct(
  item
) {

  if (
    !item.tipo
  ) {

    return "Produto antigo";
  }

  if (
    item.tipo ===
    "recheado"
  ) {

    return (
      `Recheado — ${
        item.sabor || "-"
      }`
    );
  }

  return (
    `${
      TYPE_NAMES[item.tipo] ||
      item.tipo
    } — ${
      item.gramas || "-"
    }g — ${
      item.peso_kg || "-"
    }kg`
  );
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

  // O frontend usa "admin",
  // mas o banco usa "administrador".
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
        "excluir-usuario",
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

          const produto =
            isRecheado
              ? product.sabor
              : "-";

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

    showMessage(
      productMessage,
      "Cadastrando produto..."
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
            unidades
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

    let quantidade;

    if (
      productionMovementType.value ===
      "unidades"
    ) {

      quantidade =
        Number(
          productionUnits.value
        );

      if (
        !Number.isInteger(
          quantidade
        ) ||
        quantidade <= 0
      ) {

        showMessage(
          productionMessage,
          "Informe uma quantidade válida de unidades.",
          true
        );

        return;
      }

    } else {

      quantidade =
        Number(
          boxesInput.value
        );

      if (
        !Number.isInteger(
          quantidade
        ) ||
        quantidade <= 0
      ) {

        showMessage(
          productionMessage,
          "Informe uma quantidade válida de caixas.",
          true
        );

        return;
      }
    }

    showMessage(
      productionMessage,
      "Registrando produção..."
    );

    let error;

    if (
      productionMovementType.value ===
      "unidades"
    ) {

      const result =
        await supabaseClient.rpc(
          "registrar_deposito_unidades",
          {
            p_produto_id:
              product.id,

            p_unidades:
              quantidade
          }
        );

      error =
        result.error;

    } else {

      const result =
        await supabaseClient.rpc(
          "registrar_deposito",
          {
            p_produto_id:
              product.id,

            p_caixas:
              quantidade
          }
        );

      error =
        result.error;
    }

    if (error) {

      console.error(
        "Erro ao registrar produção:",
        error
      );

      showMessage(
        productionMessage,
        error.message,
        true
      );

      return;
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

    const boxes =
      Number(
        exitBoxes.value
      );

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

    if (
      !Number.isInteger(
        boxes
      ) ||
      boxes <= 0
    ) {

      showMessage(
        exitMessage,
        "Informe uma quantidade válida de caixas.",
        true
      );

      return;
    }

    showMessage(
      exitMessage,
      "Registrando saída..."
    );

    const {
      error
    } =
      await supabaseClient.rpc(
        "registrar_retirada",
        {
          p_produto_id:
            product.id,

          p_caixas:
            boxes,

          p_motivo:
            reason
        }
      );

    if (error) {

      console.error(
        "Erro ao registrar saída:",
        error
      );

      showMessage(
        exitMessage,
        error.message,
        true
      );

      await loadStock();

      return;
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


newProductType.addEventListener(
  "change",
  updateAdminProductFields
);


// ======================================================
// PESQUISA DE PRODUTO
// ======================================================

if (stockSearch) {

  stockSearch.addEventListener(
    "input",
    () => {

      renderStockTable();

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
