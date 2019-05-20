
var TTL_GDS = 0;
var CHARGE = 0;
var ref_amount = 0;
var partner_murkup = 0;
var score_discount = 0;
var payment_murkup = 0;
var payment_murkup_external = 0;
var agent_reward = 0;
var bonus_discount = 0;
var additional_murkup = 0;
var resultHTML = document.querySelector('.result');


function refundammount(TTL_GDS, CHARGE, partner_murkup,score_discount,payment_murkup,
payment_murkup_external,agent_reward,bonus_discount,additional_murkup){
	
	return ref_amount = TTL_GDS-CHARGE-partner_murkup-score_discount-payment_murkup-payment_murkup_external-agent_reward-bonus_discount+additional_murkup
}


var btn = document.querySelector('.Submit');
btn.addEventListener('click',function(){
	if (partner_murkup>=0){
		partner_murkup = 0
	};
	
	
	if (score_discount>=0){
		score_discount = 0
	};
	
	
	if (payment_murkup>=0){
		payment_murkup = 0
	};
	
	
	if (payment_murkup_external>=0){
		payment_murkup_external = 0
	};
	
	
	if (agent_reward>=0){
		agent_reward = 0
	}else{bonus_discount = 0};
	
	
	if (bonus_discount<0){
		bonus_discount=bonus_discount*(-1)
	}

  TTL = document.querySelector('.TTL').value;
  Charge = document.querySelector('.Charge').value;
  additional_murkup = document.querySelector('.add_Murkup').value;
  
  var murkup = document.querySelector('.Murkup').value;
  var murkupArr = murkup.split('    ');
  console.log(murkupArr);
  console.log(refundammount(TTL,Charge,parseFloat(murkupArr[2]),parseFloat(murkupArr[3]),parseFloat(murkupArr[4]),parseFloat(murkupArr[5]),parseFloat(murkupArr[6]),parseFloat(murkupArr[7]),additional_murkup))
  var result = refundammount(TTL,Charge,parseFloat(murkupArr[2]),parseFloat(murkupArr[3]),parseFloat(murkupArr[4]),parseFloat(murkupArr[5]),parseFloat(murkupArr[6]),parseFloat(murkupArr[7]),additional_murkup)
  resultHTML.innerHTML = result;
})

