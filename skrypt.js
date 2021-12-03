function myFunction() {
	var liczbaBezOkresu = prompt("Wprowadź liczbę bez okresu: ");
	var okresLiczby = prompt("Wprowadź okres liczby ");
	var ulamekZwykly = zamianaLiczby_Z_OkresemNaUlamekZwykly(liczbaBezOkresu, okresLiczby);
	alert(`Liczba przekonwertowana na ułamek zwykły: ${ulamekZwykly}`)
	
	
	function zamianaLiczby_Z_OkresemNaUlamekZwykly(liczbaBezOkresu, okresLiczby) {
		
		
		var sprawdzenie = liczbaBezOkresu.toString();
		var kropka = ".";
		
		if (sprawdzenie.includes(kropka)) {
			console.log("Liczba zawiera przecinek");
		}
		
		else {
			liczbaBezOkresu = liczbaBezOkresu.toString() + ".";
		}
		
		
		var dlugoscOkresu = okresLiczby.length;
		var liczbaX = Math.pow(10, dlugoscOkresu);
		
		var liczbaDoKonwersji = liczbaBezOkresu.toString() + okresLiczby.toString() + okresLiczby.toString() + okresLiczby.toString() + okresLiczby.toString() + okresLiczby.toString() + okresLiczby.toString() + okresLiczby.toString() + okresLiczby.toString() + okresLiczby.toString() + okresLiczby.toString() + okresLiczby.toString() + okresLiczby.toString() + okresLiczby.toString() + okresLiczby.toString() + okresLiczby.toString();
		liczbaDoKonwersji = parseFloat(liczbaDoKonwersji);
		var liczbaPoKonwersji = liczbaDoKonwersji;
		liczbaDoKonwersji = liczbaDoKonwersji * liczbaX;
		
		liczbaDoKonwersji = liczbaPoKonwersji - liczbaDoKonwersji;
		liczbaDoKonwersji = Math.abs(liczbaDoKonwersji);
		liczbaDoKonwersji = Math.round(liczbaDoKonwersji * 10000000000000) / 10000000000000;
		
		
		liczbaX = liczbaX - 1;
		
		if (Number.isInteger(liczbaX) && Number.isInteger(liczbaDoKonwersji)) {
			var najwiekszyWspolnyDzielnik = nwd(liczbaDoKonwersji, liczbaX);
			console.log(najwiekszyWspolnyDzielnik);
			liczbaDoKonwersji =  liczbaDoKonwersji / najwiekszyWspolnyDzielnik;
			liczbaX = liczbaX / najwiekszyWspolnyDzielnik;
		}
		
		ulamekZwykly = `${liczbaDoKonwersji}/${liczbaX}`;
		
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
	
	function precision(a) {
		if (!isFinite(a)) return 0;
		var e = 1, p = 0;
		while (Math.round(a * e) / e !== a) { e *= 10; p++; }
		return p;
	}
}