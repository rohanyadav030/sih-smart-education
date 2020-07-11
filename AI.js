alert("AI Chat Bot By Team CareerBeez");
window.addEventListener('load', function(){

var chat = document.getElementById("chatButton");
var txt = document.getElementById("textBox");
var confirm = document.getElementById("confirmation");
var help = document.getElementById("helpBox");
var helpBtn = document.getElementById("helpButton");
var trainingArea = document.getElementById("trainArea");
var botTalk = ["Hello! I hope you have a good day!","I am fine, thanks!","My name is D-BOT!","I'm Inevitable","I was created on 2 february 2020, and I'm INEVITABLE .","I am not human, I am your D-BOT.","My hobbies are Understanding,Guiding,Interacting and helping you everytime.","To learn more and more by users and help them for thier future.","My family is made up of HTML,CSS,JAVA,MACHINE LEARNING,AI and all the technical programs.","There are 2 prior things to study and they are MOTIVATION and DEDICATION.","It's a course with deals with the subjects PHYSICS CHEMISTRY AND MATHS it ultimetaly leads to the technical field","It's a field where one can pursue his/her career in medical profession.","It's a stream of education that can be defined as study of trade and buisness activities such as the exchange of goods and services from producer to final consumer."];
var divArr=[];
var delayVar=0;

function newDiv(COLOR, TEXT){
var newdiv = document.createElement("div");

newdiv.style.width = "90%";
newdiv.style.height = "4%";
newdiv.style.background = COLOR;
if(COLOR=="#CBF384"){
	newdiv.style.left="53%";
}
else{
	newdiv.style.left="47%";
}
newdiv.style.bottom="15%";
newdiv.style.position="fixed";
newdiv.style.borderRadius="10px";
newdiv.style.transform="translate(-50%,0)";
newdiv.style.paddingLeft ="10px";
newdiv.style.paddingTop ="5px";
newdiv.style.fontFamily="   Verdana, Times, serif";
newdiv.innerHTML = TEXT;

newdiv.style.color="black";
document.body.appendChild(newdiv);

divArr.push(newdiv);

for (y=0;y<divArr.length-1;y++){
	if (divArr[y].style.bottom=="15%"){
	divArr[y].style.bottom="20%";
}
else if (divArr[y].style.bottom=="20%"){
	divArr[y].style.bottom="25%";
}
else if (divArr[y].style.bottom=="25%"){
	divArr[y].style.bottom="30%";
}
else if (divArr[y].style.bottom=="30%"){
	divArr[y].style.bottom="35%";
}
else if (divArr[y].style.bottom=="35%"){
	divArr[y].style.bottom="40%";
}
else if (divArr[y].style.bottom=="40%"){
	divArr[y].style.bottom="45%";
}
else if (divArr[y].style.bottom=="45%"){
	divArr[y].style.bottom="50%";
}
else if(divArr[y].style.bottom=="50%"){
	divArr[y].style.display="55";
}
}


}
/*
newDiv("green","Who are you?");
newDiv("orange","I am a bot.");
*/
//***********Machine learning**************
var net = new brain.NeuralNetwork();
var trainData = [];
var maxLength = 0;
var remainingLength = 0;
var newInput;
var commands = 7;

//Greeting
trainData.push({ input: [1,0,0,0,1,1,1,1,0,0,1,0,0,0], output: {[1]: 1} }); //HI
trainData.push({ input: [1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0], output: {[1]: 1} }); //HEY
trainData.push({ input: [1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0], output: {[1]: 1} }); //HELLO
trainData.push({ input: [1,0,1,1,0,0,0,1,0,0,1,1,1,0], output: {[1]: 1} }); //Yo 
																													 
//How are you?
trainData.push({ input: [1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1], output: {[2]: 1} }); //How are you?

trainData.push({ input: [1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1], output: {[2]: 1} }); //Are you ok?

//What is your name
trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0], output: {[3]: 1} }); //What is your name
trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0], output: {[3]: 1} }); //Whats your name
trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0], output: {[3]: 1} }); //Whats ur name
trainData.push({ input: [1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1], output: {[3]: 1} }); //Your name?
trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1], output: {[3]: 1} }); //Who are you?
trainData.push({ input: [1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1], output: {[3]: 1} }); //Name?
																																																								   
//Meaning of life?
trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1], output: {[4]: 1} }); //What is the meaning of life?
trainData.push({ input: [1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1], output: {[4]: 1} }); //Meaning of life?

//How old are you
trainData.push({ input: [1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0], output: {[5]: 1} }); //How old are you
trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0], output: {[5]: 1} }); //What is your age
trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0], output: {[5]: 1} }); //Whats your age
trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0], output: {[5]: 1} }); //Whats ur age
																																																									 
//Are you human?
trainData.push({ input: [1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1], output: {[6]: 1} }); //Are you human?
trainData.push({ input: [1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1], output: {[6]: 1} }); //human?
//What are your hobbies?
trainData.push({input:
[1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0], 
output: {[7]: 1} }); //What are your hobbies?
//Hobbies
trainData.push({input:
[1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0],
output: {[7]: 1} }); //hobbies?
//Whats your favorite subject?
trainData.push({input:
[1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1],
output: {[8]: 1} });//Whats your favorite subject?
//Family members?
trainData.push({input:
[1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0],
output: {[9]: 1} });//Family members?
//How to study?
trainData.push({input:
[1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0],
output: {[10]: 1} });//How to study?
//PCM
trainData.push({input:
[1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0],
output: {[11]: 1} }); //PCM
//PCB
trainData.push({input:
[1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1],
output: {[12]: 1} }); //PCB
//Commerce
trainData.push({input:
[1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0],
output: {[13]: 1} });//Commerce

//Commands to fill up the arrays with zeros. All arrays must be of same length
for (j=0;j<trainData.length;j++){
	if (trainData[j].input.length > maxLength){
		maxLength = trainData[j].input.length;
	}
}
for (q=0;q<trainData.length;q++){
	if (trainData[q].input.length < maxLength){
		remainingLength = maxLength - trainData[q].input.length;
		zeroArray = Array(remainingLength).fill(0);
		trainData[q].input = trainData[q].input.concat(zeroArray);
	}
}

//Training
net.train(trainData, {
	log: false,
	logPeriod: 10,
	errorThresh: 0.0005,
}); //Using all the training data to train the AI


//Chat button
chat.addEventListener("click",function(){

if (txt.value != ""){

newDiv("#CBF384",txt.value);

var data = textToBinary(txt.value);

	var result = brain.likely(data, net);

	for (k=1;k<=botTalk.length;k++){

	if (result == k){
		delayVar=k;
		setTimeout(function(){
newDiv("#FBFCFC",botTalk[delayVar-1]);

trainingArea.style.display="inline";
	
},800);
	}

	}

   help.style.display = "none";
	helpBtn.style.display = "none";
}
});

yes.addEventListener("click", function(){
	
   	txt.value="";
   help.style.display = "none";
	helpBtn.style.display = "none";
	trainingArea.style.display="none";
})

no.addEventListener("click", function(){
	
divArr[divArr.length-1].style.backgroundColor="#ff6666"
help.style.display = "inline";
helpBtn.style.display = "inline";
})

helpBtn.addEventListener("click", function(){
trainingArea.style.display="none";
	botTalk.push(help.value);

	newInput = textToBinary(txt.value);

trainData.push({ input: newInput, output: {[commands]: 1} }); //user training data

commands = commands+1;

net = new brain.NeuralNetwork();

//Training the AI
net.train(trainData, {
	log: false,
	logPeriod: 10,
	errorThresh: 0.0005,
});



	txt.value="";
	help.value="";
   help.style.display = "none";
	helpBtn.style.display = "none";
})

function textToBinary(text){
	//Storing all letters as binary numbers for AI
text = text.toUpperCase();
	var data = [];
	
	for (i=0;i<text.length;i++){
		
		if ( text[i]=="A"){
			data = data.concat([1,0,0,0,0,0,0]);
		}
		else if (text[i]=="B"){
			data = data.concat([1,0,0,0,0,0,1]);
		}
		else if (text[i]=="C"){
			data = data.concat([1,0,0,0,0,1,0]);
		}
		else if (text[i]=="D"){
			data = data.concat([1,0,0,0,0,1,1]);
		}
		else if (text[i]=="E"){
			data = data.concat([1,0,0,0,1,0,0]);
		}
		else if (text[i]=="F"){
			data = data.concat([1,0,0,0,1,0,1]);
		}
		else if (text[i]=="G"){
			data = data.concat([1,0,0,0,1,1,0]);
		}
		else if (text[i]=="H"){
			data = data.concat([1,0,0,0,1,1,1]);
		}
		else if (text[i]=="I"){
			data = data.concat([1,0,0,1,0,0,0]);
		}
		else if (text[i]=="J"){
			data = data.concat([1,0,0,1,0,0,1]);
		}
		else if (text[i]=="K"){
			data = data.concat([1,0,0,1,0,1,0]);
		}
		else if (text[i]=="L"){
			data = data.concat([1,0,0,1,0,1,1]);
		}
		else if (text[i]=="M"){
			data = data.concat([1,0,0,1,1,0,0]);
		}
		else if (text[i]=="N"){
			data = data.concat([1,0,0,1,1,0,1]);
		}
		else if (text[i]=="O"){
			data = data.concat([1,0,0,1,1,1,0]);
		}
		else if (text[i]=="P"){
			data = data.concat([1,0,0,1,1,1,1]);
		}
		else if (text[i]=="Q"){
			data = data.concat([1,0,1,0,0,0,0]);
		}
		else if (text[i]=="R"){
			data = data.concat([1,0,1,0,0,0,1]);
		}
		else if (text[i]=="S"){
			data = data.concat([1,0,1,0,0,1,0]);
		}
		else if (text[i]=="T"){
			data = data.concat([1,0,1,0,0,1,1]);
		}
		else if (text[i]=="U"){
			data = data.concat([1,0,1,0,1,0,0]);
		}
		else if (text[i]=="V"){
			data = data.concat([1,0,1,0,1,0,1]);
		}
		else if (text[i]=="W"){
			data = data.concat([1,0,1,0,1,1,0]);
		}
		else if (text[i]=="X"){
			data = data.concat([1,0,1,0,1,1,1]);
		}
		else if (text[i]=="Y"){
			data = data.concat([1,0,1,1,0,0,0]);
		}
		else if (text[i]=="Z"){
			data = data.concat([1,0,1,1,0,0,1]);
		}
		else if (text[i]=="?"){
			data = data.concat([1,1,1,1,1,1,1]);
		}
	}
	//Used the code below to be able to read long arrays
	//console.log(data.toString());

	//Fill user input array with zeros to get correct length
	if (data.length < maxLength){
		remainingLength = maxLength - data.length;
		zeroArray = Array(remainingLength).fill(0);
		data = data.concat(zeroArray);
	}
	return data;
}
});
