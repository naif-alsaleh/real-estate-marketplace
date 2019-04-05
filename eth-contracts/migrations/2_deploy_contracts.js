// migrating the appropriate contracts
// var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var ERC721Mintable = artifacts.require("./ERC721Mintable.sol")
SolnSquareVerifier = artifacts.require("SolnSquareVerifier");

module.exports = function(deployer) {
  deployer.deploy(ERC721Mintable);
  // deployer.deploy(SquareVerifier);
  deployer.deploy(SolnSquareVerifier);
};