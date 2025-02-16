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
async function connectWallet() {
    try {
        console.log("🔵 Memulai koneksi...");
        
        provider = new ethers.BrowserProvider(window.ethereum); // Ambil provider langsung dari MetaMask
        await provider.send("eth_requestAccounts", []); // Minta akses akun

        signer = await provider.getSigner();
        console.log("✅ Signer berhasil diambil.", signer);

        contract = new ethers.Contract(contractAddress, abi, signer);
        console.log("✅ Kontrak berhasil diinisialisasi.", contract);

        const accounts = await provider.listAccounts();
        if (accounts.length === 0) {
            console.error("❌ Tidak ada akun yang terhubung.");
            return;
        }

        document.getElementById("walletStatus").innerText = `🔗 Wallet: ${accounts[0]}`;

    } catch (error) {
        console.error("❌ Error koneksi wallet:", error);
        alert("Gagal menghubungkan wallet.");
    }
}
// 3️⃣ Klaim Airdrop (Menggunakan Logika dari Script Kedua)
async function getAirdrop() {
    if (!signer || !contract) {
        alert("Harap hubungkan wallet terlebih dahulu!");
        return;
    }

    try {
        const referral = getReferralAddress();
        const tx = await contract.getAirdrop(referral);
        console.log("🔵 Mengirim transaksi airdrop...", tx);
        await tx.wait();
        console.log("✅ Airdrop berhasil diklaim:", tx.hash);
        alert(`Airdrop berhasil diklaim! TX Hash: ${tx.hash}`);
    } catch (error) {
        console.error("❌ Gagal klaim airdrop:", error);
        alert("Klaim airdrop gagal!");
    }
}
// 4️⃣ Beli Token (Menggunakan Logika dari Script Kedua)
async function buyToken() {
    if (!signer || !contract) {
        alert("Harap hubungkan wallet terlebih dahulu!");
        return;
    }

    try {
        const referral = getReferralAddress();
        const amount = ethers.parseEther("0.1"); // Jumlah BNB untuk pembelian

        console.log("🔵 Mengirim transaksi pembelian token...");
        const tx = await contract.tokenSale(referral, { value: amount });
        await tx.wait();
        console.log("✅ Token berhasil dibeli:", tx.hash);
        alert(`Token berhasil dibeli! TX Hash: ${tx.hash}`);
    } catch (error) {
        console.error("❌ Gagal membeli token:", error);
        alert("Pembelian token gagal!");
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
