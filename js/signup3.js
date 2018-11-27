    function storeInterests(){
        localStorage.setItem('interests', JSON.stringify(allInt));
        location.href="../home.html";
    }
