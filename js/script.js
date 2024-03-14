function calculate() {
    try {
        let weightInput = document.getElementById('weight-input').value; 
        console.log(weightInput);
        
        if(parseInt(weightInput) > 0 && parseInt(weightInput) < 10) {
            alert('Harap Isi berat badan Anda')
        }else {
            document.getElementById('result-bmi').innerHTML = weightInput;
            console.log('Ada isi');
        }
    } catch (error) {
        console.log(error);
    }
}
