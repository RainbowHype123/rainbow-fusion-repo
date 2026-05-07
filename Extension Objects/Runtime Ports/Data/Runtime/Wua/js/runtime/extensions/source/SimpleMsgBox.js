//----------------------------------------------------------------------------------
//
// SimpleMsgBox.js - A fast and simple message box 
//
// DISCLAIMER: This UWP port has only been tested for Windows PCs, not Mobile or Xbox. 
//
//----------------------------------------------------------------------------------

CRunSimpleMsgBox.CND_LAST = 0;

CRunSimpleMsgBox.ACT_SHOWMSGBOX = 0;

function CRunSimpleMsgBox() {
    CRunExtension.call(this);
	this.parameters = null;
	this.ret = 0;
	this.bError = false;
}

CRunSimpleMsgBox.prototype = 
{
    getNumberOfConditions: function () 
	{
        return CRunSimpleMsgBox.CND_LAST;
    },

    createRunObject: function (file, cob, version) 
	{
        return false;
    },

    handleRunObject: function () 
	{
        return 0;
    },

    destroyRunObject: function (bFast) {},

    displayRunObject: function (renderer, xDraw, yDraw) {},

    pauseRunObject: function () {},

    continueRunObject: function () {},

    getRunObjectFont: function () 
	{
        return null;
    },

    setRunObjectFont: function (font, rc) {},

    getRunObjectTextColor: function () 
	{
        return 0;
    },

    setRunObjectTextColor: function (color) {},

    condition: function (num, cnd) 
	{
        return false;
    },

    action: function (num, act) 
	{
        switch (num) 
		{
            case CRunSimpleMsgBox.ACT_SHOWMSGBOX:
                var message = act.getParamExpString(this.rh, 0);
                var caption = act.getParamExpString(this.rh, 1);

                var msgDialog = new Windows.UI.Popups.MessageDialog(message, caption);

                msgDialog.commands.append(
                    new Windows.UI.Popups.UICommand("OK")
                );
                msgDialog.defaultCommandIndex = 0;

                msgDialog.showAsync();
                break;
        }
    },

    expression: function (num) 
	{
        return 0;
    }
};

CServices.extend(CRunExtension, CRunSimpleMsgBox);