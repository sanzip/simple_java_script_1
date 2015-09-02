function Question1()
{
var x=prompt("enter number to check");

if(x>100)
{
	// document.write("greater");
	alert("it is greater");

}
else
{
	// document.write("less");
	alert("it is less");
}

}
function Question2()
{
	var x=prompt("enter temeprature to convert");
	var farheinheit=(x*9/5)+32;
	var celcius=(x-32)*5/9 ;
	alert("the farheinheit is:"+ farheinheit);
	
	alert("the celcius is :" + celcius);
	

}
function Question3()
{
	var a =prompt("enter first number ");
	var b =prompt("enter second number ");
	var mul=a*b;
	var div=a/b;
	alert("The multiplication of" +a + "and" +b + "is"+ mul );
	alert("The division of" +a  + "and" +b + "is"+ div );


}
function Question4()
{
	var sub1=prompt("enter marks in web technology");
	var sub2=prompt("enter marks in compiler design");
	var sub3=prompt("enter marks in Java");
	var result =(+sub1+ +sub2+ +sub3)/3;
	alert(result);
	if (result>=80&&result<=100) {
		alert("congratulation you scored distinction with "+result+"%");

	}
	else  if (result>=60&&result<=79) {
		alert("congratulation you scored First divison with "+result+"%");

	}
	else if (result>=40&&result<=59) {
		alert("congratulation you scored second divison with "+result+"%");

	}
	else
	{
		alert("Sorry you failed with" +result+"%");
	}
}
function Question5()
{
	var x=prompt("enter string","boy");
	var y=prompt("enter string","girl");
	
	var type=prompt("do you want to continue? type y to continue x to exit");
	while(type!='x')
	{
	count1=0;
	count2=0;
	for (var i = 0; i < x.length; i++) {

		if (x[i]=='b')
		{
			count1++;
		}
	}
	for (var i = 0; i < y.length; i++) {
		if (y[i]=='g')
		{
			count2++;
		}
	}
	alert("the number of char b in"+x+" is:" + count1);
	alert("the number of char g in"+y+" is:" + count2);
	var type=prompt("do you want to continue? type y to continue x to exit");
}


	

}