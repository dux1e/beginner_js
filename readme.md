# Denne condition virker som den skal. 

Hvis jeg har problemer er det nok fordi jeg har glemt at en if condition skal tjekke efter om noget er sandt altså == OG IKKE BARE = f.eks.


## Funktion der ikke virker:
	function colorChange() {
		if(text.style.color = 'black') {
			text.style.color = 'pink';
		} else {
			text.style.color = 'black';
		}
	}

Dette kommer ikke til at vike da den ikke **tjekker** efter om text.style.color er sat til black men derimod sætter værdien til black...
Man skal derfor gøre som dette

## Funktion der virker
	function colorChange() {
		if(text.style.color == 'black') {
			text.style.color = 'pink';
		} else {
			text.style.color = 'black';
		}
	}

P.S. man skal huste i sin CSS at skrive for at det virker

	#text {
	  color:black;
	}


Med det er skrevet oppe i funtionen **tjekker** funktionen nu efter om text.style.color er sat til black i stedet for at sætte værdien til black

# Vigtigt
Dette er for min egen skyld så jeg kan se hvad det er jeg skal gøre hvis jeg skal lave en toggle switch på en side og hvad det er jeg ofte laver fejl med.
