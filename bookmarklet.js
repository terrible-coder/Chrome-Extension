n = 0;

function jumble(text) {
	const separator = /\W/; // /[.,;!?<>''\s]/;
	text = text.split(separator);
	let jumbled = "";
	text.forEach(word =>  {
		let jword = "";
		for(i = 1; i < word.length-1; i++)
			if(Math.random() < 0.5)
				jword = word.charAt(i) + jword;
			else
				jword = jword + word.charAt(i);
		jword = word.charAt(0) + jword + word.charAt(word.length - 1);
		jumbled += jword + " ";
	});
	return jumbled;
}

function typoglycemia(node) {
	if(node.nodeName === "#text" && Math.random() < 0.8)
		node.textContent = jumble(node.textContent);
		// console.log(node.textContent);
	else
		node.childNodes.forEach(elt => typoglycemia(elt));
}

function start() {
	typoglycemia(document.body);
}

(function(){
	setInterval(start, 750);
	// start();
})();