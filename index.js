fetch("https://apis.scrimba.com/bored/api/activity")
.then(response => response.json())
.then(data => {document.write(data))

}