$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:Wiz%20Khalifa&type=album"
	}).done(function(res){
		$.ajax({
			url:res.albums.items[0].href
		}).done(function(album){
		console.log(res);
		console.log(album);
		let count = album.tracks.total;
		var i;
		let html = `<div class="6u 12u(mobilep)">
						<img src="${res.albums.items[0].images[1].url}" alt="viray fccboi" />
						<h2 align="left" class="major">${res.albums.items[0].name} </h2>`;
		for(i=0;i<count; i++){
			html = html + `<p align="justify">${album.tracks.items[i].name}</p>
			<p align="justify"><audio controls><source src="${album.tracks.items[i].preview_url}" type="audio/ogg"></audio></p>`;
		}

	

		html += `</div></div>`;
		document.querySelector('.bakesale').innerHTML = html;
	});
});

	$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:Wiz%20Khalifa&type=album"
	}).done(function(res){
		$.ajax({
			url:res.albums.items[17].href
		}).done(function(album){
		console.log(res);
		console.log(album);
		let count = album.tracks.total;
		var i;
		let html = `<div class="6u 12u(mobilep)">
						<img src="${res.albums.items[17].images[1].url}" alt="viray fccboi" />
						<h2 align="left" class="major">${res.albums.items[17].name} </h2>`;
		for(i=0;i<count; i++){
			html = html + `<p align="justify">${album.tracks.items[i].name}</p>
			<p align="justify"><audio controls><source src="${album.tracks.items[i].preview_url}" type="audio/ogg"></audio></p>`;
		}

	

		html += `</div></div>`;
		document.querySelector('.boiiz').innerHTML = html;
	});
});