var rect ={
	width:100,
	height: 50,

	draw: function(){
		console.log('I am a rectangle')
		 this.printPropertiea()
		 console.log(this)
	},
	printPropertiea: function(){
		console.log('I am a rectangle'+this.width)
		console.log('I am a rectangle'+this.height)
	}
}

rect.draw()

function myFunc(){
	console.log(this)
}



 
