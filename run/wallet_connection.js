import { EthereumProvider } from "https://esm.sh/@walletconnect/ethereum-provider@2.8.1";
import { ethers } from "https://esm.sh/ethers";

let provider, signer;
let userAccount = null;
let web3;

// 1️⃣ Koneksi MetaMask atau Trust Wallet
async function connectMetaMask() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            userAccount = accounts[0];
            document.getElementById("walletAddress").innerText = `🔗 Wallet: ${userAccount}`;
        } catch (error) {
            console.error("User denied wallet connection");
            alert("Failed to connect with MetaMask.");
        }
    } else {
        alert("Please install MetaMask or Trust Wallet.");
    }
}

// 2️⃣ Koneksi WalletConnect V2
async function connectWalletConnect() {
    try {
        console.log("🔵 Connecting WalletConnect...");
        provider = await EthereumProvider.init({
            projectId: "2891d08b2b53e94b9c8ec031af88d6a9",
            showQrModal: true,
            chains: [56], // Binance Smart Chain (BSC)
            rpcMap: { 56: "https://bsc-dataseed1.binance.org/" }
        });

        await provider.connect();
        console.log("✅ WalletConnect connected.");

        const walletProvider = new ethers.BrowserProvider(provider);
        signer = await walletProvider.getSigner();
        const accounts = await walletProvider.send("eth_accounts", []);

        userAccount = accounts[0];
        document.getElementById("walletAddress").innerText = `🔗 Wallet: ${userAccount}`;
    } catch (error) {
        console.error("❌ WalletConnect error:", error);
        alert("Failed to connect WalletConnect.");
    }
}

// 3️⃣ Fungsi untuk memutuskan koneksi WalletConnect
function disconnectWallet() {
    if (provider) {
        provider.disconnect();
        document.getElementById("walletAddress").innerText = "🔗 Wallet: Not Connected";
        userAccount = null;
        console.log("🔴 Wallet disconnected.");
    }
}

// 4️⃣ Ekspor fungsi agar bisa digunakan di app.js
export { connectMetaMask, connectWalletConnect, disconnectWallet, userAccount, web3 };
