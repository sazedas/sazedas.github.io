
function rain_function(){
    class Rain{
        constructor(color, size){
            this.rainColor = color;
            this.rainSize = size;
        }
        static rain_going_down(){
            return "DOWN";
        }
        rain_going_up(){
            return "UP";
        }
    }
    var rain1 = new Rain("pink", 22);
    //document.getElementById("rain").innerHTML = Rain.rain_going_down();

    class Drizzling extends Rain{
        constructor(color, size, d){
            super(color, size);
            this._drizz = d;
        }
        get drizzling_rain(){
            if (this._drizz===true){
                return "I am a tinier version of rain.";
            }  
            else{
                return "I am not a drizzling rain."
            }          
        }
        set drizzling_rain(x){
            this._drizz = x;
        }
    }
    dr = new Drizzling("yellow", 33, false);
    document.getElementById("rain").innerHTML = dr._drizz;
    

}