// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";


contract TwitterDapp is ERC721("TwitterDApp", "TDAPP") {
    uint256 tokenId;
    tweet[] public tweets;

    struct tweet{
        string name;
        string description;
        uint256 upvotes;
        string[] comments;
        address fromAddress;
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        bytes memory dataURI = abi.encodePacked(
            '{',
                '"name":', '"', tweets[_tokenId].name, '",'  '"description":' , '"',  tweets[_tokenId].description, '"', ',' ,
            
            '"attributes":', '[', '{', '"trait_type":', '"Upvotes",' , '"value":', Strings.toString(tweets[_tokenId].upvotes), '}', ']' , '}'
        );

        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(dataURI)
            )
        );
    }

    function writeTweet(string memory prefName, string memory prefDesc) public {
        _safeMint(msg.sender, tokenId);
        tweets.push(tweet({
            name: prefName,
            description: prefDesc,
            upvotes: 0,
            comments: new string[](0),
            fromAddress: msg.sender
        }));
        tokenId = tokenId + 1;
    }

    function upvote(uint tweetIndex) public {
        tweets[tweetIndex].upvotes += 1;
    }

    function addComment(uint256 tweetIndex, string memory prefComments) public {
        tweets[tweetIndex].comments.push(prefComments);
    }

    function getAllTweets() public view returns(tweet[] memory) {
        return tweets;
    }

}