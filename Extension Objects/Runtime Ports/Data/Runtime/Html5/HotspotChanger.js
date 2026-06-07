// Html5 port by RainbowHype

function CRunHotspotChanger()
{
    
}

CRunHotspotChanger.prototype = CServices.extend(new CRunExtension(),
{
    action:function(num, act)
    {
        switch (num)
        {
            case 0:
            {
                var object = act.getParamObject(this.rh, 0);

                var x = act.getParamExpression(this.rh, 1);
                var y = act.getParamExpression(this.rh, 2);

                var imageBank = this.ho.hoAdRunHeader.rhApp.imageBank;

                if (object.roc.rcImage < 0 ||
                    object.roc.rcImage >= imageBank.images.length)
                {
                    break;
                }

                object.hoImgXSpot = x;
                object.hoImgYSpot = y;
                break;
            }

            case 1:
            {
                var object = act.getParamObject(this.rh, 0);

                var x = act.getParamExpression(this.rh, 1);
                var y = act.getParamExpression(this.rh, 2);

                var imageBank = this.ho.hoAdRunHeader.rhApp.imageBank;

                if (object.roc.rcImage < 0 ||
                    object.roc.rcImage >= imageBank.images.length)
                {
                    break;
                }

                object.hoImgXAP = x;
                object.hoImgYAP = y;
                break;
            }
        }
    }
});