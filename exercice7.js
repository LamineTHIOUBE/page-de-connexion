var montant=parseInt(prompt("saisir un montant"));
var b2000=Number(montant/2000);
var r2000=Number(montant%2000);
var b1000=Number(r2000/1000);
var r1000=Number(r2000%1000);
var b500=Number(r1000/500);
var r500=Number(r1000%500);
var p250=Number(r500/250);
var r250=Number(r500%250);
var p200=Number(r250/200);
var r200=Number(r250%200);
var p100=Number(r200/100);
var r100=Number(r200%100);
var p50=Number(r100/50);
var r50=Number(r100%50);
var p25=Number(r50/25);
var p25=Number(r50%25);

if(montant !=0){
  alert(" le nombre de billet de 2000 est: "+Math.floor(b2000)+ " le nombre de billet de 1000 est: "+Math.floor(b1000) + " le nombre de billet de 500 est: "+Math.floor(b500) + " le nombre de pièces de b250 est: "+Math.floor(p250) + " le nombre de pièce de 200 est: "+Math.floor(p200) + " le nombre de pièce de 100 est: "+Math.floor(p100) + " le nombre de pièce de 50 est: "+Math.floor(p50) + " le nombre de pièce de 25 est: "+Math.floor(p25));
}

