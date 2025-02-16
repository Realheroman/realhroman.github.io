
// app.js - Final Version (MetaMask & WalletConnect Support)
import { EthereumProvider } from "https://esm.sh/@walletconnect/ethereum-provider@2.8.1";
import { ethers } from "https://esm.sh/ethers";

const contractAddress = "0x857C588260DDD9934F40c90BC41a1FA4Da2e8b31";
const contractABI = [ /* ABI dari kontrak Anda */ ];

let provider, signer, contract, web3, userAccount = null;
let referrer = null;

// Ambil Referral dari URL
function getReferrerFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    referrer = urlParams.get("ref");
    if (referrer) {
        document.getElementById("refWallet").value = referrer;
    }
}

// Koneksi Wallet (MetaMask atau WalletConnect)
async function connectWallet(method) {
    try {
        if (method === "metamask") {
            if (!window.ethereum) {
                alert("MetaMask tidak terdeteksi! Instal terlebih dahulu.");
                return;
            }
            web3 = new Web3(window.ethereum);
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            userAccount = accounts[0];
            contract = new web3.eth.Contract(contractABI, contractAddress);
        } else if (method === "walletconnect") {
            provider = await EthereumProvider.init({
                projectId: "2891d08b2b53e94b9c8ec031af88d6a9",
                showQrModal: true,
                chains: [56],
                rpcMap: { 56: "https://bsc-dataseed1.binance.org/" }
            });
            await provider.connect();
            signer = await new ethers.BrowserProvider(provider).getSigner();
            contract = new ethers.Contract(contractAddress, contractABI, signer);
            userAccount = await signer.getAddress();
        }

        document.getElementById("walletStatus").innerText = `🔗 Wallet: ${userAccount.substring(0, 6)}...`;
    } catch (error) {
        alert(`Gagal menghubungkan wallet! \nError: ${error.message}`);
    }
}

// Klaim Airdrop
async function claimAirdrop() {
    if (!userAccount) return alert("Harap hubungkan wallet terlebih dahulu!");
    try {
        let tx = web3 
            ? await contract.methods.getAirdrop(userAccount).send({ from: userAccount }) 
            : await contract.getAirdrop(userAccount).then(tx => tx.wait());

        alert("✅ Airdrop berhasil diklaim!");
    } catch (error) {
        alert("Klaim airdrop gagal!");
    }
}

// Beli Token
async function buyToken() {
    if (!userAccount) return alert("Harap hubungkan wallet terlebih dahulu!");
    let bnbAmount = document.getElementById("bnbAmount").value;
    if (bnbAmount < 0.01) return alert("Minimal 0.01 BNB");

    try {
        let tx = web3 
            ? await contract.methods.tokenSale(userAccount, referrer || "0x0000000000000000000000000000000000000000").send({
                from: userAccount, value: web3.utils.toWei(bnbAmount, "ether")
            })
            : await contract.tokenSale(referrer || "0x0000000000000000000000000000000000000000", {
                value: ethers.parseEther(bnbAmount)
            }).then(tx => tx.wait());

        alert("✅ Token berhasil dibeli!");
    } catch (error) {
        alert("Pembelian token gagal!");
    }
}

// Generate Referral Link
function generateReferralLink() {
    if (!userAccount) return alert("Hubungkan wallet terlebih dahulu!");
    document.getElementById("refLink").innerText = `${window.location.origin}?ref=${userAccount}`;
}

// Copy Referral Link
function copyReferralLink() {
    navigator.clipboard.writeText(document.getElementById("refLink").innerText).then(() => {
        alert("🔗 Referral link disalin!");
    });
}

// Event Listeners
document.getElementById("connectMetaMask").addEventListener("click", () => connectWallet("metamask"));
document.getElementById("connectWalletConnect").addEventListener("click", () => connectWallet("walletconnect"));
document.getElementById("claimAirdrop").addEventListener("click", claimAirdrop);
document.getElementById("buyToken").addEventListener("click", buyToken);
document.getElementById("generateRef").addEventListener("click", generateReferralLink);
document.getElementById("copyRef").addEventListener("click", copyReferralLink);
window.onload = getReferrerFromURL;
