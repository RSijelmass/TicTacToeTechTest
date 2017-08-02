describe('Space', function() {
	
	var space;
	beforeEach(function() {
		space = new Space();
	});
	describe('takes in parameter', function() {
		it('takes in X', function() {
			expect(space.fillIn('X')).toEqual('X')
		});
	it('takes in O', function() {
			expect(space.fillIn('O')).toEqual('O')
		});
	it('doesn\'t take in other value', function() {
			expect( function() { space.fillIn('R') } ).toThrow('This move is not allowed!')
		});
	it('doesn\'t take in no value', function() {
			expect( function() { space.fillIn() } ).toThrow('This move is not allowed!')
		});
	});
});
