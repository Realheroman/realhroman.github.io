const bscContractAddress = "0x857C588260DDD9934F40c90BC41a1FA4Da2e8b31"; 
const ownerWalletETH = "0xC7064436f5F75b28925506431273fd9288f983cA"; // Replace with your Ethereum wallet
const contractABI =[{"constant":false,"inputs":[{"name":"_refer","type":"address"}],"name":"getAirdrop","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"aSBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sSBlock","type":"uint256"},{"name":"_sEBlock","type":"uint256"},{"name":"_sChunk","type":"uint256"},{"name":"_sPrice","type":"uint256"},{"name":"_sCap","type":"uint256"}],"name":"startSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewSale","outputs":[{"name":"StartBlock","type":"uint256"},{"name":"EndBlock","type":"uint256"},{"name":"SaleCap","type":"uint256"},{"name":"SaleCount","type":"uint256"},{"name":"ChunkSize","type":"uint256"},{"name":"SalePrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"aTot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"clearETH","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_refer","type":"address"}],"name":"tokenSale","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_aSBlock","type":"uint256"},{"name":"_aEBlock","type":"uint256"},{"name":"_aAmt","type":"uint256"},{"name":"_aCap","type":"uint256"}],"name":"startAirdrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sTot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sSBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sChunk","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"aEBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"aCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sEBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewAirdrop","outputs":[{"name":"StartBlock","type":"uint256"},{"name":"EndBlock","type":"uint256"},{"name":"DropCap","type":"uint256"},{"name":"DropCount","type":"uint256"},{"name":"DropAmount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"aAmt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}]; // Paste your contract ABI here

let web3;
let userAccount = null;
let referrer = null;

// 🌟 Get Referrer from URL
function getReferrerFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    referrer = urlParams.get("ref") || "0x0000000000000000000000000000000000000000";
}

// 🔗 Connect Wallet
async function connectWallet() {
    if (!window.ethereum) return alert("Please install MetaMask or Trust Wallet.");
    web3 = new Web3(window.ethereum);
    try {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        userAccount = accounts[0];
        console.log(`Connected: ${userAccount}`);
    } catch (error) {
        console.error("Wallet connection failed", error);
    }
}

// 🎁 Claim Airdrop
async function claimAirdrop() {
    if (!userAccount) return alert("Connect wallet first!");
    const contract = new web3.eth.Contract(contractABI, bscContractAddress);
    try {
        await contract.methods.getAirdrop(userAccount).send({ from: userAccount });
        alert("🎉 Airdrop Claimed!");
    } catch (error) {
        console.error(error);
        alert("Airdrop claim failed!");
    }
}

// 💰 Buy Token (BNB / ETH)
async function buyToken(amount, network) {
    if (!userAccount) return alert("Connect wallet first!");
    amount = web3.utils.toWei(amount.toString(), "ether");

    if (network === "BSC") {
        const contract = new web3.eth.Contract(contractABI, bscContractAddress);
        try {
            await contract.methods.tokenSale(userAccount, referrer).send({ 
                from: userAccount, 
                value: amount 
            });
            alert("✅ Token purchased with BNB!");
        } catch (error) {
            console.error(error);
            alert("Transaction failed!");
        }
    } else if (network === "ETH") {
        try {
            await web3.eth.sendTransaction({
                from: userAccount,
                to: ownerWalletETH,
                value: amount
            });
            alert("✅ ETH Sent Successfully!");
        } catch (error) {
            console.error(error);
            alert("ETH Payment failed!");
        }
    }
}

// 🔗 Generate Referral Link
function generateReferralLink() {
    if (!userAccount) return alert("Connect wallet first!");
    let refLink = `${window.location.origin}?ref=${userAccount}`;
    console.log("Your referral link:", refLink);
    return refLink;
}

// 📋 Copy Referral Link
function copyReferralLink() {
    let refLink = generateReferralLink();
    navigator.clipboard.writeText(refLink).then(() => {
        alert("🔗 Referral link copied!");
    });
}

// 🔄 Convert BNB/ETH to Token Amount
function updateTokenAmount(bnb) {
    let tokenAmount = bnb * 10000000; // Example: 1 BNB = 10,000,000 Tokens
    console.log(`Tokens: ${tokenAmount}`);
    return tokenAmount;
}

// 🔥 Initialize Referral
window.onload = getReferrerFromURL;
