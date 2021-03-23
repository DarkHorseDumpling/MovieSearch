//Movie Search
    const form = document.querySelector('#searchForm');
    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const searchTerm = form.elements.query.value;
        const apiKey = '078923f64c5714a90fb9477198305522';
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`);
        const posterPath = res.data.results[0].poster_path;
        const poster = document.createElement('IMG');
        poster.src = `https://image.tmdb.org/t/p/w500/${posterPath}`;
        const title = res.data.results[0].original_title;
        const overview = res.data.results[0].overview;
        let titlePar = document.createElement("TP");
        let titleTxt = document.createTextNode(title);
        titlePar.appendChild(titleTxt);
        document.body.append(titlePar);
        let par = document.createElement("P");
        let txt = document.createTextNode(overview);
        par.appendChild(txt);
        document.body.appendChild(par);
        document.body.append(poster);
        form.elements.query.value = '';
    })
