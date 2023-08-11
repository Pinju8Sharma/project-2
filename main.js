

const xhr = new XMLHttpRequest();

 document.getElementById('search-btn').addEventListener('click',() =>{
    const text = document.getElementById('search-text').value
    xhr.open('GET', `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=${text}`);
xhr.setRequestHeader('X-RapidAPI-Key', '3c6e54c122msh9f77308de982077p146085jsn57da6a17a421');
xhr.setRequestHeader('X-RapidAPI-Host', 'tasty.p.rapidapi.com');

xhr.addEventListener('readystatechange',  () => {
	if (xhr.readyState ==4 && xhr.status ==200) {
		console.log(this.responseText);
        const response = JSON.parse(xhr.responseText)
        console.log(response);
        let output = ' '
			for(let i=0; i < response.results.length; i++) {
				output += `
							<div style="width:25%; margin:20px; border:2px solid white;">
                             
							<div>

							
							<img style="width:100%; height:100%;" src="${response.results[i].thumbnail_url}" />

		                    
							
							<a style="color: white; font-size:25px; font-weight:500; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;" href="${response.results[i].original_video_url}" target="_blank">Get the recipe on live!</a>; &nbsp;
		
								
							
                           
							<h4 style="color:white;"><b>DISH_NAME:</b> ${response.results[i].slug}</h4> <br/>  &nbsp;
							<h4 style="color:white;"><b>INGREDIENTS:</b> ${response.results[i].description}</h4><br/>  &nbsp;
                            <p style="color:white;"><b>SERVES:</b> ${response.results[i].num_servings}</p>
							</div>
							</div>
						
				`}
				document.getElementById('my-div').innerHTML = output
		}

	
})
xhr.send()

 })








// const xhr = new XMLHttpRequest();
// document.getElementById('search-btn').addEventListener('click', () => {
//     const text = document.getElementById('search-text').value
   
// xhr.open('GET', `https://real-time-product-search.p.rapidapi.com/search?q=${text}&country=us&language=en&page=1`);
//  xhr.setRequestHeader('X-RapidAPI-Key', '3c6e54c122msh9f77308de982077p146085jsn57da6a17a421');
//  xhr.setRequestHeader('X-RapidAPI-Host', 'real-time-product-search.p.rapidapi.com');
// 	xhr.addEventListener('readystatechange', () => {
// 		if (xhr.readyState == 4 && xhr.status == 200) {
// 			console.log(this.responseText);
// 			const response = JSON.parse(xhr.responseText)
// 			console.log(response);
	
// 			let output = ' '
// 			for(let i=0; i < response.data.length; i++) {
// 				output += `
// 							<div style="width:25%; margin:20px;">
// 							<div>
// 								<img style="width:50%" src="${response.data[i].product_photos}" />
							
// 							</div>
// 							</div>
						
// 				`}
// 				document.getElementById('my-div').innerHTML = output
// 		}
// 	})
// 	xhr.send();
// })

