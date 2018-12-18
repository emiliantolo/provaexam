let getArea = function(arr){

    if(Array.isArray(arr)){

	if(arr.length===2){
	    
	    let lato1=-1
	    let lato2=-1
	    
	    if(Number.isInteger(arr[0])){
		lato1=(arr[0])
	    }
	    if(Number.isInteger(arr[1])){
		lato2=(arr[1])
	    }

	    if(lato1>=0 && lato2 >=0){
		return lato1*lato2
	    }
	    else{
		return -1
	    }
	}
	else{
	    return -1
	}
    }
    else{
	return -1
    }
}

module.exports=getArea
