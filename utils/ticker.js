function ticker(end = 100, speed = 100, func){
    var start = 0;
    var pause = false;
    var to;
    var tick = function(pause){
        if(start == end){
            clearTimeout(to);
            return;
        }
        if(pause){
            clearTimeout(to);
        }
        else{
            clearTimeout(to);
            to = setTimeout(
                function(){
                    start++;
                    func(start)
                    tick();
                },
                speed - start
            )
        }
    }
    return tick
}
  
export default ticker;