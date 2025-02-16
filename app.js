const contractAddress = "0x857C588260DDD9934F40c90BC41a1FA4Da2e8b31"; 
const contractABI = [{"constant":false,"inputs":[{"name":"_refer","type":"address"}],"name":"getAirdrop","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"aSBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sSBlock","type":"uint256"},{"name":"_sEBlock","type":"uint256"},{"name":"_sChunk","type":"uint256"},{"name":"_sPrice","type":"uint256"},{"name":"_sCap","type":"uint256"}],"name":"startSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewSale","outputs":[{"name":"StartBlock","type":"uint256"},{"name":"EndBlock","type":"uint256"},{"name":"SaleCap","type":"uint256"},{"name":"SaleCount","type":"uint256"},{"name":"ChunkSize","type":"uint256"},{"name":"SalePrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"aTot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"clearETH","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_refer","type":"address"}],"name":"tokenSale","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_aSBlock","type":"uint256"},{"name":"_aEBlock","type":"uint256"},{"name":"_aAmt","type":"uint256"},{"name":"_aCap","type":"uint256"}],"name":"startAirdrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sTot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sSBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sChunk","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"aEBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"aCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sEBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewAirdrop","outputs":[{"name":"StartBlock","type":"uint256"},{"name":"EndBlock","type":"uint256"},{"name":"DropCap","type":"uint256"},{"name":"DropCount","type":"uint256"},{"name":"DropAmount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"aAmt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}]; // Contract ABI remains the same

let web3;
let userAccount = null;
let referrer = null; // Variable to store referral address

// 1️⃣ Function to read referral from URL
function getReferrerFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    referrer = urlParams.get("ref");
    if (referrer) {
        document.getElementById("refWallet").value = referrer; // Display in referral form
    }
}

// 2️⃣ Force Binance Smart Chain Before Connecting
async function checkNetworkBeforeConnect() {
    if (!window.ethereum) {
        return alert("Please install MetaMask or Trust Wallet.");
    }

    const currentChainId = await ethereum.request({ method: "eth_chainId" });

    if (currentChainId !== "0x38") { // 0x38 = Binance Smart Chain Mainnet
        try {
            await ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0x38" }],
            });
            alert("✅ Switched to Binance Smart Chain! Now connect your wallet.");
        } catch (switchError) {
            if (switchError.code === 4902) {
                await ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [{
                        chainId: "0x38",
                        chainName: "Binance Smart Chain",
                        nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
                        rpcUrls: ["https://bsc-dataseed.binance.org/"],
                        blockExplorerUrls: ["https://bscscan.com/"],
                    }],
                });
                alert("✅ Binance Smart Chain added! Now connect your wallet.");
            } else {
                console.error("Failed to switch network:", switchError);
                alert("⚠️ Please switch to Binance Smart Chain manually in your wallet.");
            }
        }
    }

    connectWallet(); // Connect after switching to BSC
}

// 3️⃣ Connect Wallet After Network is Correct
async function connectWallet() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            userAccount = accounts[0];
            document.getElementById("connectWallet").innerText = `✅ Connected: ${userAccount.substring(0, 6)}...`;
        } catch (error) {
            console.error("User denied wallet connection");
        }
    } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
        userAccount = web3.eth.accounts[0];
        document.getElementById("connectWallet").innerText = `✅ Connected: ${userAccount.substring(0, 6)}...`;
    } else {
        alert("Please use MetaMask or Trust Wallet.");
    }
}

// 4️⃣ Claim Airdrop
async function claimAirdrop() {
    if (!userAccount) return alert("Connect your wallet first!");
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    try {
        await contract.methods.getAirdrop(userAccount).send({ from: userAccount });
        alert("🎉 Airdrop successfully claimed!");
    } catch (error) {
        console.error(error);
        alert("Airdrop claim failed!");
    }
}

// 5️⃣ Buy Token (Presale) with Referral
async function buyToken() {
    if (!userAccount) return alert("Connect your wallet first!");
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    let bnbAmount = document.getElementById("bnbAmount").value;
    if (bnbAmount < 0.01) return alert("Minimum purchase is 0.01 BNB.");

    let tokenAmount = bnbAmount * 10000000; // 1 BNB = 10,000,000 $BWAR
    try {
        await contract.methods.tokenSale(userAccount, referrer || "0x0000000000000000000000000000000000000000").send({
            from: userAccount,
            value: web3.utils.toWei(bnbAmount, "ether")
        });
        alert(`✅ Successfully purchased ${tokenAmount} $BWAR.`);
    } catch (error) {
        console.error(error);
        alert("Transaction failed!");
    }
}

// 6️⃣ Generate Referral Link
async function generateReferralLink() {
    if (!userAccount) return alert("Connect your wallet first!");
    
    let refLink = `${window.location.origin}?ref=${userAccount}`;
    document.getElementById("refLink").innerText = refLink;
}

// 7️⃣ Copy Referral Link
function copyReferralLink() {
    let refText = document.getElementById("refLink").innerText;
    navigator.clipboard.writeText(refText).then(() => {
        alert("🔗 Referral link copied!");
    });
}

// 8️⃣ Update Token Amount When BNB Input Changes
document.getElementById("bnbAmount").addEventListener("input", function() {
    let bnb = this.value;
    let tokenAmount = bnb * 10000000; // 1 BNB = 10,000,000 $BWAR
    document.getElementById("tokenAmount").innerText = tokenAmount.toLocaleString();
});

// 9️⃣ Event Listeners
document.getElementById("connectWallet").addEventListener("click", checkNetworkBeforeConnect);
document.getElementById("claimAirdrop").addEventListener("click", claimAirdrop);
document.getElementById("buyToken").addEventListener("click", buyToken);
document.getElementById("generateRef").addEventListener("click", generateReferralLink);
document.getElementById("copyRef").addEventListener("click", copyReferralLink);

// 🔟 Retrieve Referral from URL When Page Loads
window.onload = getReferrerFromURL;
