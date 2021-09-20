const MyDeFiProject = artifacts.require('MyDefiProject.sol');

const cBatAddress = '0xebf1a11532b93a529b5bc942b4baa98647913002';

module.exports = async done => {
    const myDefiProject = await MyDeFiProject.deployed();
    await myDefiProject.repayBorrow(cBatAddress, web3.utils.toWei('10'));
    done();
};
