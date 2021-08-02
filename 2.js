var radio1 = document.getElementsByName('in1');

radio1[0].onchange = f2;
radio1[1].onchange = f2;
radio1[2].onchange = f2;
radio1[3].onchange = f2;
radio1[4].onchange = f2;
radio1[5].onchange = f2;
radio1[6].onchange = f2;
radio1[7].onchange = f2;
radio1[8].onchange = f2;
radio1[9].onchange = f2;
radio1[10].onchange = f2;
radio1[11].onchange = f2;
radio1[12].onchange = f2;
radio1[13].onchange = f2;
radio1[14].onchange = f2;
radio1[15].onchange = f2;
radio1[16].onchange = f2;
radio1[17].onchange = f2;
radio1[18].onchange = f2;


function f2() {
for (i=0; i<19;i++){
if (radio1[i].checked) {
	document.getElementById('one').src="15.jpg";
	return;
}

else if (radio1[1].checked){ 
	document.getElementById('one').src="113.jpg";
		return;	
}
else if (radio1[2].checked){ 
	document.getElementById('one').src="118.jpg";
		return;	
}
else if (radio1[3].checked){ 
	document.getElementById('one').src="17.jpg";
		return;	
}
else if (radio1[4].checked){ 
	document.getElementById('one').src="117.jpg";
		return;	
}
    
    
    
else if (radio1[5].checked){
    document.getElementById('one').src="12.jpg";
        return;
}
else if (radio1[6].checked){
    document.getElementById('one').src="13.jpg";
        return;
}
else if (radio1[7].checked){
    document.getElementById('one').src="111.jpg";
        return;
}
else if (radio1[8].checked){
    document.getElementById('one').src="119.jpg";
        return;
}
    
    
    
else if (radio1[9].checked){
    document.getElementById('one').src="14.jpg";
        return;
}
else if (radio1[10].checked){
    document.getElementById('one').src="112.png";
        return;
}
else if (radio1[11].checked){
    document.getElementById('one').src="116.jpg";
        return;
}
else if (radio1[12].checked){
    document.getElementById('one').src="110.jpg";
        return;
}
    
    
else if (radio1[13].checked){
    document.getElementById('one').src="16.jpeg";
        return;
}
else if (radio1[14].checked){
    document.getElementById('one').src="115.png";
        return;
}
else if (radio1[15].checked){
    document.getElementById('one').src="114.jpg";
        return;
}
else if (radio1[16].checked){
    document.getElementById('one').src="11.jpeg";
        return;
}
else if (radio1[17].checked){
    document.getElementById('one').src="18.jpg";
        return;
}
else {
	document.getElementById('one').src="19.jpg";
		return;	
}	
}	
}
