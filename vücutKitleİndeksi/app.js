/* 
Vücut Kitle İndeksi Hesaplama Motoru
Formül = vki = kg/(m*m) (Ağırlık bölü boyun karesi)
*/


let weight = prompt("Kilonuzu Giriniz");
let height = prompt("Boyunuzu Giriniz");

let vki = ((weight * weight) / height);



function vkiHesapla () {
    
    

    if (vki < 18.5) {
        console.log(alert(`Vücut Kitle İndeksiniz: ${vki}, Değerleriniz Düşük`));
    }

    else if (vki >= 18.5 && vki <= 24.9) {
        console.log(alert(`Vücut Kitle İndeksiniz: ${vki}, Değerleriniz Normal `));
    }

    else if (vki >= 25 && vki <= 29.9) {
        console.log(alert(`Vücut Kitle İndeksiniz: ${vki}, Değerleriniz Normalin Üstünde / Kilolu Sayılırsınız `));
    }

    else if (vki >= 30) {
        console.log(alert(`Vücut Kitle İndeksiniz: ${vki}, Değerleriniz Fazla Riskli, Obezite Riski Yüksek`));
    }

    else {
        console.log(alert("Girdiğiniz Değerler Geçersiz,"));
    }

}

vkiHesapla(weight, height);
