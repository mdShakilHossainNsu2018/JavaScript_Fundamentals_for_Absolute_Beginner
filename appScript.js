(function () {
   function incrementCount() {
       counter = counter +1 ;
   }
   function updateUi() {
       const color = [{name: 'red', value: 'red', num:0, class:"one"},
               {name: 'blue', value: 'blue', num:1 , class: "two"},
               {name: 'green', value: 'green', num: 2, class: "three"},
               {name: 'purple', value: 'purple', num: 3, class: "four"},

       ];
    let result = document.getElementById('res');
    result.innerText = counter;
    if (counter>0){
        result.style.fontSize = counter + 'em';
    }
    let reminder = counter % color.length;
    result.style.color = color[reminder].value;
    let colorDiv = document.getElementById('colorDiv');
    colorDiv.innerText = '';
    for (i=0; i<color.length;i++){
        var node = document.createElement('div');
        var textNode = document.createTextNode(color[i].name);
        node.appendChild(textNode);
        node.style.backgroundColor = color[i].value;

        node.style.width = '150px';
        node.style.height = '150px';
        node.style.cssFloat = 'left';
        node.style.padding = '10px';
        
        if (i==reminder){
            // node.style.height = '45px';
            node.classList.add('selected');
        }
        colorDiv.appendChild(node);
    }

   }
   let counter = 0;
   let myBtn = document.getElementById('myButton');
   myBtn.addEventListener('click', function () {
       incrementCount();
       updateUi();
   });
    updateUi();

})();

