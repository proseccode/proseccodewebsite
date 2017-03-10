console.log('loaded');


this.document.getElementById('proseccoImg').addEventListener('mouseover', function(){
    this.innerHTML = "<img src='./images/laptop-fire.jpg' />";
});


this.document.getElementById('proseccoImg').addEventListener('mouseout', function(){
    this.innerHTML = "<img src='./images/prosecco.jpg' />";
});
