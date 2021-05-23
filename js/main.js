 
const init = () => {
	console.log("i'm ready");
}
const recTest = (x,y) => {
	if(y===1) {
		return y;
	} else {
		return y + recTest(x,y-1);
	}
}
window.addEventListener("load",init,false);

console.log(recTest(1,5));