const hre = require("hardhat");

async function main() {
  const [owner1, owner2, owner3] = await hre.ethers.getSigners();
  const owners = [owner1.address, owner2.address, owner3.address];
  const required = 2; // 2-of-3 setup

  const MultiSig = await hre.ethers.getContractFactory("MultiSigWallet");
  const wallet = await MultiSig.deploy(owners, required);

  await wallet.waitForDeployment();
  console.log("MultiSig Wallet deployed to:", await wallet.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
