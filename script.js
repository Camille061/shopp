
        fetch("https://app.mediafire.com/folder/myfiles")
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

            .catch(error => {
                console.log("Error")
            })
