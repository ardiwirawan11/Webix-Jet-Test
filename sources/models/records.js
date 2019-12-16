export function getData() {
	return webix.ajax().get("https://btm-rn.herokuapp.com/api/v1/todo").then(function(data){
		// response
		return data.json().results
		
	});
}

export function postData() {
	webix.ajax().post('https://btm-rn.herokuapp.com/api/v1/todo', { title: "aaa" }).then(function (result) {
		this.getData()
	}).fail(function (xhr) {
		var response = JSON.parse(xhr.response);
		webix.message({ type: 'error', text: response.error.message });
	});
}

