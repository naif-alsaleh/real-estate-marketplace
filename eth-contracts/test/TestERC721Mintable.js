var ERC721Mintable = artifacts.require('ERC721Mintable');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721Mintable.new({from: account_one});

            await this.contract.mint(account_one, 101);
            await this.contract.mint(account_one, 102);
            await this.contract.mint(account_one, 103);
            await this.contract.mint(account_two, 201);
        })

        it('should return total supply', async function () { 
            let totalSupply = (await this.contract.totalSupply()).toNumber();
            assert.equal(totalSupply, 4, "Incorrect total supply amount"); 
        })

        it('should get token balance', async function () {
            let account_one_balance = (await this.contract.balanceOf(account_one)).toNumber();
            let account_two_balance = (await this.contract.balanceOf(account_two)).toNumber();
            assert.equal(account_one_balance, 3, "Incorrect balance of first account"); 
            assert.equal(account_two_balance, 1, "Incorrect balance of second account"); 
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let uri = await this.contract.tokenURI(101);
            assert.equal(uri, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/101")
        })

        it('should transfer token from one owner to another', async function () { 
            let account_one_balance_before = (await this.contract.balanceOf(account_one)).toNumber();
            let account_two_balance_before = (await this.contract.balanceOf(account_two)).toNumber();
            
            await this.contract.safeTransferFrom(account_one, account_two, 101);

            let account_one_balance_after  = (await this.contract.balanceOf(account_one)).toNumber();
            let account_two_balance_after  = (await this.contract.balanceOf(account_two)).toNumber();
            let newTokenOwner = (await this.contract.ownerOf(101));

            assert.equal(newTokenOwner, account_two, "the token owner has not been updated")
            assert.equal(account_one_balance_before, account_one_balance_after + 1, "account one balance has not been updated")
            assert.equal(account_two_balance_before, account_two_balance_after - 1, "account two balance has not been updated")
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721Mintable.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            try {
                await this.contract.mint(account_one, 301, {from: account_two});
            } catch(e) {
                assert.strictEqual(e.message, "Returned error: VM Exception while processing transaction: revert Only owner of the contract can perform this action -- Reason given: Only owner of the contract can perform this action.");
            }
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.getOwner();
            assert.equal(account_one, owner, "Incorrect owner of the contract")
        })

    });
})