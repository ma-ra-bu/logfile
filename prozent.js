      var plus = function(v,z) {
        var betrag = parseFloat(v.value);
        var rabatt_prozent = parseFloat(z.value);
        var rabatt = betrag/100*rabatt_prozent;
        var preis = betrag-rabatt;
        window.alert(String(rabatt.toFixed(2))+" = Rabatt\n"+String(preis.toFixed(2))+" = Preis")
      };
      var v = document.querySelector('#vname');
      var z = document.querySelector('#zname');
      var xbutton = document.querySelector('#xbutton');
      xbutton.addEventListener('click',function(){
        plus(v,z);
      });