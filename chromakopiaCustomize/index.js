var currCart = [];
var price = 0;
function addToCart()
{
    if(document.getElementById("fullChromakopia").checked)
    {
        currCart[currCart.length] = "fullChromakopia";
        price+=56;
    }
    else
    {
        if(document.getElementById("stChroma").checked)
        {
            currCart[currCart.length] = "St. Chroma";
            price+=4;
        }
        if(document.getElementById("rahTahTah").checked)
        {
            currCart[currCart.length] = "Rah Tah Tah";
            price+=4;
        }
        if(document.getElementById("noid").checked)
        {
            currCart[currCart.length] = "Noid";
            price+=4;
        }
        if(document.getElementById("darlingI").checked)
        {
            currCart[currCart.length] = "Darling, I";
            price+=4;
        }
        if(document.getElementById("heyJane").checked)
        {
            currCart[currCart.length] = "Hey Jane";
            price+=4;
        }
        if(document.getElementById("iKilledYou").checked)
        {
            currCart[currCart.length] = "I Killed You";
            price+=4;
        }
        if(document.getElementById("judgeJudy").checked)
        {
            currCart[currCart.length] = "Judge Judy";
            price+=4;
        }
        if(document.getElementById("sticky").checked)
        {
            currCart[currCart.length] = "Sticky";
            price+=4;
        }
        if(document.getElementById("takeYourMaskOff").checked)
        {
            currCart[currCart.length] = "Take Your Mask Off";
            price+=4;
        }
        if(document.getElementById("tomorrow").checked)
        {
            currCart[currCart.length] = "Tomorrow";
            price+=4;
        }
        if(document.getElementById("thoughtIWasDead").checked)
        {
            currCart[currCart.length] = "Thought I Was Dead";
            price+=4;
        }
        if(document.getElementById("likeHim").checked)
        {
            currCart[currCart.length] = "Like Him";
            price+=4;
        }
        if(document.getElementById("balloon").checked)
        {
            currCart[currCart.length] = "Balloon";
            price+=4;
        }
        if(document.getElementById("iHopeYouFindYourWayHome").checked)
        {
            currCart[currCart.length] = "I Hope You Find Your Way Home";
            price+=4;
        }
    }
}