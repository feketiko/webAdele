var banner = document.getElementById('animated');

banner = addEventListener('mouseout', function() {
    document.getElementById('animated').style.visibility = "hidden"
})

banner = addEventListener('mouseover', function() {
    document.getElementById('animated').style.visibility = "visible";
})