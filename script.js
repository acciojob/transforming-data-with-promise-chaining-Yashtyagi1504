let input = document.querySelector("input");
let button = document.querySelector("button");
let output = document.querySelector("#output");

button.addEventListener("click",(e)=>{
	e.preventDefault();
	new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(input.value);
			
		},2000);
	})
	.then(value=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				output.innerText = `Result: ${value}`;
				resolve(value*2);
			},1000)
		})
	})
	.then(value=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				output.innerText = `Result: ${value}`;
				resolve(value-3);
			},1000)
		})
	})
	.then(value=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				output.innerText = `Result: ${value}`;
				resolve(value/3);
			},1000)
		})
	})
	.then(value=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				output.innerText = `Result: ${value}`;
				resolve(value+10);
			},1000)
		})
	})
	.then(value=>{
		output.innerText = `Result: ${value}`;
	})
})



