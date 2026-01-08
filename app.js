App = {
  web3Provider: null,
  contracts: {},
  metamaskAccountID: null,

  contractAddress: "0x4bE880a99c947b82e1d49B320Db8C42e2baCc83D",

  contractABI: [
	{
		"constant": false,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "addFisherman",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "addRegulator",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "addRestaurant",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_upc",
				"type": "uint256"
			},
			{
				"name": "status",
				"type": "string"
			}
		],
		"name": "auditTuna",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_upc",
				"type": "uint256"
			}
		],
		"name": "buyTuna",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_upc",
				"type": "uint256"
			},
			{
				"name": "_originFishermanID",
				"type": "address"
			},
			{
				"name": "_location",
				"type": "string"
			}
		],
		"name": "catchTuna",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "kill",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_upc",
				"type": "uint256"
			},
			{
				"name": "price",
				"type": "uint256"
			},
			{
				"name": "notes",
				"type": "string"
			}
		],
		"name": "recordTuna",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "removeFisherman",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "removeRegulator",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "removeRestaurant",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "upc",
				"type": "uint256"
			}
		],
		"name": "Caught",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "upc",
				"type": "uint256"
			}
		],
		"name": "Recorded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "upc",
				"type": "uint256"
			}
		],
		"name": "Audited",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "upc",
				"type": "uint256"
			}
		],
		"name": "Bought",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "account",
				"type": "address"
			}
		],
		"name": "RestaurantAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "account",
				"type": "address"
			}
		],
		"name": "RestaurantRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "account",
				"type": "address"
			}
		],
		"name": "RegulatorAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "account",
				"type": "address"
			}
		],
		"name": "RegulatorRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "account",
				"type": "address"
			}
		],
		"name": "FishermanAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "account",
				"type": "address"
			}
		],
		"name": "FishermanRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "oldOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "TransferOwnership",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "isFisherman",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isOwner",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "isRegulator",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "isRestaurant",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "upc",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
],

  /* ---------- INIT ---------- */
  init: async function () {
    await App.initWeb3();
  },

  /* ---------- WEB3 ---------- */
  initWeb3: async function () {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }

    App.web3Provider = window.ethereum;
    web3 = new Web3(window.ethereum);

    await window.ethereum.request({ method: "eth_requestAccounts" });

    const accounts = await web3.eth.getAccounts();
    App.metamaskAccountID = accounts[0];

    console.log("Connected account:", App.metamaskAccountID);

    window.ethereum.on("accountsChanged", function (accounts) {
      App.metamaskAccountID = accounts[0];
      console.log("Account switched:", App.metamaskAccountID);
      App.checkUserRole();
    });

    App.initContract();
    App.bindEvents();
    App.checkUserRole();
  },

  /* ---------- CONTRACT ---------- */
  initContract: function () {
    App.contracts.Gateway = new web3.eth.Contract(
      App.contractABI,
      App.contractAddress
    );
    console.log("Contract initialized");
  },

  /* ---------- ROLE CHECK ---------- */
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

  /* ---------- UI CONTROL ---------- */
  updateUIBasedOnRole: function (isFisherman, isRegulator, isRestaurant) {

    // Disable everything first
    $(".btn-Catch, .btn-Record, .btn-Audit, .btn-Buy").prop("disabled", true);
    $("#currentRole").text("NOT ASSIGNED");

    if (isFisherman) {
      $(".btn-Catch, .btn-Record").prop("disabled", false);
      $("#currentRole").text("FISHERMAN");
    }

    if (isRegulator) {
      $(".btn-Audit").prop("disabled", false);
      $("#currentRole").text("REGULATOR");
    }

    if (isRestaurant) {
      $(".btn-Buy").prop("disabled", false);
      $("#currentRole").text("RESTAURANT");
    }
  },

  /* ---------- EVENTS ---------- */
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
      case 6: return App.buyTuna();
      case 7: return App.addFisherman();
      case 8: return App.addRegulator();
      case 9: return App.addRestaurant();
    }
  },

  /* ---------- BUSINESS FUNCTIONS ---------- */

  catchTuna: async function () {
    await App.contracts.Gateway.methods
      .catchTuna(
        $("#upc").val(),
        App.metamaskAccountID,
        $("#originCoastLocation").val()
      )
      .send({ from: App.metamaskAccountID });

    alert("Tuna caught");
  },

  recordTuna: async function () {
    await App.contracts.Gateway.methods
      .recordTuna(
        $("#upcRec").val(),
        $("#tunaPrice").val(),
        $("#tunaNotes").val()
      )
      .send({ from: App.metamaskAccountID });

    alert("Tuna recorded");
  },

  auditTuna: async function () {
    await App.contracts.Gateway.methods
      .auditTuna(
        $("#upcAud").val(),
        $("#auditStatus").val()
      )
      .send({ from: App.metamaskAccountID });

    alert("Tuna audited");
  },

  buyTuna: async function () {
    const price = $("#tunaPrice_Buy").val();

    await App.contracts.Gateway.methods
      .buyTuna($("#upcBuy").val(), price)
      .send({
        from: App.metamaskAccountID,
        value: price
      });

    alert("Tuna bought");
  },

  /* ---------- ADMIN ROLE ASSIGNMENT ---------- */

  addFisherman: async function () {
    const addr = $("#roleAddress").val();

    await App.contracts.Gateway.methods
      .addFisherman(addr)
      .send({ from: App.metamaskAccountID });

    alert("Fisherman assigned");
    App.checkUserRole();
  },

  addRegulator: async function () {
    const addr = $("#roleAddress").val();

    await App.contracts.Gateway.methods
      .addRegulator(addr)
      .send({ from: App.metamaskAccountID });

    alert("Regulator assigned");
    App.checkUserRole();
  },

  addRestaurant: async function () {
    const addr = $("#roleAddress").val();

    await App.contracts.Gateway.methods
      .addRestaurant(addr)
      .send({ from: App.metamaskAccountID });

    alert("Restaurant assigned");
    App.checkUserRole();
  }
};

$(window).on("load", function () {
  App.init();
});
