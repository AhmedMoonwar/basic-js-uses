function tinyFriend(friendNames) {
    let tinyFriend = friendNames[0]
    for (let i = 0; i < friendNames.length; i++) {
        let element = friendNames[i]
        if (tinyFriend.length>element.length) {
            tinyFriend = element
           }

    }
    return tinyFriend;
}

let friendNames = ["kamal","sha","shak","shakib", "brac"]
let result = tinyFriend(friendNames);
console.log(result);