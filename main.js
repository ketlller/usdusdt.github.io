var btn = document.querySelector('button');
var div = document.querySelector('.div');

var divBuy = document.querySelector('.buy span');
var divSell = document.querySelector('.sell span');
var divBuyPZM_BTC = document.querySelector('.buyPZM_BTC span');
var divSellPZM_BTC = document.querySelector('.sellPZM_BTC span');

var divBuyCoin = document.querySelector('.buyCoin span');
var divSellCoin = document.querySelector('.sellCoin span');
var divBuyCoin_livecoin = document.querySelector('.buyCoin_livecoin span');
var divSellCoin_livecoin = document.querySelector('.sellCoin_livecoin span');
var divBuyCoin_hotbit = document.querySelector('.buyCoin_hotbit span');
var divSellCoin_hotbit = document.querySelector('.sellCoin_hotbit span');

var divBuyCoin_livecoin1 = document.querySelector('.BuyCoin_livecoin1 span');
var divSellCoin_livecoin1 = document.querySelector('.SellCoin_livecoin1 span');
var divBuyCoin1 = document.querySelector('.BuyCoin1 span');
var divSellCoin1 = document.querySelector('.SellCoin1 span');
var divBuyCoin_hotbit1 = document.querySelector('.BuyCoin_hotbit1 span');
var divSellCoin_hotbit1 = document.querySelector('.SellCoin_hotbit1 span');
 
var btcalphalivecoin = document.querySelector('.inputdrub1 span');
var livecoinbtcalpha = document.querySelector('.inputdrub2 span');
var btcalphahotbit = document.querySelector('.inputdrub3 span');
var hotbitbtcalpha = document.querySelector('.inputdrub4 span');
var hotbitlivecoin = document.querySelector('.inputdrub5 span');
var livecoinhotbit = document.querySelector('.inputdrub6 span');


let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
targetUrl_Coin = 'https://btc-alpha.com/api/v1/orderbook/USD_USDT/'; 
    targetUrl_Coin_Livecoin = 'https://api.livecoin.net/exchange/order_book?currencyPair=USDT/USD'; 
      targetUrl_Coin_hotbit1 = 'https://api.hotbit.io/api/v1/order.book?market=USDT/USD&side=1&offset=0&limit=1'; 
      targetUrl_Coin_hotbit2 = 'https://api.hotbit.io/api/v1/order.book?market=USDT/USD&side=2&offset=0&limit=1'; 


let resUrl1 = proxyUrl + targetUrl_Coin;
let resUrl2 = proxyUrl + targetUrl_Coin_Livecoin;
let resUrl3 = proxyUrl + targetUrl_Coin_hotbit1;
let resUrl4 = proxyUrl + targetUrl_Coin_hotbit2;

console.log()

 var currentPrice_BuyCoin = null;
 var currentPrice_SellCoin = null;
  var currentPrice_BuyCoin_livecoin = null;
  var currentPrice_SellCoin_livecoin = null;
var currentPrice_BuyCoin_hotbit = null;
var currentPrice_SellCoin_hotbit = null;

 




 btn.addEventListener('click', () => {  


 
   fetch(resUrl1)
    .then(res => {
      res.json().then(body => {
      divBuyCoin.innerHTML = body.buy[0].price;  
    divBuyCoin1.innerHTML = body.buy[0].amount; 
      divSellCoin.innerHTML = body.sell[0].price;
    divSellCoin1.innerHTML = body.sell[0].amount;
    
      currentPrice_BuyCoin = body.buy[0].price;
      currentPrice_SellCoin = body.sell[0].price;
    
                
      
      console.log(body);
   
    });
  })
  .catch(err => console.log(err)); 


     

   fetch(resUrl2)
    .then(res => {
      res.json().then(body => {  
      divBuyCoin_livecoin.innerHTML = body.bids[0][0];
    divBuyCoin_livecoin1.innerHTML = body.bids[0][1];
      divSellCoin_livecoin.innerHTML = body.asks[0][0];
    divSellCoin_livecoin1.innerHTML = body.asks[0][1];
    
       currentPrice_BuyCoin_livecoin = body.bids[0][0];
       currentPrice_SellCoin_livecoin = body.asks[0][0];
	     
   livecoinbtcalpha.innerHTML = (((100*currentPrice_BuyCoin_livecoin)*currentPrice_BuyCoin)-100).toFixed(2);      
   livecoinhotbit.innerHTML = (((100*currentPrice_BuyCoin_livecoin)/currentPrice_SellCoin_hotbit)-100).toFixed(2);       	      
   btcalphalivecoin.innerHTML = (((100/currentPrice_SellCoin)/currentPrice_SellCoin_livecoin)-100).toFixed(2);
     hotbitlivecoin.innerHTML = (((currentPrice_BuyCoin_hotbit*100)/currentPrice_SellCoin_livecoin)-100).toFixed(2); 
	      
       btcalphahotbit.innerHTML = (((100/currentPrice_SellCoin)/currentPrice_BuyCoin_hotbit)-100).toFixed(2);      
   
        

	      
	      
if(currentPrice_SellCoin_livecoin < currentPrice_BuyCoin && $('#livecoinbtcalpha_notificator').prop('checked'))beep();  	      
if(currentPrice_SellCoin_livecoin < currentPrice_SellCoin_hotbit && $('#livecoinhotbit_notificator').prop('checked'))beep();    
if(currentPrice_SellCoin < currentPrice_BuyCoin_livecoin && $('#btcalphalivecoin_notificator').prop('checked'))beep();
if(currentPrice_BuyCoin_hotbit < currentPrice_BuyCoin_livecoin && $('#hotbitlivecoin_notificator').prop('checked'))beep();        
if(currentPrice_SellCoin < currentPrice_SellCoin_hotbit && $('#btcalphahotbit_notificator').prop('checked'))beep();        
if(currentPrice_BuyCoin_hotbit < currentPrice_BuyCoin && $('#hotbitbtcalpha_notificator').prop('checked'))beep();      
       
          
      
          
     
        
     
    console.log(body);

    });
  })
  .catch(err => console.log(err)); 
  
  
  fetch(resUrl3)
    .then(res => {
      res.json().then(body => {  
      
    divBuyCoin_hotbit.innerHTML = body.result.orders[0].price;
    divBuyCoin_hotbit1.innerHTML = body.result.orders[0].left;
     
    currentPrice_BuyCoin_hotbit = body.result.orders[0].price;
     
         
        
      
      
       
     console.log(body);

    });
  })
  .catch(err => console.log(err)); 
  
  
   fetch(resUrl4)
    .then(res => {
      res.json().then(body => {  
 	 divSellCoin_hotbit.innerHTML = body.result.orders[0].price;
   divSellCoin_hotbit1.innerHTML = body.result.orders[0].left;
    
   currentPrice_SellCoin_hotbit = body.result.orders[0].price;
	      
     hotbitbtcalpha.innerHTML = (((currentPrice_SellCoin_hotbit*100)*currentPrice_BuyCoin)-100).toFixed(2);   
	      
    console.log(body);

    });
  })
  .catch(err => console.log(err)); 
  
  
   });



  function beep() {
	(new Audio("https://adolf.ucoz.net/beep.wav")).play();
};
   
 



 
 function moneyConverter(valNum) {
   
    document.getElementById("inputdrub").innerHTML=((((valNum/currentPrice_SellCoin)*currentPrice_BuyPZM_BTC)*currentPriceSell)-(((((valNum/currentPrice_SellCoin)*currentPrice_BuyPZM_BTC)*currentPriceSell)*0.3)/100)).toFixed(2); 
    
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
	


