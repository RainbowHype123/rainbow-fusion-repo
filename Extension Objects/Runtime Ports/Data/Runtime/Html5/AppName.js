//----------------------------------------------------------------------------------
//
// CRunAppName : Application Name Object
//
//----------------------------------------------------------------------------------

//CRunAppName.CND_LAST = 0;

CRunAppName.ACT_SETTITLE = 0;

CRunAppName.EXP_GETTITLE = 0;

function CRunAppName()
{
	CRunExtension.call(this);
}

CRunAppName.prototype = CServices.extend(new CRunExtension(),
{
	getNumberOfConditions: function ()
	{
		return 0;
	},

	createRunObject: function (file, cob, version)
	{
		return true;
	},

	handleRunObject: function ()
	{
		return 0;
	},

	destroyRunObject: function (bFast)
	{
		
	},

	condition: function (num, cnd)
	{
		return false;
	},

	action: function (num, act)
	{
		switch (num)
		{
			case CRunAppName.ACT_SETTITLE:
				var titleStr = act.getParamExpString(this.rh, 0);
				document.title = titleStr;
				break;
		}
	},

	expression: function (num)
	{
		switch (num)
		{
			case CRunAppName.EXP_GETTITLE:
				return document.title;
		}
		return 0;
	}
});