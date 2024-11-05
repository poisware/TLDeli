var currCart = [];
var price = 0;
function addToCart()
{
    if(document.getElementById("fullUltraviolence").checked)
    {
        currCart[currCart.length] = "fullUltraviolence";
        price+=56;
    }
    else
    {
        if(document.getElementById("cruelWorld").checked)
        {
            currCart[currCart.length] = "Cruel World";
            price+=4;
        }
        if(document.getElementById("ultraviolence").checked)
        {
            currCart[currCart.length] = "Ultraviolence";
            price+=4;
        }
        if(document.getElementById("shadesOfCool").checked)
        {
            currCart[currCart.length] = "Shades Of Cool";
            price+=4;
        }
        if(document.getElementById("brooklynBaby").checked)
        {
            currCart[currCart.length] = "Brooklyn Baby";
            price+=4;
        }
        if(document.getElementById("westCoast").checked)
        {
            currCart[currCart.length] = "West Coast";
            price+=4;
        }
        if(document.getElementById("sadGirl").checked)
        {
            currCart[currCart.length] = "Sad Girl";
            price+=4;
        }
        if(document.getElementById("prettyWhenYouCry").checked)
        {
            currCart[currCart.length] = "Pretty When You Cry";
            price+=4;
        }
        if(document.getElementById("moneyPowerGlory").checked)
        {
            currCart[currCart.length] = "Money Power Glory";
            price+=4;
        }
        if(document.getElementById("fuckedMyWayUpToTheTop").checked)
        {
            currCart[currCart.length] = "Fucked My Way Up To The Top";
            price+=4;
        }
        if(document.getElementById("oldMoney").checked)
        {
            currCart[currCart.length] = "Old Money";
            price+=4;
        }
        if(document.getElementById("theOtherWoman").checked)
        {
            currCart[currCart.length] = "The Other Woman";
            price+=4;
        }
        if(document.getElementById("blackBeauty").checked)
        {
            currCart[currCart.length] = "Black Beauty";
            price+=4;
        }
        if(document.getElementById("gunsAndRoses").checked)
        {
            currCart[currCart.length] = "Guns And Roses";
            price+=4;
        }
        if(document.getElementById("floridaKilos").checked)
        {
            currCart[currCart.length] = "Florida Kilos";
            price+=4;
        }
    }
}