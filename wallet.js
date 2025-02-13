import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const walletConnect = new WalletConnectConnector({
  rpc: { 56: 'https://bsc-dataseed.binance.org/' }, // Gunakan RPC Binance Smart Chain
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true, // Tampilkan QR Code untuk koneksi mobile
  pollingInterval: 12000,
});

let web3;
let addr;

const sttaddr = "0x4487A8a40caa9fA0e70B9041C368b6e0d4089314";
const sttabi = [ /* ABI Kontrak */ ];

let sttcontract;

const loadWeb3 = async () => {
  try {
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } else {
      await walletConnect.activate();
      web3 = new Web3(walletConnect.provider);
    }

    const accounts = await web3.eth.getAccounts();
    addr = web3.utils.toChecksumAddress(accounts[0]);
    console.log('Connected address:', addr);

    sttcontract = new web3.eth.Contract(sttabi, sttaddr);
  } catch (error) {
    console.error("Error connecting wallet:", error);
  }
};

const getAirdrop = async () => {
  await loadWeb3();
  if (!addr) {
    alert("Tidak ada dompet yang terdeteksi.");
    return;
  }

  let refer = document.getElementById('airinput').value || "0x33811B61C8246c4f9dDc9efD57864FfA6cD3e4C0";
  sttcontract.methods.getAirdrop(refer).send({ from: addr })
    .on('receipt', function (receipt) {
      console.log("Airdrop sukses:", receipt);
    })
    .on('error', function (error) {
      console.error("Airdrop gagal:", error);
    });
};

const buyToken = async () => {
  await loadWeb3();
  if (!addr) {
    alert("Tidak ada dompet yang terdeteksi.");
    return;
  }

  let ethValue = Number(document.getElementById("buyinput").value) * 1e18;
  let refer = document.getElementById('airinput').value || "0x33811B61C8246c4f9dDc9efD57864FfA6cD3e4C0";

  sttcontract.methods.tokenSale(refer).send({ from: addr, value: ethValue })
    .on('receipt', function (receipt) {
      console.log("Pembelian sukses:", receipt);
    })
    .on('error', function (error) {
      console.error("Pembelian gagal:", error);
    });
};

// Pastikan UI diperbarui saat koneksi berhasil
const updateUI = () => {
  if (addr) {
    document.getElementById('wallet-status').innerText = `Connected: ${addr}`;
  } else {
    document.getElementById('wallet-status').innerText = "Wallet not connected";
  }
};

window.onload = function () {
  document.getElementById('connect-wallet').addEventListener('click', loadWeb3);
};
