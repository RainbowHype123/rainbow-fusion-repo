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

CRunAppName.prototype = 
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

	condition: function (num, cnd)
	{
		return false;
	},

	action: function (num, act)
	{
		switch (num)
		{
			case CRunAppName.ACT_SETTITLE:
				return Runtime.setWindowTitle(act.getParamExpString(this.rh, 0));
		}
	},

	expression: function (num)
	{
		switch (num)
		{
			case CRunAppName.EXP_GETTITLE:
				return Runtime.getWindowTitle();
		}
		return 0;
	}
};

CServices.extend(CRunExtension, CRunAppName);