var earning_array=[]
var expense_array=[]

window.onload=function(){

    var form1=document.querySelector("#form1")
    form1.addEventListener("submit", handleEarning)

    var form2=document.querySelector("#form2")
    form2.addEventListener("submit", handleExpense)

}

function handleEarning(){
    event.preventDefault()
    var elems=event.target.children
    
    
    var data={
        description: elems[0].value,
        amount: elems[1].value,
        id: earning_array.length+1
    }

    if(elems[0].value == ""){
        alert("Enter description");
        return false
    }
    if( elems[1].value == ""){
        alert("Enter amount");
        return false
    }

    elems[0].value=""
    elems[1].value=""

    earning_array.push(data)

    var total_earning= 0;
    for(var i=0; i<earning_array.length; i++){
        total_earning= total_earning + Number(earning_array[i].amount)
    }
    var show_earning=document.getElementById("show_earning")
    show_earning.innerHTML=total_earning
    show_earning.style.color="green"
    show_earning.style.fontSize="20px"
     
    renderEarning()
    balance_section()
    // console.log(data)
    // console.log(earning_array)
}

function handleExpense(){
    event.preventDefault()
    var elems=event.target.children
    var data={
        description: elems[0].value,
        amount: elems[1].value,
        id: expense_array.length+1,  
    }

    if(elems[0].value == ""){
        alert("Enter description");
        return false
    }
    if( elems[1].value == ""){
        alert("Enter amount");
        return false
    }
    
    elems[0].value=""
    elems[1].value=""

    expense_array.push(data)

    var total_expense= 0;
    for(var i=0; i<expense_array.length; i++){
        total_expense= total_expense + Number(expense_array[i].amount)
    }
    var show_expense=document.getElementById("show_expense")
    show_expense.innerHTML=total_expense
    show_expense.style.color=" rgb(161, 20, 20)"
    show_expense.style.fontSize="20px"
    

    renderExpense()
    balance_section()
    // console.log(data)

}

function renderEarning(){
    var earning_res=document.getElementById("earning_res")
    earning_res.innerHTML=""

    var cont=document.createElement("div")

    for(var i=0; i<earning_array.length; i++){
    
        var p1=document.createElement("p")
        p1.textContent= earning_array[i].description

        var p2=document.createElement("p")
        p2.textContent=earning_array[i].amount
        p2.style.color="green"

        var btn=document.createElement("button")
        btn.textContent="Remove"
        btn.addEventListener("click",handleRemove_ear)

        var item = document.createElement('div')
        item.setAttribute( "class", "item-row" )
        item.setAttribute( "id", earning_array[i].id )

        item.append(p1,p2,btn)
        cont.append(item)
        
    }
    earning_res.append(cont)
    

}

function renderExpense(){
    var expense_res=document.getElementById("expense_res")
    expense_res.innerHTML=""

    var cont=document.createElement("div")

    for(var i=0; i<expense_array.length; i++){
        var p1=document.createElement("p")
        p1.textContent= expense_array[i].description

        var p2=document.createElement("p")
        p2.textContent=expense_array[i].amount
        p2.style.color="rgb(161, 20, 20)"

        var btn=document.createElement("button")
        btn.textContent="Remove"
        btn.addEventListener("click",handleRemove_exp)

        var item = document.createElement('div')
        item.setAttribute( "class", "item-row" )
        item.setAttribute( "id", expense_array[i].id )

        item.append(p1,p2,btn)
        cont.append(item)
        
    }
    expense_res.append(cont)
}

function handleRemove_ear(){
    var id=Number(event.target.parentElement.id)
    earning_array=earning_array.filter(function(item){
        if(item.id === id){
            return false
        }
        return true
    })

    var total_earning= 0;
    for(var i=0; i<earning_array.length; i++){
        total_earning= total_earning + Number(earning_array[i].amount)
    }
    var show_earning=document.getElementById("show_earning")
    show_earning.innerHTML=total_earning

    renderEarning()
    balance_section()
}

function handleRemove_exp(){
    var id=Number(event.target.parentElement.id)
    expense_array=expense_array.filter(function(item){
        if(item.id === id){
            return false
        }
        return true
    })

    var total_expense= 0;
    for(var i=0; i<expense_array.length; i++){
        total_expense= total_expense + Number(expense_array[i].amount)
    }
    var show_expense=document.getElementById("show_expense")
    show_expense.innerHTML=total_expense

    renderExpense()
    balance_section()
}

function balance_section(){
    var total_earning= 0;
    for(var i=0; i<earning_array.length; i++){
        total_earning= total_earning + Number(earning_array[i].amount)
    }
    var total_expense= 0;
    for(var i=0; i<expense_array.length; i++){
        total_expense= total_expense + Number(expense_array[i].amount)
    }
    var show_balance=document.getElementById("show_balance")
    var total_balance= total_earning - total_expense
    show_balance.innerHTML= total_balance
    show_balance.style.fontSize="25px"

    if(total_balance>0){
        show_balance.style.color="green"
    }

    else if(total_balance<0){
        show_balance.style.color="red"
        alert("Alert..!!  Balance is low")
    }
    alert.style.color="red"
    //console.log(show_balance)
}




































