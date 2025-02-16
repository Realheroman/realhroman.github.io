const contractAddress = "0x857C588260DDD9934F40c90BC41a1FA4Da2e8b31"; 
const contractABI = [...]; // Contract ABI remains the same

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

// 2️⃣ Connect Wallet and Set to Binance Smart Chain
async function connectWallet() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            // Request account access
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            userAccount = accounts[0];

            // Check the current network
            const currentChainId = await ethereum.request({ method: "eth_chainId" });
            if (currentChainId !== "0x38") { // 0x38 is Binance Smart Chain Mainnet
                try {
                    await ethereum.request({
                        method: "wallet_switchEthereumChain",
                        params: [{ chainId: "0x38" }],
                    });
                } catch (switchError) {
                    // If the chain is not added, request to add it
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
                    } else {
                        throw switchError;
                    }
                }
            }

            document.getElementById("connectWallet").innerText = `✅ Connected: ${userAccount.substring(0, 6)}...`;
        } catch (error) {
            console.error("User denied wallet connection");
        }
    } else {
        alert("Please install MetaMask or Trust Wallet.");
    }
}

// 3️⃣ Claim Airdrop
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

// 4️⃣ Buy Token (Presale) with Referral
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

// 5️⃣ Generate Referral Link
async function generateReferralLink() {
    if (!userAccount) return alert("Connect your wallet first!");
    
    let refLink = `${window.location.origin}?ref=${userAccount}`;
    document.getElementById("refLink").innerText = refLink;
}

// 6️⃣ Copy Referral Link
function copyReferralLink() {
    let refText = document.getElementById("refLink").innerText;
    navigator.clipboard.writeText(refText).then(() => {
        alert("🔗 Referral link copied!");
    });
}

// 7️⃣ Update Token Amount When BNB Input Changes
document.getElementById("bnbAmount").addEventListener("input", function() {
    let bnb = this.value;
    let tokenAmount = bnb * 10000000; // 1 BNB = 10,000,000 $BWAR
    document.getElementById("tokenAmount").innerText = tokenAmount.toLocaleString();
});

// 8️⃣ Event Listeners
document.getElementById("connectWallet").addEventListener("click", connectWallet);
document.getElementById("claimAirdrop").addEventListener("click", claimAirdrop);
document.getElementById("buyToken").addEventListener("click", buyToken);
document.getElementById("generateRef").addEventListener("click", generateReferralLink);
document.getElementById("copyRef").addEventListener("click", copyReferralLink);

// 9️⃣ Retrieve Referral from URL When Page Loads
window.onload = getReferrerFromURL;
