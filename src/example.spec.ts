//feature
class Friendlist {
    friends = [];

    addFriend(name) {
        this.friends.push(name);
        this.announceFriendship(name);
    }

    announceFriendship(name) {
        global.console.log(`${name} is now a friend`);
    }

    removeFriend(name) {
        const idx = this.friends.indexOf(name);

        if (idx === -1) {
            throw new Error('Friend not find');
        }

        this.friends.splice(idx, 1);
        global.console.log(`${name} is now removed`);

    }
}

//test

describe('Friendlist', () => {

    let friendlist;

    beforeEach(() => {
        friendlist = new Friendlist();
    });

    it('initialize friend list', () => {
        expect(friendlist.friends.length).toEqual(0);

    });

    it('add friend to list', () => {
        friendlist.addFriend('crepin');

        expect(friendlist.friends.length).toEqual(1);
    });

    it('announces friendship', () => {
        friendlist.announceFriendship = jest.fn();

        expect(friendlist.announceFriendship).not.toHaveBeenCalled();
        friendlist.addFriend('crepin');
        expect(friendlist.announceFriendship).toHaveBeenCalledWith('crepin');

    });

    /* it('remove friend', () => {
         friendlist.removeFriend = jest.fn();
         friendlist.addFriend('fadjo');
         friendlist.addFriend('lola');
         friendlist.removeFriend('lola');
         expect(friendlist.removeFriend).toHaveBeenCalledWith('fadjo');
     }) */


    describe('Remove friend', () => {

        it('remove a friend from the list', () => {
            friendlist.addFriend('crepin');
            expect(friendlist.friends[0]).toEqual('crepin');
            friendlist.removeFriend('crepin');
            expect(friendlist.friends[0]).toBeUndefined();

        });

        it('throws an error when friends does not exist', () => {
            expect(() => friendlist.removeFriend('lola')).toThrowError('Friend not find');

        });

    });

});

