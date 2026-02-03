# Secure Multi-Sig Treasury

A robust, production-grade Multi-Signature wallet designed for small teams and DAO treasuries. 

### Core Logic
* **M-of-N Security:** Transactions require `requiredConfirmations` out of `N` total owners.
* **Propose & Approve:** Any owner can submit a transaction; others must confirm it.
* **Execution:** Once the threshold is met, any owner can trigger the final execution.
* **Transparency:** Every proposal and confirmation is logged on-chain.

### Usage
1. Deploy with a list of owner addresses and the required confirmation count.
2. Fund the contract by sending ETH to its address.
3. Call `submitTransaction` to propose a spend.
4. Other owners call `confirmTransaction(txIndex)`.
5. Once threshold is reached, call `executeTransaction(txIndex)`.
