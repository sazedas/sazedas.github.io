const animation_iteration = ()=>{
    document.getElementById("img1").style.animationIterationCount= "infinite";
}

function  user_age() {
    var age = window.prompt("Enter your date of birth in Year-Month-Date format like 2012-05-11");
    try{
        if(age == "")  throw "empty input.";
        var user_date_of_birth = new Date(age);
        var user_age_year = user_date_of_birth.getFullYear();
        var user_age_year_int = Number(user_age_year);
        var random_year = Math.floor(Math.random() * (user_age_year_int-1714)) + 1714;

        var date_difference;
        if (user_age_year_int > random_year){
            date_difference = user_age_year_int - random_year;
        }
        if (user_age_year_int < random_year){
            date_difference = random_year - user_age_year_int;
        }

        var date_difference = user_age_year_int - random_year;
        if(isNaN(date_difference)) throw "invalid input.";
        var past_era_description = "";

        if(random_year>= 1600 && random_year < 1650){
            past_era_description = "William Gilbert, physician to Queen Elizabeth, concluded that the earth is a magnet and coins the term 'magnetic pole. '\n"+
                "Galileo, with his new powerful telescope, observed the moons of Jupiter and spots moving on the surface of the sun. \n"+
                "The first public opera house, the Teatro San Cassiano, opened in Venice. ";            ;
        }
        else if (random_year >= 1650 && random_year < 1700){
            past_era_description = "British chemist Robert Boyle defined the inverse relationship between pressure and volume in any gas (subsequently known as Boyle's Law). \n" +
                "New Amsterdam was renamed New York by the recently established English regime. \n"+
                "Giovanni Domenico Cassini, working in the Paris royal observatory, calculated the distance from the earth to the sun and is only 7% out. ";
        }
        else if (random_year >= 1700 && random_year < 1750){
            past_era_description = "The War of the Spanish Succession broke out between French and Austrian claimants to the Spanish throne. \n"+
            "The postchaise, introduced in France, provided the first chance of reasonably comfortable travel by land. ";
        }
        else if (random_year >= 1750 && random_year < 1800){
            past_era_description = "The world's first iron bridge was assembled in a few months across the Severn at Coalbrookdale. \n"+
            "Franciscan missionary Junipero Serra began working at San Diego de Cala, the first of his nine California missions. ";
        }
        else if (random_year >= 1800 && random_year < 1850){
            past_era_description = "Bonaparte Crossing the Alps (in 1800) was the first of several paintings by Jacques-Louis David celebrating the future emperor. \n"+
            "The Times, England's oldest daily newspaper, became the first to print on a steam press. ";
        }
        else if (random_year >= 1850 && random_year < 1900){
            past_era_description = "Antoinette Brown became the first female to be ordained a minister in the USA, in the First Congregational Church in South Butler, NY. \n"+
            "The first battle of the American Civil War, fought near Manassas and the Bull Run Creek, was a clear Confederate victory. \n"+
            "The US Congress established Yellowstone, with its famous geysers, as the world's first national park. ";
        }
        else if (random_year >= 1900 && random_year < 1950){
            past_era_description = "Mickey Mouse made his first appearance in Walt Disney's short animated film Steamboat Willie. " +
            "Edith Wharton's published her first full-length novel, The Valley of Decision. ";
        }
        else if (random_year >= 1950 && random_year < 2000){
            past_era_description = "The USSR launched Sputnik, the world's first artificial satellite. \n"+
            "US astronaut Alan Shepard became the first American in space, with a suborbital flight in Freedom 7. \n"+
                "The Soviet spacecraft Luna 9 was the first to achieve a soft-landing on the moon and to send back photographic data from the surface. ";
        }
        else if (random_year >= 2000 && random_year < 2020){
            past_era_description = "Shrek, by DreamWorks Animation, was the first winner of a new Oscar category - Best Animated Feature. \n"+
            "The Solar Impulse, promoted by Bertrand Piccard and piloted by André Borschberg, became the first solar-powered aircraft to fly for more than 24 hours. \n"+
            "The World Health Organization (WHO) declared the outbreak of the disease as a Public Health Emergency of International Concern, the sixth time that this measure has been invoked since 2009. ";
        }

        var text = "You selected " + random_year +"." +"<br>"+ " It is a " + date_difference +
            " years variance of your actual year of birth if you were born in" + random_year +
            ". <=== Around that time ===> " +"<br>" + past_era_description;

        document.getElementById("demo1").innerHTML = text;
        document.getElementById("demo1").style.width = "80%";
        document.getElementById("demo1").style.border = "5px solid transparent";
        document.getElementById("demo1").style.borderColor = "grey";
    }
    catch(err){
        document.getElementById("demo1").innerHTML = "This is an " + err + " Please input the date in 2012-05-11 format.";
    }
   }



