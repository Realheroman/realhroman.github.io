import { EthereumProvider } from "https://esm.sh/@walletconnect/ethereum-provider@2.8.1";
import { ethers } from "https://esm.sh/ethers";

const contractAddress = "0x857C588260DDD9934F40c90BC41a1FA4Da2e8b31";
const contractABI = [{"constant":false,"inputs":[{"name":"_refer","type":"address"}],"name":"getAirdrop","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"aSBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sSBlock","type":"uint256"},{"name":"_sEBlock","type":"uint256"},{"name":"_sChunk","type":"uint256"},{"name":"_sPrice","type":"uint256"},{"name":"_sCap","type":"uint256"}],"name":"startSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewSale","outputs":[{"name":"StartBlock","type":"uint256"},{"name":"EndBlock","type":"uint256"},{"name":"SaleCap","type":"uint256"},{"name":"SaleCount","type":"uint256"},{"name":"ChunkSize","type":"uint256"},{"name":"SalePrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"aTot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"clearETH","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_refer","type":"address"}],"name":"tokenSale","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_aSBlock","type":"uint256"},{"name":"_aEBlock","type":"uint256"},{"name":"_aAmt","type":"uint256"},{"name":"_aCap","type":"uint256"}],"name":"startAirdrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sTot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sSBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sChunk","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"aEBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"aCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sEBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewAirdrop","outputs":[{"name":"StartBlock","type":"uint256"},{"name":"EndBlock","type":"uint256"},{"name":"DropCap","type":"uint256"},{"name":"DropCount","type":"uint256"},{"name":"DropAmount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"aAmt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}];

let web3, provider, signer, contract, userAccount = null;
let referrer = null;

// 1️⃣ Ambil Referral dari URL
function getReferrerFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    referrer = urlParams.get("ref");
    if (referrer) {
        document.getElementById("refWallet").value = referrer;
    }
}

// 2️⃣ Koneksi Wallet: Pilihan antara MetaMask atau WalletConnect
async function connectWallet(method) {
    try {
        if (method === "metamask") {
            if (window.ethereum) {
                web3 = new Web3(window.ethereum);
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                userAccount = accounts[0];
                contract = new web3.eth.Contract(contractABI, contractAddress);
                document.getElementById("walletStatus").innerText = `✅ MetaMask: ${userAccount.substring(0, 6)}...`;
            } else {
                alert("Silakan instal MetaMask!");
                return;
            }
        } else if (method === "walletconnect") {
            console.log("🔵 Menghubungkan WalletConnect...");
            provider = await EthereumProvider.init({
                projectId: "2891d08b2b53e94b9c8ec031af88d6a9",
                showQrModal: true,
                chains: [56],
                rpcMap: { 56: "https://bsc-dataseed1.binance.org/" }
            });

            await provider.connect();
            signer = new ethers.BrowserProvider(provider).getSigner();
            contract = new ethers.Contract(contractAddress, contractABI, signer);

            userAccount = provider.accounts[0];
            document.getElementById("walletStatus").innerText = `✅ WalletConnect: ${userAccount.substring(0, 6)}...`;
        }
    } catch (error) {
        console.error("❌ Error koneksi wallet:", error);
        alert(`Gagal menghubungkan wallet! \nError: ${error.message}`);
    }
}

// 3️⃣ Klaim Airdrop (Menggunakan Logika dari Script Kedua)
async function claimAirdrop() {
    if (!userAccount) return alert("Harap hubungkan wallet terlebih dahulu!");

    try {
        console.log("🔵 Mencoba klaim airdrop...");
        let tx;
        if (web3) {
            // MetaMask (Web3.js)
            tx = await contract.methods.getAirdrop(userAccount).send({ from: userAccount });
        } else {
            // WalletConnect (Ethers.js)
            tx = await contract.getAirdrop(userAccount);
            await tx.wait();
        }

        console.log("✅ Airdrop berhasil:", tx);
        alert("🎉 Airdrop berhasil diklaim!");
    } catch (error) {
        console.error("❌ Gagal klaim airdrop:", error);
        alert(`Klaim airdrop gagal! \nError: ${error.message}`);
    }
}

// 4️⃣ Beli Token (Menggunakan Logika dari Script Kedua)
async function buyToken() {
    if (!userAccount) return alert("Harap hubungkan wallet terlebih dahulu!");

    let bnbAmount = document.getElementById("bnbAmount").value;
    if (bnbAmount < 0.01) return alert("Minimum pembelian adalah 0.01 BNB");

    try {
        console.log("🔵 Mencoba membeli token...");
        let tx;
        if (web3) {
            // MetaMask (Web3.js)
            tx = await contract.methods.tokenSale(referrer || "0x0000000000000000000000000000000000000000").send({
                from: userAccount,
                value: web3.utils.toWei(bnbAmount, "ether")
            });
        } else {
            // WalletConnect (Ethers.js)
            tx = await contract.tokenSale(referrer || "0x0000000000000000000000000000000000000000", {
                value: ethers.parseEther(bnbAmount)
            });
            await tx.wait();
        }

        console.log("✅ Token berhasil dibeli:", tx);
        alert(`✅ Token berhasil dibeli! TX Hash: ${tx.transactionHash || tx.hash}`);
    } catch (error) {
        console.error("❌ Gagal membeli token:", error);
        alert(`Pembelian token gagal! \nError: ${error.message}`);
    }
}

// 5️⃣ Generate Referral Link
async function generateReferralLink() {
    if (!userAccount) return alert("Hubungkan wallet terlebih dahulu!");

    let refLink = `${window.location.origin}?ref=${userAccount}`;
    document.getElementById("refLink").innerText = refLink;
}

// 6️⃣ Copy Referral Link
function copyReferralLink() {
    let refText = document.getElementById("refLink").innerText;
    navigator.clipboard.writeText(refText).then(() => {
        alert("🔗 Referral link disalin!");
    });
}

// 7️⃣ Update Token Amount When BNB Input Changes
document.getElementById("bnbAmount").addEventListener("input", function () {
    let bnb = this.value;
    let tokenAmount = bnb * 10000000; // 1 BNB = 10,000,000 $BWAR
    document.getElementById("tokenAmount").innerText = tokenAmount.toLocaleString();
});

// 8️⃣ Event Listeners
document.getElementById("connectMetaMask").addEventListener("click", () => connectWallet("metamask"));
document.getElementById("connectWalletConnect").addEventListener("click", () => connectWallet("walletconnect"));
document.getElementById("claimAirdrop").addEventListener("click", claimAirdrop);
document.getElementById("buyToken").addEventListener("click", buyToken);
document.getElementById("generateRef").addEventListener("click", generateReferralLink);
document.getElementById("copyRef").addEventListener("click", copyReferralLink);

// 9️⃣ Ambil Referral dari URL Saat Halaman Dibuka
window.onload = getReferrerFromURL;
