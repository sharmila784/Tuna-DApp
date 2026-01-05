App = {
  web3Provider: null,
  contracts: {},
  metamaskAccountID: "0x0000000000000000000000000000000000000000",

  contractAddress: "0xE84221AAbf11Cc869E77739b5AbdDfbaa23d452F",

  // ✅ FIXED: ABI MUST NOT BE DOUBLE-NESTED
  contractABI: [
    {
      "constant": false,
      "inputs": [],
      "name": "renounceFisherman",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceRegulator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [{ "name": "account", "type": "address" }],
      "name": "addRestaurant",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [{ "name": "_upc", "type": "uint256" }],
      "name": "queryTuna",
      "outputs": [
        { "name": "ownerID", "type": "address" },
        { "name": "originCoastLocation", "type": "string" },
        { "name": "tunaNotes", "type": "string" },
        { "name": "tunaPrice", "type": "uint256" },
        { "name": "tunaState", "type": "uint8" },
        { "name": "regulatorID", "type": "address" },
        { "name": "auditStatus", "type": "string" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [{ "name": "_upc", "type": "uint256" }, { "name": "_originFishermanID", "type": "address" }, { "name": "_originCoastLocation", "type": "string" }],
      "name": "catchTuna",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [{ "name": "_upc", "type": "uint256" }, { "name": "price", "type": "uint256" }, { "name": "tunaNotes", "type": "string" }],
      "name": "recordTuna",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [{ "name": "_upc", "type": "uint256" }, { "name": "_auditStatus", "type": "string" }],
      "name": "auditTuna",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [{ "name": "_upc", "type": "uint256" }, { "name": "_price", "type": "uint256" }],
      "name": "buyTuna",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [{ "name": "account", "type": "address" }],
      "name": "addFisherman",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [{ "name": "account", "type": "address" }],
      "name": "addRegulator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],

  /* ---------------- INIT ---------------- */
  init: async function () {
    return await App.initWeb3();
  },

  /* ---------------- WEB3 ---------------- */
  initWeb3: async function () {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }

    App.web3Provider = window.ethereum;
    await window.ethereum.request({ method: "eth_requestAccounts" });

    web3 = new Web3(App.web3Provider);
    const accounts = await web3.eth.getAccounts();
    App.metamaskAccountID = accounts[0];

    console.log("Connected:", App.metamaskAccountID);

    App.initContract();
    App.bindEvents();
    App.checkUserRole();
  },

  /* ---------------- CONTRACT ---------------- */
  initContract: function () {
    App.contracts.Gateway = new web3.eth.Contract(
      App.contractABI,
      App.contractAddress
    );
    console.log("Contract ready");
  },
  checkUserRole: async function () {
  const account = App.metamaskAccountID;

  const isFisherman = await App.contracts.Gateway.methods
    .isFisherman(account)
    .call();

  const isRegulator = await App.contracts.Gateway.methods
    .isRegulator(account)
    .call();

  const isRestaurant = await App.contracts.Gateway.methods
    .isRestaurant(account)
    .call();

  console.log("Role status:", {
    isFisherman,
    isRegulator,
    isRestaurant
  });

  App.updateUIBasedOnRole(isFisherman, isRegulator, isRestaurant);
  },

  updateUIBasedOnRole: function (isFisherman, isRegulator, isRestaurant) {

  // Disable all role-based buttons initially
  $(".btn-Catch, .btn-Record, .btn-audit, .btn-buy").prop("disabled", true);

  if (isFisherman) {
    $(".btn-Catch").prop("disabled", false);
    $(".btn-Record").prop("disabled", false);
    $("#currentRole").text("FISHERMAN");
  }

  if (isRegulator) {
    $(".btn-audit").prop("disabled", false);
    $("#currentRole").text("REGULATOR");
  }

  if (isRestaurant) {
    $(".btn-buy").prop("disabled", false);
    $("#currentRole").text("RESTAURANT");
  }
}


  /* ---------------- EVENTS ---------------- */
  bindEvents: function () {
    $(document).on("click", "button", App.handleButtonClick);
  },

  handleButtonClick: function (event) {
    event.preventDefault();
    const processId = parseInt($(event.target).data("id"));

    switch (processId) {
      case 1: return App.catchTuna();
      case 2: return App.recordTuna();
      case 4: return App.auditTuna();
      case 5: return App.queryTuna();
      case 6: return App.buyTuna();
      case 7: return App.addFisherman();
      case 8: return App.addRegulator();
      case 9: return App.addRestaurant();
    }
  },

  /* ---------------- FUNCTIONS ---------------- */

  catchTuna: async function () {
    const upc = $("#upc").val();
    const location = $("#originCoastLocation").val();

    await App.contracts.Gateway.methods
      .catchTuna(upc, App.metamaskAccountID, location)
      .send({ from: App.metamaskAccountID });

    alert("Tuna caught");
  },

  recordTuna: async function () {
    await App.contracts.Gateway.methods
      .recordTuna($("#upcRec").val(), $("#tunaPrice").val(), $("#tunaNotes").val())
      .send({ from: App.metamaskAccountID });

    alert("Tuna recorded");
  },

  auditTuna: async function () {
    await App.contracts.Gateway.methods
      .auditTuna($("#upcAud").val(), $("#auditStatus").val())
      .send({ from: App.metamaskAccountID });

    alert("Tuna audited");
  },

  buyTuna: async function () {
    const price = $("#tunaPrice_Buy").val();

    await App.contracts.Gateway.methods
      .buyTuna($("#upcBuy").val(), price)
      .send({ from: App.metamaskAccountID, value: price });

    alert("Tuna bought");
  },

  queryTuna: async function () {
    const result = await App.contracts.Gateway.methods
      .queryTuna($("#fishID").val())
      .call();

    $("#ftc-item").html(`
      <li><b>Owner:</b> ${result[0]}</li>
      <li><b>Location:</b> ${result[1]}</li>
      <li><b>Notes:</b> ${result[2]}</li>
      <li><b>Price:</b> ${result[3]}</li>
      <li><b>State:</b> ${result[4]}</li>
      <li><b>Regulator:</b> ${result[5]}</li>
      <li><b>Audit:</b> ${result[6]}</li>
    `);
  },

  addFisherman: async function () {
  const addr = $("#roleAddress").val();
  await App.contracts.Gateway.methods
    .addFisherman(addr)
    .send({ from: App.metamaskAccountID });

  alert("Fisherman role assigned to " + addr);
},

  addRegulator: async function () {
  const addr = $("#roleAddress").val();
  await App.contracts.Gateway.methods
    .addRegulator(addr)
    .send({ from: App.metamaskAccountID });

  alert("Regulator role assigned to " + addr);
},

  addRestaurant: async function () {
  const addr = $("#roleAddress").val();
  await App.contracts.Gateway.methods
    .addRestaurant(addr)
    .send({ from: App.metamaskAccountID });

  alert("Restaurant role assigned to " + addr);
}
};

$(window).on("load", function () {
  App.init();
});



