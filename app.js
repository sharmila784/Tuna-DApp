App = {
  web3Provider: null,
  contracts: {},
  metamaskAccountID: null,

  // 🔁 UPDATE this when you redeploy
  contractAddress: "0xE84221AAbf11Cc869E77739b5AbdDfbaa23d452F",

  /* ---------------- ABI ---------------- */
  contractABI: [
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
      "constant": false,
      "inputs": [
        { "name": "_upc", "type": "uint256" },
        { "name": "_originFishermanID", "type": "address" },
        { "name": "_originCoastLocation", "type": "string" }
      ],
      "name": "catchTuna",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "name": "_upc", "type": "uint256" },
        { "name": "price", "type": "uint256" },
        { "name": "tunaNotes", "type": "string" }
      ],
      "name": "recordTuna",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "name": "_upc", "type": "uint256" },
        { "name": "_auditStatus", "type": "string" }
      ],
      "name": "auditTuna",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "name": "_upc", "type": "uint256" },
        { "name": "_price", "type": "uint256" }
      ],
      "name": "buyTuna",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [{ "name": "account", "type": "address" }],
      "name": "isFisherman",
      "outputs": [{ "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [{ "name": "account", "type": "address" }],
      "name": "isRegulator",
      "outputs": [{ "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [{ "name": "account", "type": "address" }],
      "name": "isRestaurant",
      "outputs": [{ "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [{ "name": "_upc", "type": "uint256" }],
      "name": "queryTuna",
      "outputs": [
        { "type": "address" },
        { "type": "string" },
        { "type": "string" },
        { "type": "uint256" },
        { "type": "uint8" },
        { "type": "address" },
        { "type": "string" }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],

  /* ---------------- INIT ---------------- */
  init: async function () {
    if (!window.ethereum) {
      alert("Install MetaMask");
      return;
    }

    App.web3Provider = window.ethereum;
    await window.ethereum.request({ method: "eth_requestAccounts" });

    web3 = new Web3(App.web3Provider);
    const accounts = await web3.eth.getAccounts();
    App.metamaskAccountID = accounts[0];

    App.contracts.Gateway = new web3.eth.Contract(
      App.contractABI,
      App.contractAddress
    );

    App.bindEvents();
    App.checkUserRole();

    // 🔁 Account switch support
    window.ethereum.on("accountsChanged", function (accounts) {
      App.metamaskAccountID = accounts[0];
      App.checkUserRole();
    });
  },

  /* ---------------- ROLE LOGIC ---------------- */
  checkUserRole: async function () {
    const a = App.metamaskAccountID;

    const isReg = await App.contracts.Gateway.methods.isRegulator(a).call();
    const isFish = await App.contracts.Gateway.methods.isFisherman(a).call();
    const isRest = await App.contracts.Gateway.methods.isRestaurant(a).call();

    let role = "NOT ASSIGNED";
    if (isReg) role = "REGULATOR";
    else if (isFish) role = "FISHERMAN";
    else if (isRest) role = "RESTAURANT";

    $("#currentRole").text(role);
    App.updateUI(role);
  },

  updateUI: function (role) {
    $(".btn-Catch,.btn-Record,.btn-audit,.btn-buy").hide();

    if (role === "FISHERMAN") {
      $(".btn-Catch,.btn-Record").show();
    }
    if (role === "REGULATOR") {
      $(".btn-audit").show();
    }
    if (role === "RESTAURANT") {
      $(".btn-buy").show();
    }
  },

  /* ---------------- EVENTS ---------------- */
  bindEvents: function () {
    $(document).on("click", "button", App.handleButtonClick);
  },

  handleButtonClick: function (e) {
    const id = $(e.target).data("id");
    if (id === 1) App.catchTuna();
    if (id === 2) App.recordTuna();
    if (id === 4) App.auditTuna();
    if (id === 5) App.queryTuna();
    if (id === 6) App.buyTuna();
    if (id === 7) App.addFisherman();
    if (id === 8) App.addRegulator();
    if (id === 9) App.addRestaurant();
  },

  /* ---------------- ACTIONS ---------------- */
  catchTuna: async function () {
    await App.contracts.Gateway.methods
      .catchTuna($("#upc").val(), App.metamaskAccountID, $("#originCoastLocation").val())
      .send({ from: App.metamaskAccountID });
  },

  recordTuna: async function () {
    await App.contracts.Gateway.methods
      .recordTuna($("#upcRec").val(), $("#tunaPrice").val(), $("#tunaNotes").val())
      .send({ from: App.metamaskAccountID });
  },

  auditTuna: async function () {
    await App.contracts.Gateway.methods
      .auditTuna($("#upcAud").val(), $("#auditStatus").val())
      .send({ from: App.metamaskAccountID });
  },

  buyTuna: async function () {
    const price = $("#tunaPrice_Buy").val();
    await App.contracts.Gateway.methods
      .buyTuna($("#upcBuy").val(), price)
      .send({ from: App.metamaskAccountID, value: price });
  },

  queryTuna: async function () {
    const r = await App.contracts.Gateway.methods
      .queryTuna($("#fishID").val())
      .call();

    $("#ftc-item").html(`
      Owner: ${r[0]} <br>
      Location: ${r[1]} <br>
      Notes: ${r[2]} <br>
      Price: ${r[3]} <br>
      State: ${r[4]} <br>
      Regulator: ${r[5]} <br>
      Audit: ${r[6]}
    `);
  },

  addFisherman: async function () {
    await App.contracts.Gateway.methods
      .addFisherman($("#roleAddress").val())
      .send({ from: App.metamaskAccountID });
  },

  addRegulator: async function () {
    await App.contracts.Gateway.methods
      .addRegulator($("#roleAddress").val())
      .send({ from: App.metamaskAccountID });
  },

  addRestaurant: async function () {
    await App.contracts.Gateway.methods
      .addRestaurant($("#roleAddress").val())
      .send({ from: App.metamaskAccountID });
  }
};

$(window).on("load", function () {
  App.init();
});
