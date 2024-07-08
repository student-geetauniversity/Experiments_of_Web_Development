var productName = ['Laptop','Computer','HeadPhone','Printer','Tablet'];

var productPrice = ['40000','20000','2000','4000','15000'];
var i,j;
for(i=0;i<productName.length;i++){
    var displayItem = document.querySelector('#itemname');
    displayItem.innerHTML += `<option value ="${productPrice[i]}">${productName[i]}</option>`;
}

for(j=1;j<=10;j++){
    var quantity = document.querySelector('#qty');
    quantity.innerHTML += `<option value ="${j}">${j}</option>`;
}

function addItem(){
      var itemName = document.querySelector('#itemname').options[document.querySelector('#itemname').selectedIndex].text;
     var itemPrice = document.querySelector('#itemname').value;
     var qty = document.querySelector('#qty').value;
     var tbody = document.querySelector('tbody');
     var row = document.createElement('tr');
     var col1 = document.createElement('td');
     col1.innerHTML = itemName;
     row.appendChild(col1);
    
     var col2 = document.createElement('td');
     col2.innerHTML = itemPrice;
     row.appendChild(col2);

     var col3 = document.createElement('td');
     col3.innerHTML = qty;
     row.appendChild(col3);

     var col4 = document.createElement('td');
     var amount = col4.innerHTML = itemPrice*qty;
     row.appendChild(col4);

     tbody.appendChild(row);

     var displayTotal = document.querySelector('#total');
     var totalAmount = parseInt(displayTotal.innerHTML || 0);
     totalAmount += amount;
     displayTotal.innerHTML = totalAmount;          
}