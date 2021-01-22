

// https://github.com/Mr-Shamuel/Assignment-3

//1. Kilometer to meter ;
function kilometerToMeter(km) 
{
    var meter =km*1000; 
    return meter;
}

var result =kilometerToMeter(3);
console.log(result);


//Budget calculator

function budgetCalculator(num1,num2,num3)
{
    var watch=(num1*50);
    var phone=(num2*100);
    var laptop=(num3*500);
    var total =(watch+phone+laptop);
    return total;
}

var result=budgetCalculator(2,10,5);
console.log(result);


//Hotel-Cost


function hotelCost(num)
{
         var sum1=0;
        var sum2=0;
        var sum3=0;
       
        var price1=100;
        var price2 =80;
        var price3=50;
        var total;
        if(num>=1 && num <=10)
        {
            sum1=num*price1;
            total =sum1;
            return total;
        }
       else if(num>=11 && num <=20)
        {
            sum1=10*100;
            var remainingDays=num-10;
            sum2=remainingDays*price2;

            total =sum1+sum2;
            return total;
        }
        else if(num>=21 && num <=30)
        {
            sum1=10*100;
            sum2=(10*80);
            var remainingDays=num-20;
            sum3=remainingDays*price3;

            total =sum1+sum2+sum3;
            return total;
        }
}
var result = hotelCost(22);

console.log(result);



//4.Mega Friend



function megaFriend(names)
{

    var max =names[0].length;
    var maxName=names[0];
    for(var i=0;i<names.length;i++)
    {
        

        var elements =names[i].length;
        if(elements>max)
        {
            maxName=names[i];
            max =elements;
        }
       

    }
    return maxName;
}
var names= ['Shamuel', 'Asif','Asiferdaaaaaab','Nayeem','PUBG'];
var result=megaFriend(names);
console.log(result);