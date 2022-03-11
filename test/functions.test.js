describe('The Fruit List function', function() {
    describe('', function() {

        it('should allow the user to search for a fruit in the list', () =>{
            let fruits = fruitList();
            fruits.myFruits();
            assert.equal(fruits.myFruits("true"))
        });

        it('should return an error message "fruit not found" if user searches for a fruit that is not on the list', () =>{
            let fruits = fruitList();
            fruits.myFruits();
            assert.equal(fruits.myFruits("false"))
        });

        it('should return an error message "add a fruit" if user searches for a fruit that is not on the list', () =>{
            let fruits = fruitList();
            fruits.myFruits();
            assert.equal(fruits.myFruits())
        });
        it('should return "add an emoji" if the user added a fruit name and clicked add button without adding an emoji', () => {
            let fruits = fruitList();
            fruits.myFruits();

            assert.equal(fruits.myFruits("🍊"));
        });

        it('should return an error message "fruit and emoji do not match" if the fruit name and emoji does not match', () => {
            let fruits = fruitList();
            fruits.myFruits();

            assert.equal(fruits.myFruits("Mango", "Melon"));
        });
        
        it('should allow the user to sort the fruits in alphabetically', () => {
            let fruits = fruitList();
            fruits.ass();
            assert.equal(fruits.ass())
        });
       
        it('should allow the user to sort the fruits in a descending order', () => {
            let fruits = fruitList();
            fruits.des();
            assert.equal(fruits.des())
        });

       


       
    });

})