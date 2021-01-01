fetcher = {
    from_src : function (src,data, callback, err = null, options){
            $.ajax({
				type: "POST",
				url: src,           
				data : {'data' : data},
				success: function(data)
				{
					callback(data)
				},
				error: function(request, status, error)
				{
                    console.warn('Something went wrong.', err);
					if(err) err(request, status, error)
				}
			});  
    },
    /**
     * @returns DOMParser object
     * 
     * @param {String} src 
     * @param {Function} callback 
     * @param {Function} err 
     */
    fetch_html_from_src : function (src, callback, err = null){
        fetch(src).then(function (response) {
            return response.text();
        }).then(function (html) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(html, 'text/html');
            callback(doc)
        }).catch(function (er) {
            console.warn('Something went wrong.', err);
            if(err) err(er)
        })
    }
}