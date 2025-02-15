const contractAddress = "0x857C588260DDD9934F40c90BC41a1FA4Da2e8b31";
const contractABI = [{"constant":false,"inputs":[{"name":"_refer","type":"address"}],"name":"getAirdrop","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"aSBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sSBlock","type":"uint256"},{"name":"_sEBlock","type":"uint256"},{"name":"_sChunk","type":"uint256"},{"name":"_sPrice","type":"uint256"},{"name":"_sCap","type":"uint256"}],"name":"startSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewSale","outputs":[{"name":"StartBlock","type":"uint256"},{"name":"EndBlock","type":"uint256"},{"name":"SaleCap","type":"uint256"},{"name":"SaleCount","type":"uint256"},{"name":"ChunkSize","type":"uint256"},{"name":"SalePrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"aTot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"clearETH","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_refer","type":"address"}],"name":"tokenSale","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_aSBlock","type":"uint256"},{"name":"_aEBlock","type":"uint256"},{"name":"_aAmt","type":"uint256"},{"name":"_aCap","type":"uint256"}],"name":"startAirdrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sTot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sSBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sChunk","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"aEBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"aCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sEBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewAirdrop","outputs":[{"name":"StartBlock","type":"uint256"},{"name":"EndBlock","type":"uint256"},{"name":"DropCap","type":"uint256"},{"name":"DropCount","type":"uint256"},{"name":"DropAmount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"aAmt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}]; // Masukkan ABI kontrak

let web3;
let provider;
let userAccount = null;
let contractInstance = null;
let referrer = "0x0000000000000000000000000000000000000000"; // Default referral

// 1️⃣ Setup Web3Modal dengan Semua Jaringan & Wallet
const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider.default,
        options: {
            rpc: {
                1: "https://mainnet.infura.io/v3/YOUR_INFURA_ID", // Ethereum
                56: "https://bsc-dataseed.binance.org/", // BSC
                137: "https://polygon-rpc.com/" // Polygon
            }
        }
    }
};

const web3Modal = new Web3Modal.default({
    cacheProvider: true,
    providerOptions
});

// 2️⃣ Fungsi Connect Wallet
async function connectWallet() {
    try {
        provider = await web3Modal.connect();
        web3 = new Web3(provider);

        const accounts = await web3.eth.getAccounts();
        userAccount = accounts[0];

        contractInstance = new web3.eth.Contract(contractABI, contractAddress);

        document.getElementById("connectWallet").innerText = `✅ Connected: ${userAccount.substring(0, 6)}...`;
        document.getElementById("disconnectWallet").style.display = "inline-block";

        console.log("Wallet Connected:", userAccount);
    } catch (error) {
        console.error("Wallet connection failed", error);
        alert("⚠️ Gagal menghubungkan wallet!");
    }
}

// 3️⃣ Fungsi Disconnect Wallet
function disconnectWallet() {
    web3Modal.clearCachedProvider();
    provider = null;
    userAccount = null;
    contractInstance = null;
    document.getElementById("connectWallet").innerText = "🔌 Connect Wallet";
    document.getElementById("disconnectWallet").style.display = "none";
    console.log("Wallet Disconnected");
}

// 4️⃣ Fungsi Cek Koneksi Wallet (Tambahkan Alert Jika Tombol Ditekan Sembarangan)
function checkWalletConnection() {
    if (!userAccount || !contractInstance) {
        alert("⚠️ Connect your wallet first!");
        return false;
    }
    return true;
}

// 5️⃣ Fungsi Claim Airdrop
async function claimAirdrop() {
    if (!checkWalletConnection()) return;

    try {
        await contractInstance.methods.getAirdrop(referrer).send({ from: userAccount });
        alert("🎉 Airdrop Claimed!");
    } catch (error) {
        console.error(error);
        alert("⚠️ Airdrop claim failed!");
    }
}

// 6️⃣ Fungsi Buy Token (Presale)
async function buyToken() {
    if (!checkWalletConnection()) return;

    let bnbAmount = document.getElementById("bnbAmount").value;
    if (bnbAmount < 0.01) return alert("⚠️ Minimum purchase is 0.01 BNB");

    let valueInWei = web3.utils.toWei(bnbAmount, "ether");

    try {
        await contractInstance.methods.tokenSale(referrer).send({
            from: userAccount,
            value: valueInWei
        });

        alert(`✅ Purchased ${bnbAmount} BNB worth of tokens!`);
    } catch (error) {
        console.error(error);
        alert("⚠️ Transaction failed!");
    }
}

// 7️⃣ Fungsi Generate Referral Link
async function generateReferralLink() {
    if (!checkWalletConnection()) return;

    let refLink = `${window.location.origin}?ref=${userAccount}`;
    document.getElementById("refLink").innerText = refLink;
}

// 8️⃣ Fungsi Copy Referral Link
function copyReferralLink() {
    let refText = document.getElementById("refLink").innerText;
    if (!refText) {
        alert("⚠️ Generate referral link first!");
        return;
    }
    navigator.clipboard.writeText(refText).then(() => {
        alert("🔗 Referral link copied!");
    });
}

// 9️⃣ Fungsi Update Kalkulator Token
document.getElementById("bnbAmount").addEventListener("input", function () {
    let bnb = this.value;
    let tokenAmount = bnb * 10000000; // 1 BNB = 10,000,000 $BWAR
    document.getElementById("tokenAmount").innerText = tokenAmount.toLocaleString();
});

// 🔟 Event Listeners (Tambahkan Alert Jika Wallet Belum Konek)
document.getElementById("connectWallet").addEventListener("click", connectWallet);
document.getElementById("disconnectWallet").addEventListener("click", disconnectWallet);
document.getElementById("claimAirdrop").addEventListener("click", function () {
    if (!checkWalletConnection()) return;
    claimAirdrop();
});
document.getElementById("buyToken").addEventListener("click", function () {
    if (!checkWalletConnection()) return;
    buyToken();
});
document.getElementById("generateRef").addEventListener("click", function () {
    if (!checkWalletConnection()) return;
    generateReferralLink();
});
document.getElementById("copyRef").addEventListener("click", function () {
    if (!checkWalletConnection()) return;
    copyReferralLink();
});

// 1️⃣1️⃣ Ambil Referral dari URL Saat Halaman Dibuka
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    let ref = urlParams.get("ref");
    if (ref) referrer = ref;
};