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
		
		var oddzielenieCzesciCalkowitejOdDziesietnej = liczbaBezOkresu.toString().split('.');
		
		var dlugoscOkresuLiczby = okresLiczby.toString().length;
		
		
		
		var p = (oddzielenieCzesciCalkowitejOdDziesietnej[1].length + dlugoscOkresuLiczby) * -1;
		var j = dlugoscOkresuLiczby * -1;
		
		
		var licznik = okresLiczby * Math.pow(10, p);
		var mianownik = 1 - Math.pow(10, j);
		
		
		
		licznik = (mianownik * parseFloat(liczbaBezOkresu)) + licznik;
		
		
		licznik = Math.round(licznik * 100000000000000) / 100000000000000;
		mianownik = Math.round(mianownik * 100000000000000) / 100000000000000;
		
		wynik = licznik.toString() + "/" + mianownik.toString();
		
		return wynik;
		
	}

}