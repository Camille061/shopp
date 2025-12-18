
        fetch("https://www.minecraft.net/en-us/marketplace")
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

            .catch(error => {
                console.log("Error")
            })
