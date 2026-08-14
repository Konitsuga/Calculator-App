let a = 'helloworld!';
console.log(a);

let my_t = document.getElementById("my_title");
console.log(my_t);



function calc(){
    try{
        let val = document.getElementById('input_ex').value
        let result = math.evaluate(val);
        document.getElementById('input_ex').value = result;
    }catch(e){
        let my_err = document.getElementById('input_outr').classList
        my_err.add('error')
    }
    
}

function take_in(input){
    document.getElementById('input_ex').value += input;
}

function clr(){
    document.getElementById('input_ex').value = ''
}