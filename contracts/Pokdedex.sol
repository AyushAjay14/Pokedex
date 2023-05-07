// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC1155LazyMint.sol";

contract Pokdedex is ERC1155LazyMint {
    constructor(
        string memory _name,
        string memory _symbol,
        address _royaltyRecipient,
        uint128 _royaltyBps
    ) ERC1155LazyMint(_name, _symbol, _royaltyRecipient, _royaltyBps) {}
    function verifyClaim(
        address _claimer,
        uint256 _tokenId,
        uint256 _quantity
    ) public view override {
        require(_tokenId == 0 , "Only squirtles are claimable");
        require(_quantity == 1 , "Only 1 Squirtle can be claimed");
    }

    function evolve() public{
        _burn(msg.sender , 0 , 2);
        _mint(msg.sender , 1 , 1 , "");
    }
}