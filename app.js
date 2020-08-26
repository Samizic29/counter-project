(function(){
	const buttons = document.querySelectorAll('.btn');
	let count = 0;

	//Add functionality and event listeners to each button
	buttons.forEach(function(button){
		button.addEventListener('click', function(){
			if (button.classList.contains('prevBtn')){
				count--;
			} else if (button.classList.contains('nextBtn')){
				count++
			}

			//select and make use of the counter text
			let counterText = document.getElementById('counter');
			counterText.textContent = count;

			if(count < 0){
				counterText.style.color = 'yellow';
			} else if(count > 0){
				counterText.style.color = 'var(--mainRed)';
			} else{
				counterText.style.color = 'var(--mainBlack)';
			}
		})
	})
})()
