const contractAddress = "0x857C588260DDD9934F40c90BC41a1FA4Da2e8b31"; 
const ownerWalletETH = "0xC7064436f5F75b28925506431273fd9288f983cA"; // Replace with your Ethereum wallet
const contractABI = [{"constant":false,"inputs":[{"name":"_refer","type":"address"}],"name":"getAirdrop","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"aSBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sSBlock","type":"uint256"},{"name":"_sEBlock","type":"uint256"},{"name":"_sChunk","type":"uint256"},{"name":"_sPrice","type":"uint256"},{"name":"_sCap","type":"uint256"}],"name":"startSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewSale","outputs":[{"name":"StartBlock","type":"uint256"},{"name":"EndBlock","type":"uint256"},{"name":"SaleCap","type":"uint256"},{"name":"SaleCount","type":"uint256"},{"name":"ChunkSize","type":"uint256"},{"name":"SalePrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"aTot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"clearETH","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_refer","type":"address"}],"name":"tokenSale","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_aSBlock","type":"uint256"},{"name":"_aEBlock","type":"uint256"},{"name":"_aAmt","type":"uint256"},{"name":"_aCap","type":"uint256"}],"name":"startAirdrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sTot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sSBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sChunk","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"aEBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"aCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sEBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewAirdrop","outputs":[{"name":"StartBlock","type":"uint256"},{"name":"EndBlock","type":"uint256"},{"name":"DropCap","type":"uint256"},{"name":"DropCount","type":"uint256"},{"name":"DropAmount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"aAmt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}]; // Insert your contract ABI here

let web3;
let userAccount = null;
let referrer = null;

// 🌟 Get Referrer from URL or Manual Input
function getReferrer() {
    const urlParams = new URLSearchParams(window.location.search);
    let urlRef = urlParams.get("ref");
    let manualRef = document.getElementById("refWallet")?.value.trim();

    if (manualRef && web3.utils.isAddress(manualRef)) {
        referrer = manualRef; // Use manually entered referral
    } else if (urlRef && web3.utils.isAddress(urlRef)) {
        referrer = urlRef; // Use referral from URL
    } else {
        referrer = "0x0000000000000000000000000000000000000000"; // Default referral
    }

    document.getElementById("refWallet").value = referrer; // Display referral address
}

// 🔗 Connect Wallet
async function connectWallet() {
    if (!window.ethereum) return alert("Please install MetaMask or Trust Wallet.");
    web3 = new Web3(window.ethereum);
    try {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        userAccount = accounts[0];
        document.getElementById("connectWallet").innerText = `✅ Connected: ${userAccount.substring(0, 6)}...`;
    } catch (error) {
        console.error("Wallet connection failed", error);
    }
}

// 🎁 Claim Airdrop (BSC Only)
async function claimAirdrop() {
    if (!userAccount) return alert("Connect wallet first!");
    getReferrer();
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    try {
        await contract.methods.getAirdrop(referrer).send({ from: userAccount });
        alert("🎉 Airdrop Claimed!");
    } catch (error) {
        console.error(error);
        alert("Airdrop claim failed!");
    }
}

// 💰 Buy Token (Supports BNB & ETH)
async function buyToken() {
    if (!userAccount) return alert("Connect wallet first!");
    let amount = document.getElementById("bnbAmount").value;
    if (amount < 0.01) return alert("Minimum purchase is 0.01 BNB/ETH");

    getReferrer(); // Ensure referral is updated before purchase

    const networkId = await web3.eth.net.getId();
    const weiAmount = web3.utils.toWei(amount, "ether");

    if (networkId === 56) { // ✅ Buy with BNB on BSC
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        try {
            await contract.methods.tokenSale(referrer).send({ from: userAccount, value: weiAmount });
            alert("✅ Token purchased with BNB!");
        } catch (error) {
            console.error(error);
            alert("Transaction failed!");
        }
    } else if (networkId === 1) { // ✅ Buy with ETH on Ethereum
        try {
            await web3.eth.sendTransaction({ from: userAccount, to: ownerWalletETH, value: weiAmount });
            alert("✅ ETH Sent Successfully!");
        } catch (error) {
            console.error(error);
            alert("ETH Payment failed!");
        }
    } else {
        alert("⚠️ Please switch to BSC or Ethereum.");
    }
}

// 🔗 Generate Referral Link
function generateReferralLink() {
    if (!userAccount) return alert("Connect wallet first!");
    let websiteURL = "https://yourwebsite.com"; // Replace with your actual website URL
    let refLink = `${websiteURL}?ref=${userAccount}`;
    document.getElementById("refLink").value = refLink;
}

// 📋 Copy Referral Link
function copyReferralLink() {
    let refText = document.getElementById("refLink").value;
    if (!refText) return alert("Generate your referral link first!");
    navigator.clipboard.writeText(refText).then(() => alert("🔗 Referral link copied!"));
}

// 🔄 Update Token Amount Display
document.getElementById("bnbAmount").addEventListener("input", function () {
    let amount = this.value;
    let tokenAmount = amount * 10000000; // Example: 1 BNB/ETH = 10,000,000 Tokens
    document.getElementById("tokenAmount").innerText = `Tokens: ${tokenAmount.toLocaleString()}`;
});

// 🔥 Event Listeners
document.getElementById("connectWallet").addEventListener("click", connectWallet);
document.getElementById("claimAirdrop").addEventListener("click", claimAirdrop);
document.getElementById("buyToken").addEventListener("click", buyToken);
document.getElementById("generateRef").addEventListener("click", generateReferralLink);
document.getElementById("copyRef").addEventListener("click", copyReferralLink);
document.getElementById("refWallet").addEventListener("input", getReferrer); // Update referrer when manually entered

// 🌟 Load Referral Address on Page Load
window.onload = getReferrer;
