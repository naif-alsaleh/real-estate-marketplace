# Aqar Real Estate Marketplace (AQRT)
At present, property titles are often paper-based, creating opportunities for errors and fraud. Title professionals find defects in 25% of all titles during the transaction process, according to the American Land Title Association.

Any identified defect makes it illegal to transfer a property title to a buyer until it is rectified. This means property owners often incur high legal fees to ensure authenticity and accuracy of their property titles.

Moreover, title fraud poses a risk to homeowners worldwide.

These title management issues could potentially be mitigated by using blockchain technology to build immutable digital records of land titles and using blockchain for transparent transactions. This approach could simplify property title management, making it more transparent and helping to reduce the risk of title fraud and the need for additional insurance.

![AQRT](https://github.com/naif-alsaleh/real-estate-marketplace/raw/master/images/1.png)

![AQRT](https://github.com/naif-alsaleh/real-estate-marketplace/raw/master/images/2.png)

![AQRT](https://github.com/naif-alsaleh/real-estate-marketplace/raw/master/images/3.png)

Aqar Marketplace is an ethereum token complied with the ERC721 non-fungible standard. AQRT is deployed to rinkeby network with this address [0xb309dfa248050c2ab200ddcec275fac355a45d34](https://rinkeby.etherscan.io/address/0xb309dfa248050c2ab200ddcec275fac355a45d34)

AQRT is available at [opensea](https://rinkeby.opensea.io/category/aqartokenv2)

# Project Resources

* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)

# Installation

## Truffle
It is a Development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM)
```bash
npm install -g truffle
```
##  Ganache CLI
Ganache CLI, part of the Truffle suite of Ethereum development tools, is the command line version of Ganache, your personal blockchain for Ethereum development.
```bash
npm install -g ganache-cli
```

## ZoKrates (Optional)
ZoKrates is a toolbox for zkSNARKs on Ethereum. It helps you use verifiable computation in DApps, from the specification of your program in a high level language to generating proofs of computation to verifying those proofs in Solidity.
I already generated one proof in ```./zokrates/code/square/``` directory. 

However, If you want to generate it your self. You need to do the following:

**Step #1:** First install Zokrates. Currently, Docker is the recommended way to get started with Zokrates. You can run a container by running the following command
```bash
docker run -v <path to your project folder>:/home/zokrates/code -ti zokrates/zokrates /bin/bash
```

**Step #2:** Compile the program written in ZoKrates DSL
```
/path/to/zokrates compile -i <program_name>.code
```

**Step #3:** Generate the Trusted Setup
```
/path/to/zokrates setup
```

**Step #4:** Compute Witness
```
/path/to/zokrates compute-witness -a <a> <b> ... <n>
```

**Step #5:** Compile the program written in ZoKrates DSL
```
/path/to/zokrates compile -i <program_name>.code
```

**Step #5:** Generate Proof
```
/path/to/zokrates generate-proof
```

**Step #5:** Export Verifier
```
path/to/zokrates export-verifier
```
# Setup
first install npm requirements by running
```bash
npm install
```
to compile ethereum contracts, run the following command
```bash
truffle compile
```

to compile ethereum contracts, run the following command
```bash
truffle migrate --reset
```

# Tests
To run truffle test, run the following command
```bash
truffle test
```
