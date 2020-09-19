const fireballSize=22;
const wizardSpeed=3;
const wizardWidth=70;

var getFireballSpeed=function(isleft)
{
if(isleft){ return 2;}
return 5;
}
var getWizardHeight= function()
{
    return 1.337 *wizardWidth;
}
var getWizardX=function(fieldWidth)
{
return (fieldWidth- wizardWidth)/2;

}
var getWizardY=function(fieldHeight)
{
return (fieldHeight/3);
}