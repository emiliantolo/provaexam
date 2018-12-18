const getArea=require("./getArea")

let sendArea = function(req, res){

    let areaval=getArea([parseInt(req.query.side1), parseInt(req.query.side2)])

    if(areaval==-1){
	res.send(res.status(400).json({area: areaval}))
    }
    else{
	res.send(res.status(200).json({area: areaval}))
    }	
    
}

module.exports=sendArea
