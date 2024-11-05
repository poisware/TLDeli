var currCart = [];
var price = 0;
function addToCart()
{
    if(document.getElementById("fullDiamondEyes").checked)
    {
        currCart[currCart.length] = "fullDiamondEyes";
        price+=56;
    }
    else
    {
        if(document.getElementById("diamondEyes").checked)
        {
            currCart[currCart.length] = "diamondEyes";
            price+=4;
        }
        if(document.getElementById("royal").checked)
        {
            currCart[currCart.length] = "Royal";
            price+=4;
        }
        if(document.getElementById("cdndctrl").checked)
        {
            currCart[currCart.length] = "CDND/ CTRL";
            price+=4;
        }
        if(document.getElementById("youveSeenTheButcher").checked)
        {
            currCart[currCart.length] = "You've Seen The Butcher";
            price+=4;
        }
        if(document.getElementById("beautySchool").checked)
        {
            currCart[currCart.length] = "Beauty School";
            price+=4;
        }
        if(document.getElementById("prince").checked)
        {
            currCart[currCart.length] = "Prince";
            price+=4;
        }
        if(document.getElementById("rocketSkates").checked)
        {
            currCart[currCart.length] = "Rocket Skates";
            price+=4;
        }
        if(document.getElementById("sextape").checked)
        {
            currCart[currCart.length] = "Sextape";
            price+=4;
        }
        if(document.getElementById("risk").checked)
        {
            currCart[currCart.length] = "Risk";
            price+=4;
        }
        if(document.getElementById("976evil").checked)
        {
            currCart[currCart.length] = "976-EVIL";
            price+=4;
        }
        if(document.getElementById("thisPlaceIsDeath").checked)
        {
            currCart[currCart.length] = "This Place Is Death";
            price+=4;
        }
    }
}