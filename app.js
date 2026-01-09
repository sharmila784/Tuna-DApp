App = {
  web3Provider: null,
  contracts: {},
  metamaskAccountID: null,

  contractAddress: "0x8Eee53787CaC56C1293b5E33D643aC2070fbc052",
  contractABI: [
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
		"inputs": [],
		"name": "kill",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
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
		"inputs": [],
		"name": "renounceRestaurant",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
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

    web3 = new Web3(window.ethereum);
    await ethereum.request({ method: "eth_requestAccounts" });

    const accounts = await web3.eth.getAccounts();
    App.metamaskAccountID = accounts[0];

    ethereum.on("accountsChanged", function (accounts) {
      App.metamaskAccountID = accounts[0];
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
  },

  /* ---------- ROLE CHECK ---------- */
  checkUserRole: async function () {
    const acc = App.metamaskAccountID;

    const isOwner = await App.contracts.Gateway.methods.isOwner().call();
    const isFisherman = await App.contracts.Gateway.methods.isFisherman(acc).call();
    const isRegulator = await App.contracts.Gateway.methods.isRegulator(acc).call();
    const isRestaurant = await App.contracts.Gateway.methods.isRestaurant(acc).call();

    App.updateUI(isOwner, isFisherman, isRegulator, isRestaurant);
  },

  /* ---------- UI CONTROL ---------- */
  updateUI: function (isOwner, isFisherman, isRegulator, isRestaurant) {
    $("button").prop("disabled", true);
    $(".btn-query").prop("disabled", false);
    $("#currentRole").text("NOT ASSIGNED");

    if (isOwner) {
      $("#currentRole").text("ADMIN");
      $("[data-id='7'], [data-id='8'], [data-id='9']").prop("disabled", false);
    }

    if (isFisherman) {
      $("#currentRole").text("FISHERMAN");
      $(".btn-Catch, .btn-Record").prop("disabled", false);
    }

    if (isRegulator) {
      $("#currentRole").text("REGULATOR");
      $(".btn-Audit").prop("disabled", false);
    }

    if (isRestaurant) {
      $("#currentRole").text("RESTAURANT");
      $(".btn-Buy").prop("disabled", false);
    }
  },

  /* ---------- EVENTS ---------- */
  bindEvents: function () {
    $(document).on("click", "button", App.handleButtonClick);
  },

  handleButtonClick: function (event) {
    event.preventDefault();
    const id = parseInt($(event.target).data("id"));

    switch (id) {
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

  /* ---------- QUERY ---------- */
  queryTuna: async function () {
    try {
      const upc = $("#fishID").val();

      const data = await App.contracts.Gateway.methods
        .queryTuna(upc)
        .call();

      $("#ftc-item").html(`
        <li>Owner: ${data[0]}</li>
        <li>Location: ${data[1]}</li>
        <li>Notes: ${data[2]}</li>
        <li>Price: ${data[3]}</li>
        <li>State: ${["Caught","Recorded","Audited","Bought"][data[4]]}</li>
        <li>Regulator: ${data[5]}</li>
        <li>Status: ${data[6]}</li>
      `);
    } catch (err) {
      console.error(err);
      alert("Query failed. Check console.");
    }
  },

  /* ---------- BUY ---------- */
  buyTuna: async function () {
    const price = $("#tunaPrice_Buy").val();

    await App.contracts.Gateway.methods
      .buyTuna($("#upcBuy").val())
      .send({
        from: App.metamaskAccountID,
        value: price
      });

    alert("Tuna Bought");
  },

  /* ---------- ADMIN ---------- */
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

$(window).on("load", App.init);



