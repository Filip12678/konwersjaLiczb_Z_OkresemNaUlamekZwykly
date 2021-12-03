function myFunction() {
	var liczbaBezOkresu = prompt("Wprowadź liczbę bez okresu: ");
	var okresLiczby = prompt("Wprowadź okres liczby ");
	var ulamekZwykly = zamianaLiczby_Z_OkresemNaUlamekZwykly(liczbaBezOkresu, okresLiczby);
	alert(`Liczba przekonwertowana na ułamek zwykły: ${ulamekZwykly}`)
	
	
	function zamianaLiczby_Z_OkresemNaUlamekZwykly(liczbaBezOkresu, okresLiczby) {
		
		
		var sprawdzenie = liczbaBezOkresu.toString();
		var kropka = ".";
		//console.log(sprawdzenie);
		//console.log(liczbaBezOkresu);
		
		if (sprawdzenie.includes(kropka)) {
			console.log("Liczba zawiera przecinek");
			//break;
		}
		
		else {
			liczbaBezOkresu = liczbaBezOkresu.toString() + ".";
			//console.log(liczbaBezOkresu);
			//liczbaBezOkresu = parseFloat(liczbaBezOkresu);
			//liczbaBezOkresu = Number(liczbaBezOkresu);
			//console.log(`Liczba nie zawiera przecinka, liczba po dodaniu przecinka: ${liczbaBezOkresu}`)
		}
		
		
		var dlugoscOkresu = okresLiczby.length;
		var liczbaX = Math.pow(10, dlugoscOkresu);
		
		var liczbaDoKonwersji = liczbaBezOkresu.toString() + okresLiczby.toString();
		liczbaDoKonwersji = parseFloat(liczbaDoKonwersji);
		liczbaDoKonwersji = liczbaDoKonwersji * liczbaX;
		//console.log(liczbaDoKonwersji);
		
		lliczbaX = liczbaX - 1;
		
		var najwiekszyWspolnyDzielnik = nwd(liczbaDoKonwersji, lliczbaX);
		liczbaDoKonwersji =  liczbaDoKonwersji / najwiekszyWspolnyDzielnik;
		lliczbaX = lliczbaX / najwiekszyWspolnyDzielnik;
		
		ulamekZwykly = `${liczbaDoKonwersji}/${lliczbaX}`;
		
		return ulamekZwykly;
	}
	
	
	
	
	
	
	
	
	
	function nwd(a, b) {
        var reszta;
        while (b) {
			reszta = a % b;
			a = b;
			b = reszta;
    }
    return a;
	}

	function nww(a, b) {
		return a*b/nwd(a,b);
	}
}