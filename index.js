function receivesAFunction(callback){
    return callback();
} 

function returnsANamedFunction(){
    return (function aNamedFunction(){
        return ""
    })
}

function returnsAnAnonymousFunction(){
    return(function(){
        return ""
    }) 

}