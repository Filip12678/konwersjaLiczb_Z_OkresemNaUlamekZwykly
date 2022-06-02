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
		
		var iloscMiejscPomiedzyOkresem_A_Przecinkiem = Math.pow(10, liczbaCyfrPoprzedzajacychOkres * -1);
		
		console.log(iloscMiejscPomiedzyOkresem_A_Przecinkiem);
		
		var licznik = okresLiczby * Math.pow(10, okresLiczby.toString().length * -1) * iloscMiejscPomiedzyOkresem_A_Przecinkiem;
		var mianownik = 1 - Math.pow(10, okresLiczby.toString().length * -1);
		
		
		
		licznik = (mianownik * parseFloat(liczbaBezOkresu)) + licznik;
		
		
		
		licznik = Math.round(licznik * 100000000000000) / 100000000000000;
		mianownik = Math.round(mianownik * 100000000000000) / 100000000000000;
		
		wynik = licznik.toString() + "/" + mianownik.toString();
		
		return wynik;
		
	}

}