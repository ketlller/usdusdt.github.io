var btn = document.querySelector('button');
var div = document.querySelector('.div');

var divBuy = document.querySelector('.buy span');
var divSell = document.querySelector('.sell span');
var divBuyPZM_BTC = document.querySelector('.buyPZM_BTC span');
var divSellPZM_BTC = document.querySelector('.sellPZM_BTC span');

var divBuyPZM_USD = document.querySelector('.buyPZM_USD span');
var divSellPZM_USD = document.querySelector('.sellPZM_USD span');
var divBuyPZM_USD_livecoin = document.querySelector('.buyPZM_USD_livecoin span');
var divSellPZM_USD_livecoin = document.querySelector('.sellPZM_USD_livecoin span');
var divBuyPZM_USD_hotbit = document.querySelector('.buyPZM_USD_hotbit span');
var divSellPZM_USD_hotbit = document.querySelector('.sellPZM_USD_hotbit span');

var divBuyPZM_USD_livecoin1 = document.querySelector('.BuyPZM_USD_livecoin1 span');
var divSellPZM_USD_livecoin1 = document.querySelector('.SellPZM_USD_livecoin1 span');
var divBuyPZM_USD1 = document.querySelector('.BuyPZM_USD1 span');
var divSellPZM_USD1 = document.querySelector('.SellPZM_USD1 span');
var divBuyPZM_USD_hotbit1 = document.querySelector('.BuyPZM_USD_hotbit1 span');
var divSellPZM_USD_hotbit1 = document.querySelector('.SellPZM_USD_hotbit1 span');
 
var btcalphalivecoin = document.querySelector('.inputdrub1 span');
var livecoinbtcalpha = document.querySelector('.inputdrub2 span');
var btcalphahotbit = document.querySelector('.inputdrub3 span');
var hotbitbtcalpha = document.querySelector('.inputdrub4 span');
var hotbitlivecoin = document.querySelector('.inputdrub5 span');
var livecoinhotbit = document.querySelector('.inputdrub6 span');


let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
targetUrl_PZM_USD = 'https://btc-alpha.com/api/v1/orderbook/USD_USDT/'; 
    targetUrl_PZM_USD_Livecoin = 'https://api.livecoin.net/exchange/order_book?currencyPair=USDT/USD'; 
      targetUrl_PZM_USD_hotbit1 = 'https://api.hotbit.io/api/v1/order.book?market=USDT/USD&side=1&offset=0&limit=1'; 
      targetUrl_PZM_USD_hotbit2 = 'https://api.hotbit.io/api/v1/order.book?market=USDT/USD&side=2&offset=0&limit=1'; 


let resUrl1 = proxyUrl + targetUrl_PZM_USD;
let resUrl2 = proxyUrl + targetUrl_PZM_USD_Livecoin;
let resUrl3 = proxyUrl + targetUrl_PZM_USD_hotbit1;
let resUrl4 = proxyUrl + targetUrl_PZM_USD_hotbit2;

console.log()

 var currentPrice_BuyPZM_USD = null;
 var currentPrice_SellPZM_USD = null;
  var currentPrice_BuyPZM_USD_livecoin = null;
  var currentPrice_SellPZM_USD_livecoin = null;
var currentPrice_BuyPZM_USD_hotbit = null;
var currentPrice_SellPZM_USD_hotbit = null;

 




 btn.addEventListener('click', () => {  


 
   fetch(resUrl1)
    .then(res => {
      res.json().then(body => {
      divBuyPZM_USD.innerHTML = body.buy[0].price;  
    divBuyPZM_USD1.innerHTML = body.buy[0].amount; 
      divSellPZM_USD.innerHTML = body.sell[0].price;
    divSellPZM_USD1.innerHTML = body.sell[0].amount;
    
      currentPrice_BuyPZM_USD = body.buy[0].price;
      currentPrice_SellPZM_USD = body.sell[0].price;
    
    btcalphalivecoin.innerHTML = (((currentPrice_BuyPZM_USD_livecoin*100)/currentPrice_SellPZM_USD)-100).toFixed(2); 
   livecoinbtcalpha.innerHTML = (((currentPrice_BuyPZM_USD*100)/currentPrice_SellPZM_USD_livecoin)-100).toFixed(2); 
livecoinhotbit.innerHTML = (((currentPrice_SellPZM_USD_hotbit*100)/currentPrice_SellPZM_USD_livecoin)-100).toFixed(2);             
 btcalphahotbit.innerHTML = (((currentPrice_SellPZM_USD_hotbit*100)/currentPrice_SellPZM_USD)-100).toFixed(2);        
      console.log(body);
   
    });
  })
  .catch(err => console.log(err)); 


     

   fetch(resUrl2)
    .then(res => {
      res.json().then(body => {  
      divBuyPZM_USD_livecoin.innerHTML = body.bids[0][0];
    divBuyPZM_USD_livecoin1.innerHTML = body.bids[0][1];
      divSellPZM_USD_livecoin.innerHTML = body.asks[0][0];
    divSellPZM_USD_livecoin1.innerHTML = body.asks[0][1];
    
       currentPrice_BuyPZM_USD_livecoin = body.bids[0][0];
       currentPrice_SellPZM_USD_livecoin = body.asks[0][0];
    
  if(currentPrice_SellPZM_USD < currentPrice_BuyPZM_USD_livecoin && $('#btcalphalivecoin_notificator').prop('checked'))beep();
        
        
     if(currentPrice_SellPZM_USD_livecoin < currentPrice_BuyPZM_USD && $('#livecoinbtcalpha_notificator').prop('checked'))beep();   
       
    if(currentPrice_SellPZM_USD_livecoin < currentPrice_SellPZM_USD_hotbit && $('#livecoinhotbit_notificator').prop('checked'))beep();      
     if(currentPrice_SellPZM_USD < currentPrice_SellPZM_USD_hotbit && $('#btcalphahotbit_notificator').prop('checked'))beep(); 
      if(currentPrice_BuyPZM_USD_hotbit < currentPrice_BuyPZM_USD && $('#hotbitbtcalpha_notificator').prop('checked'))beep();    
     if(currentPrice_BuyPZM_USD_hotbit < currentPrice_BuyPZM_USD_livecoin && $('#hotbitlivecoin_notificator').prop('checked'))beep();
        
     
    console.log(body);

    });
  })
  .catch(err => console.log(err)); 
  
  
  fetch(resUrl3)
    .then(res => {
      res.json().then(body => {  
      
    divBuyPZM_USD_hotbit.innerHTML = body.result.orders[0].price;
    divBuyPZM_USD_hotbit1.innerHTML = body.result.orders[0].left;
     
    currentPrice_BuyPZM_USD_hotbit = body.result.orders[0].price;
     
        hotbitbtcalpha.innerHTML = (((currentPrice_BuyPZM_USD*100)/currentPrice_BuyPZM_USD_hotbit)-100).toFixed(2); 
        hotbitlivecoin.innerHTML = (((currentPrice_BuyPZM_USD_livecoin*100)/currentPrice_BuyPZM_USD_hotbit)-100).toFixed(2); 
      
        
       
     console.log(body);

    });
  })
  .catch(err => console.log(err)); 
  
  
   fetch(resUrl4)
    .then(res => {
      res.json().then(body => {  
 	 divSellPZM_USD_hotbit.innerHTML = body.result.orders[0].price;
   divSellPZM_USD_hotbit1.innerHTML = body.result.orders[0].left;
    
   currentPrice_SellPZM_USD_hotbit = body.result.orders[0].price;
            
    console.log(body);

    });
  })
  .catch(err => console.log(err)); 
  
  
   });



  function beep() {
	(new Audio("https://adolf.ucoz.net/beep.wav")).play();
};
   
 



 
 function moneyConverter(valNum) {
   
    document.getElementById("inputdrub").innerHTML=((((valNum/currentPrice_SellPZM_USD)*currentPrice_BuyPZM_BTC)*currentPriceSell)-(((((valNum/currentPrice_SellPZM_USD)*currentPrice_BuyPZM_BTC)*currentPriceSell)*0.3)/100)).toFixed(2); 
    
 }



function readMore() {
 var dots = document.getElementById("dots");
 var more = document.getElementById("more");
 var bun = document.getElementById("bun");
   
	
  	
	
 if(dots.style.display === "none") {
    dots.style.display = "inline";
    bun.innerHTML = "Подробнее";
    more.style.display = "none";
 } else {
   dots.style.display = "none";
   bun.innerHTML = "Скрыть";
   more.style.display = "inline"; 
 }
 }	
	





