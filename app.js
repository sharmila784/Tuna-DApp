App = {
  web3Provider: null,
  contracts: {},
  metamaskAccountID: null,

  contractAddress: "0x0fc1D176E98848C4819f56ebcF552A1989F3918F",

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
				"name": "_auditStatus",
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
			},
			{
				"name": "_price",
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
				"name": "_originCoastLocation",
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
				"name": "tunaNotes",
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
		"inputs": [],
		"name": "renounceFisherman",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceRegulator",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceRestaurant",
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
		"inputs": [
			{
				"name": "_upc",
				"type": "uint256"
			}
		],
		"name": "queryTuna",
		"outputs": [
			{
				"name": "ownerID",
				"type": "address"
			},
			{
				"name": "originCoastLocation",
				"type": "string"
			},
			{
				"name": "tunaNotes",
				"type": "string"
			},
			{
				"name": "tunaPrice",
				"type": "uint256"
			},
			{
				"name": "tunaState",
				"type": "uint8"
			},
			{
				"name": "regulatorID",
				"type": "address"
			},
			{
				"name": "auditStatus",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
],

  /* ---------------- INIT ---------------- */
  init: async function () {
    await App.initWeb3();
  },

  /* ---------------- WEB3 ---------------- */
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

    // 🔥 IMPORTANT: listen for account change
    window.ethereum.on("accountsChanged", async function (accounts) {
      App.metamaskAccountID = accounts[0];
      console.log("Account switched to:", App.metamaskAccountID);
      await App.checkUserRole();
    });

    App.initContract();
    App.bindEvents();
    await App.checkUserRole();
  },

  /* ---------------- CONTRACT ---------------- */
  initContract: function () {
    App.contracts.Gateway = new web3.eth.Contract(
      App.contractABI,
      App.contractAddress
    );
    console.log("Contract initialized");
  },

  /* ---------------- ROLE CHECK ---------------- */
  checkUserRole: async function () {
    if (!App.contracts.Gateway || !App.metamaskAccountID) return;

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

    console.log("Role check:", {
      account,
      isFisherman,
      isRegulator,
      isRestaurant
    });

    App.updateUIBasedOnRole(isFisherman, isRegulator, isRestaurant);
  },

  updateUIBasedOnRole: function (isFisherman, isRegulator, isRestaurant) {

    // Reset everything
    $(".btn-Catch, .btn-Record, .btn-audit, .btn-buy").prop("disabled", true);
    $("#currentRole").text("NOT ASSIGNED");

    if (isFisherman) {
      $(".btn-Catch").prop("disabled", false);
      $(".btn-Record").prop("disabled", false);
      $("#currentRole").text("FISHERMAN");
      return;
    }

    if (isRegulator) {
      $(".btn-audit").prop("disabled", false);
      $("#currentRole").text("REGULATOR");
      return;
    }

    if (isRestaurant) {
      $(".btn-buy").prop("disabled", false);
      $("#currentRole").text("RESTAURANT");
      return;
    }
  },

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
    await App.contracts.Gateway.methods
      .addFisherman($("#roleAddress").val())
      .send({ from: App.metamaskAccountID });

    alert("Fisherman added");
  },

  addRegulator: async function () {
    await App.contracts.Gateway.methods
      .addRegulator($("#roleAddress").val())
      .send({ from: App.metamaskAccountID });

    alert("Regulator added");
  },

  addRestaurant: async function () {
    await App.contracts.Gateway.methods
      .addRestaurant($("#roleAddress").val())
      .send({ from: App.metamaskAccountID });

    alert("Restaurant added");
  }
};

$(window).on("load", function () {
  App.init();
});

