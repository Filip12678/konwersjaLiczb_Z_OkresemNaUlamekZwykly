function findTotalCount(str) {
  let count = 0;

  for (let ch of str) {
    if (ch >= "0" && ch <= "9") {
      count++;
    }
  }
  return count;
}




function myFunction() {
	var liczbaBezOkresu = prompt("Wprowadź liczbę bez okresu: ");
	var okresLiczby = prompt("Wprowadź okres liczby ");
	var ulamekZwykly = zamianaLiczby_Z_OkresemNaUlamekZwykly(liczbaBezOkresu, okresLiczby);
	alert(`Liczba przekonwertowana na ułamek zwykły: ${ulamekZwykly}`)
	
	
	function zamianaLiczby_Z_OkresemNaUlamekZwykly(liczbaBezOkresu, okresLiczby) {
		
		
		var sprawdzenie = liczbaBezOkresu.toString();
		var kropka = ".";
		
		
		if (sprawdzenie.includes(kropka)) {
			//console.log("Liczba zawiera przecinek");
		}
		
		else {
			liczbaBezOkresu = liczbaBezOkresu.toString() + ".";
		}
		
		var liczbaCyfrPoprzedzajacychOkres = 0;
		var oddzielenieCzesciCalkowitejOdDziesietnej = liczbaBezOkresu.toString().split('.');
		
		liczbaCyfrPoprzedzajacychOkres = findTotalCount(oddzielenieCzesciCalkowitejOdDziesietnej[1].toString());
		
		//okres liczby ale w miejscu poprzedzających liczb wpisujemy zera
		
		var okresLiczbyZ_WyzerowanymiMiejscami = Math.pow(10, liczbaCyfrPoprzedzajacychOkres * -1);
		
		var licznik = okresLiczby * Math.pow(10, okresLiczby.toString().length * -1) * okresLiczbyZ_WyzerowanymiMiejscami;
		var mianownik = 1 - Math.pow(10, okresLiczby.toString().length * -1);
		
		console.log(licznik, mianownik);
		
		
		
		console.log(mianownik, parseFloat(liczbaBezOkresu), licznik)
		licznik = (mianownik * parseFloat(liczbaBezOkresu)) + licznik
		
		console.log(licznik);
		
		
		licznik = Math.round(licznik * 100000000000000) / 100000000000000;
		mianownik = Math.round(mianownik * 100000000000000) / 100000000000000;
		
		wynik = licznik.toString() + "/" + mianownik.toString();
		
		return wynik;
		
	}

}